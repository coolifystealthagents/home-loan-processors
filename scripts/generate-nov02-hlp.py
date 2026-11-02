#!/usr/bin/env python3
from pathlib import Path
import json
ROOT=Path(__file__).resolve().parents[1]; DATE='2026-11-02'; DISPLAY='November 2, 2026'
blogs=[
 ('homeloanprocessors-borrower-document-review-01-2026-11-02','Review a borrower document packet without approving the loan','borrower document review','the lending manager','the document request, borrower record, and approved review checklist','a document is missing, identity is unclear, or the assistant is asked to decide credit eligibility'),
 ('homeloanprocessors-condition-tracking-02-2026-11-02','Track underwriting conditions with a dated owner','underwriting condition tracking','the lending manager','the condition list, underwriter instruction, and source document','a condition changes eligibility, a waiver is requested, or the instruction conflicts with the file'),
 ('homeloanprocessors-rate-lock-03-2026-11-02','Preserve rate-lock evidence through a loan handoff','rate-lock evidence','the lending manager','the lock confirmation, expiration, loan record, and approved pricing source','the lock is expired, the pricing source conflicts, or the request asks for a pricing decision'),
 ('homeloanprocessors-appraisal-order-04-2026-11-02','Coordinate an appraisal order without promising a value','appraisal order coordination','the loan operations owner','the order, property record, access instruction, and vendor confirmation','the request asks for a value opinion, a reconsideration, or a commitment to the borrower'),
 ('homeloanprocessors-title-commitment-05-2026-11-02','Review a title commitment for missing administrative items','title commitment review','the closing or lending manager','the title commitment, purchase agreement, and closing checklist','the commitment requires a legal interpretation, an exception approval, or a change to closing terms'),
 ('homeloanprocessors-closing-disclosure-06-2026-11-02','Prepare a closing disclosure review packet','closing disclosure review','the closing manager','the disclosure, fee record, closing date, and approved tolerance rule','the disclosure changes a fee, the borrower asks for advice, or a tolerance exception needs approval'),
 ('homeloanprocessors-insurance-certificate-07-2026-11-02','Track a property insurance certificate to closing','property insurance certificate','the loan operations owner','the policy, mortgagee clause, coverage requirement, and expiration date','coverage is ambiguous, the mortgagee clause is wrong, or the certificate is expired'),
 ('homeloanprocessors-borrower-follow-up-08-2026-11-02','Keep a borrower follow-up promise visible across shifts','borrower follow-up promises','the lending manager','the borrower request, promised channel, owner, and next check time','the request involves hardship, a complaint, legal action, or a commitment outside the approved script'),
 ('homeloanprocessors-loan-file-index-09-2026-11-02','Reconcile a loan file index against the source documents','loan file indexing','the loan operations owner','the file index, document list, and approved naming rule','a document is missing, two versions conflict, or the index would overwrite an earlier record'),
 ('homeloanprocessors-post-closing-audit-10-2026-11-02','Prepare a post-closing audit sample without changing the file','post-closing audit','the quality or compliance owner','the closed file, audit checklist, and approved sample rule','the audit requires a legal conclusion, a remediation decision, or access outside the approved scope'),
 ('homeloanprocessors-vendor-document-renewal-11-2026-11-02','Keep a mortgage vendor document renewal calendar','vendor document renewals','the vendor management owner','the agreement, insurance certificate, renewal date, and approved contact','the document changes a contractual term, coverage is unclear, or renewal requires a legal commitment'),
 ('homeloanprocessors-borrower-complaint-intake-12-2026-11-02','Triage a borrower complaint without deciding fault','borrower complaint intake','the lending or compliance manager','the complaint, loan record, prior contacts, and approved escalation rule','the complaint mentions legal action, discrimination, hardship, or a regulatory allegation'),
]
research=[
 ('homeloanprocessors-research-borrower-document-completeness-01-2026-11-02','How complete is the evidence in a borrower document review record?','borrower document evidence','the lending manager','borrower document review','A document can be present while the review owner, version, and completion condition are still missing.'),
 ('homeloanprocessors-research-condition-aging-02-2026-11-02','How old do underwriting conditions become before owner review?','condition aging','the lending manager','underwriting condition','Age is a warning signal; the condition type, borrower impact, and closing date determine urgency.'),
 ('homeloanprocessors-research-rate-lock-signal-03-2026-11-02','What signal quality should a rate-lock review expect?','rate-lock signal quality','the lending manager','rate-lock event','A lock confirmation is not evidence that pricing, expiration, and the loan record agree.'),
 ('homeloanprocessors-research-appraisal-handoff-04-2026-11-02','Where does delay enter an appraisal order handoff?','appraisal order handoff','the loan operations owner','appraisal order','An order can be placed while property access, vendor acceptance, and the due date remain unresolved.'),
 ('homeloanprocessors-research-post-closing-coverage-05-2026-11-02','What coverage risk remains in a post-closing audit?','post-closing audit coverage','the quality owner','closed loan audit','A completed checklist does not prove the sampled file, exception, and remediation owner were reviewed.'),
]
sources=[
 {'label':'Consumer Financial Protection Bureau','url':'https://www.consumerfinance.gov/'},
 {'label':'U.S. Department of Housing and Urban Development','url':'https://www.hud.gov/'},
 {'label':'Fannie Mae','url':'https://www.fanniemae.com/'},
 {'label':'Freddie Mac','url':'https://www.freddiemac.com/'},
 {'label':'NMLS Consumer Access','url':'https://www.nmlsconsumeraccess.org/'},
 {'label':'Federal Trade Commission','url':'https://www.ftc.gov/'},
]
def blog(slug,title,focus,owner,src,stop):
 sections=[
  {'heading':f'The control this {focus} needs','paragraphs':[
   f"A {focus} case without a named owner can move through the pipeline while nobody can say what was checked, who decided, or what remains unresolved. The {owner} keeps credit, pricing, legal, and borrower-commitment decisions. The assistant may organize the file, compare approved records, and route exceptions.",
   f"The approved input is {src}. Keep evidence in the loan file rather than a parallel spreadsheet, and record the source date and next action. Do not copy unnecessary personal or financial detail into chat.",
   "A useful status vocabulary is received, waiting for evidence, ready for owner review, cleared, exception, and closed. Each open item needs one owner and a next-check time."]},
  {'heading':f'What the {focus} record must show','paragraphs':[
   "The record connects the borrower request, the source document, the reviewer, the decision owner, the changed field, and the completion evidence. Missing and conflicting values remain visible; they are not smoothed into a clean summary.",
   "A sent message, uploaded file, or checked box proves activity, not an underwriting or closing outcome. When a rule is unclear, the assistant preserves the question instead of writing a confident answer.",
   "The minimum trail is dated, reproducible, and short enough for the next processor to use during a busy pipeline."]},
  {'heading':"Where the VA's work stops",'paragraphs':[
   f"The assistant may collect, index, compare, and prepare questions. The {owner} decides eligibility, pricing, legal terms, and any borrower commitment. The stop condition is: {stop}.",
   "When the condition appears, route the exception with the exact missing item and owner. Do not use a shared login or broaden access to clear a queue.",
   "A prepared packet is a reviewed question, not an approval."]},
  {'heading':f'The daily {focus} routine','paragraphs':[
   "Start with the oldest item and the nearest closing or rate-lock deadline. Open the source, confirm the loan and version, record the last verified fact, and leave a named next action.",
   "At handoff, state what moved, what is waiting, who owns the next check, and which evidence is missing. Keep an exception list rather than relying on an average.",
   "When a document or condition changes, record the revision before anyone relies on the old value."]},
  {'heading':'Exceptions that should stop the case','paragraphs':[
   "Stop on missing identity, conflicting documents, an expired lock, a changed fee, a privacy question, a legal or regulatory allegation, or a request outside the assigned scope.",
   "The exception note should say what was requested, what the source shows, why the normal rule cannot resolve it, and which owner must decide."]},
  {'heading':'How to verify and close','paragraphs':[
   "Close only when the loan system, disclosure, or borrower-visible action shows the approved result. A phone call can start the check, but the dated record is the evidence.",
   f"A close note says what was checked, who approved it, what changed, and what would reopen the case. The {owner} should be able to reconstruct it later without asking the original processor."]},
  {'heading':f'The monthly {focus} review','paragraphs':[
   "Sample normal, exception, and reopened files. Test the source, decision, execution, and confirmation against the same written rule. Use de-identified examples for coaching.",
   "End with one process change, one owner, and one check date. Fix the template before adding more monitoring, and keep the fields the next reviewer actually needs."]},
 ]
 return {'slug':slug,'title':title,'description':f'A home loan teams guide for mortgage brokers, lenders, and home loan operations teams, focused on {focus} and bounded by honest evidence.','category':'Loan Operations','publishedAt':DATE,'readTime':'12 min read','thumbnail':f'/thumbnails/november-02/{slug}.webp','sections':sections,
  'faq':[{'q':f'What should the team check first on {focus}?','a':f'Confirm the loan, source document, version, owner, and next action before any borrower-facing commitment. The {owner} decides exceptions.'},{'q':f'Which decisions stay with the {owner}?','a':'Credit, pricing, legal terms, disclosures, and borrower commitments stay with the accountable owner. The assistant prepares and routes evidence.'},{'q':'How should quality be reviewed?','a':'Sample normal, exception, and reopened files against the same checklist and record one process change with an owner and check date.'}],
  'internalService':'/services','internalSibling':'/blog','source':sources[0]}
