import type { BlogPost } from './types';

export const november08BlogPosts: readonly BlogPost[] = [
 {
  "slug": "build-a-document-expiry-watchlist-for-a-mortgage-pipeline",
  "title": "Build a document expiry watchlist for a mortgage pipeline",
  "description": "A practical design for tracking mortgage document expiration dates, warning thresholds, and owners before a closing date is at risk.",
  "category": "Condition tracking",
  "publishedAt": "2026-11-08",
  "readTime": "7 min read",
  "thumbnail": "/thumbnails/november-08/build-a-document-expiry-watchlist-for-a-mortgage-pipeline.webp",
  "sections": [
   {
    "heading": "Why expiry dates get lost",
    "paragraphs": [
     "Most mortgage documents carry a usable window, but that window is rarely stored beside the document. A pay stub is current for a short period, a bank statement ages quickly, and an appraisal or credit report follows its own validity rule. When the date lives only in a guideline document, the processor has to remember it under pressure. The file then looks complete even though the evidence has quietly expired.",
     "A watchlist fixes the problem by making the clock visible before anyone asks for the file. It does not decide whether an expired document is acceptable, because that judgment belongs to underwriting or compliance. It shows which items are close to the edge and who owns the next step. That visibility turns a last-minute scramble into a planned renewal."
    ]
   },
   {
    "heading": "Choose the documents and clocks",
    "paragraphs": [
     "Start with the document types that actually stop a file, not every paper in the folder. Pay stubs, bank statements, credit reports, appraisals, title commitments, insurance evidence, and rate locks are common examples. Ask the underwriter which items are routinely re-requested near closing. Build the first list from that answer rather than from a generic checklist.",
     "For each document, write the rule as a plain sentence with a source. A pay stub may be valid for thirty days from the pay period end under the investor guide the team uses. Name the guide and the section so a reviewer can check the rule. If the team serves several investors, keep a separate row for each rule that differs."
    ]
   },
   {
    "heading": "Record the source date and the rule",
    "paragraphs": [
     "The source date is the date the evidence was created or issued, not the date it arrived in the portal. A bank statement dated the first of the month does not become fresh because the borrower uploaded it three weeks later. Store the source date, the upload date, and the rule identifier in separate fields. Those three fields answer different questions when a file is reviewed.",
     "Record the expiration date as a computed value, not a typed one. A formula that adds the rule window to the source date removes a whole class of arithmetic errors. When the rule changes, update the rule field and recompute the list. Keep the old values in the history so a prior decision can still be explained."
    ]
   },
   {
    "heading": "Set warning thresholds by consequence",
    "paragraphs": [
     "Not every expiration deserves the same warning. A credit report that expires before the closing date can stop the file, while a utility bill that ages out may need only a fresh copy. Set a first warning at ten business days and a second at three for items that block closing. Use a longer runway for items that take time to replace.",
     "The threshold should reflect how long a replacement takes, not how anxious the team feels. An appraisal revision or a title update can take a week or more, so it needs an earlier warning. A pay stub may arrive in a day. Map the replacement lead time beside each document and let it drive the threshold."
    ]
   },
   {
    "heading": "Build the watchlist view",
    "paragraphs": [
     "The watchlist should open with the items that expire soonest and show the loan number, document type, source date, expiration date, owner, and next action. Sort by expiration date rather than by loan officer, because the date is the shared risk. Add a filter for items already requested from the borrower. That filter keeps the list from double-counting work in progress.",
     "Keep the view small enough to read on one screen. A table of forty columns will be ignored, while six clear columns will be used each morning. Group the rows into overdue, due this week, and due later. The grouping gives the team a finish line instead of a wall of dates."
    ]
   },
   {
    "heading": "Assign an owner for each warning",
    "paragraphs": [
     "Every warning needs one named owner and one next action. The owner may be the processor, the document specialist, or the loan officer, depending on the document and the relationship. The next action should be concrete, such as request an updated statement or confirm the appraisal effective date. A row that says monitor is a row that nobody will touch.",
     "When ownership changes, record the handoff in the row. A warning that moves between people without a note is likely to be dropped during a busy week. Ask the new owner to confirm the next action and its date. That small confirmation is the difference between a plan and a hope."
    ]
   },
   {
    "heading": "Handle renewals before the deadline",
    "paragraphs": [
     "Send the request before the document expires, not after. A borrower who is asked early has time to visit a bank or download a statement, while a borrower who is asked at the deadline is set up to fail. Put the request date on the watchlist and compare it with the team response standard. The goal is to renew the evidence while the file still has slack.",
     "If a replacement arrives late, record the gap and the reason. A late renewal may be caused by the borrower, the bank, or the team. The reason matters because it points to a different fix. Do not overwrite the expired row. Close it with the replacement evidence attached."
    ]
   },
   {
    "heading": "Review the list in the daily stand-up",
    "paragraphs": [
     "Give the watchlist five minutes in the daily stand-up. Read the overdue rows and the rows due in the next three business days. Ask each owner for the next action and the date. Do not read the whole list, because the full review belongs to a weekly session. The daily pass exists to catch urgent items while there is still time.",
     "Keep the stand-up focused on decisions rather than status. If an owner needs approval to renew an appraisal or extend a lock, the stand-up should surface that need. Record the decision beside the row so the next person can see it. A short decision log is more valuable than a long narrative."
    ]
   },
   {
    "heading": "Measure whether the watchlist works",
    "paragraphs": [
     "Track the number of documents that expired before a replacement was received. Compare that count with the number of warnings the list produced. A watchlist that warns constantly but never prevents an expiration is not working. The measure should fall as the team acts earlier.",
     "Also track the time from warning to request and from request to receipt. Those two intervals show where the delay sits. If requests go out quickly but receipts lag, the problem may be borrower communication or document access. If requests lag, the warning is not reaching an owner. Use the split to choose the next fix."
    ]
   }
  ],
  "faq": [
   {
    "q": "Which documents belong on the watchlist first?",
    "a": "Start with the items that can stop a closing, such as credit, appraisal, title, insurance, and rate lock evidence."
   },
   {
    "q": "Should the watchlist decide whether an expired document is acceptable?",
    "a": "No. It should surface the date and the owner while underwriting or compliance decides whether the evidence still satisfies the rule."
   },
   {
    "q": "How often should the list be reviewed?",
    "a": "Review urgent rows daily and the full list weekly, with a quarterly check of the rules and thresholds."
   }
  ],
  "internalService": "/services/condition-tracking-support",
  "internalSibling": "/blog/design-a-same-day-document-re-request-rule",
  "source": {
   "label": "U.S. Department of Housing and Urban Development, HUD Handbook 4000.1",
   "url": "https://www.hud.gov/program_offices/housing/sfh/handbook_4000-1"
  }
 },
 {
  "slug": "design-a-gift-letter-review-routine-for-down-payment-funds",
  "title": "Design a gift letter review routine for down payment funds",
  "description": "A step-by-step review routine for mortgage gift letters, donor evidence, transfer records, and the points that most often send a file back.",
  "category": "Borrower documentation",
  "publishedAt": "2026-11-08",
  "readTime": "7 min read",
  "thumbnail": "/thumbnails/november-08/design-a-gift-letter-review-routine-for-down-payment-funds.webp",
  "sections": [
   {
    "heading": "What the gift letter has to prove",
    "paragraphs": [
     "A gift letter is not a formality, because it tells the file where part of the down payment came from. The letter should identify the donor, the amount, the relationship, the property, and the statement that repayment is not required. It should also match the funds that actually reached the borrower. A letter that stands alone without a transfer record is an open question.",
     "The reviewer is not trying to police family generosity. The goal is to show that the money is real, documented, and allowed by the loan program. Different programs treat acceptable donors and required documentation differently. Read the program guide before the file reaches underwriting, not after a condition appears."
    ]
   },
   {
    "heading": "Separate the letter from the transfer",
    "paragraphs": [
     "Treat the signed letter and the transfer evidence as two separate checkpoints. The letter establishes intent and relationship, while the bank record establishes that the money moved. A file can have a perfect letter and no transfer, or a transfer with no letter. Each gap requires a different follow-up.",
     "Keep both items in the same document group so a reviewer can see them together. Name the group by the borrower and the gift amount, not by the upload date. That grouping makes it obvious when one half is missing. It also prevents a later reviewer from matching the wrong transfer to the wrong letter."
    ]
   },
   {
    "heading": "Build a review sequence",
    "paragraphs": [
     "Start by confirming the program allows the donor and the gift percentage. Then check that the letter names the correct property and the exact amount. Next, compare the donor name on the letter with the name on the bank account. Finally, match the transfer to the borrower account and note the date.",
     "The sequence matters because each step can invalidate the next. A letter from an ineligible donor cannot be repaired by a clean transfer. A transfer from a different account than the letter names needs an explanation. Review in order and stop at the first gap instead of collecting more paper around it."
    ]
   },
   {
    "heading": "Check the donor relationship and capacity",
    "paragraphs": [
     "Record the relationship in the borrower own words and compare it with the program definition. A cousin, a fiance, or a close friend may be acceptable for one program and not another. Do not infer the relationship from a shared surname. Ask when the letter is vague.",
     "If the donor is contributing a large share of the down payment, check whether the program requires evidence of the donor ability to give. A bank statement from the donor may be required, and the donor may reasonably object. Explain the requirement early and offer the approved alternative. Surprises at closing damage the relationship more than a clear request."
    ]
   },
   {
    "heading": "Reconcile the amounts across documents",
    "paragraphs": [
     "The gift amount on the letter, the transfer, and the closing statement should agree. A small difference can come from a wire fee, while a large difference may signal an undisclosed source. Record the explanation for any variance instead of adjusting the number to fit. The arithmetic should be shown, not assumed.",
     "Check the currency and the account owner as well as the amount. An international transfer may arrive in a different currency, and the converted amount will not match the letter exactly. Note the conversion and the rate source. The reviewer needs a trail that a later auditor can follow without calling the borrower."
    ]
   },
   {
    "heading": "Handle a gift from a non-traditional source",
    "paragraphs": [
     "Some files involve a gift of equity, a sale by a family member, or funds from a trust. These arrangements are not the same as a cash gift and should not be forced into the standard letter. Read the program guidance for the specific structure before asking for documents. Ask the underwriting desk which structure it will accept before the borrower pays for a second review.",
     "When the structure is unclear, escalate to underwriting with the facts rather than guessing. A proposed gift of equity may need a different disclosure or appraisal treatment. The processor should describe what is happening and let the qualified owner decide. That boundary protects both the borrower and the file."
    ]
   },
   {
    "heading": "Record the decision and the evidence",
    "paragraphs": [
     "Write a short note that names the donor, the amount, the relationship, the transfer date, and the documents reviewed. State whether the gift satisfies the program rule or whether a condition remains. Link each document to the note so the evidence travels with the decision. A later reviewer should be able to follow the note to the evidence without asking the original processor.",
     "If the reviewer decides an exception is needed, record who approved it and why. An approval that lives only in an email thread will be hard to defend later. Keep the note in the loan file and reference it from the condition log. A decision without a record is not a decision the team can repeat."
    ]
   },
   {
    "heading": "Train reviewers on the boundary",
    "paragraphs": [
     "Teach reviewers to prepare and verify the gift file, not to approve the borrower eligibility. They can check that names match, amounts reconcile, and the letter is signed. They should not decide whether a donor is acceptable when the guide is ambiguous. Write the escalation contact beside the checklist so a new reviewer knows where the boundary sits.",
     "Use two or three anonymized examples in training, including one clean gift and one with a missing transfer. Ask the trainee to explain the next action for each. The exercise shows whether they understand the sequence and the escalation point. Repeat it when the program guides change."
    ]
   },
   {
    "heading": "Review a sample each quarter",
    "paragraphs": [
     "Pull a sample of files with gifts and check that the letter, transfer, and closing statement agree. Count the files that needed a re-request and note the reason. A pattern in the reasons is more useful than a single defect. It points to the wording or the checklist that should change.",
     "Share the result with the processing and closing teams, because each sees a different part of the gift trail. Choose one fix, such as a required donor name field or a transfer date prompt. Check the next sample to see whether the fix reduced rework. Keep the earlier sample so the comparison is real."
    ]
   }
  ],
  "faq": [
   {
    "q": "Can a gift letter be reviewed before the transfer arrives?",
    "a": "Yes, but the file is not complete until the transfer evidence matches the letter and the borrower account."
   },
   {
    "q": "Who decides whether a donor is eligible?",
    "a": "The applicable loan program and the accountable underwriter decide, while the processor verifies and documents the evidence."
   },
   {
    "q": "What should happen when the transfer amount differs from the letter?",
    "a": "Record the reason, such as a wire fee or currency conversion, and escalate any unexplained difference instead of altering the number."
   }
  ],
  "internalService": "/services/borrower-document-support",
  "internalSibling": "/blog/build-a-self-employed-income-packet-checklist",
  "source": {
   "label": "Consumer Financial Protection Bureau, Owning a Home",
   "url": "https://www.consumerfinance.gov/owning-a-home/"
  }
 },
 {
  "slug": "keep-a-lock-extension-decision-log-the-pipeline-can-read",
  "title": "Keep a lock extension decision log the pipeline can read",
  "description": "A simple decision log for rate lock extensions that records the price, the reason, the approver, and the borrower communication.",
  "category": "Pipeline operations",
  "publishedAt": "2026-11-08",
  "readTime": "7 min read",
  "thumbnail": "/thumbnails/november-08/keep-a-lock-extension-decision-log-the-pipeline-can-read.webp",
  "sections": [
   {
    "heading": "Why extensions go wrong",
    "paragraphs": [
     "A rate lock extension is a priced decision with a deadline, but it is often handled as a quick favor. Someone calls the lender, hears a number, and tells the borrower the file will be fine. The price, the reason, and the approval are never written in one place. When the file closes, nobody can reconstruct what was decided.",
     "The log exists to make that decision inspectable. It should show why the lock needed to move, who approved the cost, and what the borrower was told. It does not replace the lock system or the investor rules. It gives the team a readable record that sits beside them."
    ]
   },
   {
    "heading": "Name the decision points",
    "paragraphs": [
     "List the moments when an extension becomes necessary. Common examples include a delayed appraisal, a title issue, a missing document, and a closing date that moved for a third party. Add any program-specific trigger the team sees often. The list should describe the cause, not blame a person.",
     "For each trigger, decide who can request an extension and who can approve the cost. A processor may request, while a manager or secondary marketing approves. Write the names or roles beside the trigger. That clarity prevents a rushed call from becoming an unauthorized cost."
    ]
   },
   {
    "heading": "Capture the price and the reason",
    "paragraphs": [
     "Record the extension fee, the new expiration date, and the party that quoted the price. A fee without a source is difficult to defend later. If the lender offers a range or a daily rate, record the basis and the date quoted. The borrower should see the same number the log shows.",
     "The reason should be specific enough to explain the delay. Delayed appraisal is weaker than appraisal revision received after the original report. A precise reason helps the team fix the cause and supports any later review. Keep the reason factual and free of speculation about the borrower."
    ]
   },
   {
    "heading": "Define authority before the deadline",
    "paragraphs": [
     "Set approval limits in advance so nobody has to improvise at the end of the day. A short extension within a small cost may sit with the pipeline manager, while a longer or costlier one needs a higher approver. Write the limits in the same document as the log. Review the limits with the approvers once a year and after any change in the lock desk.",
     "Include a backup approver for leave and after-hours situations. A deadline that lands on a holiday should not force an unauthorized decision. The backup should have the same information and the same limits. Test the path once with a practice file so the team knows how it works."
    ]
   },
   {
    "heading": "Write the log entry",
    "paragraphs": [
     "Use one row per extension with the loan number, the original expiration, the requested date, the fee, the reason, the approver, and the time of approval. Add a link to the lender confirmation. Keep the row short enough to scan and complete enough to audit. Add the time the request reached the lender so the turnaround can be checked later.",
     "Do not overwrite a prior entry when a second extension is needed. Add a new row and link it to the first. The sequence shows how a file drifted and whether the cause was addressed. A log that only shows the latest state hides the pattern the team needs to fix."
    ]
   },
   {
    "heading": "Connect the log to borrower updates",
    "paragraphs": [
     "The borrower should hear about an extension from the team, not from a closing delay. Use the log to prepare a short update that states the new date and any cost. Avoid promising a closing date that depends on an unconfirmed approval. The update should match the log exactly.",
     "If the borrower must pay the extension cost, explain the amount and how it will appear. Record the communication date and channel in the log. If the borrower declines, escalate before the lock expires. A declined extension is a decision, and it needs a written next step."
    ]
   },
   {
    "heading": "Review expired locks weekly",
    "paragraphs": [
     "Once a week, review every lock that expired or was extended in the prior period. Group the rows by cause and by owner. Look for files where the extension was requested late or the approval was unclear. The review should produce one process change, not a longer report.",
     "Compare the cost of extensions with the causes. If most cost comes from one dependency, the fix may be an earlier appraisal order or a tighter title follow-up. If the cost comes from late borrower documents, the fix may be the request standard. Let the pattern choose the target."
    ]
   },
   {
    "heading": "Handle a relock after expiry",
    "paragraphs": [
     "A relock is not the same as an extension and should be logged as a separate event. Record the new rate, the new lock period, and any cost or credit. Note whether the borrower was informed before the relock. The distinction matters for both the pricing and the disclosure record.",
     "If the relock changes the borrower payment or closing costs, coordinate with the disclosure owner before the change is described. A verbal estimate can conflict with the revised disclosure. The log should point to the disclosure record, not replace it. If the disclosure record is not ready, hold the borrower message until the owner confirms the figures."
    ]
   },
   {
    "heading": "Keep the log through closing",
    "paragraphs": [
     "The log should remain available after closing for review and audit. Store it with the loan file or in a system that retains the same evidence. Do not delete rows when a file is cancelled, because the lock decision may still need to be explained. A clean log also lets the team show the borrower why a cost appeared at closing.",
     "At closing, check that the final figures agree with the logged extension decisions. A mismatch can slow funding or create a borrower question. Add the check to the closing preflight so the log is used, not just maintained. A record that nobody reads will not stay accurate."
    ]
   }
  ],
  "faq": [
   {
    "q": "Who should approve a rate lock extension?",
    "a": "The role named in the team approval matrix should approve it, with a documented backup for leave and after-hours deadlines."
   },
   {
    "q": "What belongs in the log entry?",
    "a": "Record the loan, the original and new expiration, the fee, the reason, the approver, the confirmation, and the borrower communication."
   },
   {
    "q": "Should a second extension replace the first row?",
    "a": "No. Add a new row linked to the first so the sequence and the cause remain visible."
   }
  ],
  "internalService": "/services/pipeline-records",
  "internalSibling": "/blog/write-a-borrower-status-update-that-survives-a-rate-change",
  "source": {
   "label": "Electronic Code of Federal Regulations, Regulation Z",
   "url": "https://www.ecfr.gov/current/title-12/chapter-X/part-1026"
  }
 },
 {
  "slug": "set-a-document-naming-convention-intake-can-follow",
  "title": "Set a document naming convention intake can follow",
  "description": "A workable mortgage document naming standard that improves search, reduces duplicate uploads, and survives staff changes.",
  "category": "Loan file systems",
  "publishedAt": "2026-11-08",
  "readTime": "7 min read",
  "thumbnail": "/thumbnails/november-08/set-a-document-naming-convention-intake-can-follow.webp",
  "sections": [
   {
    "heading": "Why names fail at intake",
    "paragraphs": [
     "Most document names are created by whoever uploads the file at the busiest moment. The result is a mix of scanner defaults, borrower initials, and dates that mean nothing later. Two files may hold the same statement under different names, while a third name describes the wrong document. The problem is not carelessness, it is the absence of a rule that fits the workflow.",
     "A naming convention is useful only if it is short enough to apply under pressure. Long standards with optional fields and clever codes are abandoned within a week. The convention should be a small set of required parts, a clear order, and an example beside the upload field. Everything else is optional."
    ]
   },
   {
    "heading": "Start from the document type list",
    "paragraphs": [
     "Build the type list from the documents the team actually receives. Common groups include income, assets, credit, property, title, insurance, and disclosures. Within each group, list the specific documents with a short label. A label should be recognizable to a new reviewer without a key.",
     "Avoid labels that are too broad to search, such as supporting document or miscellaneous. Also avoid labels that overlap, such as bank statement and asset statement. If two labels describe the same item, pick one and retire the other. A stable type list is the foundation for every other part of the name."
    ]
   },
   {
    "heading": "Put the stable identifiers first",
    "paragraphs": [
     "Start the file name with the loan number and the document type. Those two parts rarely change and make the file sortable in any system. Add the borrower last name or the statement period only after the stable parts. A name that starts with a date will scatter related documents across a folder.",
     "Use a separator that the system accepts and that people can type, such as a hyphen or an underscore. Pick one and use it everywhere. Do not mix spaces, parentheses, and slashes in the same folder. Consistency matters more than the specific character."
    ]
   },
   {
    "heading": "Handle multiple pages and versions",
    "paragraphs": [
     "A single document may arrive in several pages or several files. Add a page number only when the pages are separate files, and use a two-digit format so the sort is correct. If a corrected version arrives, add a version marker rather than overwriting the original. Record the version change in the document note so the reviewer knows why two files exist.",
     "Keep the original file until the replacement is verified and the reviewer has approved the change. A version marker such as v2 is enough for most teams. Record what changed in the document note. The name should reveal that two versions exist, not force someone to compare timestamps."
    ]
   },
   {
    "heading": "Reserve suffixes for status",
    "paragraphs": [
     "Do not put status words in the middle of the file name, because they change as the file moves. If status is needed, use a short suffix at the end, such as received or reviewed. Better still, keep status in a field and let the name describe the document only. A name that describes the document will still make sense when the file is audited months later.",
     "The same rule applies to borrower communication. A name should not say awaiting or pending, because the next reviewer may not know when that was true. Status belongs in the queue, where it can be updated without renaming the file. The name should stay stable through the file lifecycle."
    ]
   },
   {
    "heading": "Enforce the name at upload",
    "paragraphs": [
     "The best convention is one the system applies automatically. Configure the upload form to require the loan number and the document type, then generate the name. Where automation is not possible, add a short validation check that rejects a missing type. Give the intake team a way to flag a document that does not fit the form instead of forcing a type.",
     "Give intake a quick reference card with three examples and the most common mistake. Review new uploads in the first week and correct them early. A correction that happens at intake is cheap, while a cleanup after closing is expensive. Make the rule visible at the point of work."
    ]
   },
   {
    "heading": "Repair the backfile in batches",
    "paragraphs": [
     "A new convention does not fix the files already in the system. Choose a batch, such as all active files in one pipeline, and rename only after checking the document. Do not rename from a guess based on the old label. The repair should improve search without creating a false record.",
     "Track the batches and the date completed so the work is visible. Keep a mapping of old and new names for the review period. If a document cannot be identified, mark it unidentified rather than inventing a type. An honest gap is safer than a confident wrong label."
    ]
   },
   {
    "heading": "Audit names in a sample",
    "paragraphs": [
     "Each month, sample recent uploads and check that the name, document type, and content agree. Count the files that need a rename and the reason. A high error rate in one type suggests the label is unclear or the upload screen is confusing. Look at the actual upload screen with the team before deciding the label is the problem.",
     "Share the result with the intake team and the reviewer who uses the files. A naming problem is often a workflow problem in disguise. If people rename files because the upload screen is slow, fix the screen. If they rename because the type list is ambiguous, fix the list."
    ]
   },
   {
    "heading": "Keep the convention current",
    "paragraphs": [
     "Review the convention when a new document type, system, or investor requirement appears. Add the new type to the list and to the upload form in the same change. Retire labels that are no longer used instead of leaving them as traps. Tell the intake team what changed and why, because a silent update will be ignored.",
     "Name an owner for the standard and a backup who can update it. Record the date of the last review. A convention that lives only in a training deck will drift as the team changes. The owner should check a small sample after each update to confirm the form still works."
    ]
   }
  ],
  "faq": [
   {
    "q": "What should come first in a mortgage document file name?",
    "a": "Lead with the stable loan number and document type, then add the borrower or period detail that helps search."
   },
   {
    "q": "Should status words be part of the file name?",
    "a": "No. Keep status in the queue field so the file name stays stable as the document moves through review."
   },
   {
    "q": "How should old files be handled?",
    "a": "Rename them in reviewed batches with a mapping, and mark unidentifiable documents instead of guessing."
   }
  ],
  "internalService": "/services/loan-file-indexing",
  "internalSibling": "/blog/write-the-loan-file-indexing-intake-note-that-survives-a-later-review",
  "source": {
   "label": "Fannie Mae Selling Guide",
   "url": "https://selling-guide.fanniemae.com/"
  }
 },
 {
  "slug": "prepare-a-condo-project-questionnaire-before-the-appraisal-order",
  "title": "Prepare a condo project questionnaire before the appraisal order",
  "description": "How to gather condominium project evidence early so the appraisal, underwriting, and closing review do not stall on missing HOA answers.",
  "category": "Property review",
  "publishedAt": "2026-11-08",
  "readTime": "7 min read",
  "thumbnail": "/thumbnails/november-08/prepare-a-condo-project-questionnaire-before-the-appraisal-order.webp",
  "sections": [
   {
    "heading": "Why the questionnaire comes first",
    "paragraphs": [
     "A condominium file depends on the project as much as the unit. The lender needs to know the project budget, insurance, occupancy, litigation status, and ownership structure. Those answers often come from a questionnaire completed by the homeowners association or the management company. If the order goes out late, the appraisal and the project review can both wait.",
     "Starting the questionnaire before the appraisal order gives the project review a head start. It also tells the appraiser which project facts are already known. The goal is not to finish every answer before ordering, because some questions depend on the inspection. The goal is to identify the missing evidence while there is time to request it."
    ]
   },
   {
    "heading": "Identify the questions that block",
    "paragraphs": [
     "List the project questions that can stop a loan, such as litigation, reserve funding, insurance coverage, and the percentage of owner-occupied units. Add any investor-specific question that has caused a condition in the past. Mark each one with the evidence that answers it. Keep the blocking list short so the request package stays usable during a busy week.",
     "Separate questions that can be answered from documents from those that need a signed questionnaire. A budget and insurance certificate may be enough for some items, while others require the association response. Knowing the difference helps the processor request the right package in one message. Add the association contact and the expected response time to the same request."
    ]
   },
   {
    "heading": "Collect HOA and budget evidence",
    "paragraphs": [
     "Request the current budget, the reserve study if available, the master insurance policy, and the most recent financial statement. Ask for the contact information of the management company as well. Save each document with a clear type label so the reviewer can find it later. Note which documents came from the association and which came from the listing agent.",
     "Check that the documents are current and cover the project, not a different association. A budget from two years ago may not answer a current reserve question. Record the period covered and the date received. If a document is missing, note the request date and the follow-up owner."
    ]
   },
   {
    "heading": "Check the questionnaire against the program",
    "paragraphs": [
     "Read the completed questionnaire against the program checklist rather than skimming for a signature. Confirm that the project name and address match the file. Check that the occupancy and ownership figures add up. Look for an answer that conflicts with the budget or the insurance certificate.",
     "When an answer conflicts, request a clarification from the association instead of choosing the more convenient answer. A conflict between the questionnaire and the budget is a review item, not a detail to ignore. Record the conflict and the resolution so the underwriter sees both. Give the underwriter the conflicting documents rather than a summary that hides the difference."
    ]
   },
   {
    "heading": "Coordinate with the appraiser and lender",
    "paragraphs": [
     "Send the appraiser the project facts that are already verified, such as the project name, unit count, and any known project type. Do not send unverified assumptions. Ask the appraiser to flag any project issue found during the inspection. That early flag can save a second order.",
     "Tell the lender or investor contact when the questionnaire is outstanding and what has been requested. Ask whether a temporary review or an alternate document is allowed. Do not assume an exception will be granted. Record the answer and the date so the team knows what is confirmed."
    ]
   },
   {
    "heading": "Track open items with dates",
    "paragraphs": [
     "Put every open questionnaire item in the condition log with an owner, a request date, and a follow-up date. The log should distinguish an item waiting on the association from one waiting on the team. That distinction changes who acts next. Review the log in the daily stand-up when the closing date is within two weeks.",
     "Review the open items in the daily pipeline meeting when a closing date is near. Escalate an association that has not responded within the agreed window. Keep the escalation factual and include the dates requested. A calm, documented follow-up is more effective than a repeated general reminder."
    ]
   },
   {
    "heading": "Handle a project that fails",
    "paragraphs": [
     "A project can fail a review even when the unit and borrower are strong. If that happens, record the specific reason and the source. Tell the borrower what the lender has concluded without speculating about a workaround. Offer the approved next step, such as a different program, only when the lender confirms it.",
     "Do not keep ordering documents for a project that cannot proceed. That wastes the borrower money and the team time. Close the open requests with a note and keep the record. A clear stop is part of good service, not a failure of the process."
    ]
   },
   {
    "heading": "Keep a reusable project file",
    "paragraphs": [
     "Many condominium projects appear more than once. Keep a project file with the approved questionnaire, budget, insurance, and review date. Check the file before ordering a new questionnaire for the same project. Reuse the evidence only while it is current and unchanged.",
     "Record the date the project file was last verified and the source. If the association changed managers or the budget was updated, refresh the file. A stale project file can create a false sense of speed. The reviewer should see the age of the evidence before relying on it."
    ]
   },
   {
    "heading": "Review the process after each file",
    "paragraphs": [
     "After closing, note whether the questionnaire arrived before the appraisal order and whether it caused a delay. Ask the appraiser and the underwriter what would have helped. Use the answers to adjust the request package and the timing. Keep the notes with the project file so the next condo review starts with a known baseline.",
     "Track the share of condo files that needed a second questionnaire or a clarification. A high share suggests the form or the instructions are unclear. Fix the request template before adding more follow-up staff. The better fix is usually a clearer first ask.",
     "Keep the questionnaire evidence with the closing file even after the project is approved. A later review may ask why a specific answer was accepted, and the signed form and supporting budget will be the record. Do not rely on a summary written months after the fact. The evidence should show what the association said and when the team received it."
    ]
   }
  ],
  "faq": [
   {
    "q": "When should a condo questionnaire be ordered?",
    "a": "Order it as soon as the project is identified and before the appraisal if possible, so missing project evidence can be requested early."
   },
   {
    "q": "Can a budget replace the questionnaire?",
    "a": "Sometimes it can answer specific questions, but the program may still require the association response or a signed form."
   },
   {
    "q": "What if the questionnaire conflicts with the budget?",
    "a": "Record the conflict, request a clarification, and escalate it rather than selecting the more convenient answer."
   }
  ],
  "internalService": "/services/closing-preparation",
  "internalSibling": "/blog/keep-an-appraisal-follow-up-log-closing-can-use",
  "source": {
   "label": "Fannie Mae Selling Guide",
   "url": "https://selling-guide.fanniemae.com/"
  }
 },
 {
  "slug": "run-a-closing-package-preflight-in-thirty-minutes",
  "title": "Run a closing package preflight in thirty minutes",
  "description": "A focused preflight routine that catches closing package errors before the settlement table, with a clear exception list and handoff.",
  "category": "Closing preparation",
  "publishedAt": "2026-11-08",
  "readTime": "7 min read",
  "thumbnail": "/thumbnails/november-08/run-a-closing-package-preflight-in-thirty-minutes.webp",
  "sections": [
   {
    "heading": "Set the preflight clock",
    "paragraphs": [
     "A closing package preflight is a final check, not a second underwriting. Give it thirty minutes and protect that time on the calendar. Start with the settlement statement and the closing disclosure open beside the loan file. The clock keeps the review focused on the items that can stop funding.",
     "Choose a consistent point in the process, such as the morning before the scheduled closing. Reviewing too early catches fewer final changes, while reviewing after the signing leaves no time to fix an error. Put the preflight on the closing checklist with a named owner and a backup. A consistent slot also makes it easier to compare one closing cycle with the next."
    ]
   },
   {
    "heading": "Verify the settlement statement",
    "paragraphs": [
     "Check the borrower and property names, the loan amount, the sales price, and the closing date. Confirm that the seller and buyer match the contract. Read the cash to close figure and compare it with the closing disclosure. A single wrong digit can delay the signing.",
     "Look for fees that appear on one document and not the other. Check the credits and the payoff amounts as well. If the settlement agent sent a revised statement, confirm that the team is reviewing the current version. Note the version or timestamp in the preflight record."
    ]
   },
   {
    "heading": "Check the disclosure against the file",
    "paragraphs": [
     "Compare the closing disclosure with the loan estimate and any revised disclosures. Confirm that the loan terms, rate, payment, and closing costs match the final file. Check the tolerance categories rather than only the total. A total that looks close can still hide a fee in the wrong bucket.",
     "If the disclosure changed after delivery, confirm that the required waiting period has run. Do not let a closing date pressure the team into skipping a timing rule. Record the delivery date and the method. When in doubt, ask the disclosure owner before the signing."
    ]
   },
   {
    "heading": "Confirm signatures and dates",
    "paragraphs": [
     "Check that the documents requiring a borrower signature are present and assigned to the right signer. Confirm that the dates are consistent and that no document is dated before a required event. Look at the signature blocks for the correct legal names. Flag a missing signature block before the package leaves the office, not after the signing.",
     "For a remote closing, confirm the signer identity and the platform settings. For a wet signature, confirm the documents are the final version and the return instructions are clear. A missing initial or a blank date can require a re-sign and move the funding. Record the signing method in the preflight note so the closer knows what to expect."
    ]
   },
   {
    "heading": "Check the funding conditions",
    "paragraphs": [
     "Read the lender funding conditions and confirm each one has evidence. Common items include the insurance binder, the final title update, the borrower funds, and any required payoff. Mark each condition as met or open with a link to the evidence. An open condition without a named owner should stop the handoff until someone accepts it.",
     "Do not mark a condition met because someone said it was handled. The preflight should see the document or the confirmation. If a condition is open, name the owner and the time it will be resolved. A short open list is better than a false all clear."
    ]
   },
   {
    "heading": "Confirm recording and title items",
    "paragraphs": [
     "Check the title commitment and any pre-closing title update for the correct vesting, legal description, and exceptions. Confirm the payoff and release amounts. Ask the settlement agent to confirm the recording plan and the return of the final title policy. Record the name and time of the confirmation so a later question has a clear answer.",
     "For a purchase, check the deed and transfer details. For a refinance, check the existing lender payoff and the rescission timing if it applies. These items often sit outside the loan file, so the preflight should name the person who confirmed them. If the confirmation is verbal, ask for a short email that can be kept with the file."
    ]
   },
   {
    "heading": "Write the exceptions list",
    "paragraphs": [
     "End the preflight with a short list of exceptions, each with an owner, a needed action, and a deadline. Separate items that block signing from items that can be cured after closing. The separation helps the closing team decide whether to proceed. Send the list before the signing, even when the only items are minor, so the closer is not surprised.",
     "Send the list to the closer and the settlement contact in one message. Use plain language and attach the evidence. Do not bury a blocking item in a long paragraph. The reader should be able to act without opening five other systems."
    ]
   },
   {
    "heading": "Hand off to the closer",
    "paragraphs": [
     "Confirm that the closer has the final package, the exception list, and the contact for each open item. State clearly whether the file is clear to sign or held. A vague handoff invites a signing that should have waited. A written handoff also protects the closer if the file is later questioned.",
     "Ask the closer to confirm receipt and to flag any new issue before the signing. Record the confirmation in the file. If the closing is remote, confirm the platform and the signer access. The handoff is complete only when the other person has what they need."
    ]
   },
   {
    "heading": "Track preflight misses",
    "paragraphs": [
     "After closing, record any issue the preflight missed and the point where it was found. Group the misses by type, such as fee, signature, title, or funding. A pattern points to a checklist gap or a document that changes too late. Add the miss to a running list rather than discussing it only in the moment.",
     "Review the misses monthly with the closing and processing teams. Add one check at a time and confirm it catches the issue without lengthening the preflight beyond its limit. The goal is a reliable thirty minutes, not a perfect checklist that nobody uses. Remove a check that never catches anything so the important items keep their time.",
     "Keep the preflight record with the closing file, including the version of the package reviewed and the open items at the time. A short record is enough, but it should show who checked what and when. That record helps the next reviewer understand a decision that looked obvious in the moment. It also gives the team a fair basis for improving the checklist."
    ]
   }
  ],
  "faq": [
   {
    "q": "What is the first item to check in a closing preflight?",
    "a": "Start with the settlement statement and the closing disclosure, because they anchor the names, amounts, and closing date."
   },
   {
    "q": "Should the preflight repeat the underwriting review?",
    "a": "No. It should verify final documents, conditions, and consistency, while leaving credit judgment to underwriting."
   },
   {
    "q": "What belongs on the exceptions list?",
    "a": "Each open item needs an owner, an action, a deadline, and a clear note on whether it blocks signing."
   }
  ],
  "internalService": "/services/closing-preparation",
  "internalSibling": "/blog/cut-rework-at-the-closing-package-handoff",
  "source": {
   "label": "Consumer Financial Protection Bureau, Closing Disclosure Explainer",
   "url": "https://www.consumerfinance.gov/owning-a-home/closing-disclosure/"
  }
 },
 {
  "slug": "write-a-credit-inquiry-explanation-standard-for-borrowers",
  "title": "Write a credit inquiry explanation standard for borrowers",
  "description": "A consistent way to request and review borrower explanations for credit inquiries without coaching the borrower or guessing at intent.",
  "category": "Borrower communication",
  "publishedAt": "2026-11-08",
  "readTime": "7 min read",
  "thumbnail": "/thumbnails/november-08/write-a-credit-inquiry-explanation-standard-for-borrowers.webp",
  "sections": [
   {
    "heading": "Why inquiry letters vary",
    "paragraphs": [
     "Credit inquiry explanations arrive in many forms, from a one-line email to a handwritten note. Some borrowers describe a shopping window, while others list every application they can remember. The variation makes review slow and can hide a missing answer. A standard request and a standard review make the file easier to read.",
     "The standard should not put words in the borrower mouth. It should ask clear questions and leave the explanation to the borrower. The reviewer then checks whether the answer covers the inquiry and whether it is consistent with the credit report. That separation keeps the process honest."
    ]
   },
   {
    "heading": "Define what the letter must answer",
    "paragraphs": [
     "Ask the borrower to identify the creditor, the date, the amount if any, and the reason for the inquiry. Ask whether a new account was opened and, if so, where the statement will come from. Ask for the borrower signature and date. These items give the reviewer a complete picture without speculation.",
     "Add a short instruction that the borrower may write in their own words. A template that reads like a legal admission will produce guarded answers. A plain request for facts produces a usable explanation. Keep the tone neutral and the questions specific."
    ]
   },
   {
    "heading": "Collect the evidence first",
    "paragraphs": [
     "Before sending the request, pull the credit report and mark the inquiries that need an explanation. Note the creditor name as it appears on the report. If the report shows a related new account, request the statement at the same time. One request is better than three.",
     "Check whether the inquiry is already explained by another document, such as a mortgage preapproval or a dealer letter. Do not ask the borrower to repeat what the file already proves. The request should focus on the gaps that remain. That reduces borrower fatigue and speeds the review."
    ]
   },
   {
    "heading": "Write a plain explanation request",
    "paragraphs": [
     "Use a short message with a list of the inquiries and a place for the borrower to respond. Avoid jargon and avoid asking the borrower to confirm a conclusion. Say what the team will do with the answer and how quickly it is needed. Keep the message short enough to read on a phone and specific enough to answer without a call.",
     "Give the borrower a secure way to reply and a contact for questions. If the borrower calls, record the explanation in a file note and ask them to confirm it in writing. A verbal explanation can start the review, but the written record should carry the decision. Tell the borrower which channel the team will use for the follow-up so the reply is not missed."
    ]
   },
   {
    "heading": "Separate a shopping window from a new account",
    "paragraphs": [
     "Many mortgage inquiries fall within a shopping period and do not represent new debt. Explain that distinction in the request without telling the borrower what to say. Ask them to confirm whether they applied for credit or only requested a quote. Give an example of a quote request without suggesting what the borrower should say about their own file.",
     "If a new account appears, request the statement and the balance. A new monthly payment can change the debt-to-income calculation and the loan amount. The reviewer should route that finding to underwriting rather than deciding the impact alone. Record the date the finding was sent so the underwriting review can be traced."
    ]
   },
   {
    "heading": "Review before it reaches the borrower",
    "paragraphs": [
     "Have a second person read the request before it goes out. Check that the inquiry list matches the report and that the instructions are clear. A wrong creditor name or date creates a confusing reply and another round. Use the same reviewer for a small batch so the wording stays consistent across borrowers.",
     "Keep the request in the borrower communication record with the date sent. If the borrower replies with a partial answer, send one focused follow-up rather than a new full request. The follow-up should name the missing item and the reason it matters. Do not send a second full request when one missing date would complete the answer."
    ]
   },
   {
    "heading": "Track the outcome",
    "paragraphs": [
     "Record whether the explanation was accepted, whether more evidence was needed, and whether the file changed. Group the outcomes by inquiry type to see which requests cause the most rework. A pattern may point to a credit report issue or a dealer that sends unclear paperwork. Share the pattern with the credit reporting contact when the same creditor keeps appearing.",
     "If an inquiry remains unexplained, escalate to underwriting with the facts. Do not mark the condition clear because the borrower did not respond. An open item should stay open until the evidence or an approved decision exists. Note the escalation date so the condition does not sit without an owner."
    ]
   },
   {
    "heading": "Keep the standard current",
    "paragraphs": [
     "Review the request template when credit reporting or investor guidance changes. Ask the underwriters whether the current answers are sufficient. Remove questions that no longer affect the decision and add any new requirement. Ask two reviewers to apply the new wording to the same sample before the team adopts it.",
     "Store the template with the borrower communication guide and name an owner. Test it on a small sample after each change. A standard that is clear, short, and consistent is more likely to be followed during a busy week. A short standard that people use is better than a complete one they ignore."
    ]
   },
   {
    "heading": "Handle a joint borrower or co-borrower",
    "paragraphs": [
     "A joint file may produce inquiries for more than one person, and the explanation should identify which borrower each inquiry belongs to. Do not combine two borrowers into one undated paragraph, because the reviewer cannot tell who applied for what. Ask each borrower to respond for their own inquiries and keep the replies separate. Record which borrower owns each inquiry so a partial reply does not look complete.",
     "If one borrower does not respond, the file should show the gap rather than a combined statement that hides it. Record the request date and the follow-up for each person. The underwriter can then see which explanation is complete and which remains open. That clarity reduces another round of questions near closing."
    ]
   },
   {
    "heading": "Keep the record usable",
    "paragraphs": [
     "Store the request, the borrower reply, and the review note together under the inquiry category. Name the file by the borrower and the report date, not by the date the message arrived. A reviewer should find the full explanation without searching three folders. A small naming rule saves time on every later review.",
     "Review the template with the borrower communication team after a month of use. Ask whether borrowers understood the questions and whether the replies were complete. Adjust the wording if the same gap keeps appearing. The standard should improve with use, not sit unchanged after the first draft."
    ]
   }
  ],
  "faq": [
   {
    "q": "May a processor tell the borrower what to write?",
    "a": "No. The processor should ask clear factual questions and let the borrower provide the explanation in their own words."
   },
   {
    "q": "Does a shopping inquiry need a letter?",
    "a": "It may still need a short explanation, but the reviewer should distinguish a quote from a new credit application."
   },
   {
    "q": "What if the borrower does not respond?",
    "a": "Keep the condition open and escalate with the facts rather than clearing it without evidence."
   }
  ],
  "internalService": "/services/borrower-follow-up",
  "internalSibling": "/blog/set-a-response-standard-for-borrower-document-requests",
  "source": {
   "label": "Consumer Financial Protection Bureau",
   "url": "https://www.consumerfinance.gov/"
  }
 },
 {
  "slug": "reconcile-the-final-closing-disclosure-against-the-settlement-statement",
  "title": "Reconcile the final closing disclosure against the settlement statement",
  "description": "A line-by-line method for comparing the closing disclosure with the settlement statement and resolving differences before funding.",
  "category": "Closing preparation",
  "publishedAt": "2026-11-08",
  "readTime": "7 min read",
  "thumbnail": "/thumbnails/november-08/reconcile-the-final-closing-disclosure-against-the-settlement-statement.webp",
  "sections": [
   {
    "heading": "Why the two documents diverge",
    "paragraphs": [
     "The closing disclosure and the settlement statement are produced by different parties and serve different purposes. One is a consumer disclosure with specific timing rules, while the other is the settlement agent accounting of the transaction. Small differences in fee names, credits, and totals are common. A difference is not automatically an error, but it must be explained.",
     "The reconciliation exists to find the differences before funding and to record why each one exists. It should not be a hunt for a perfect match at any cost. The reviewer compares the economics and the disclosures, then routes any unresolved item to the right owner. Write the owner next to each open difference so the table becomes a work list."
    ]
   },
   {
    "heading": "Build a line-by-line crosswalk",
    "paragraphs": [
     "Create a simple table with the fee or credit name, the closing disclosure amount, the settlement statement amount, and the difference. Group the rows by category, such as loan costs, other costs, taxes, and credits. Use the same categories across files so the comparison is repeatable. Add a column for the source document so a reviewer can trace the number without searching.",
     "Do not rely on the totals alone, because offsetting differences can cancel out. A fee that moved between categories may leave the total unchanged while changing a tolerance result. The crosswalk should show the movement as well as the final number. Mark a movement between categories even when the total is unchanged."
    ]
   },
   {
    "heading": "Check totals and cash to close",
    "paragraphs": [
     "Confirm that the loan amount, sales price, and cash to close agree across the documents. Recompute the cash to close from the components rather than accepting the printed figure. Check the borrower credits, seller credits, and any payoff that affects the balance. If the recomputed figure differs, show the arithmetic to the settlement contact before the signing.",
     "If the cash to close differs, trace the difference to specific rows. A small difference may come from a per diem interest charge or a rounding rule. A large difference may point to a missing credit or a changed payoff. Record the cause before the borrower is asked to bring funds."
    ]
   },
   {
    "heading": "Reconcile fees and credits",
    "paragraphs": [
     "Compare each lender fee, title fee, recording charge, and transfer tax. Check the paid-by column and the borrower or seller allocation. A fee that appears in the wrong column changes who pays, even when the amount is correct. Check the seller side as well, because a buyer credit can be funded by a seller charge.",
     "Review the credits with the same care. An earnest money credit, a seller concession, or a lender credit should appear on both documents at the same amount. If a credit is missing, ask the settlement agent before closing. Do not adjust the closing disclosure without the disclosure owner."
    ]
   },
   {
    "heading": "Investigate a variance",
    "paragraphs": [
     "Start with the source document for each side of the variance. The settlement agent may have used a revised invoice, while the disclosure used an earlier quote. Ask for the invoice or the updated fee sheet. Compare the dates before concluding which figure is current.",
     "If the variance affects a tolerance category, route it to the compliance or disclosure owner. The reviewer can document the difference but should not decide the tolerance cure alone. Record the question and the answer so the reasoning is visible. Keep the compliance answer with the file so a later reviewer sees the same reasoning."
    ]
   },
   {
    "heading": "Document the resolution",
    "paragraphs": [
     "Write a short note for each resolved variance with the amount, the cause, and the action taken. Link the invoice or revised statement. If the closing disclosure was reissued, record the delivery date and the new waiting period if one applies. Use one note per variance rather than a single narrative at the end of the file.",
     "For an unresolved item, state who owns it and when a decision is expected. Do not leave a variance in the table without a status. The closing team should be able to read the table and know whether the file is clear. A table with an owner and a due date is easier to clear than a list of questions."
    ]
   },
   {
    "heading": "Coordinate with settlement",
    "paragraphs": [
     "Send the crosswalk to the settlement agent before the signing and ask them to confirm the current figures. Use one channel and keep the thread with the file. A phone call can resolve a question, but the confirmation should be written. Ask for the confirmation in writing even when the answer comes during a call.",
     "If the settlement agent sends a revised statement after the signing, reopen the reconciliation. Compare the signed figures with the revised ones and route any change through the proper disclosure process. Do not treat a post-signing correction as a routine bookkeeping item. Record whether the borrower needs to sign again before the file can fund."
    ]
   },
   {
    "heading": "Close the loop after funding",
    "paragraphs": [
     "After funding, check that the final recorded figures match the reconciled package. Note any difference and the reason. Review a sample of files each month to see whether the same fee or credit causes repeat variances. Note the variance even when it is small, because small repeats can reveal a template problem.",
     "Share the pattern with the settlement partners and the disclosure team. A recurring title fee variance may need a clearer fee sheet, while a recurring credit issue may need a closing checklist change. The reconciliation is most valuable when it changes the next file. Give the settlement partner a specific example when asking for a fee sheet change."
    ]
   },
   {
    "heading": "Handle a late change after signing",
    "paragraphs": [
     "A late change can arrive after the borrower has signed but before funding. Reopen the crosswalk and compare the new figure with the signed package. If the change affects the borrower costs or terms, route it to the disclosure owner before anyone describes it as final. Do not assume a small amount can be handled informally.",
     "Record the date the change was discovered and the person who reported it. Keep the earlier version of the statement so the sequence is visible. A late change that is handled with a clear record is easier to explain than one that appears only in a final total. The closing team should know whether the change holds funding."
    ]
   },
   {
    "heading": "Review the reconciliation with the team",
    "paragraphs": [
     "Share a monthly summary of the variances with the closing and processing teams. Show the fee type, the cause, and the average time to resolve. Do not list individual names unless the review is about training and the sample is large enough to be fair. The purpose is to improve the fee sheet and the checklist.",
     "Choose one recurring variance and test a fix in the next month. A title fee that changes after the initial quote may need a firmer estimate, while a credit that is missing may need a new field in the closing checklist. Check whether the fix reduced the variance before adding another change. Small, verified improvements last longer than a broad cleanup."
    ]
   }
  ],
  "faq": [
   {
    "q": "Must the closing disclosure match the settlement statement exactly?",
    "a": "No. The documents serve different purposes, but every difference should be explainable and documented before funding."
   },
   {
    "q": "Who resolves a tolerance-related variance?",
    "a": "The compliance or disclosure owner should decide, while the processor documents the difference and the source documents."
   },
   {
    "q": "When should the crosswalk be prepared?",
    "a": "Before the signing, using the current settlement statement and the final closing disclosure."
   }
  ],
  "internalService": "/services/closing-preparation",
  "internalSibling": "/blog/reconcile-a-changed-loan-estimate-against-the-file",
  "source": {
   "label": "Consumer Financial Protection Bureau, Closing Disclosure Explainer",
   "url": "https://www.consumerfinance.gov/owning-a-home/closing-disclosure/"
  }
 }
];
