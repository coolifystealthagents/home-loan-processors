import { NextRequest, NextResponse } from 'next/server';

const canonicalOrigin = 'https://homeloanprocessors.com';
const productionHosts = new Set(['homeloanprocessors.com', 'www.homeloanprocessors.com']);

function forwardedScheme(request: NextRequest) {
  const cloudflareVisitor = request.headers.get('cf-visitor');
  if (cloudflareVisitor) {
    try {
      const scheme = JSON.parse(cloudflareVisitor)?.scheme;
      if (scheme === 'http' || scheme === 'https') return scheme;
    } catch {
      // Fall back to the standard proxy header if edge metadata is malformed.
    }
  }

  const forwarded = request.headers.get('x-forwarded-proto')?.split(',')[0]?.trim().toLowerCase();
  if (forwarded === 'http' || forwarded === 'https') return forwarded;
  return request.nextUrl.protocol.replace(':', '');
}

export function proxy(request: NextRequest) {
  const forwardedHost = request.headers.get('x-forwarded-host') || request.headers.get('host') || request.nextUrl.hostname;
  const host = forwardedHost.split(',')[0].trim().toLowerCase().split(':')[0];
  if (!productionHosts.has(host)) return NextResponse.next();

  if (host === 'homeloanprocessors.com' && forwardedScheme(request) === 'https') {
    return NextResponse.next();
  }

  const destination = new URL(canonicalOrigin);
  destination.pathname = `/${request.nextUrl.pathname.replace(/^\/+/, '')}`;
  destination.search = request.nextUrl.search;
  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
};
