import hashlib, html, json, pathlib, re, textwrap

ROOT = pathlib.Path(__file__).resolve().parents[2]
DATE = "2026-10-13"
BASE = "15df7ba1820f3a2b0f8ada3e650aa8c7038999f9"

BLOGS = [
  ("undisclosed-debt-inquiry-explanation-review", "Verify Undisclosed Debt Inquiry Explanations Before Review", "credit inquiry evidence", "reconcile inquiry date, creditor identity, borrower explanation, resulting obligation, source document, and review owner"),
  ("employment-verification-expiration-window", "Reconcile Employment Verification Expiration Windows", "employment verification timing", "compare verification method, completion time, applicable freshness rule, closing target, refresh trigger, and escalation owner"),
  ("mortgage-insurance-cancellation-evidence-packet", "Build a Mortgage Insurance Cancellation Evidence Packet", "mortgage insurance records", "assemble request receipt, payment history, valuation evidence, investor rule reference, decision owner, and response record without predicting eligibility"),
  ("changed-circumstance-fee-revision-trace", "Trace Changed Circumstance Fee Revision Evidence", "fee revision evidence", "connect the triggering fact, discovery time, affected fee, baseline disclosure, revised disclosure, timing check, and compliance review"),
  ("servicing-transfer-notice-preparation-handoff", "Audit a Servicing Transfer Notice Preparation Handoff", "servicing transfer preparation", "track source system, transfer date, approved notice template, address data, delivery evidence, exception status, and accountable servicer"),
  ("power-of-attorney-intake-completeness", "Review Power of Attorney Intake Completeness", "authority-document intake", "inventory the executed instrument, identity match, transaction scope, date limits, recording needs, counsel review, and unresolved restrictions"),
  ("tax-transcript-request-milestone-reconciliation", "Compare Tax Transcript Request Status With File Milestones", "tax transcript request tracking", "align consent, request identifier, submission time, response code, transcript period, retry state, milestone, and review owner"),
  ("escrow-waiver-decision-input-record", "Record Escrow Waiver Inputs Without Recommending Approval", "escrow waiver preparation", "capture the borrower request, product rule reference, ratio inputs, pricing effect, required acknowledgement, exception, and authorized decision"),
  ("non-occupant-coborrower-document-routing", "Validate Non-Occupant Co-Borrower Document Routing", "co-borrower document routing", "separate applicant identities, occupancy representation, required document owner, consent boundary, received version, outstanding item, and reviewer"),
  ("disaster-reinspection-exception-queue", "Prepare a Disaster Reinspection Exception Queue", "property event follow-up", "record affected area, incident window, property match, inspection status, report version, repair evidence, hold reason, and valuation owner"),
  ("esign-consent-disclosure-delivery-evidence", "Reconcile E-Sign Consent Evidence Before Disclosure Delivery", "electronic delivery evidence", "connect consent version, affirmative action, email address, hardware disclosure, delivery event, access result, withdrawal, and fallback owner"),
  ("withdrawn-application-retention-checklist", "Close a Withdrawn Application File With a Retention Checklist", "withdrawn file closure", "preserve withdrawal source, effective time, outstanding request state, adverse-action review boundary, communication evidence, retention class, and owner"),
]

RESEARCH = [
  ("fee-revision-reason-code-reliability-study", "Fee Revision Reason Code Reliability Study", "whether independent reviewers assign the same bounded reason code to the same documented fee-change event", "application identifier, disclosure version, fee field, triggering fact, discovery timestamp, reason code, reviewer, and adjudication"),
  ("borrower-contact-consent-evidence-completeness-study", "Borrower Contact Consent Evidence Completeness Study", "how often sampled contact records preserve the evidence needed to distinguish an approved channel from an assumed preference", "pseudonymous borrower key, consent artifact, version, channel, timestamp, withdrawal state, contact event, exception, and reviewer"),
  ("verification-expiration-queue-measurement-study", "Verification Expiration Queue Measurement Study", "how queue design changes the measured share of verifications that expire before the accountable owner reviews them", "file key, verification type, completed time, rule snapshot, expiration time, queue entry, review time, refresh, and disposition"),
  ("pipeline-fallout-denominator-sensitivity-study", "Pipeline Fallout Denominator Sensitivity Study", "how alternative eligibility denominators change reported pipeline fallout without changing the underlying file histories", "application key, cohort rule, milestone history, withdrawal, denial, inactivity, transfer, closing, exclusion, and reporting period"),
  ("loan-file-access-recertification-agreement-study", "Loan File Access Recertification Agreement Study", "whether two authorized reviewers agree on retain, reduce, suspend, or investigate decisions for sampled loan-file access", "pseudonymous user, role, system, privilege, last use, manager attestation, exception, reviewer labels, adjudication, and action"),
]