def research_item(slug,title,focus,owner,unit,example):
 heads=['Question and scope','Population and unit of analysis','Definitions and measures','Evidence standard','Sampling and collection','Analysis and reporting','Limits and sources of error','Review cadence']
 paras=[
  f"This protocol asks how {focus} can be described from the loan record, using one defined population and one observation window. The {owner} owns the decision.",
  f"The unit is one {unit}, from opening event through recorded close. Keep linked revisions separate and record the source date and owner.",
  f"Define the opening event, closing event, pause rule, and missing-evidence rule before collecting {focus} data. Report the eligible count, exclusions, sample, exceptions, and unresolved items.",
  f"Record the source, observation time, field supported, reviewer, and decision owner. Keep restricted borrower data in the approved system. Example: {example}",
  f"Sample routine, exception, and reopened files. Preserve the original observation when a definition changes and label the new rule for later cases.",
  "Report observation separately from interpretation. Show the oldest open item and missing fields, not only the completion rate. Name the next decision and its owner.",
  "The cited public sources frame mortgage recordkeeping, privacy, fair-lending, and internal-control practice; they do not provide a local result or legal advice for a specific loan.",
  "Review the result on a fixed date and end with one process change, one owner, and one check date. A repeated defect should change the template before it changes coaching.",
 ]
 return {'slug':slug,'title':title,'summary':f'A repeatable measurement protocol for {focus} in home loan teams, with definitions, sampling, limits, and reporting.','cluster':'Loan Operations','publishedAt':DATE,'finding':paras[0],'thumbnail':f'/thumbnails/november-02/{slug}.webp','sections':[{'heading':h,'paragraphs':[p]} for h,p in zip(heads,paras)],'sources':sources}
