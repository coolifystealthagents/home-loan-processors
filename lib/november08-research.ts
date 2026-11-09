import type { ResearchPost } from './types';

export const november08ResearchPosts: readonly ResearchPost[] = [
 {
  "slug": "how-resubmission-counts-expose-hidden-rework-in-a-mortgage-pipeline",
  "title": "How resubmission counts expose hidden rework in a mortgage pipeline",
  "summary": "A measurement method for counting document resubmissions and using the pattern to find where a mortgage file loses time.",
  "cluster": "Pipeline operations",
  "publishedAt": "2026-11-08",
  "finding": "Resubmission counts reveal rework that completion metrics hide, because a file can look current while the same document is requested, rejected, and sent again.",
  "thumbnail": "/thumbnails/november-08/how-resubmission-counts-expose-hidden-rework-in-a-mortgage-pipeline.webp",
  "sections": [
   {
    "heading": "Question and scope",
    "paragraphs": [
     "This brief asks how often documents are submitted more than once for the same requirement and what those resubmissions reveal about a mortgage pipeline. The unit is one requirement on one loan, such as a bank statement or a pay stub, followed from the first request to the accepted evidence. A resubmission is any subsequent submission of the same requirement, whether the first version was rejected or simply replaced. The count should describe the work, not the borrower, so the team can fix the request.",
     "The scope should name the pipeline, the loan types, and the observation window. Include purchase and refinance files if both are processed by the same team, but report them separately when the document mix differs. Exclude a new requirement created by a program change, because that is new work rather than rework. Record the exclusion rule so a later reviewer can repeat the count."
    ]
   },
   {
    "heading": "Define a resubmission",
    "paragraphs": [
     "A resubmission occurs when a borrower or another party sends evidence for a requirement that already had a submission. The reason may be illegibility, an expired statement, a missing page, or a change in the loan terms. The definition should require the same requirement identifier, not merely the same document type on the same loan. A revised document caused by a genuine term change is still recorded, but it is labeled separately.",
     "Distinguish a replacement from a correction. A correction fixes an error in a document that was otherwise acceptable, while a replacement supplies evidence that was incomplete or expired. Both are rework, but they point to different causes. Keep a reason code so the analysis can separate them."
    ]
   },
   {
    "heading": "Choose the unit and population",
    "paragraphs": [
     "Use the requirement as the unit and the loan as the grouping level. A single loan can have several requirements, and each can have multiple submissions. Report both the share of requirements with a resubmission and the average number of resubmissions per affected requirement. The two measures answer different questions about breadth and intensity.",
     "Define the population as loans that reached a decision during the window, so every file has a complete history. A file still in process may produce more resubmissions later and would bias the count downward. If open files must be included, report them separately and label the result as partial. The reader should know which denominator was used."
    ]
   },
   {
    "heading": "Evidence standard",
    "paragraphs": [
     "Use the document upload log, the condition record, and the borrower communication log as the primary sources. Record the requirement, the submission dates, the review outcome, and the reason code. Link each submission to the file that was received. A submission without a review outcome cannot be classified as accepted or replaced.",
     "If the reason is recorded only in a message, quote the relevant phrase without copying unnecessary personal detail. Mark a requirement unverifiable when the record is incomplete rather than guessing the cause. The unverifiable share is itself a finding about record quality. Report it beside the result instead of dropping it."
    ]
   },
   {
    "heading": "Sampling and collection",
    "paragraphs": [
     "Sample loans across processors, loan types, and points in the pipeline. Include files with no resubmissions as a comparison group. If the volume is small, review every requirement and state the count. If the volume is large, use consecutive files within each stratum and record the selection rule.",
     "Freeze the sample at a stated date and collect the history in one pass. Note the systems searched and any limitation in the log. Do not replace a difficult file with an easier one, because that removes the cases most likely to explain the pattern. Keep the sample list with the report so the work can be repeated."
    ]
   },
   {
    "heading": "Analysis and reporting",
    "paragraphs": [
     "Report the resubmission rate by document type, by processor, and by reason code. Show the median number of days between submissions for the affected requirements. Pair the rate with the volume so a rare type is not treated as a major problem. A table with rate, count, and median delay is more useful than a single percentage.",
     "Group the reasons into borrower-side, team-side, and third-party causes. A missing page that the borrower forgot is different from a request that named the wrong statement period. The second is a team fix. The first may need a clearer request. The report should let the reader see which cause dominates."
    ]
   },
   {
    "heading": "Limits and sources of error",
    "paragraphs": [
     "The upload log may not capture documents sent by email or handed in at an office. A requirement may be resubmitted without a new upload because a reviewer reopened an old file. The count should note these paths and avoid treating the log as complete. The cited public sources describe documentation expectations, not a resubmission benchmark.",
     "A resubmission is not always waste. A document can expire legitimately, or a program change can require a new version. The review should separate unavoidable replacements from avoidable ones. The result describes the sampled files and not the whole operation. Changes in volume and staffing should be recorded beside the result."
    ]
   },
   {
    "heading": "Review cadence",
    "paragraphs": [
     "Repeat the review quarterly and after a change to the document request or upload process. Keep the reason codes stable so the comparison is meaningful. Review the findings with the processing team and the underwriters, because each sees a different side of the loop. Choose one document type to improve.",
     "If the process changes, mark the date and treat the next result as a new baseline. A new upload tool can reduce resubmissions without changing the underlying request quality. Ask whether the definition or the capture method changed before claiming an improvement. The review should distinguish a real gain from a reporting change."
    ]
   },
   {
    "heading": "What to fix first",
    "paragraphs": [
     "Start with the document type that has both a high resubmission rate and a clear cause. A missing page may need a page count in the request. An illegible image may need a photo instruction. A wrong statement period may need an example. Choose a fix that removes the cause rather than adding a review step.",
     "Test the fix on a small group and compare the next period. Ask the reviewer whether the new request reduced the back-and-forth. If the rate does not move, the problem may be the borrower channel or the review standard. A short conversation with the people doing the work is often faster than another data pull."
    ]
   },
   {
    "heading": "Keeping the measure current",
    "paragraphs": [
     "Store the definitions, the sample, and the reason codes with the result. Name an owner who updates the method when the systems or the document rules change. Record the date and the reason for each change. A measure that is redefined without a note cannot be compared over time.",
     "Review the measure with the team that owns the queue, not only with management. The team can explain why a resubmission happened and what would prevent it. That explanation is the bridge between a number and a change. Without it, the count becomes another report nobody uses."
    ]
   },
   {
    "heading": "Working with borrower communication",
    "paragraphs": [
     "A resubmission often begins with a message that was unclear, not with a borrower who failed to read. Review a sample of requests that led to a second submission and read the exact wording. Look for missing examples, unclear periods, and instructions that assume knowledge of mortgage terms. Rewrite the request before coaching the borrower.",
     "Keep the revised wording with the sample so the change can be checked later. Ask a colleague who does not work the file to read the request and explain what is needed. If they cannot, the borrower may struggle too. The test is quick and exposes more than a satisfaction survey."
    ]
   },
   {
    "heading": "When to stop counting",
    "paragraphs": [
     "A resubmission measure can become a reason to chase every message instead of improving the process. Set a review limit, such as one quarter of data and one chosen fix. Stop counting when the sample is large enough to show the pattern. Resume after the fix has run long enough to compare.",
     "Do not extend the sample because the first result was inconvenient. That turns measurement into a search for a preferred answer. Record the decision to stop and the reason. A disciplined stop keeps the measure useful and protects the team from another reporting cycle."
    ]
   }
  ],
  "sources": [
   {
    "label": "Consumer Financial Protection Bureau",
    "url": "https://www.consumerfinance.gov/"
   },
   {
    "label": "U.S. Department of Housing and Urban Development, HUD Handbook 4000.1",
    "url": "https://www.hud.gov/program_offices/housing/sfh/handbook_4000-1"
   },
   {
    "label": "Fannie Mae Selling Guide",
    "url": "https://selling-guide.fanniemae.com/"
   },
   {
    "label": "Freddie Mac Single-Family Seller/Servicer Guide",
    "url": "https://guide.freddiemac.com/"
   },
   {
    "label": "National Institute of Standards and Technology, Cybersecurity Framework",
    "url": "https://www.nist.gov/cyberframework"
   }
  ]
 },
 {
  "slug": "a-method-for-auditing-document-expiration-coverage-in-a-loan-cohort",
  "title": "A method for auditing document expiration coverage in a loan cohort",
  "summary": "A repeatable audit that shows which loans in a mortgage cohort carry evidence that will expire before closing.",
  "cluster": "Quality review",
  "publishedAt": "2026-11-08",
  "finding": "Expiration coverage is a property of each document rule and each closing date, so a cohort can look complete while several files are already outside their evidence window.",
  "thumbnail": "/thumbnails/november-08/a-method-for-auditing-document-expiration-coverage-in-a-loan-cohort.webp",
  "sections": [
   {
    "heading": "Question and scope",
    "paragraphs": [
     "This brief asks how much of a loan cohort has document evidence that will remain valid through the expected closing date. The unit is one document requirement on one loan, evaluated at a fixed observation date. A requirement is covered when its source date and rule produce an expiration date after the expected closing date. The question matters because completeness and validity are different conditions.",
     "The scope should name the cohort, the document types, and the closing-date assumption. Include the rules the team actually uses, not a generic validity period. If several investors apply different windows, report the cohort by investor or by rule set. Exclude documents that are not date-sensitive, and say so in the report."
    ]
   },
   {
    "heading": "Define expiration coverage",
    "paragraphs": [
     "Coverage means the evidence will still satisfy the rule on the expected closing date, not merely on the observation date. A pay stub that is valid today may expire before a closing scheduled three weeks out. The definition should use the later of the expected closing date and the date the file is expected to be reviewed. If the closing date moves after the snapshot, recompute the coverage rather than keeping the old label.",
     "Report coverage at two points: today and the expected closing date. The first shows whether the file is currently complete, while the second shows whether it will remain complete. A file can pass the first check and fail the second. That gap is the risk the audit is designed to find."
    ]
   },
   {
    "heading": "Pick the clocks and rules",
    "paragraphs": [
     "List the document types with a date-based rule and the window that applies to each. Include the source of the rule, such as an investor guide or a program handbook. If the same document has different windows by program, create a separate rule row. The audit should not average different rules into one clock.",
     "For each rule, define the start date. A statement period end, an issue date, and an inspection date are different anchors and can produce different expiration dates. Write the anchor in the rule row. A computed expiration date is only as good as the anchor it uses."
    ]
   },
   {
    "heading": "Evidence standard",
    "paragraphs": [
     "Use the loan file, the document image, and the program guide as the primary sources. Record the source date from the document, not from the upload time. Link the document to the requirement it satisfies. If the source date is unclear, mark the item unverifiable rather than estimating.",
     "For each requirement, record the observation date, the expected closing date, the rule, the computed expiration, and the coverage result. Keep the rule identifier with the row so a reviewer can see why the date was chosen. A result without the rule is difficult to defend and impossible to reproduce. Store the computed dates with the rule version so a later rule change does not rewrite history."
    ]
   },
   {
    "heading": "Sampling and cohort construction",
    "paragraphs": [
     "Define the cohort by a clear entry rule, such as all loans that reached processing during the window and had an expected closing date in the following quarter. Freeze the cohort at a stated time. If a loan is withdrawn or denied, keep it in the cohort and record the status, because removing it would change the risk picture. Record the cohort size before any exclusions so the reader can see what was removed.",
     "Sample across loan types, investors, and processors if the cohort is large. If it is small, audit every loan and state the count. Record the systems searched and any document that could not be opened. A frozen cohort prevents a difficult file from disappearing from the sample after it fails."
    ]
   },
   {
    "heading": "Measuring coverage at a point in time",
    "paragraphs": [
     "Take a snapshot of every requirement on the observation date and compute the expiration date from the rule. Compare it with the expected closing date. Count the requirements that are already expired, those that expire before closing, and those that remain valid through closing. The three counts tell a clearer story than a single pass rate.",
     "Repeat the snapshot at a second date if the cohort is still open. The change shows whether the team is renewing evidence or only reacting when a document is requested. A stable coverage rate near closing is a sign that the renewal process is working. A falling rate is an early warning."
    ]
   },
   {
    "heading": "Analysis and reporting",
    "paragraphs": [
     "Report coverage by document type and by time to closing. A cohort with thirty days to closing should have a higher coverage rate than one with ninety days, because the exposure window is shorter. Show the count of files with at least one uncovered requirement and the count of uncovered requirements. A rate without the count can make a small problem look large or a large one look small.",
     "Group the gaps by cause, such as no request sent, request sent but no response, or a rule that was applied incorrectly. The cause determines the fix. A missing request is a workflow problem, while a wrong rule is a training or template problem. Report both so the reader can act."
    ]
   },
   {
    "heading": "Limits and sources of error",
    "paragraphs": [
     "The expected closing date is an estimate and can move. A later closing date increases the expiration risk, while an earlier one reduces it. The audit should state the assumption and, if possible, test a range of dates. The cited public sources describe documentation and disclosure expectations, not a universal validity period.",
     "The source date may be missing or ambiguous, especially for documents sent as photographs. An unverifiable item is not the same as an expired item. Keep the categories separate and report the unverifiable share. The result describes the cohort at a point in time, not the operation as a whole."
    ]
   },
   {
    "heading": "Review cadence",
    "paragraphs": [
     "Run the audit monthly for active cohorts and before a major closing push. Keep the rules and anchors stable so the comparison is meaningful. Review the findings with the processing team and the underwriter who sets the standard. Choose one document type to renew earlier in the next cycle.",
     "When a rule or investor changes, mark the date and treat the next result as a new baseline. A rule change can improve coverage without any process improvement, or reduce it despite better work. The report should distinguish the two. Ask the rule owner to confirm the current window before the next audit."
    ]
   },
   {
    "heading": "What to fix first",
    "paragraphs": [
     "Start with the document type that has the most uncovered requirements and a clear renewal path. Add the expiration date to the queue view and assign a warning threshold. If the gap comes from a late request, move the request earlier. If it comes from a wrong rule, correct the rule and retrain the reviewer.",
     "Test the fix on a small cohort and compare the next snapshot. A fix that only adds a warning without an owner will not change the outcome. The measure should show fewer requirements expiring before closing. If it does not, the audit should look at the request timing rather than the document itself."
    ]
   },
   {
    "heading": "Keeping the method reproducible",
    "paragraphs": [
     "Store the cohort definition, the rule rows, the snapshot dates, and the raw results together. Name an owner who can repeat the audit and a backup who understands the rules. Record any manual adjustment and the reason. The method should let a new analyst reach the same coverage number.",
     "Review the method when the systems or the loan programs change. A rule that is no longer used should be removed rather than left to confuse the next audit. A method that is simple, documented, and stable is more useful than a perfect one that cannot be repeated. Remove an obsolete rule before the next audit rather than carrying it as a known exception."
    ]
   },
   {
    "heading": "Data handling and privacy",
    "paragraphs": [
     "The audit uses loan documents that contain personal and financial information, so the working file should include only the fields needed for the calculation. Remove names, account numbers, and addresses where a loan identifier is enough. Store the working file in the approved system and limit access to the reviewers. Give each reviewer a named file and a date so the working copy can be traced.",
     "Keep the rule rows and the computed dates separate from the source documents so the analysis can be shared without exposing the evidence. If a document must be cited, use a reference rather than a copy. The cited security guidance describes access and audit expectations, not a mortgage-specific retention rule. The team privacy policy still governs the work."
    ]
   },
   {
    "heading": "Communicating the result",
    "paragraphs": [
     "Present the result as a coverage rate with a clear date and denominator. Show the document types that drive the gap and the number of files affected. Avoid a single red or green label, because a file can be covered on one requirement and exposed on another. The reader should see where the risk sits.",
     "Share the result with the processors and the underwriter before it goes to management. They can explain a rule or a document that the data does not capture. That conversation often changes the interpretation. A number without that context can lead to the wrong fix."
    ]
   }
  ],
  "sources": [
   {
    "label": "U.S. Department of Housing and Urban Development, HUD Handbook 4000.1",
    "url": "https://www.hud.gov/program_offices/housing/sfh/handbook_4000-1"
   },
   {
    "label": "Fannie Mae Selling Guide",
    "url": "https://selling-guide.fanniemae.com/"
   },
   {
    "label": "Freddie Mac Single-Family Seller/Servicer Guide",
    "url": "https://guide.freddiemac.com/"
   },
   {
    "label": "Consumer Financial Protection Bureau",
    "url": "https://www.consumerfinance.gov/"
   },
   {
    "label": "National Institute of Standards and Technology, Cybersecurity Framework",
    "url": "https://www.nist.gov/cyberframework"
   }
  ]
 },
 {
  "slug": "where-loan-estimate-tolerance-changes-create-operational-rework",
  "title": "Where loan estimate tolerance changes create operational rework",
  "summary": "A review of how fee changes interact with loan estimate tolerance categories and where the resulting rework lands in a mortgage file.",
  "cluster": "Compliance operations",
  "publishedAt": "2026-11-08",
  "finding": "Tolerance rework concentrates at the points where a fee changes category or amount after the loan estimate, because the disclosure, the invoice, and the closing package must be reconciled again.",
  "thumbnail": "/thumbnails/november-08/where-loan-estimate-tolerance-changes-create-operational-rework.webp",
  "sections": [
   {
    "heading": "Question and scope",
    "paragraphs": [
     "This brief asks where changes after the loan estimate create operational rework and how those changes relate to tolerance categories. The unit is one fee or credit that changed between the initial disclosure and the final closing disclosure. The question matters because a small fee change can trigger a new disclosure, a waiting period, and a set of file corrections. Record the date of each change so the rework can be connected to the event that caused it.",
     "The scope should name the loan types, the disclosure forms, and the period under review. Include changes that were cured and changes that were not. Exclude fees that were estimated correctly and never moved, because they do not test the rework path. Record the exclusion so the sample reflects the phenomenon being studied."
    ]
   },
   {
    "heading": "Define a tolerance-driven change",
    "paragraphs": [
     "A tolerance-driven change is a movement in a fee or credit that falls within a category subject to a tolerance rule, or a change that requires a revised disclosure. The definition should identify the category, the original amount, the revised amount, and the reason. It should also record whether the change increased or decreased the cost to the borrower. A change with no revised disclosure may still be a tolerance event if the amount crossed a limit.",
     "Not every fee change is a tolerance event. A fee that was never on the loan estimate may be a different issue, and a fee that changed because the borrower changed the loan terms may follow a different path. Classify the reason before applying the tolerance label. That distinction prevents a broad count that mixes unrelated causes."
    ]
   },
   {
    "heading": "Map the fee categories",
    "paragraphs": [
     "List the fee categories the team sees and the tolerance treatment that applies to each. Group them by zero tolerance, ten percent tolerance, and no tolerance, using the current rule and the disclosure guide. Add the categories that commonly move, such as title services, recording fees, and transfer taxes. Keep the category map beside the fee sheet so the reviewer does not have to remember the rule.",
     "For each category, name the owner who can change the fee and the document that proves the new amount. A title fee may come from a revised title quote, while a recording fee may come from the county schedule. The owner and the source are part of the category map, not an afterthought. Update the map when a provider changes a fee name, because the old name can hide a moved charge."
    ]
   },
   {
    "heading": "Evidence standard",
    "paragraphs": [
     "Use the loan estimate, the revised disclosures, the closing disclosure, the invoices, and the closing statement as the primary sources. Record the date of each document and the amount for the affected fee. Link the revised amount to the invoice or quote that supports it. If an invoice is missing, mark the change unverifiable rather than using the closing total as proof.",
     "If the reason for a change is recorded only in a message, quote the relevant sentence and keep the message with the file. Mark a change unverifiable when the source document is missing. Do not reconstruct an invoice from memory. The audit should be able to show the exact evidence behind each revised figure."
    ]
   },
   {
    "heading": "Sampling and collection",
    "paragraphs": [
     "Sample files with a revised disclosure and files with a fee change that did not require a revision. The comparison shows whether the revision rule is being applied consistently. Include files across loan types and title providers if the team uses more than one. Record the selection rule and the period.",
     "Collect the disclosure timeline and the fee timeline together. A fee change that happened before the initial disclosure is not a tolerance event, even if the amount later looks different. The sequence is what distinguishes a disclosure problem from a pricing change. Freeze the sample before the analysis so a difficult file is not swapped out."
    ]
   },
   {
    "heading": "Analysis and reporting",
    "paragraphs": [
     "Report the number of tolerance-driven changes, the category, the amount, and the rework each one caused. Rework can include a new disclosure, a waiting period, a revised closing package, or a borrower conversation. Count the steps rather than only the hours, because steps are easier to verify. Show the rework beside the amount so a large fee change with no extra steps is not over-weighted.",
     "Group the changes by cause and by owner. A title fee that changed because the provider issued a revised quote is different from a fee that was entered incorrectly at the start. The first may need a better quote process, while the second needs a data check. Show the top causes with an example, but remove borrower identifiers."
    ]
   },
   {
    "heading": "Limits and sources of error",
    "paragraphs": [
     "The rule allows some changes and provides curing processes, so a revised disclosure is not automatically an error. The review should separate a permitted change from a compliance failure. Read the current regulation and the investor guide rather than relying on a summary. The cited sources describe the disclosure framework and do not replace legal advice.",
     "The file may not capture every conversation that changed a fee. A title provider may have given a verbal quote that was later revised in writing. The review should present the documentary evidence and avoid assigning intent. The result describes the sampled files and not the whole market. Volume and loan mix changes should be recorded."
    ]
   },
   {
    "heading": "Review cadence",
    "paragraphs": [
     "Review tolerance changes quarterly and after a change to the fee sheet, title provider, or disclosure system. Keep the category map and the reason codes stable. Review the findings with the disclosure owner, the closing team, and the title contact. Choose one category to improve and check the next period.",
     "If the process changes, mark the date and treat the result as a new baseline. A new fee sheet can reduce changes without improving the underlying review. Ask whether the capture method changed before claiming an improvement. The review should distinguish a process gain from a reporting change."
    ]
   },
   {
    "heading": "What to fix first",
    "paragraphs": [
     "Start with the category that produces the most rework and has a clear source. A title fee that changes after the initial disclosure may need a firmer quote before the loan estimate. A recording fee may need a current county schedule at the desk. Choose a fix that removes the cause rather than adding a reconciliation step.",
     "Test the fix on a small group and compare the next period. Ask the disclosure owner whether the revised process reduced the number of reissued forms. If it did not, the problem may be the timing of the quote rather than its accuracy. A short conversation with the title contact can reveal more than another report."
    ]
   },
   {
    "heading": "Working with the disclosure owner",
    "paragraphs": [
     "The processor can gather evidence and document the change, but the disclosure owner decides whether a revision or a cure is required. Write that boundary into the procedure so nobody improvises under a closing deadline. The owner should be reachable when a fee moves late in the file. Record the owner answer in a shared note so the same fee question is not asked every month.",
     "Keep a short log of questions and answers from the disclosure owner. Reuse the answers for similar cases instead of asking the same question every week. Update the log when the rule or the fee sheet changes. A shared interpretation is more consistent than individual memory."
    ]
   },
   {
    "heading": "Keeping the analysis useful",
    "paragraphs": [
     "A tolerance report should lead to one operational change, not a longer explanation of the rule. Show the category, the cause, the rework, and the owner. Keep the language plain enough for a processor to use in a team meeting. The report is a tool for the next file, not a legal memo.",
     "Review the report with the people who prepare the disclosures and the people who speak to borrowers. Each group sees a different consequence of the same change. Their feedback can turn a category count into a specific fix. That is the point where the analysis starts to reduce rework."
    ]
   },
   {
    "heading": "Data handling for fee records",
    "paragraphs": [
     "Fee records can identify borrowers, properties, and service providers, so the review should use a loan key rather than names. Keep the amount, the category, the date, and the source document reference. Remove addresses and contact details from the working file. The analysis does not need them.",
     "Store the working file in the approved system and limit access to the review team. If a source invoice contains personal information, cite the file and record only the relevant amount. The cited disclosure sources explain the rule, not the company data policy. The privacy and security requirements of the organization still apply."
    ]
   },
   {
    "heading": "Communicating a change to the borrower",
    "paragraphs": [
     "A fee change that reaches the borrower should be explained in plain language with the revised amount and the reason. Do not describe a tolerance category unless the borrower needs it to understand the change. Say what happens next and whether the closing date is affected. The message should match the revised disclosure.",
     "Give the borrower a contact for questions and record the response. If the change is a decrease, say so clearly instead of leaving the borrower to compare documents. A short, accurate update reduces calls and builds trust. The disclosure owner should approve any wording that describes the rule."
    ]
   }
  ],
  "sources": [
   {
    "label": "Electronic Code of Federal Regulations, Regulation Z",
    "url": "https://www.ecfr.gov/current/title-12/chapter-X/part-1026"
   },
   {
    "label": "Consumer Financial Protection Bureau",
    "url": "https://www.consumerfinance.gov/"
   },
   {
    "label": "Consumer Financial Protection Bureau, Loan Estimate Explainer",
    "url": "https://www.consumerfinance.gov/owning-a-home/loan-estimate/"
   },
   {
    "label": "Consumer Financial Protection Bureau, Closing Disclosure Explainer",
    "url": "https://www.consumerfinance.gov/owning-a-home/closing-disclosure/"
   },
   {
    "label": "U.S. Department of Housing and Urban Development, HUD Handbook 4000.1",
    "url": "https://www.hud.gov/program_offices/housing/sfh/handbook_4000-1"
   },
   {
    "label": "Fannie Mae Selling Guide",
    "url": "https://selling-guide.fanniemae.com/"
   }
  ]
 },
 {
  "slug": "measuring-duplicate-document-requests-in-a-mortgage-file",
  "title": "Measuring duplicate document requests in a mortgage file",
  "summary": "A method for identifying repeated requests for the same mortgage document and separating true duplication from legitimate follow-up.",
  "cluster": "Borrower communication",
  "publishedAt": "2026-11-08",
  "finding": "Duplicate requests are best measured by matching each request to an existing requirement and an existing submission, not by counting messages or documents alone.",
  "thumbnail": "/thumbnails/november-08/measuring-duplicate-document-requests-in-a-mortgage-file.webp",
  "sections": [
   {
    "heading": "Question and scope",
    "paragraphs": [
     "This brief asks how often a mortgage team asks for a document that the file already contains or has already requested. The unit is one request for one requirement on one loan. A duplicate occurs when a request is sent after an earlier request or submission for the same requirement. The question matters because repeated requests waste borrower time and can make a complete file look incomplete.",
     "The scope should name the channels included, such as the portal, email, text, and phone notes. Name the loan stages and the document types. Exclude a request for a new version after a legitimate expiration, because that is a renewal rather than a duplicate. Record the exclusion rule so the count is repeatable."
    ]
   },
   {
    "heading": "Define a duplicate request",
    "paragraphs": [
     "A duplicate request is a request for the same requirement, for the same loan, after a prior request or submission. The second request may be identical or may use different words. The defining feature is that the requirement was already known to the team. A request for a different document period is not a duplicate unless the period was already supplied.",
     "Separate a duplicate from a reminder. A reminder follows an agreed response standard and refers to the earlier request, while a duplicate appears to start over. Both can be appropriate, but they have different causes. Use a reason code so the analysis does not treat a planned follow-up as waste."
    ]
   },
   {
    "heading": "Unit and population",
    "paragraphs": [
     "Use the requirement as the unit and the loan as the grouping level. Report the share of loans with at least one duplicate and the number of duplicate requests per affected loan. The first measure shows how common the problem is, while the second shows how much extra work it creates. Report both.",
     "Define the population as loans active during the window or loans that reached a decision. Active loans may produce more requests later, so the count is partial. If both are included, report them separately. The reader should know whether the denominator is a completed file or a snapshot."
    ]
   },
   {
    "heading": "Evidence standard",
    "paragraphs": [
     "Use the request log, the borrower communication record, and the document upload log as the primary sources. Record the requirement, the request date, the channel, the sender, and the prior submission or request. Link the request to the document it asked for. A request without a requirement identifier is difficult to match and should be marked unclear.",
     "If the duplicate is visible only in a phone note, record the note and the date. Do not infer a duplicate from a borrower complaint alone. The evidence should show that the team asked twice, not merely that the borrower felt asked twice. Keep the standard factual and avoid copying unnecessary personal detail."
    ]
   },
   {
    "heading": "Matching requests across channels",
    "paragraphs": [
     "Match the request text to the requirement list, then match the requirement to the earlier request or submission. Use the document type and the period as the key. A request for a bank statement covering a different month is not a duplicate, while a request for the same month is. The period is often the detail that separates the two.",
     "Check the recipient and the loan. A request sent to the wrong borrower or attached to the wrong loan is a different error, even if the wording matches. Record that as a misdirected request rather than a duplicate. The distinction matters because the fix is different."
    ]
   },
   {
    "heading": "Analysis and reporting",
    "paragraphs": [
     "Report duplicates by document type, channel, and cause. Common causes include a request sent before the upload was indexed, a reviewer missing an existing document, and a template that asks for a document already collected. Show the count and the share, plus the median time between the first request and the duplicate. Include the channel because a portal duplicate may have a different fix from an email duplicate.",
     "Group the causes by team-side and borrower-side. A duplicate caused by a slow index is a workflow issue, while one caused by a borrower sending a document to a different address may be a communication issue. The report should name the cause so the team can choose a fix. A single total hides both. A short note beside the count should explain which channels were visible."
    ]
   },
   {
    "heading": "Limits and sources of error",
    "paragraphs": [
     "The request log may not capture informal requests made during a call. A borrower may resend a document without being asked, which is not a duplicate request from the team. The measurement should state which channels were visible and which were not. An incomplete channel view can understate or overstate the problem.",
     "A legitimate follow-up can look like a duplicate when the first request was unclear or sent to the wrong contact. Read the messages before classifying. The cited public sources describe borrower communication and documentation expectations, not a duplicate-request benchmark. The result describes the sampled files and not the whole operation."
    ]
   },
   {
    "heading": "Review cadence",
    "paragraphs": [
     "Review duplicates monthly or quarterly, depending on volume. Keep the requirement list and the reason codes stable. Review the findings with the processing team and the borrower communication owner. Choose one channel or document type to improve and check the next period.",
     "When the portal or template changes, mark the date and treat the result as a new baseline. A new upload notification can reduce duplicates without changing the request discipline. Ask whether the capture method changed before claiming an improvement. The review should distinguish a real gain from a reporting change."
    ]
   },
   {
    "heading": "What to fix first",
    "paragraphs": [
     "Start with the document type that has the most duplicates and a clear cause. If the cause is a slow index, add a check before a request is sent. If the cause is a missed document, improve the file view. If the cause is a template, remove the repeated question. Choose the smallest fix that removes the cause.",
     "Test the fix on a small group and compare the next period. Ask the borrower-facing team whether the change reduced confusion. If the count does not move, the problem may be the channel or the timing rather than the wording. A short review with the people who send the requests is more useful than another dashboard."
    ]
   },
   {
    "heading": "Keeping the count honest",
    "paragraphs": [
     "Store the definitions, the sample, and the matching rules with the result. Name an owner who can repeat the count and a backup who understands the channels. Record any manual match and the reason. The method should let a new analyst reach the same number.",
     "Do not use the duplicate count to rank individual processors. The same system problem can affect everyone, and a public ranking will encourage people to hide requests rather than fix the cause. Use the result to improve the queue, the template, and the index. That is the outcome the measure is meant to serve."
    ]
   },
   {
    "heading": "Data handling and privacy",
    "paragraphs": [
     "The request log contains borrower contact details and message content, so the working file should keep only the loan key, the requirement, the date, and the channel. Remove names, email addresses, and phone numbers unless they are needed to understand a misdirected request. Even then, record the fact rather than the contact detail. If a misdirected request is included, record the fact without keeping the wrong contact detail.",
     "Store the sample in the approved system and limit access to the reviewers. If a message must be quoted, use the shortest fragment that explains the cause. The cited privacy and security guidance describes safeguards, not a specific record-retention period. The organization policy still controls the file."
    ]
   },
   {
    "heading": "Using the result with the team",
    "paragraphs": [
     "A duplicate count can feel like a criticism of the people who send requests. Present it as a system result and show the causes that sit outside individual control, such as a slow index or an unclear template. Ask the team where they see the same request repeated. That question often produces the best fix.",
     "Choose one change and let the team test it before the next count. A checklist field, a file view, or a rewritten request can each remove a different cause. Do not announce a target that rewards hiding requests. The goal is fewer unnecessary messages, not a better-looking number."
    ]
   }
  ],
  "sources": [
   {
    "label": "Consumer Financial Protection Bureau",
    "url": "https://www.consumerfinance.gov/"
   },
   {
    "label": "U.S. Department of Housing and Urban Development, HUD Handbook 4000.1",
    "url": "https://www.hud.gov/program_offices/housing/sfh/handbook_4000-1"
   },
   {
    "label": "Fannie Mae Selling Guide",
    "url": "https://selling-guide.fanniemae.com/"
   },
   {
    "label": "Freddie Mac Single-Family Seller/Servicer Guide",
    "url": "https://guide.freddiemac.com/"
   },
   {
    "label": "Federal Trade Commission, Safeguards Rule",
    "url": "https://www.ftc.gov/business-guidance/resources/ftcs-safeguards-rule-what-your-business-needs-know"
   }
  ]
 },
 {
  "slug": "how-income-complexity-changes-processing-time-by-borrower-type",
  "title": "How income complexity changes processing time by borrower type",
  "summary": "A comparative review of how income documentation complexity affects mortgage processing time for salaried, self-employed, and variable-income borrowers.",
  "cluster": "Workforce planning",
  "publishedAt": "2026-11-08",
  "finding": "Income complexity is driven by the number of sources and the evidence needed to verify them, so processing time varies by borrower type even when the document count looks similar.",
  "thumbnail": "/thumbnails/november-08/how-income-complexity-changes-processing-time-by-borrower-type.webp",
  "sections": [
   {
    "heading": "Question and scope",
    "paragraphs": [
     "This brief asks how income complexity differs by borrower type and how that difference affects the time a mortgage file spends in processing. The unit is one borrower income profile on one loan. The comparison covers salaried borrowers, self-employed borrowers, and borrowers with variable or multiple income sources. The question matters because a simple document count can hide the work behind each document.",
     "The scope should name the loan types, the income types, and the processing stage being measured. Include the documents required by the program and the calculations the team performs. Exclude income that is not used for qualification. Record the exclusion so the sample reflects the work that actually affects the decision."
    ]
   },
   {
    "heading": "Define borrower income types",
    "paragraphs": [
     "Use a small set of income types that match how the team works. Salaried, self-employed, commission, rental, retirement, and multiple-source are common categories. A borrower can fall into more than one, so assign a primary type and note the secondary sources. A single label for every borrower will hide the variation.",
     "Write a one-line definition for each type and an example. Review the definitions with the underwriter and the processor before collecting data. If two types overlap, decide which one owns the file and apply the rule consistently. A stable taxonomy is more important than a perfect one."
    ]
   },
   {
    "heading": "Build a complexity scale",
    "paragraphs": [
     "A complexity scale should reflect the evidence and the calculation, not the borrower identity. Count the number of income sources, the number of documents required, the number of calculation steps, and the number of clarifications the file typically produces. A salaried borrower with one employer may score low, while a self-employed borrower with a partnership may score high. Write the anchors so two reviewers can score the same file the same way.",
     "Keep the scale simple enough to apply from the file. A four-point scale with written anchors is more reliable than a ten-point scale with vague labels. Test the scale on a few files with two reviewers and compare their scores. If they disagree, rewrite the anchors before using the scale in a study."
    ]
   },
   {
    "heading": "Evidence standard",
    "paragraphs": [
     "Use the loan file, the income calculation worksheet, and the condition log as the primary sources. Record the income type, the sources, the documents, the calculation steps, and the time spent in processing. If time is tracked in a system, note the start and stop events. If it is not, use the file dates and state the limitation.",
     "For each file, record whether a clarification was needed and what caused it. A missing tax schedule is different from an unclear explanation of a business loss. The cause helps explain the time difference. Mark a file unverifiable when the income calculation cannot be reconstructed from the record."
    ]
   },
   {
    "heading": "Sampling and collection",
    "paragraphs": [
     "Sample across income types and processors so the result is not driven by one specialist. Include files that closed and files that were denied, because the work still happened. If the volume is small, review every file in the period. If the volume is large, use consecutive files within each type and record the selection rule.",
     "Collect the income evidence and the processing timeline in one pass. Note the systems searched and the date. Do not replace a complex file with a simpler one, because that removes the cases the study is trying to understand. Keep the sample list with the report so another reviewer can repeat it."
    ]
   },
   {
    "heading": "Measuring processing time",
    "paragraphs": [
     "Measure time from the point the file enters processing to the point the income review is complete. Use business hours if the team works a standard schedule, and state the convention. If the file waits on the borrower, record that separately so the team time is not mixed with borrower time. Record the start and stop event names so another analyst can repeat the measurement.",
     "Report the median and the range, not only the average. A few very complex files can pull the mean away from the typical experience. Pair the time with the complexity score so the reader can see whether the scale explains the difference. A scale that does not track time is not useful for planning."
    ]
   },
   {
    "heading": "Analysis and reporting",
    "paragraphs": [
     "Report the median processing time and the number of clarifications by income type. Show the documents and calculation steps beside the time. A type with more documents but fewer clarifications may be easier than one with fewer documents and more questions. The combination is what matters.",
     "Group the results by processor only when the sample is large enough to avoid identifying individuals unfairly. The purpose is to find a shared standard, not to rank people. If one processor has a long time on a type, the cause may be training or file assignment. If everyone does, the cause may be the process."
    ]
   },
   {
    "heading": "Limits and sources of error",
    "paragraphs": [
     "The file dates may not reflect the actual work, because a processor can work on several files in a day. The income calculation may be revised after the first review, which changes the time. The study should state these limits and avoid treating the recorded time as exact. A range that is wide enough to include the outliers is more honest than a single average.",
     "Income complexity is not the only driver of processing time. Loan amount, property type, and borrower responsiveness also matter. The cited public sources describe occupation and income expectations, not a processing benchmark. The result describes the sampled files and not the whole market. Record any change in staffing or volume."
    ]
   },
   {
    "heading": "Review cadence",
    "paragraphs": [
     "Repeat the review annually or when the income documentation rules change. Keep the income types and the complexity anchors stable. Review the findings with processors, underwriters, and the manager who sets staffing. Choose one income type to support with a checklist or a calculation template.",
     "If the team changes its systems or its loan mix, mark the date and treat the next result as a new baseline. A new calculation tool can reduce time without changing the underlying complexity. Ask whether the capture method changed before claiming an improvement. The comparison should use like periods."
    ]
   },
   {
    "heading": "What to fix first",
    "paragraphs": [
     "Start with the income type that has the longest median time and a clear, repeatable cause. A self-employed file may need a calculation worksheet that names the required schedules. A multiple-source file may need an intake form that lists every source at once. Choose a fix that reduces the back-and-forth.",
     "Test the fix on a small group and compare the next period. Ask the processors whether the template reduced the time or only moved it. If the time does not move, the problem may be the review queue rather than the income evidence. A short conversation with the team can identify the real constraint."
    ]
   },
   {
    "heading": "Using the result for staffing",
    "paragraphs": [
     "A processing team needs coverage by income type, not only total headcount. If one specialist handles all self-employed files, an absence can stop that queue. Use the result to identify the types that need a second trained reviewer and a written procedure. Name the backup for each income type before the next leave period.",
     "Do not use the comparison to refuse complex borrowers. The goal is to plan the work and train the team, not to screen applicants by difficulty. A clear process can make a complex file predictable. That predictability is what supports both service and compliance."
    ]
   },
   {
    "heading": "Protecting borrower information",
    "paragraphs": [
     "Income files contain tax returns, pay statements, and business records, so the working sample should use a loan key and the minimum fields needed for the analysis. Remove names, employer details, and account numbers where they are not required. Keep the complexity score and the timing data separate from the source documents. Give the working file a retention date so it is removed when the review is complete.",
     "Store the sample in the approved system and limit access to the review team. If a document must be examined, record its type and period rather than its contents. The cited labor and housing sources describe income expectations, not a data retention rule. The organization privacy and security policy still applies."
    ]
   },
   {
    "heading": "Communicating the result",
    "paragraphs": [
     "Present the comparison as a planning aid, not a judgment about which borrowers are desirable. Show the median time, the range, and the number of files in each income type. Note the small sample if a type has only a few files. A result with a wide range should not be reduced to one average.",
     "Review the findings with the processors before sharing them with management. They can explain a delay that the data attributes to income complexity but that actually came from a system outage or a missing document. That context prevents a misleading conclusion and points to a better fix. Ask the processors to name the constraint they feel most, then compare it with the data."
    ]
   }
  ],
  "sources": [
   {
    "label": "U.S. Bureau of Labor Statistics, Loan Officers",
    "url": "https://www.bls.gov/ooh/business-and-financial/loan-officers.htm"
   },
   {
    "label": "U.S. Department of Labor, Work Hours",
    "url": "https://www.dol.gov/general/topic/workhours"
   },
   {
    "label": "U.S. Department of Housing and Urban Development, HUD Handbook 4000.1",
    "url": "https://www.hud.gov/program_offices/housing/sfh/handbook_4000-1"
   },
   {
    "label": "Fannie Mae Selling Guide",
    "url": "https://selling-guide.fanniemae.com/"
   },
   {
    "label": "Consumer Financial Protection Bureau",
    "url": "https://www.consumerfinance.gov/"
   }
  ]
 },
 {
  "slug": "how-esignature-audit-trails-support-mortgage-file-evidence",
  "title": "How e-signature audit trails support mortgage file evidence",
  "summary": "A review of what an electronic signature audit trail records, how to verify it, and where mortgage file evidence can be incomplete.",
  "cluster": "Quality review",
  "publishedAt": "2026-11-08",
  "finding": "An e-signature audit trail is only useful as evidence when the file links the signed document, the signer identity, and the completion event in a way a later reviewer can verify.",
  "thumbnail": "/thumbnails/november-08/how-esignature-audit-trails-support-mortgage-file-evidence.webp",
  "sections": [
   {
    "heading": "Question and scope",
    "paragraphs": [
     "This brief asks what an electronic signature audit trail records and how a mortgage team can use it as file evidence. The unit is one signed document and its associated trail, from the sending event to the completion certificate. The question matters because a signed PDF can look complete while the identity, consent, or delivery record is missing. The review should follow the document from sending to completion, not only open the signed page.",
     "The scope should name the signing platform, the document types, and the loan stages included. Include disclosures, application documents, and closing documents if the team uses the same platform. Exclude documents signed on paper, because a different evidence standard applies. Record the exclusion so the sample is clear."
    ]
   },
   {
    "heading": "What an audit trail records",
    "paragraphs": [
     "A typical trail records the document, the signer, the email or phone used, the time of each event, the IP address, and the authentication method. It may also record a consent to do business electronically and a completion certificate. The exact fields vary by platform, so the team should know what its system produces. Ask the vendor for a sample certificate so the team knows which fields it will see.",
     "The trail is not the same as the signed document. The signed document shows the result, while the trail shows the process. A file should contain both. If the trail is stored only in the platform and not in the loan file, a later reviewer may not be able to see it after access changes."
    ]
   },
   {
    "heading": "Map the trail to the file",
    "paragraphs": [
     "For each signed document, identify the trail record and the completion certificate. Link them to the document in the file index. Record the signer name, the date, and the authentication method. If the document has multiple signers, link each signer event to the correct party.",
     "Check that the document version in the file matches the version in the trail. A trail for an earlier draft does not prove the final document was signed. Record the document hash or version identifier if the platform provides one. That link is what makes the evidence reliable."
    ]
   },
   {
    "heading": "Evidence standard",
    "paragraphs": [
     "Use the platform audit trail, the completion certificate, and the signed document as the primary sources. Record the event dates, the signer identity, the authentication result, and the consent record. If the platform provides a tamper seal or a hash, record it. A screenshot of a signature page is not a substitute for the trail.",
     "Mark a document unverifiable when the trail cannot be retrieved or the signer identity cannot be matched. Do not assume a signature is valid because the document looks signed. The reviewer should see the evidence that the platform produced, not a reconstruction. Keep the evidence with the loan file for the required retention period."
    ]
   },
   {
    "heading": "Sampling and verification",
    "paragraphs": [
     "Sample signed documents across platforms, document types, and signers. Include a mix of completed, declined, and expired envelopes if the platform reports them. For each document, open the trail and verify the signer and the completion event. Record the time and the source.",
     "If the volume is large, use consecutive documents within each category and state the selection rule. Do not select only the clean examples. A failed or incomplete envelope is often the most useful case for understanding the process. Keep the sample list with the review so it can be repeated. Keep the test envelope and its certificate with the vendor review record. The record should name the reviewer and the date."
    ]
   },
   {
    "heading": "Analysis and reporting",
    "paragraphs": [
     "Report the share of sampled documents with a complete trail and the share with an identity or consent gap. Group the gaps by cause, such as a missing consent record, a signer email mismatch, or an incomplete certificate. Show the count and an example without exposing personal data. Keep the sample list so a later reviewer can repeat the same check after a platform change.",
     "Pair the result with the document type and the platform. A gap that appears only on one form may be a template problem, while a gap across all forms may be a platform configuration issue. The report should give the team a specific place to look. A single pass rate is not enough to act on."
    ]
   },
   {
    "heading": "Limits and sources of error",
    "paragraphs": [
     "The platform may retain records differently from the loan file, and access may change when a user leaves. The trail may not capture a verbal authentication that happened outside the platform. The review should state what the platform records and what it does not. Do not assume the trail is complete because it is digital.",
     "The legal and regulatory requirements for electronic signatures and records are detailed, and the cited sources describe the framework rather than a company-specific standard. The result describes the sampled documents and not the whole operation. Platform changes and retention changes should be recorded beside the result. State the platform version in the result so a later change can be separated from a process change."
    ]
   },
   {
    "heading": "Review cadence",
    "paragraphs": [
     "Review the evidence quarterly and after a platform or template change. Keep the trail fields and the gap categories stable. Review the findings with the closing team, the compliance owner, and the platform administrator. Choose one document type or platform setting to improve.",
     "If the platform changes, mark the date and treat the next result as a new baseline. A new completion certificate can improve evidence without changing the signing process. Ask whether the retention or export method changed before comparing periods. The review should distinguish a real gain from a reporting change."
    ]
   },
   {
    "heading": "What to fix first",
    "paragraphs": [
     "Start with the document type that has the most gaps and a clear cause. A missing consent record may need a platform setting. A signer email mismatch may need a verification step at sending. A missing certificate may need an export step after completion. Choose the fix that closes the gap at the source.",
     "Test the fix on a small group and compare the next sample. Ask the closing team whether the evidence is easier to find. If the gap does not close, the problem may be the retention path rather than the signing event. A short review with the platform administrator can reveal the constraint."
    ]
   },
   {
    "heading": "Training and access",
    "paragraphs": [
     "Train the team on what the trail contains and how to retrieve it. A processor who has never opened a completion certificate may not know what to check. Include a short practice exercise with a test envelope and a real certificate. The exercise is more useful than a written description.",
     "Limit access to the audit trail to the roles that need it, and review access when someone changes role. A trail that anyone can edit is not reliable evidence. Record the access review date. The platform administrator should confirm that retention matches the company policy and the investor requirement."
    ]
   },
   {
    "heading": "Retention and access",
    "paragraphs": [
     "An audit trail must remain available for as long as the loan file and the applicable policy require. Confirm that the platform retention period matches the company policy and the investor requirement. A trail that disappears when an envelope is archived is not reliable evidence. Record the retention setting and the date it was checked.",
     "Limit access to the trail to the roles that need it and review access when someone changes role. Keep an export or a completion certificate in the loan file when the platform does not guarantee long-term access. The cited security guidance describes access control and monitoring, not a mortgage retention period. The company policy still governs."
    ]
   },
   {
    "heading": "Working with the platform vendor",
    "paragraphs": [
     "Ask the vendor what the completion certificate contains and how it can be exported. Confirm the authentication options and the consent record. A platform that cannot produce a durable certificate may not meet the file evidence standard. Put the answer in writing and keep it with the vendor review.",
     "Review the vendor configuration after a template or authentication change. A new setting can improve identity evidence or break an existing export. Test one envelope after the change and inspect the trail. The test is small and catches a problem before a closing file depends on it."
    ]
   }
  ],
  "sources": [
   {
    "label": "National Institute of Standards and Technology, Cybersecurity Framework",
    "url": "https://www.nist.gov/cyberframework"
   },
   {
    "label": "Federal Trade Commission, Safeguards Rule",
    "url": "https://www.ftc.gov/business-guidance/resources/ftcs-safeguards-rule-what-your-business-needs-know"
   },
   {
    "label": "Consumer Financial Protection Bureau",
    "url": "https://www.consumerfinance.gov/"
   },
   {
    "label": "U.S. Department of Housing and Urban Development, HUD Handbook 4000.1",
    "url": "https://www.hud.gov/program_offices/housing/sfh/handbook_4000-1"
   },
   {
    "label": "Fannie Mae Selling Guide",
    "url": "https://selling-guide.fanniemae.com/"
   }
  ]
 },
 {
  "slug": "where-escrow-setup-data-creates-closing-follow-up",
  "title": "Where escrow setup data creates closing follow-up",
  "summary": "A review of the escrow setup details that generate post-closing questions and how to verify them before the closing package is final.",
  "cluster": "Closing preparation",
  "publishedAt": "2026-11-08",
  "finding": "Escrow follow-up clusters around a few setup fields, especially the tax and insurance amounts, the payment date, and the escrow account disclosure.",
  "thumbnail": "/thumbnails/november-08/where-escrow-setup-data-creates-closing-follow-up.webp",
  "sections": [
   {
    "heading": "Question and scope",
    "paragraphs": [
     "This brief asks which escrow setup details create follow-up work around closing and how those details can be verified earlier. The unit is one escrow item on one loan, such as a property tax amount, a hazard insurance premium, or a payment date. The question matters because a small setup error can produce a borrower question, a servicing transfer issue, or a corrected disclosure after funding. Record the source date for each item so a later change can be separated from an original error.",
     "The scope should name the loan types, the property types, and the escrow rules that apply. Include purchase and refinance files if both use escrow. Exclude loans without an escrow account, and say so in the report. Record the exclusion so the sample reflects the files where the setup work exists."
    ]
   },
   {
    "heading": "Define escrow setup items",
    "paragraphs": [
     "Escrow setup includes the tax and insurance amounts, the payment frequency, the first payment date, the escrow cushion, and the account disclosure. It also includes the payee information and the date the servicer will begin collecting. Each item has a source document and an owner, even when the owner is outside the lending team. Write the owner beside each item, even when the owner is the tax service or the insurance agent.",
     "Write a one-line definition for each item and the document that proves it. A tax amount may come from the county assessor, while an insurance premium may come from the policy declaration. A payment date may come from the closing schedule. Without the source, the setup is an assumption."
    ]
   },
   {
    "heading": "Separate estimate from final",
    "paragraphs": [
     "The escrow estimate at application is not the final amount at closing. Taxes can change after a reassessment, and insurance can change after a policy endorsement. The review should distinguish an estimate from a verified final amount. A file that treats the estimate as final will produce a surprise later.",
     "Record the date and source of each final amount. If the final amount is not available before closing, note the assumption and the expected update date. Do not present an estimate as a confirmed figure to the borrower. The language in the disclosure and the closing package should match the evidence."
    ]
   },
   {
    "heading": "Evidence standard",
    "paragraphs": [
     "Use the tax certificate, the insurance declaration, the closing disclosure, and the servicing setup record as the primary sources. Record the amount, the effective date, the payee, and the source. If a document is a screenshot, keep the source link and the date. The reviewer should be able to verify the amount without calling the borrower.",
     "Mark an item unverifiable when the source is missing or the amount conflicts across documents. Do not choose the amount that makes the payment look better. Record the conflict and route it to the closing or servicing owner. A clear conflict is easier to resolve before funding than after."
    ]
   },
   {
    "heading": "Sampling and collection",
    "paragraphs": [
     "Sample loans with an escrow account across property types and closing periods. Include files with a tax or insurance change before closing. If the volume is small, review every file in the period. If the volume is large, use consecutive files within each category and record the selection rule.",
     "Collect the setup record and the source documents together. Note the system of record and the date searched. Do not drop a file because the source is hard to find, because that hides the evidence gap. Keep the sample list with the review so another person can repeat it."
    ]
   },
   {
    "heading": "Analysis and reporting",
    "paragraphs": [
     "Report the share of files with at least one escrow item that changed after the initial estimate. Show the item type, the amount change, and the point where it was discovered. Group the changes by cause, such as a new tax assessment, an insurance endorsement, or a data entry error. Report the date the change was discovered so a late change is not confused with a data entry error.",
     "Pair the result with the follow-up each change created, such as a borrower call, a revised disclosure, or a servicing correction. A change with no follow-up may be harmless, while a small change that triggers a payment question is more important. The report should show both the amount and the consequence. A change with a large dollar amount but no borrower contact may need less attention than a small one that caused a call."
    ]
   },
   {
    "heading": "Limits and sources of error",
    "paragraphs": [
     "Tax and insurance amounts can change for reasons outside the team control. A reassessment or a policy renewal may arrive after closing. The review should separate a preventable setup error from a legitimate later change. The cited public sources describe disclosure and escrow expectations, not a benchmark for follow-up volume.",
     "The servicing record may not be available at the time of review, and the borrower may report a concern that is not in the file. The review should present the documentary evidence and avoid assigning fault. The result describes the sampled files and not the whole operation. Record any change in tax or insurance cycles."
    ]
   },
   {
    "heading": "Review cadence",
    "paragraphs": [
     "Review escrow follow-up monthly or quarterly, depending on volume. Keep the item definitions and the cause codes stable. Review the findings with the closing team, the tax service, and the insurance contact. Choose one item to verify earlier and check the next period.",
     "When a tax cycle or insurance process changes, mark the date and treat the next result as a new baseline. A new tax service can reduce errors without changing the team process. Ask whether the source or the timing changed before claiming an improvement. The comparison should use like periods."
    ]
   },
   {
    "heading": "What to fix first",
    "paragraphs": [
     "Start with the item that creates the most follow-up and has a clear source. A tax amount that is estimated too early may need a certificate ordered closer to closing. An insurance premium that changes may need a final declaration before the package is sent. Choose a fix that improves the timing or the source.",
     "Test the fix on a small group and compare the next period. Ask the closing team whether the borrower questions decreased. If they did not, the problem may be the payment explanation rather than the amount. A short review with the servicing contact can reveal the real issue."
    ]
   },
   {
    "heading": "Working with servicers",
    "paragraphs": [
     "The servicer receives the setup data after closing and may interpret it differently from the lender. Agree on the fields and the format before the transfer. Confirm the first payment date and the escrow collection start. A short data dictionary prevents a question that would otherwise reach the borrower.",
     "Review a sample of transferred files with the servicer and compare the setup record. A mismatch may come from a field definition rather than a wrong amount. Record the fix in the data dictionary and update the template. The goal is a clean handoff, not a longer reconciliation after the fact."
    ]
   },
   {
    "heading": "Keeping the setup review useful",
    "paragraphs": [
     "An escrow review should end with one specific change to the source, the timing, or the template. Keep the evidence and the follow-up count together so the change can be checked. Share the result with the people who prepare the closing package and the people who answer borrower questions after closing. Check the next period with the same item list so the change can be compared.",
     "Do not treat every follow-up as an error. Some questions are a normal part of a new payment. The review should separate a misunderstanding from a setup defect. That distinction keeps the team focused on the fixes that matter and protects the service relationship."
    ]
   },
   {
    "heading": "Data handling and privacy",
    "paragraphs": [
     "Escrow setup includes tax bills, insurance declarations, and payment details, so the working file should use a loan key and only the fields needed for the review. Remove borrower names, property addresses, and policy numbers where a category is enough. Keep the amount and the source reference separate from the personal data. Use a reference to the source rather than a copy when the document contains personal details.",
     "Store the sample in the approved system and limit access to the review team. If a source document must be cited, use a reference rather than a copy. The cited disclosure and escrow sources describe the rule, not a company retention period. The organization privacy and security policy still controls the file."
    ]
   },
   {
    "heading": "Communicating the setup",
    "paragraphs": [
     "A borrower should understand the first payment, the escrow portion, and the reason it can change. Use plain language and avoid projecting an exact future payment when the tax or insurance amount is still an estimate. Say when the next review will happen and who to contact with a question. Record the date of the explanation so the borrower can find it if the payment changes later.",
     "If the setup changes before closing, update the explanation rather than letting the borrower discover it in the package. Record the communication and the revised amount. A clear update reduces post-closing calls and gives the servicing transfer a cleaner start. The disclosure owner should approve any wording about the escrow rule."
    ]
   }
  ],
  "sources": [
   {
    "label": "Electronic Code of Federal Regulations, Regulation Z",
    "url": "https://www.ecfr.gov/current/title-12/chapter-X/part-1026"
   },
   {
    "label": "Consumer Financial Protection Bureau",
    "url": "https://www.consumerfinance.gov/"
   },
   {
    "label": "Consumer Financial Protection Bureau, Closing Disclosure Explainer",
    "url": "https://www.consumerfinance.gov/owning-a-home/closing-disclosure/"
   },
   {
    "label": "U.S. Department of Housing and Urban Development, HUD Handbook 4000.1",
    "url": "https://www.hud.gov/program_offices/housing/sfh/handbook_4000-1"
   },
   {
    "label": "Fannie Mae Selling Guide",
    "url": "https://selling-guide.fanniemae.com/"
   },
   {
    "label": "Freddie Mac Single-Family Seller/Servicer Guide",
    "url": "https://guide.freddiemac.com/"
   }
  ]
 }
];