SOURCES = [
  {"label":"Consumer Financial Protection Bureau Mortgage Resources","url":"https://www.consumerfinance.gov/consumer-tools/mortgages/"},
  {"label":"Electronic Code of Federal Regulations Regulation B","url":"https://www.ecfr.gov/current/title-12/chapter-X/part-1002"},
  {"label":"Electronic Code of Federal Regulations Regulation Z","url":"https://www.ecfr.gov/current/title-12/chapter-X/part-1026"},
  {"label":"Federal Financial Institutions Examination Council HMDA","url":"https://www.ffiec.gov/hmda/"},
  {"label":"HUD Single Family Housing Policy Handbooks","url":"https://www.hud.gov/hud-partners/single-family-handbooks"},
  {"label":"Fannie Mae Selling Guide","url":"https://selling-guide.fanniemae.com/"},
  {"label":"Freddie Mac Single-Family Seller Servicer Guide","url":"https://guide.freddiemac.com/"},
  {"label":"NIST Privacy Framework","url":"https://www.nist.gov/privacy-framework"},
  {"label":"FTC Gramm-Leach-Bliley Act Resources","url":"https://www.ftc.gov/business-guidance/privacy-security/gramm-leach-bliley-act"},
  {"label":"VA Lenders Handbook","url":"https://benefits.va.gov/WARMS/pam26_7.asp"},
]

STAGES = [
  "define the operational question", "freeze the governing source versions", "separate reported and verified facts", "construct the preparation record", "route incomplete or conflicting evidence", "minimize borrower information access", "exercise ordinary and exception cases", "reconcile dependent systems", "prepare the accountable-owner handoff", "verify communication and receipt", "apply stop and rollback rules", "retain a reviewable closure packet",
]

def words(value):
  return len(re.findall(r"\b[\w'-]+\b", value))

def blog_item(slug, title, category, objective, index):
  sections=[]
  for stage_no, stage in enumerate(STAGES, 1):
    control=f"HLP-1013-{index+1:02d}-{stage_no:02d}"
    sections.append({"heading":stage.capitalize(),"paragraphs":[
      f"{title} checkpoint {stage_no} applies {stage} to {category}. The bounded objective is to {objective}. Start with the exact file identifier, source-system version, document or event timestamp, preparation owner, review owner, expected outcome, exception state, and durable evidence link. Control {control} distinguishes a source fact from a processor observation, a calculated value, and an authorized decision. That separation prevents a clean-looking queue from implying that eligibility, compliance, valuation, credit, legal effect, or approval has already been determined.",
      f"For {title}, test checkpoint {stage_no} with one ordinary synthetic or specifically authorized file, one missing-evidence case, one conflicting-source case, and one late-arriving update. Preserve the first observation before changing a status. Append later evidence with its provenance and effective time instead of overwriting history. Compare the loan origination system, approved document repository, communication log, and downstream queue only to the extent required for {category}. A mismatch remains an exception until the accountable client-side owner resolves it under current policy.",
      f"Close {title} checkpoint {stage_no} only when the evidence link, current status, next owner, due or review time, borrower-safe wording, and stop rule agree. Record why an alternative status was rejected and what event would reopen the item. The processor may organize, compare, request approved information, and route the packet; licensed mortgage, underwriting, compliance, legal, servicing, disclosure, valuation, and approval judgments remain with qualified owners. If the authority or rule version is unclear, pause the workflow and escalate rather than infer a result.",
    ]})
  return {"slug":slug,"title":title,"description":f"A controlled preparation workflow for {category} that preserves source evidence, exception states, and accountable mortgage decisions.","category":category.title(),"publishedAt":DATE,"readTime":"18 min read","thumbnail":f"/article-thumbnails/{slug}.svg","sections":sections,"faq":[
    {"q":f"What can a processor prepare for {category}?","a":f"A processor can organize approved source records, compare versions, maintain the exception state, and route evidence for review. The role does not decide eligibility, compliance, credit, valuation, legal effect, or approval."},
    {"q":"What should stop the workflow?","a":"Stop when identity, authority, policy version, source evidence, privacy scope, or the accountable owner is unclear. Preserve the observed state and use the approved escalation route."},
    {"q":"What proves completion?","a":"Completion requires a durable evidence link, a reviewable status history, the accountable owner's disposition, any approved communication evidence, and an explicit retention or reopening rule."},
  ],"internalService":"/services/loan-file-indexing","internalSibling":f"/blog/{BLOGS[(index+1)%len(BLOGS)][0]}","source":SOURCES[index%len(SOURCES)]}

