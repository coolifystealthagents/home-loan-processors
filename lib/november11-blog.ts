import type { BlogPost } from './types';

export const november11BlogPosts: readonly BlogPost[] = [
 {
  "slug": "build-a-condition-clearing-checklist-that-names-the-evidence-owner",
  "title": "Build a condition-clearing checklist that names the evidence owner",
  "description": "A condition checklist that pairs every open item with its evidence owner, acceptance rule, review date, and the note the next reviewer needs.",
  "category": "Pipeline operations",
  "publishedAt": "2026-11-11",
  "readTime": "7 min read",
  "thumbnail": "/thumbnails/november-11/build-a-condition-clearing-checklist-that-names-the-evidence-owner.webp",
  "sections": [
   {
    "heading": "Why a condition without an owner stalls",
    "paragraphs": [
     "A condition can sit open for days even when everyone agrees it is required. The request names a document but not the person who must supply it or the person who must accept it. Without those two names, each shift assumes another shift is handling the item. The file looks active while nothing moves.",
     "A checklist fixes this by pairing every condition with an owner and a next action. The owner may be the borrower, a title company, or an internal reviewer. The next action must be concrete enough to schedule. A list that only repeats the condition name does not create movement."
    ]
   },
   {
    "heading": "Name the evidence and its acceptable source",
    "paragraphs": [
     "Write the exact evidence the condition requires, including the document type, the date range, and the pages needed. A bank statement request should say which accounts and which months count. A pay stub request should say whether the most recent stub is enough. Ambiguity turns a clear request into a guessing game.",
     "Name the acceptable source as well as the document. A screenshot may be readable but unacceptable when policy requires the original statement. A verbal confirmation may be useful but cannot replace a signed letter. Record the rule beside the request so every reviewer applies the same standard."
    ]
   },
   {
    "heading": "Record the decision the condition requires",
    "paragraphs": [
     "Some conditions need a document, while others need a decision. A large deposit may need a source explanation and an underwriter judgment. An appraisal repair may need a completion report and a reviewer sign-off. State the decision so the file does not close the item just because the paper arrived.",
     "Use a short decision field with three values: pending, accepted, or escalated. Add the person who made the call and the time. This prevents a document upload from being mistaken for a cleared condition. It also gives the next reviewer a clean starting point."
    ]
   },
   {
    "heading": "Set the review point before the deadline",
    "paragraphs": [
     "Every open condition should have a review date that sits before the closing date. The review date is when someone checks whether the evidence arrived and whether it meets the rule. Without that date, follow-up happens only when a closing coordinator asks. By then the remaining time may be too short for a correction.",
     "Place the review point at the start of the business day rather than the end. Morning review leaves time to send a request, answer a question, and receive a response. It also keeps the file from entering the closing week with an unexamined item. The schedule should be visible on the checklist, not hidden in a note."
    ]
   },
   {
    "heading": "Separate borrower items from internal items",
    "paragraphs": [
     "Borrower items depend on a person outside the company, while internal items depend on a team inside it. The two need different follow-up rhythms and different escalation paths. Mixing them in one queue hides which side is actually delaying the file. Split the list by owner before the daily review.",
     "For borrower items, record the request date, the channel used, and the next contact date. For internal items, record the queue entry time and the reviewer. A file waiting on an internal review should not receive another borrower reminder. That mistake adds noise and erodes trust."
    ]
   },
   {
    "heading": "Write the clearing note the next reviewer needs",
    "paragraphs": [
     "When a condition clears, write a note that says what arrived, what was checked, and which rule was applied. Name the document and the date it covers. State whether the evidence was accepted as-is or paired with another record. A note that says cleared is not enough for the next review.",
     "Include any limitation that affected the decision. A statement may be accepted even though one page is missing when a second source confirms the balance. Record that reasoning so the file does not look incomplete later. The note should let a new reviewer repeat the judgment without calling the original owner."
    ]
   },
   {
    "heading": "Audit cleared conditions for repeat requests",
    "paragraphs": [
     "Sample a group of cleared conditions each week and compare them with the original request. Look for items that were cleared and then requested again. A repeat request often means the first acceptance rule was unclear or the note was incomplete. The pattern is more useful than a single correction.",
     "Share the finding with the people who write requests and the people who review evidence. Ask which rule is hard to apply and which note is hard to read. Change one field or one instruction at a time. The checklist should become simpler as the team learns where confusion starts."
    ]
   },
   {
    "heading": "Keep the list usable on a busy day",
    "paragraphs": [
     "A long checklist becomes a document people open once and then ignore. Keep the active list to the conditions on files that are moving this week. Move cleared items to a history view that is easy to search but out of the way. The daily view should show only what needs a decision or a follow-up.",
     "Group the active items by owner so each person can see their own work without reading the full pipeline. Add a short count at the top of each group. The count gives the reviewer a quick sense of load and helps with staffing. A list that is easy to scan is more likely to be used during a busy morning."
    ]
   },
   {
    "heading": "Review the checklist after closing",
    "paragraphs": [
     "After a file closes, compare the conditions that were requested with the evidence that was actually needed. Look for requests that were withdrawn, duplicated, or solved by another document. Those patterns show where the checklist is too broad or too cautious. They also show where a request could be clearer next time.",
     "Record the lessons in the template, not only in the closed file. Change a definition, a review date, or a source rule when the same issue appears on several files. Keep a short note of what changed and when. The checklist should improve with each batch rather than grow without review."
    ]
   }
  ],
  "faq": [
   {
    "q": "Who owns a condition?",
    "a": "The accountable reviewer owns acceptance, while the named supplier owns delivery, and both names belong on the checklist."
   },
   {
    "q": "Should every condition have a review date?",
    "a": "Yes, because a date turns an open item into scheduled work and exposes items that are not moving."
   },
   {
    "q": "What belongs in a clearing note?",
    "a": "The evidence received, the rule applied, the decision, and any limitation that shaped it."
   }
  ],
  "internalService": "/services/condition-tracking-support",
  "internalSibling": "/blog/create-a-weekly-document-exception-report-for-loan-files",
  "source": {
   "label": "Consumer Financial Protection Bureau, Owning a Home",
   "url": "https://www.consumerfinance.gov/owning-a-home/"
  }
 },
 {
  "slug": "set-a-daily-intake-triage-for-new-mortgage-files",
  "title": "Set a daily intake triage for new mortgage files",
  "description": "A daily intake triage that sorts new files by next action, confirms contact details, and assigns a temporary owner before the first request goes out.",
  "category": "Pipeline operations",
  "publishedAt": "2026-11-11",
  "readTime": "7 min read",
  "thumbnail": "/thumbnails/november-11/set-a-daily-intake-triage-for-new-mortgage-files.webp",
  "sections": [
   {
    "heading": "Why intake needs a daily decision",
    "paragraphs": [
     "New files arrive through referrals, portals, and direct messages at different times of day. Without a daily decision, the newest file can receive attention while an older file waits for a missing fact. The imbalance is invisible until a closing date is set. A short triage gives every file a first owner and a first action.",
     "The triage is not a full review and should not become one. Its job is to classify the file, confirm that contact is possible, and identify the next required step. That decision takes only a few minutes when the intake record is complete. It prevents a file from sitting untouched while the team assumes someone else has it."
    ]
   },
   {
    "heading": "Sort files by the next required action",
    "paragraphs": [
     "Use a small set of action categories, such as contact, document request, pricing review, or disclosure. Place each new file in one category before the end of the day. The category should describe the next action, not the file stage. A stage label can stay the same for a week while the actual work has stopped.",
     "Review the categories in the same order every day. Contact issues come first because nothing else can proceed without a reachable borrower. Document requests come next because they have the longest response time. Pricing and disclosure items follow when they have a dated commitment. The order keeps the team from working on the easiest item instead of the most important one."
    ]
   },
   {
    "heading": "Confirm contact and authorization first",
    "paragraphs": [
     "Check the phone number, email, and mailing address against the application before anyone sends a request. Confirm that the borrower can receive portal invitations and that a co-borrower is authorized to discuss the file. A wrong email address can delay a disclosure without anyone noticing. The intake record should show which channel was verified and when.",
     "Ask whether the borrower prefers calls, texts, or email for routine updates. Record the preference in the file rather than in a personal note. Confirm any language or accessibility need that affects how the first request should be delivered. These details are cheaper to collect now than to repair after a missed deadline."
    ]
   },
   {
    "heading": "Flag missing application facts before ordering",
    "paragraphs": [
     "A file can reach intake without the property address, the loan purpose, or the name of every borrower. Those gaps affect which documents are needed and who must sign. Flag them before an order goes to a vendor or a request goes to the borrower. A missing fact found later can invalidate work that has already been completed.",
     "Use a short list of blocking facts and a separate list of facts that can wait. Blocking facts stop the next step, while waiting facts can be collected during the first conversation. Record which list applies so the team does not debate the same gap twice. The triage should produce a request for the missing item, not just a warning."
    ]
   },
   {
    "heading": "Assign a temporary owner to every new file",
    "paragraphs": [
     "Every file needs one person who is responsible for the next action, even when the file will later move to another team. The temporary owner is not necessarily the permanent processor. The role exists to make sure the first step happens and the handoff is clean. A file with no owner is a file that waits for a meeting.",
     "Record the owner and the time the file was assigned. When the file moves, the new owner should acknowledge the handoff in the record. If the file must wait for a vendor, the temporary owner still checks the promised date. Ownership is a chain of named people, not a status label."
    ]
   },
   {
    "heading": "Set the first borrower commitment",
    "paragraphs": [
     "Give the borrower one clear next step and one date for the next contact. The commitment may be a document upload, a return call, or a scheduled review. Keep the message short enough to act on without reading it twice. A vague promise to be in touch creates a follow-up problem instead of a plan.",
     "Put the commitment in the file and on the triage list. If the borrower misses it, the temporary owner follows up on the agreed date rather than waiting for a closing deadline. If the team misses it, the file should show why. The commitment is a two-way record, not a courtesy note."
    ]
   },
   {
    "heading": "Review the triage at the end of the day",
    "paragraphs": [
     "Close the day with a short review of files that received no category, no owner, or no next date. Those are the files most likely to become tomorrow's problem. Check that every new file has a contact result and a first action. The review should take minutes, not an hour.",
     "Look for patterns across the week as well as exceptions in a single day. A category that always overflows may need a different cutoff or an extra reviewer. A contact failure that repeats may point to a form or referral source problem. Fix the intake step before adding more follow-up capacity."
    ]
   },
   {
    "heading": "Handle files that arrive after the cutoff",
    "paragraphs": [
     "Some files arrive after the daily triage and cannot be reviewed until the next morning. Record the arrival time and give the file a temporary status so it does not look unassigned. A simple holding category prevents the file from being counted as complete. It also tells the next shift that the file still needs a first decision.",
     "If a file is urgent, use the documented exception path rather than skipping the triage. The exception should name the reason and the person who will handle it. Record the decision in the file so the next review can see why the order changed. Urgency is a reason to prioritize, not a reason to omit the first check."
    ]
   },
   {
    "heading": "Measure whether triage shortens the first response",
    "paragraphs": [
     "Track the time from file arrival to the first borrower contact and the first document request. Compare the weeks before and after the triage started. Use the same definitions and the same file types. A shorter first response is a useful sign, but it does not prove that the quality improved.",
     "Also track the share of files that reach the end of the first day with an owner and a next date. That measure shows whether the triage is actually completed. Review the result with the intake team and ask which steps are hard to finish. A process that looks good on paper can still fail at the end of a busy day."
    ]
   }
  ],
  "faq": [
   {
    "q": "How long should intake triage take?",
    "a": "A few minutes per file is enough when the record is complete, because the goal is a next action and an owner rather than a full review."
   },
   {
    "q": "What if the borrower cannot be reached?",
    "a": "Record the attempt, use the approved channels, and escalate after the agreed number of tries instead of leaving the file unassigned."
   },
   {
    "q": "Should triage happen once or twice a day?",
    "a": "A morning pass and an end-of-day pass cover most intake volume without turning the check into a continuous meeting."
   }
  ],
  "internalService": "/services/pipeline-records",
  "internalSibling": "/blog/write-a-handoff-note-for-a-file-moving-to-underwriting",
  "source": {
   "label": "Fannie Mae, Selling Guide",
   "url": "https://selling-guide.fanniemae.com/"
  }
 },
 {
  "slug": "write-a-handoff-note-for-a-file-moving-to-underwriting",
  "title": "Write a handoff note for a file moving to underwriting",
  "description": "A handoff note structure that gives the underwriter the file story, open questions, evidence checked, and decision rights in one readable place.",
  "category": "Pipeline operations",
  "publishedAt": "2026-11-11",
  "readTime": "7 min read",
  "thumbnail": "/thumbnails/november-11/write-a-handoff-note-for-a-file-moving-to-underwriting.webp",
  "sections": [
   {
    "heading": "Why the handoff note decides the review",
    "paragraphs": [
     "A file can arrive in underwriting with every document present and still be hard to review. The missing piece is often the story of what changed and what remains uncertain. A handoff note gives the reviewer a starting point that the loan file alone cannot provide. It also shows which questions the processor already tried to resolve.",
     "The note is not a second application or a summary of every document. It should be short enough to read in a few minutes and specific enough to guide the first review. A good note reduces the number of calls back to the processor. A poor note shifts the same work to the underwriter without the context."
    ]
   },
   {
    "heading": "State the file story in one paragraph",
    "paragraphs": [
     "Describe the borrower, the property, the loan purpose, and the reason the file is moving now. Mention any change since application that affects the review, such as a new address or a changed income source. State the requested program and the key terms in plain language. The reviewer should understand the file before opening the first document.",
     "Keep the paragraph factual and avoid conclusions that belong to underwriting. Say that a deposit was explained with a letter, not that the explanation is acceptable. Say that an appraisal was received, not that the value supports the loan. The note should present the file, not pre-decide it."
    ]
   },
   {
    "heading": "List the open questions with their evidence",
    "paragraphs": [
     "Name each open question and the evidence attached to it. A question about a large deposit should point to the statement, the explanation letter, and any supporting transfer record. A question about a gift should point to the gift letter and the donor statement. A list without pointers forces the reviewer to search.",
     "Rank the questions by whether they block the decision. A blocking question should appear first with the date the answer is expected. A non-blocking question can sit in a second list. If a question has no evidence yet, say so plainly. That is more useful than leaving the reviewer to discover the gap."
    ]
   },
   {
    "heading": "Record what was checked and what was not",
    "paragraphs": [
     "State the checks the processor completed, such as identity, income calculation, asset verification, and title review. Then state the checks that remain outside the processor role. This prevents an underwriter from assuming that silence means completion. It also protects the processor when a later reviewer asks why a step was skipped.",
     "Use the same check names as the file checklist so the note and the record agree. Add the date of each check and the person who completed it. If a check was done on a sample rather than the full file, say so. A clear boundary is more useful than a broad claim that everything was reviewed."
    ]
   },
   {
    "heading": "Name the decision rights on both sides",
    "paragraphs": [
     "Explain which decisions the processor can make and which must return to underwriting or the loan officer. A condition acceptance may sit with the processor under a written rule, while a program exception sits with the underwriter. State the rule that applies to each open item. This keeps the handoff from turning into an implied approval.",
     "Name a contact for each side and the expected response time. If the underwriter needs a missing item, the note should say who will request it. If the processor needs a decision, the note should say who will provide it. Decision rights are part of the handoff, not an administrative detail."
    ]
   },
   {
    "heading": "Attach an index of the key documents",
    "paragraphs": [
     "List the documents that matter most to the first review, with their file names and dates. Group them by category, such as income, assets, property, and disclosures. Note any document that is a replacement or a re-upload. An index saves the reviewer from opening a long folder in the wrong order.",
     "Do not duplicate the full document log in the note. The index is a map to the evidence, not a copy of it. Mark any item that is unusually long or that needs a specific page. The reviewer can then spend time on judgment instead of navigation. Update the index when a document changes before review."
    ]
   },
   {
    "heading": "Test the note with the receiving reviewer",
    "paragraphs": [
     "Ask the underwriter to read the note before opening the file and say what remains unclear. Their questions reveal missing context that the processor no longer notices. Repeat the test with a second reviewer after the note changes. A note that works for one person may rely on shared history that a new reviewer does not have.",
     "Track the calls and messages that come back after the handoff. A repeated question is a sign that the note or the file index needs a fix. Update the template rather than writing a longer note for every file. The goal is a consistent handoff that a busy reviewer can use without a conversation."
    ]
   },
   {
    "heading": "Keep the note current when the file changes",
    "paragraphs": [
     "A handoff note can become stale when a document arrives or a condition clears before review. Add a short revision line with the date and the change. Do not rewrite the whole note for every update. The reviewer should be able to see what changed without comparing two long documents.",
     "If the change affects an open question, update that question and its evidence pointer. If it resolves the question, mark it resolved and add the date. A stale note is worse than a short note because it sends the reviewer to the wrong place. Keep the revision history beside the note in the file."
    ]
   },
   {
    "heading": "Use the note as a training record",
    "paragraphs": [
     "A collection of handoff notes shows new processors what a complete file story looks like. Use approved notes as examples in training, with borrower details removed. Point out the sections that save the reviewer the most time. The examples should show judgment about what to include, not just a filled template.",
     "Ask the underwriters which notes they found easiest to use and why. Their answers can become a short guide for the team. Update the examples when the template changes. A training record built from real work is more useful than a generic checklist."
    ]
   }
  ],
  "faq": [
   {
    "q": "How long should a handoff note be?",
    "a": "One short page is usually enough when it states the story, the open questions, the checks completed, and the decision rights."
   },
   {
    "q": "Should the note repeat the document log?",
    "a": "No, it should point to the key documents and let the full log remain in the file."
   },
   {
    "q": "Who owns the note?",
    "a": "The processor sending the file owns the note, and the receiving reviewer confirms that it is usable."
   }
  ],
  "internalService": "/services/borrower-document-support",
  "internalSibling": "/blog/build-a-condition-clearing-checklist-that-names-the-evidence-owner",
  "source": {
   "label": "Freddie Mac, Single-Family Seller Servicer Guide",
   "url": "https://guide.freddiemac.com/"
  }
 },
 {
  "slug": "create-a-rate-lock-expiration-watchlist-for-the-pipeline",
  "title": "Create a rate lock expiration watchlist for the pipeline",
  "description": "A rate lock expiration watchlist that captures terms, counts working days, and gives every file a decision owner before the lock runs out.",
  "category": "Rate lock",
  "publishedAt": "2026-11-11",
  "readTime": "7 min read",
  "thumbnail": "/thumbnails/november-11/create-a-rate-lock-expiration-watchlist-for-the-pipeline.webp",
  "sections": [
   {
    "heading": "Why a lock date needs its own watchlist",
    "paragraphs": [
     "A lock expiration can arrive while the file still looks healthy in the pipeline report. The report tracks stages, not the number of days left before a pricing commitment ends. A file waiting on a routine condition can cross the lock date without anyone noticing. The result is an extension request or a relock at a different price.",
     "A watchlist makes the date visible every day and puts a name beside the decision. It does not replace the pipeline report or the lock desk system. It gives the team a short list of files that need attention before the expiration becomes urgent. The list should be small enough to review in one pass."
    ]
   },
   {
    "heading": "Capture the lock terms in one row",
    "paragraphs": [
     "Record the loan number, borrower, lock date, expiration date, note rate, price, and lock period. Add the product and the investor because a relock may depend on both. Note whether the lock is a standard lock, a float-down, or an extension. The row should answer the question before anyone opens the loan file.",
     "Record the source of the expiration date as well as the date itself. A date copied from an email may differ from the lock confirmation. If the two disagree, the confirmation should control and the difference should be investigated. The watchlist is only useful when its dates are trusted."
    ]
   },
   {
    "heading": "Count working days instead of calendar days",
    "paragraphs": [
     "A lock that expires on a Monday gives less usable time than a lock that expires on a Friday. Count the business days between today and the expiration, allowing for weekends and known holidays. Show the count beside the date so the reviewer can see urgency at a glance. A calendar-day count can make a short window look comfortable.",
     "Set review thresholds that match the team process, such as ten days, five days, and two days. The threshold is not a promise that every file needs an extension. It is a signal to confirm the closing schedule and the remaining conditions. Different investors may need different thresholds, so label the rule in the watchlist."
    ]
   },
   {
    "heading": "Mark the files that need a decision",
    "paragraphs": [
     "A file needs a decision when the closing date, the conditions, or the borrower response makes the expiration uncertain. Mark it with a reason rather than a color alone. A file waiting on an appraisal is different from a file waiting on a borrower signature. The reason tells the owner which conversation to have first.",
     "Separate files that are on track from files that need a new plan. An on-track file still needs a confirmation date, but it does not need an extension discussion. A file that needs a new plan should move to the top of the daily review. The watchlist should show both groups without mixing them."
    ]
   },
   {
    "heading": "Separate extension from renegotiation",
    "paragraphs": [
     "An extension keeps the existing terms and usually adds a fee, while a renegotiation changes the price or the product. The two decisions have different owners and different borrower conversations. Label the request so the lock desk does not have to infer the intent. A vague request can produce the wrong confirmation.",
     "Record the cost and the new expiration for every option presented. The borrower should see the trade-off in writing before the team acts. The loan officer or another authorized person should own the pricing conversation. The watchlist should show the decision status, not just the request."
    ]
   },
   {
    "heading": "Assign the owner of each next step",
    "paragraphs": [
     "Every watchlist row needs one owner for the next action, whether that action is a condition follow-up, a closing date confirmation, or an extension request. The owner may change as the file moves, so record the handoff time. A row with no owner is a row that depends on memory. The daily review should begin with those rows.",
     "Name a backup for the owner so the list does not stall during time off. The backup should be able to read the row and take the next step without a long explanation. Keep the owner field current rather than assigning it once at lock. Ownership is part of the work, not a label added for the report."
    ]
   },
   {
    "heading": "Review the list at the same time daily",
    "paragraphs": [
     "Choose a time when the people who can act are available, such as the start of the business day. Review the shortest windows first, then the files with a changed closing date. Confirm that every action from the prior review was completed or has a new date. The meeting should produce decisions, not a readout of the list.",
     "Review the week as a whole to spot a pattern in extensions or relocks. A cluster may point to an intake delay, a vendor problem, or an unrealistic closing promise. Share the pattern with the people who set the dates. The watchlist is a control, but its larger value is the conversation it starts."
    ]
   },
   {
    "heading": "Keep the watchlist data clean",
    "paragraphs": [
     "A watchlist is only as good as the dates and terms behind it. Check a sample of rows against the lock confirmation each week. Look for missing expiration dates, outdated terms, and rows that should have been closed. Clean data prevents a false sense of control.",
     "Assign one person to own the list structure and the field definitions. That person can approve a new column or a changed threshold. Too many columns make the daily review slow and the data harder to maintain. Keep the list narrow enough to trust."
    ]
   },
   {
    "heading": "Learn from the extensions that were avoidable",
    "paragraphs": [
     "Not every extension is a process failure, but some are. Review a sample of extensions and ask whether an earlier document request or a faster review could have prevented them. Record the answer in a short reason list. The pattern is more useful than a single case.",
     "Share the finding with the team that sets closing dates and the team that clears conditions. A date that is set before the file is ready creates pressure that shows up at the lock desk. Fix the earlier promise before adding more extension capacity. The watchlist should reduce avoidable work, not just document it."
    ]
   }
  ],
  "faq": [
   {
    "q": "Should the watchlist include every locked file?",
    "a": "It can start with every locked file, but the daily review should focus on files inside the shortest thresholds."
   },
   {
    "q": "Which date controls when the confirmation and the email differ?",
    "a": "The written lock confirmation should control, and the difference should be investigated rather than ignored."
   },
   {
    "q": "Who should decide on an extension?",
    "a": "The person with pricing authority under the team policy should decide, while the processor keeps the watchlist and the file record current."
   }
  ],
  "internalService": "/services/pipeline-records",
  "internalSibling": "/blog/design-a-vendor-order-tracker-for-title-and-appraisal-work",
  "source": {
   "label": "Consumer Financial Protection Bureau, What is a rate lock",
   "url": "https://www.consumerfinance.gov/ask-cfpb/what-is-a-rate-lock-en-143/"
  }
 },
 {
  "slug": "design-a-vendor-order-tracker-for-title-and-appraisal-work",
  "title": "Design a vendor order tracker for title and appraisal work",
  "description": "A vendor order tracker that records the deliverable, the promised date, the last contact, and the escalation path for title and appraisal work.",
  "category": "Vendor coordination",
  "publishedAt": "2026-11-11",
  "readTime": "7 min read",
  "thumbnail": "/thumbnails/november-11/design-a-vendor-order-tracker-for-title-and-appraisal-work.webp",
  "sections": [
   {
    "heading": "Why vendor orders disappear between systems",
    "paragraphs": [
     "A title or appraisal order often leaves the loan file and enters a vendor portal with its own status. The two systems update on different schedules, so the file can show an order as sent while the vendor shows it as incomplete. The processor then spends time reconciling instead of reviewing. A tracker gives both sides one shared view.",
     "The tracker is not a replacement for the vendor portal or the loan file. It is a short record of what was ordered, what was promised, and what happened last. That record makes a delay visible before it becomes a closing problem. It also shows whether the file owner or the vendor needs to act next."
    ]
   },
   {
    "heading": "Record the order and the promised date",
    "paragraphs": [
     "Capture the vendor, the order type, the loan number, and the date the order was placed. Add the date the vendor acknowledged the order and the promised delivery date. State whether the promised date came from the vendor or from the team. A date the team invented is a target, not a commitment.",
     "Record the contact who accepted the order and the reference number. If the vendor changes the date, keep the original date and add the revision with its reason. This history shows whether the delay is new or has been building. The tracker should not overwrite the promise without a trace."
    ]
   },
   {
    "heading": "Name the deliverable and the acceptance rule",
    "paragraphs": [
     "A title commitment, an appraisal report, and a completion certificate are different deliverables with different review rules. Name the exact item expected and the person who will accept it. Add the fields or pages that must be present for acceptance. A deliverable label without an acceptance rule invites a second round of questions.",
     "Record the version and the date of the deliverable when it arrives. If the vendor sends a revised report, keep the prior version and note what changed. State whether the revision requires a new review or only a confirmation. The tracker should show the file owner what arrived and what remains open."
    ]
   },
   {
    "heading": "Track the last contact and the next follow-up",
    "paragraphs": [
     "Every open order needs a last-contact date, a channel, and a next follow-up date. A note that says the vendor was contacted is not enough. Record who was contacted and what they said. Then set the next date rather than leaving follow-up to memory.",
     "Use a consistent follow-up interval that matches the order type and the closing timeline. An appraisal may need a longer interval than a title update. If the next date passes without a response, the order should appear on an exception list. The tracker should make silence visible."
    ]
   },
   {
    "heading": "Separate a delay from a missing requirement",
    "paragraphs": [
     "A vendor may be late because of workload, or because the order is missing a document or an access instruction. Those two causes need different responses. Check the order for missing fields before escalating the vendor. A quick review can prevent an unnecessary conflict.",
     "When the requirement is missing, record what was sent and when. When the vendor is late, record the promised date and the last contact. Do not merge the two reasons into a general delay code. The distinction tells the team whether to fix the order or change the follow-up."
    ]
   },
   {
    "heading": "Escalate through the named contact path",
    "paragraphs": [
     "Name a first contact, a backup, and a manager for each vendor before an order is late. An escalation should follow that path rather than starting with a public complaint. Include the loan number, the order reference, the promised date, and the impact on the closing. A clear message gets a faster response than a general request for an update.",
     "Record the escalation date and the response. If the response changes the promised date, update the tracker and notify the file owner. If the response does not resolve the issue, move to the next contact in the path. Escalation is a sequence, not a single email."
    ]
   },
   {
    "heading": "Review vendor aging with the file owner",
    "paragraphs": [
     "Review open orders by age and closing date at a fixed weekly time. Invite the file owners who can act on the results. Look at orders that have missed a promised date and orders that have had no contact. The review should produce a next action for each item, not just a count.",
     "Compare the aging with the prior week and note any vendor change. A new contact or a new system can shift the pattern. Share the finding with the vendor relationship owner as well as the processors. The goal is a reliable order process, not a longer exception list."
    ]
   },
   {
    "heading": "Keep the tracker current when the order changes",
    "paragraphs": [
     "Orders change when a property detail is corrected, an access instruction is added, or a vendor is replaced. Record the change date and the reason in the tracker. Do not overwrite the original order date. The history shows whether a delay started before or after the change.",
     "Notify the file owner when a change affects the promised date or the deliverable. A change that stays in the vendor portal is invisible to the closing team. Add a short note to the loan file so the next reviewer sees the same information. The tracker and the file should tell one story."
    ]
   },
   {
    "heading": "Use the tracker in the closing handoff",
    "paragraphs": [
     "Before a file moves to closing, confirm that every vendor order is received and accepted. List the open orders with their promised dates and owners. A closing checklist that assumes the title work is finished can miss a revised commitment. The tracker gives the closing team a clear status.",
     "Record any vendor item that will arrive after closing and name the person who will follow it. Do not mark an order complete just because the closing date arrived. A clear handoff protects the file and the borrower from a surprise after signing. Add the expected date and the owner to the closing handoff note."
    ]
   }
  ],
  "faq": [
   {
    "q": "What should the tracker record first?",
    "a": "The vendor, order type, loan number, order date, promised date, and the person who will accept the deliverable."
   },
   {
    "q": "How often should open orders be reviewed?",
    "a": "A short daily check for due items and a weekly aging review for the full list keeps both urgent and slow orders visible."
   },
   {
    "q": "When should an order be escalated?",
    "a": "Escalate when the promised date passes or the closing timeline is at risk, using the named contact path and a factual summary."
   }
  ],
  "internalService": "/services/pipeline-records",
  "internalSibling": "/blog/build-a-closing-disclosure-review-checklist-for-processors",
  "source": {
   "label": "Fannie Mae, Selling Guide",
   "url": "https://selling-guide.fanniemae.com/"
  }
 },
 {
  "slug": "build-a-closing-disclosure-review-checklist-for-processors",
  "title": "Build a closing disclosure review checklist for processors",
  "description": "A closing disclosure review checklist that compares terms, fees, borrower details, and cash to close against the approval and settlement record.",
  "category": "Closing preparation",
  "publishedAt": "2026-11-11",
  "readTime": "7 min read",
  "thumbnail": "/thumbnails/november-11/build-a-closing-disclosure-review-checklist-for-processors.webp",
  "sections": [
   {
    "heading": "Why the closing disclosure needs a structured read",
    "paragraphs": [
     "The closing disclosure is long, detailed, and easy to skim in the wrong order. A reviewer who starts with the fees may miss a changed loan term on the first page. A reviewer who starts with the signature page may miss a name difference that will require a reissue. A checklist creates a repeatable order for the read.",
     "The review is not a second underwriting decision. It confirms that the document matches the approved terms and the settlement record. It also catches questions that need an owner before signing. A consistent checklist makes those questions visible early enough to answer."
    ]
   },
   {
    "heading": "Compare the disclosed terms with the approval",
    "paragraphs": [
     "Check the loan amount, interest rate, monthly principal and interest, term, and product against the approval and the lock confirmation. Confirm that the disclosed prepayment penalty, balloon feature, and negative amortization status match the program. A difference in any of these fields can change the borrower obligation. Record the source used for each comparison.",
     "Check the projected payments and the escrow estimate when an escrow account is part of the loan. Confirm that the escrow payment matches the most recent analysis. If the numbers differ, record the reason before deciding whether the disclosure is correct. A term mismatch and an escrow estimate are different problems with different owners."
    ]
   },
   {
    "heading": "Check fees against the settlement statement",
    "paragraphs": [
     "Compare the closing costs on the disclosure with the settlement statement and the fee worksheet. Match the lender fees, title fees, recording charges, and transfer taxes by line. A fee that appears in one document and not the other needs an explanation. Do not assume a small difference is harmless.",
     "Check the tolerance category for each fee when the loan is subject to tolerance rules. A changed fee may be allowed within a category or may require a cure. Record the category and the source document beside the amount. The reviewer should be able to explain the difference without rebuilding the comparison."
    ]
   },
   {
    "heading": "Verify borrower names and property details",
    "paragraphs": [
     "Confirm the spelling of every borrower name and the order in which the names appear. Check the property address, unit number, county, and legal description against the title commitment and the appraisal. A small address difference can create a recording problem. A name difference can require a new disclosure before signing.",
     "Check the occupancy statement and the vesting language against the approval and the title instructions. Confirm that the seller and lender names are correct. Review the loan purpose and the disbursement date. These fields are easy to skip because they look administrative, yet they can stop a closing."
    ]
   },
   {
    "heading": "Confirm the cash to close explanation",
    "paragraphs": [
     "Read the cash to close table and compare it with the borrower ledger and the settlement statement. Confirm that the loan amount, closing costs, deposits, and credits produce the stated total. Check that the change from the loan estimate is explained where the form requires it. A total that does not reconcile should be resolved before signing.",
     "Ask the borrower to confirm the source of any large deposit or credit shown on the statement. Record the confirmation and the date. If a credit is missing, do not replace it with a verbal promise. The cash to close section is a reconciliation, not a marketing summary."
    ]
   },
   {
    "heading": "Record every question with a page reference",
    "paragraphs": [
     "Write each question with the document, the page, and the value in question. A note that says fees look high cannot be resolved without a line reference. Include the source that should answer the question, such as the approval, the title commitment, or the settlement statement. The note should be usable by someone who was not at the review.",
     "Assign an owner and a due date to each question. Mark whether the answer changes the disclosure, the closing date, or only the file note. Keep resolved and open questions in separate lists so the status is clear. A clean question log is the evidence that the review happened."
    ]
   },
   {
    "heading": "Set the review deadline before signing",
    "paragraphs": [
     "Schedule the review early enough to reissue the disclosure if a term or fee changes. A review completed on the morning of signing leaves no room for a correction. Set the deadline from the closing date and the reissue requirement, not from when the document arrives. Publish the deadline to the team.",
     "Confirm who will deliver the corrected document and who will speak with the borrower about the change. Record the delivery time and the acknowledgement. If the deadline cannot be met, escalate rather than skipping the check. The review exists to protect the closing, not to create a last-minute bottleneck."
    ]
   },
   {
    "heading": "Handle a late or revised disclosure",
    "paragraphs": [
     "A revised disclosure needs the same review as the original, with extra attention to what changed. Compare the new version with the prior one and list the changed fields. Confirm that the change is reflected in the settlement record and the borrower conversation. A quick read of only the changed page can miss a dependent number.",
     "Record the delivery date and the method used to provide the revised document. Confirm that the borrower received it within the required timing for the change. If the timing is tight, escalate before signing rather than after. The review should protect the closing date without skipping a required step."
    ]
   },
   {
    "heading": "Keep the checklist current across forms",
    "paragraphs": [
     "Disclosure forms and fee rules change, and a checklist can become outdated without anyone noticing. Review the checklist when a form or rule changes and update the field names and page references. Remove steps that no longer apply. A checklist full of old labels slows the review and invites mistakes.",
     "Ask the reviewers which steps they skip and why. A skipped step may be unnecessary, or it may be a gap in training. Test any change on a small group before rolling it out. The checklist should be short, current, and tied to the actual form."
    ]
   }
  ],
  "faq": [
   {
    "q": "What is the first thing to check?",
    "a": "Start with the loan terms against the approval and lock confirmation, because a term error is more serious than a fee formatting issue."
   },
   {
    "q": "Should every fee difference be escalated?",
    "a": "Record every difference, then escalate the ones that affect tolerance, the cash to close, or the borrower obligation."
   },
   {
    "q": "When should the review be completed?",
    "a": "Early enough to reissue and re-deliver the disclosure if a required change is found before signing."
   }
  ],
  "internalService": "/services/closing-preparation",
  "internalSibling": "/blog/write-a-borrower-escalation-summary-for-a-stalled-loan-file",
  "source": {
   "label": "Consumer Financial Protection Bureau, Closing disclosure",
   "url": "https://www.consumerfinance.gov/owning-a-home/closing-disclosure/"
  }
 },
 {
  "slug": "write-a-borrower-escalation-summary-for-a-stalled-loan-file",
  "title": "Write a borrower escalation summary for a stalled loan file",
  "description": "A borrower escalation summary that states the status, names the blocking item and owner, and gives one next step with a real date.",
  "category": "Borrower communication",
  "publishedAt": "2026-11-11",
  "readTime": "7 min read",
  "thumbnail": "/thumbnails/november-11/write-a-borrower-escalation-summary-for-a-stalled-loan-file.webp",
  "sections": [
   {
    "heading": "When a borrower update becomes an escalation",
    "paragraphs": [
     "A routine update becomes an escalation when the file has missed a date, a decision is overdue, or the borrower cannot see a path forward. At that point a short summary is more useful than another status message. The summary should explain what changed and who is acting next. It should also give the borrower a realistic expectation.",
     "Escalation does not mean blame. It means the normal process has not resolved the issue and a named owner needs to take over. The summary should make that handoff visible without exposing internal disputes. A calm, factual note protects the relationship and gives the next person a clean starting point."
    ]
   },
   {
    "heading": "State the current status without speculation",
    "paragraphs": [
     "Begin with the file stage, the last completed step, and the date of that step. Use the same status language the borrower has already seen. Avoid guesses about when a review will finish or what an underwriter will decide. If the date is unknown, say which date will be confirmed and by whom.",
     "Separate confirmed facts from pending questions. A confirmed fact might be that the appraisal was received on a specific date. A pending question might be whether a repair needs a reinspection. The borrower should be able to tell the difference without reading between the lines."
    ]
   },
   {
    "heading": "Explain the blocking item and its owner",
    "paragraphs": [
     "Name the item that is holding the file and the party responsible for the next action. The party may be the borrower, a vendor, or an internal reviewer. Explain why the item matters in one sentence. A borrower who understands the reason is more likely to provide the right response.",
     "Avoid naming an individual who has not agreed to speak with the borrower. Name the role or the team instead. If the owner is internal, say when the borrower should expect an update. If the owner is a vendor, explain what the team is doing to move the order. The summary should show ownership without exposing the internal queue."
    ]
   },
   {
    "heading": "Give one next step and one date",
    "paragraphs": [
     "End with one action the borrower can take and one date for the next update. If the borrower has no action, say that clearly and give the internal next step instead. Multiple requests in an escalation note create confusion. One clear step is easier to complete and easier to track.",
     "Choose a date the team can keep. A short date that slips again damages trust more than a realistic date that holds. Record the date in the file and on the follow-up list. If the date changes, send a new summary rather than letting the old one expire quietly."
    ]
   },
   {
    "heading": "Separate what the borrower can do from what the team will do",
    "paragraphs": [
     "List the borrower actions in plain language, such as uploading a signed letter or confirming a deposit source. List the team actions separately, such as ordering a document or requesting a review. This prevents the borrower from feeling responsible for work the team owns. It also prevents the team from waiting on an action nobody requested.",
     "Use a short table or two short paragraphs rather than a long narrative. Keep the language free of internal codes and abbreviations. If a document is needed, name the exact document and the acceptable format. The borrower should not have to ask what the request means."
    ]
   },
   {
    "heading": "Record the escalation in the file",
    "paragraphs": [
     "Add the summary date, the reason for escalation, the named owner, and the next update date to the loan file. Attach the message that was sent so the record matches what the borrower received. Note any response and the action taken. The file should tell the same story as the borrower conversation.",
     "Flag the file for the next review so the escalation does not disappear after the message. If the issue is resolved, record the resolution and close the flag. If it remains open, update the summary rather than starting a new thread. A clear history helps the next owner without a long handover call."
    ]
   },
   {
    "heading": "Review the summary before it is sent",
    "paragraphs": [
     "Check the facts against the file, especially dates, names, and the requested action. Ask a second person to read the note when the file is sensitive or the borrower is frustrated. Look for blame, speculation, and promises the team cannot keep. A short review can prevent a difficult call.",
     "Confirm the tone matches the relationship and the channel. A portal message may need less detail than a letter, but it still needs the same facts. Save the approved version as a template only when it is generic enough to reuse. Every escalation still needs its own facts and dates."
    ]
   },
   {
    "heading": "Handle a borrower who disputes the summary",
    "paragraphs": [
     "A borrower may disagree with the status, the date, or the reason for the delay. Listen for the specific point of disagreement before responding. Check the file and the source record rather than defending the first message. If the summary was wrong, correct it clearly and record the correction.",
     "If the summary was accurate but the borrower is frustrated, acknowledge the impact without promising a different outcome. Offer the next update date and the name of the role that will provide it. Do not move a decision to end the conversation. A calm correction protects trust better than a quick concession."
    ]
   },
   {
    "heading": "Use the summary to improve the file record",
    "paragraphs": [
     "A pattern of escalations can show where the file record is weak. If borrowers repeatedly ask for the same status, the routine updates may be missing. If the team repeatedly cannot name the blocking item, the ownership may be unclear. Read a sample of summaries with the team that maintains the file.",
     "Change the record or the update cadence before writing more escalation messages. A summary is a recovery tool, not the main communication plan. The goal is fewer stalls that require an escalation, not a better worded escalation after every delay. Track whether the change reduces repeat contacts before writing a new template."
    ]
   }
  ],
  "faq": [
   {
    "q": "What belongs in the first paragraph?",
    "a": "The current stage, the last completed step, and the date of that step, stated as confirmed facts."
   },
   {
    "q": "Should the note name an individual?",
    "a": "Name a role or team unless the individual has agreed to be the borrower contact, and always give the next update date."
   },
   {
    "q": "How many actions should the borrower receive?",
    "a": "One clear action is best, with a separate list of what the team will do."
   }
  ],
  "internalService": "/services/borrower-follow-up",
  "internalSibling": "/blog/create-a-weekly-document-exception-report-for-loan-files",
  "source": {
   "label": "Consumer Financial Protection Bureau, Owning a Home",
   "url": "https://www.consumerfinance.gov/owning-a-home/"
  }
 },
 {
  "slug": "create-a-weekly-document-exception-report-for-loan-files",
  "title": "Create a weekly document exception report for loan files",
  "description": "A weekly document exception report that counts files, ages open items, names owners, and turns recurring problems into one fix at a time.",
  "category": "Pipeline operations",
  "publishedAt": "2026-11-11",
  "readTime": "7 min read",
  "thumbnail": "/thumbnails/november-11/create-a-weekly-document-exception-report-for-loan-files.webp",
  "sections": [
   {
    "heading": "Why a weekly report beats a daily inbox",
    "paragraphs": [
     "Document exceptions arrive all day through email, portal messages, and review notes. A daily inbox shows the newest problem but hides the item that has been open for two weeks. A weekly report groups the exceptions by cause and age. It gives the team a view that a busy inbox cannot provide.",
     "The report is not a replacement for same-day handling of urgent items. It is a control that shows whether the same problems keep returning. That view supports a process fix instead of another round of reminders. The report should be short enough to review and specific enough to act on."
    ]
   },
   {
    "heading": "Define the exception categories",
    "paragraphs": [
     "Use a small set of categories, such as missing page, unreadable document, wrong borrower, expired document, and source not accepted. Add a category for an item that was never requested. Each category should describe the reason the document did not clear, not the person who sent it. A fixed list makes the weekly comparison possible.",
     "Write a one-line definition for each category and keep it beside the report. If a new category appears, add it deliberately and note the date. Do not let reviewers invent a label for every case. A category that is used only once is usually a note, not a category."
    ]
   },
   {
    "heading": "Count files, not messages",
    "paragraphs": [
     "A single file can generate several messages about the same missing page. Count the file and the open exception once, then record the message volume separately if it matters. A message count can make a small problem look large. A file count shows how much work is actually waiting.",
     "Record the number of open exceptions per file as well. A file with one missing item is different from a file with six. Show both the file count and the exception count beside each category. The two numbers together give a more honest picture of the workload."
    ]
   },
   {
    "heading": "Show the age of each open exception",
    "paragraphs": [
     "Age each exception from the date it was first identified, not the date of the latest message. Use fixed buckets, such as zero to three days, four to seven days, and more than seven days. The age shows whether the team is resolving items or just moving them between queues. It also reveals exceptions that are older than the file stage suggests.",
     "Flag any exception that is older than the closing timeline can tolerate. Compare the age with the next required action and the owner. An old item with no owner is a different problem from an old item waiting on a vendor. The report should make that distinction visible."
    ]
   },
   {
    "heading": "Name the owner and the next action",
    "paragraphs": [
     "Every open exception needs one owner and one next action with a date. The owner may be a processor, a borrower, or a vendor contact. The next action should be specific, such as request page two or confirm the transfer source. A report that lists only the problem leaves the review without a decision.",
     "Mark items where the owner has changed during the week. A handoff can explain a delay that looks unexplained in the age column. Record the new owner and the date of the handoff. The report should follow the work, not the original assignment."
    ]
   },
   {
    "heading": "Compare the week with the prior week",
    "paragraphs": [
     "Show the current count, the prior count, and the change for each category. A category can improve while the total worsens because another category grew. Read the category detail before drawing a conclusion. A single total hides the pattern the report exists to find.",
     "Note any change in volume, staffing, or document requirements during the week. A new requirement can add exceptions without a process failure. A holiday can reduce the count without an improvement. Context turns a number into a finding the team can use."
    ]
   },
   {
    "heading": "Choose one fix for the coming week",
    "paragraphs": [
     "Pick one category and one change that the team can test next week. The change might be a clearer request, a required field, or an earlier follow-up. Do not launch several fixes at once, because the effect will be hard to see. Write down the baseline and the measure you will compare.",
     "Review the result at the next report and keep, adjust, or stop the change. Share the result with the people who do the work, not only with management. The report should improve the process over time, not become a permanent scorecard. Record the decision beside the prior week so the next review can see the history."
    ]
   },
   {
    "heading": "Keep the report readable in a short meeting",
    "paragraphs": [
     "A report that takes an hour to explain will not be used every week. Put the total, the largest change, and the oldest item on the first page. Keep the detail in an appendix that the team can open when a number needs explanation. The meeting should focus on decisions, not on reading the report aloud.",
     "Use the same layout every week so the team can compare quickly. Highlight only the categories that changed beyond a stated threshold. A quiet week is a useful result and should not be padded with extra charts. The report should earn its place in the calendar."
    ]
   },
   {
    "heading": "Close the loop on the prior week fix",
    "paragraphs": [
     "Start the review by checking the change the team tested last week. State whether the measure improved, stayed flat, or got worse. If the result is unclear, say so and decide whether to keep the change for another week. A fix that is never reviewed becomes another untested process step.",
     "Record the decision beside the baseline so the next review can see the history. Stop a change that did not help rather than leaving it in place. Keep one improvement at a time so the team can learn from the result. The report is a loop, not a weekly snapshot."
    ]
   }
  ],
  "faq": [
   {
    "q": "How many categories should the report use?",
    "a": "Keep the list short enough to remember, with one definition per category and a deliberate process for adding a new one."
   },
   {
    "q": "Should messages be counted?",
    "a": "Count files and exceptions first, then add message volume only if it explains the workload."
   },
   {
    "q": "What makes a good weekly fix?",
    "a": "One specific change with a baseline and a measure that the team can review at the next report."
   }
  ],
  "internalService": "/services/borrower-document-support",
  "internalSibling": "/blog/set-a-daily-intake-triage-for-new-mortgage-files",
  "source": {
   "label": "Consumer Financial Protection Bureau, Owning a Home",
   "url": "https://www.consumerfinance.gov/owning-a-home/"
  }
 }
];
