import { isIP } from 'node:net';

type Entry = { count: number; resetAt: number };
type Options = { limit: number; windowMs: number; maxKeys: number };

export function trustedClientKey(headers: Headers): string {
  const cloudflareAddress = headers.get('cf-connecting-ip')?.trim() || '';
  return isIP(cloudflareAddress) ? cloudflareAddress : 'unidentified';
}

export function createRateLimiter({ limit, windowMs, maxKeys }: Options) {
  const entries = new Map<string, Entry>();

  function prune(now: number) {
    for (const [key, entry] of entries) if (entry.resetAt <= now) entries.delete(key);
    while (entries.size >= maxKeys) entries.delete(entries.keys().next().value as string);
  }

  return {
    allow(key: string, now = Date.now()) {
      const current = entries.get(key);
      if (!current || current.resetAt <= now) {
        prune(now);
        entries.set(key, { count: 1, resetAt: now + windowMs });
        return true;
      }
      current.count += 1;
      return current.count <= limit;
    },
    size: () => entries.size,
  };
}