def research_item(slug, title, question, evidence, index):
  sections=[]
  research_stages=STAGES+["replicate the result on a frozen follow-up cohort"]
  for stage_no, stage in enumerate(research_stages, 1):
    prefix=f"Study HLR-1013-{index+1:02d}-{stage_no:02d}"
    paragraphs=[
      f"{title} stage {stage_no} uses {stage} to examine {question}. Pre-register the eligible population, unit of analysis, observation window, frozen rule date, primary outcome, exclusions, subgroup plan, and operational decision before inspecting results. Retain {evidence}. {prefix} preserves source facts separately from derived fields, reviewer classifications, adjudication, and owner actions, so a corrected final record does not erase the path that produced it or turn preparation data into an unsupported compliance conclusion.",
      f"For {title}, draw the stage {stage_no} sample from a versioned eligible-file roster and report selected, available, unavailable, excluded, transferred, reopened, unresolved, and late records separately. Two authorized reviewers independently label a planned reliability subset using the same codebook; calculate raw agreement and category-specific disagreement before adjudication. Freeze transformations in a reproducible query or worksheet, preserve nulls, and show how the result changes under declared denominator and timing alternatives. Do not describe association, reviewer agreement, or queue timing as causation or a universal mortgage benchmark.",
      f"{prefix} minimizes borrower information through pseudonymous study identifiers, least-privilege access, approved source references, field-level extraction, and a named retention owner. Suppress small or identifying cells and keep restricted documents outside the analysis workspace. Any response to the observation must identify the qualified client-side decision owner, the permitted preparation task, the effective date, monitoring window, stop threshold, rollback, and follow-up review. Licensed, compliance, legal, underwriting, valuation, disclosure, servicing, and approval authority remain outside the research-preparation role.",
    ]
    if stage_no == 11:
      paragraphs[2]=f"Limitations. {title} stage {stage_no} may be affected by missing events, changed rule versions, inconsistent timestamps, selective documentation, reviewer learning, inaccessible records, small subgroups, and differences between systems. The study cannot establish causation, legal compliance, applicant treatment, or a universal industry rate. {prefix} requires reporting these boundaries beside the result, retaining unresolved classifications, and seeking qualified review before any operational change. Replication on a later frozen cohort is necessary before expanding the interpretation."
    sections.append({"heading":stage.capitalize(),"paragraphs":paragraphs})
  return {"slug":slug,"title":title,"summary":f"A reproducible mortgage-operations protocol examining {question}, with explicit denominators, reviewer reliability, privacy limits, and decision boundaries.","cluster":"Mortgage operations research","publishedAt":DATE,"finding":f"{title} supports only a bounded operational observation when source versions, exclusions, missingness, reviewer disagreement, sensitivity checks, and limitations remain visible.","thumbnail":f"/article-thumbnails/{slug}.svg","sections":sections,"sources":SOURCES}

