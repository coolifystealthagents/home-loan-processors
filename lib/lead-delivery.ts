import type { LeadPayload } from './lead-contract';

type Fetcher = (input: string | URL | Request, init?: RequestInit) => Promise<Response>;
type DeliveryOptions = { endpoint?: string; fallbackWebhook?: string; primaryPayload?: Record<string, string>; fetcher?: Fetcher };

function clean(value: string): string {
  return value
    .replace(/[\r\n\t]+/g, ' ')
    .replace(/@(?=[\p{L}\p{N}._-])/gu, '@\u200b')
    .replace(/[|`*_\\]/g, (character) => `\\${character}`)
    .slice(0, 1_000);
}

export function formatMattermostLead(lead: LeadPayload): string {
  const requestType = lead.requestType === 'privacy' ? 'Privacy' : 'Consultation';
  return [
    `**${requestType} request: Home Loan Processors**`,
    `- Request type: ${requestType}`,
    `- Name: ${clean(lead.name)}`,
    `- Email: ${clean(lead.email)}`,
    `- Phone: ${clean(lead.phone || 'Not provided')}`,
    `- Company: ${clean(lead.business)}`,
    `- Company size: ${clean(lead.companySize)}`,
    `- Positions: ${clean(lead.positions)}`,
    `- Referral: ${clean(lead.referral)}`,
    `- Page: ${clean(lead.pageUrl || 'Not provided')}`,
    `- Message: ${clean(lead.message || 'Not provided')}`,
  ].join('\n').slice(0, 8_000);
}

async function confirmed(fetcher: Fetcher, url: string, init: RequestInit): Promise<boolean> {
  try {
    const response = await fetcher(url, { ...init, signal: AbortSignal.timeout(8_000) });
    return response.ok;
  } catch { return false; }
}

export async function deliverLead(lead: LeadPayload, options: DeliveryOptions = {}): Promise<boolean> {
  const fetcher = options.fetcher ?? fetch;
  const endpoint = options.endpoint ?? process.env.ACR_LEAD_ENDPOINT ?? '';
  const fallbackWebhook = options.fallbackWebhook ?? process.env.SITE_MATTERMOST_FALLBACK_WEBHOOK_URL ?? '';
  if (endpoint && await confirmed(fetcher, endpoint, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(options.primaryPayload ?? lead) })) return true;
  if (fallbackWebhook && await confirmed(fetcher, fallbackWebhook, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ text: formatMattermostLead(lead) }) })) return true;
  return false;
}