bl=[blog(*b) for b in blogs]; rs=[research_item(*r) for r in research]
(ROOT/'lib/november02-blog.ts').write_text("import type { BlogPost } from './types';\n\nexport const november02BlogPosts: readonly BlogPost[] = "+json.dumps(bl,indent=2,ensure_ascii=False)+";\n")
(ROOT/'lib/november02-research.ts').write_text("import type { ResearchPost } from './types';\n\nexport const november02ResearchPosts: readonly ResearchPost[] = "+json.dumps(rs,indent=2,ensure_ascii=False)+";\n")
p=ROOT/'lib/content.ts'; t=p.read_text()
if 'november02BlogPosts' not in t:
 t=t.replace("import { november01BlogPosts } from './november01-blog';","import { november01BlogPosts } from './november01-blog';\nimport { november02BlogPosts } from './november02-blog';")
 t=t.replace("import { november01ResearchPosts } from './november01-research';","import { november01ResearchPosts } from './november01-research';\nimport { november02ResearchPosts } from './november02-research';")
 t=t.replace('  ...november01BlogPosts,','  ...november02BlogPosts,\n  ...november01BlogPosts,')
 t=t.replace('  ...november01ResearchPosts,','  ...november02ResearchPosts,\n  ...november01ResearchPosts,')
 p.write_text(t)
print('generated',len(bl)+len(rs))