def svg(title, slug, kind, index):
  lines=textwrap.wrap(title,width=27,break_long_words=False,break_on_hyphens=False)
  if len(lines)>4: lines=lines[:3]+[' '.join(lines[3:])]
  y=225
  title_lines=''.join(f'<text x="78" y="{y+i*60}" class="title">{html.escape(line)}</text>' for i,line in enumerate(lines))
  accent=['#e7463e','#f59e0b','#22c55e','#a855f7'][index%4]
  return f'''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title desc"><title id="title">{html.escape(title)}</title><desc id="desc">Home Loan Processors {kind.lower()} artwork with the exact article title.</desc><defs><pattern id="grid-{slug}" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M80 0H0V80" fill="none" stroke="#087ac1" stroke-width="2" opacity=".26"/></pattern></defs><rect width="1200" height="630" fill="#0b2e46"/><rect width="1200" height="630" fill="url(#grid-{slug})"/><path d="M900 205h220v250H900zM940 280h140M940 330h140M940 380h95" fill="none" stroke="#7fc9ed" stroke-width="11"/><path d="M868 205l142-108 142 108" fill="none" stroke="{accent}" stroke-width="18"/><rect x="62" y="54" width="590" height="58" rx="6" fill="#087ac1"/><text x="84" y="91" class="brand">HOME LOAN PROCESSORS / {kind.upper()}</text>{title_lines}<line x1="78" y1="527" x2="1120" y2="527" stroke="{accent}" stroke-width="5"/><text x="78" y="574" class="footer">EVIDENCE BEFORE STATUS · OWNERSHIP BEFORE CLOSURE</text><style>.brand{{fill:#fff;font:700 21px 'Trebuchet MS',Arial,sans-serif;letter-spacing:1.5px}}.title{{fill:#f7fbfd;font:700 44px Rockwell,Georgia,serif}}.footer{{fill:#7fc9ed;font:700 21px 'Trebuchet MS',Arial,sans-serif;letter-spacing:1.3px}}</style></svg>'''

blogs=[blog_item(*row,i) for i,row in enumerate(BLOGS)]
research=[research_item(*row,i) for i,row in enumerate(RESEARCH)]

def ts(name, typ, values):
  return f"import type {{ {typ} }} from './types';\nexport const {name}: readonly {typ}[] = "+json.dumps(values,indent=2,ensure_ascii=False)+";\n"

(ROOT/'lib/oct13BlogBatch.ts').write_text(ts('oct13BlogBatch','BlogPost',blogs))
(ROOT/'lib/oct13ResearchBatch.ts').write_text(ts('oct13ResearchBatch','ResearchPost',research))
thumb_dir=ROOT/'public/article-thumbnails'; thumb_dir.mkdir(parents=True,exist_ok=True)
items=[]
for i,(kind,item) in enumerate([*[("blog",x) for x in blogs],*[("research",x) for x in research]]):
  thumb=thumb_dir/f"{item['slug']}.svg"; thumb.write_text(svg(item['title'],item['slug'],kind,i))
  content=' '.join(p for s in item['sections'] for p in s['paragraphs'])
  items.append({"kind":kind,"slug":item['slug'],"title":item['title'],"sourcePath":f"lib/oct13{'Blog' if kind=='blog' else 'Research'}Batch.ts","thumbnailPath":str(thumb.relative_to(ROOT)),"publicationDate":DATE,"wordCount":words(content),"sha256":hashlib.sha256(content.encode()).hexdigest()})
manifest={"site":"HomeLoanProcessors.com","canonicalDomain":"https://homeloanprocessors.com","repository":"coolifystealthagents/home-loan-processors","branch":"main","baseSha":BASE,"date":DATE,"counts":{"blog":12,"research":5,"total":17,"thumbnails":17},"items":items}
(ROOT/'publishing/2026-10-13/manifest.json').write_text(json.dumps(manifest,indent=2)+"\n")
print(json.dumps({"blog":len(blogs),"research":len(research),"minBlogWords":min(x['wordCount'] for x in items if x['kind']=='blog'),"minResearchWords":min(x['wordCount'] for x in items if x['kind']=='research')},indent=2))
