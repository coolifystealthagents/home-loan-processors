import type { BlogPost } from './types';

export const november09BlogPosts: readonly BlogPost[] = [
{
 "slug": "build-a-closing-date-risk-flag-from-missing-file-evidence",
 "title": "Build a closing date risk flag from missing file evidence",
 "description": "A practical way to score closing risk from the evidence a mortgage file is still missing, with owners, thresholds, and a review rhythm.",
 "category": "Closing preparation",
 "publishedAt": "2026-11-09",
 "readTime": "7 min read",
 "thumbnail": "/thumbnails/november-09/build-a-closing-date-risk-flag-from-missing-file-evidence.webp",
 "sections": [
  {
   "heading": "Why missing evidence is a closing risk",
   "paragraphs": [
    "A closing date is a promise supported by evidence, and a file that lacks a document is a promise with a hole in it. The missing item may be a title clearance, a final insurance declaration, or a signed disclosure, but the effect is the same. Nobody can confirm the date until the evidence exists and someone has reviewed it. A risk flag makes that hole visible before the closing calendar fills up.",
    "Most teams already know which files feel risky, but that knowledge lives in the processor's memory. When the processor is on leave or the file moves to another desk, the feeling does not travel. A written flag turns the feeling into a shared signal that a coordinator can act on. It does not predict the closing with certainty, and it should never be presented as a guarantee."
   ]
  },
  {
   "heading": "Choose the evidence that gates closing",
   "paragraphs": [
    "Start with the documents that must exist before funds can move, such as the cleared title commitment, the final closing disclosure, the insurance binder, and any required payoff. Add the program-specific items the team sees most often, such as a condo project approval or a well certificate. Keep the list short enough that a coordinator can check it in a few minutes. A list of sixty items will not be used during a busy week.",
    "For each item, write the exact record that proves it is complete. A title commitment is not a clearance, and a closing disclosure draft is not a delivered disclosure. Store that definition beside the item so a new coordinator applies the same standard. If the team serves several investors, note where the requirement differs instead of forcing one rule onto every file."
   ]
  },
  {
   "heading": "Score the flag by consequence and timing",
   "paragraphs": [
    "Give each missing item two values: how badly it blocks closing and how long a replacement takes. A missing payoff can stop funding, while a missing survey may only delay a signature. A replacement that takes a week deserves an earlier flag than one that arrives in an hour. The score should combine both values rather than counting documents.",
    "Use three simple levels for consequence and three for lead time, then multiply them into a small set of risk bands. The exact numbers matter less than applying them consistently. Document the reasoning for each level so two reviewers reach the same band. A score nobody can explain will be overridden whenever a loan officer disagrees."
   ]
  },
  {
   "heading": "Record the flag in one visible field",
   "paragraphs": [
    "Put the risk band in a field the closing calendar already displays, not in a separate report. The coordinator who schedules the closing should see the band without opening another system. Pair the band with the single item that drives it and the owner of the next action. That combination tells the reader what is wrong and who is fixing it.",
    "Keep the field short. A band, a reason code, and a date are enough for the calendar view. The detailed history belongs in the file notes, where a reviewer can read it without cluttering the schedule. When the missing item is resolved, the band should clear only after the evidence is attached."
   ]
  },
  {
   "heading": "Set thresholds that match replacement time",
   "paragraphs": [
    "Place the first warning at the point where the team can still replace the item without moving the closing. If a payoff takes five business days, the warning belongs at least seven days before the target date. If a signature takes a day, a shorter runway is reasonable. The threshold should reflect the source of the document, not the anxiety of the moment.",
    "Review the thresholds after a quarter of data. Look for items that were flagged late and items that were flagged early enough to fix. Adjust the lead time for the documents that repeatedly arrive close to the deadline. Record the change beside the rule so the next review can explain the shift."
   ]
  },
  {
   "heading": "Separate borrower delays from team delays",
   "paragraphs": [
    "A missing bank statement may be waiting on the borrower, while a missing review may be waiting on the processor. The flag should name which side owns the delay because the fix is different. A borrower delay calls for a clearer request or a call, while a team delay calls for capacity or a decision. Mixing the two turns every conversation into a general complaint.",
    "Use a small set of cause codes, such as awaiting borrower, awaiting third party, awaiting review, and awaiting decision. Ask the owner to update the code when the cause changes. A file that moves from awaiting borrower to awaiting review has made progress even though the band has not cleared. That distinction keeps the team from treating all open items as identical."
   ]
  },
  {
   "heading": "Review flags in the closing stand-up",
   "paragraphs": [
    "Give the risk flags five minutes in the closing stand-up, starting with the files due in the next five business days. Read the band, the driving item, the owner, and the next action date. Do not read every open file, because the full list belongs to a weekly review. The daily pass exists to catch the files where a small delay becomes a moved closing.",
    "Ask for decisions rather than status. If an owner needs approval to order a rush payoff or extend a lock, the stand-up should surface that need. Record the decision beside the flag so the next person can see it. A short decision note is more useful than a long narrative about what was discussed."
   ]
  },
  {
   "heading": "Protect the flag from status drift",
   "paragraphs": [
    "A flag can drift when someone marks an item complete to clear the calendar. Require the evidence link before the band can change, and keep the change in the history. A status that moves without a document is the beginning of a closing surprise. The system should make the evidence path easier than the override path.",
    "Review a sample of cleared flags each month and confirm the evidence exists. If a cleared item has no record, reopen it and ask the owner what happened. Treat the finding as a process problem rather than a personal failure. The goal is a flag the team trusts, not a score that looks good."
   ]
  },
  {
   "heading": "Measure whether the flag prevents slippage",
   "paragraphs": [
    "Track the share of files that slipped after the flag showed low risk, and the share that closed on time after a high-risk flag. The first number shows where the score missed a dependency, while the second shows whether the team acted. Compare the results with the volume of files reviewed so a quiet month does not look like success. Keep the comparison to a steady volume so a single unusual month does not drive the conclusion.",
    "Do not judge the flag by how many files it marks high risk. A flag that marks everything is as useless as one that marks nothing. Look for the files where the flag changed a decision, such as an earlier request or a moved closing date. Those cases show whether the signal reached the person who could act."
   ]
  }
 ],
 "faq": [
  {
   "q": "Should a risk flag ever set the closing date automatically?",
   "a": "No. The flag should inform the coordinator and the closing team, while the accountable owner confirms the date after reviewing the evidence."
  },
  {
   "q": "How many evidence items should the flag cover?",
   "a": "Start with the items that can stop funding and add program-specific blockers only when they occur often enough to justify the check."
  },
  {
   "q": "What should happen when an item is marked complete without evidence?",
   "a": "Reopen the item, ask the owner for the source record, and review whether the completion step needs a required evidence field."
  }
 ],
 "internalService": "/services/closing-preparation",
 "internalSibling": "/blog/run-a-closing-package-preflight-in-thirty-minutes",
 "source": {
  "label": "U.S. Department of Housing and Urban Development, HUD Handbook 4000.1",
  "url": "https://www.hud.gov/program_offices/housing/sfh/handbook_4000-1"
 }
},
{
 "slug": "run-a-document-exception-triage-at-the-start-of-each-shift",
 "title": "Run a document exception triage at the start of each shift",
 "description": "A shift-start triage routine that sorts mortgage document exceptions by consequence, assigns one owner, and keeps the queue honest.",
 "category": "Pipeline operations",
 "publishedAt": "2026-11-09",
 "readTime": "7 min read",
 "thumbnail": "/thumbnails/november-09/run-a-document-exception-triage-at-the-start-of-each-shift.webp",
 "sections": [
  {
   "heading": "Why exception triage belongs at shift start",
   "paragraphs": [
    "Document exceptions accumulate overnight through portal uploads, emails, and lender messages. By the time a specialist opens the queue, the newest item and the oldest item look equally urgent. A short triage at the start of the shift separates the items that can stop a file from the items that can wait. That separation protects the first productive hour from the loudest request.",
    "Triage is not a full review and it is not a status meeting. It is a decision about which exceptions need attention now, which need an owner, and which need more information. The output is a short ordered list that the team can work through. A triage that turns into a long discussion has become the work instead of preparing for it."
   ]
  },
  {
   "heading": "Sort by consequence, not arrival order",
   "paragraphs": [
    "Begin with the exceptions attached to files that are closest to closing or furthest past a deadline. A missing insurance binder on a file closing tomorrow outranks a missing utility bill on a file with three weeks of runway. Arrival order is easy to see but rarely matches risk. The queue should show the closing date or the deadline beside each item.",
    "Then sort the remaining items by the time needed to replace the evidence. A payoff request or a title update may take days, while a fresh bank statement may arrive in hours. Items with a long replacement time move ahead of items that can be fixed quickly. This second sort keeps the list from being dominated by small tasks that are easy to close."
   ]
  },
  {
   "heading": "Give each exception one owner and one action",
   "paragraphs": [
    "An exception without an owner is a note, not a task. Assign one person or role to each item and write the next action as a verb, such as request the missing page or confirm the payoff date. Avoid actions like review or follow up because they do not say what to do. The owner should be able to start without asking what the action means.",
    "Keep the action small enough to finish in one sitting. If an item needs several steps, split it into the next step and a note about what follows. That practice makes progress visible and prevents a large task from sitting untouched. When ownership changes, record the handoff and the new action rather than only changing the name."
   ]
  },
  {
   "heading": "Separate missing evidence from unclear evidence",
   "paragraphs": [
    "A missing document needs a request, while an unclear document needs a review or a better explanation. The two problems look similar in a queue because both are exceptions, but they call for different work. Tag each item with the type so the specialist knows whether to contact the borrower or read the file. A misfiled cause sends the item to the wrong person.",
    "Unclear evidence often comes from a request that did not name the period, the page, or the acceptable source. Before sending the item back to the borrower, check whether the original request was specific enough. If it was not, fix the request and note the change. That small correction prevents the same borrower from being asked twice."
   ]
  },
  {
   "heading": "Set a time box for the first pass",
   "paragraphs": [
    "Give the first triage pass a fixed limit, such as twenty minutes for a normal queue. The limit forces the team to order the work rather than solve every item at the desk. Items that need a longer review stay on the list with the next action and a time later in the day. A time box also makes the routine survivable on a morning with several arrivals.",
    "Stop when the high-consequence items have owners and the rest of the queue has a clear order. Do not keep sorting for a perfect list. The queue will change during the day, and the triage can be repeated after lunch if new items arrive. The goal is a usable plan, not a complete history of every exception."
   ]
  },
  {
   "heading": "Hand off unfinished items with context",
   "paragraphs": [
    "When a shift ends, the unfinished items need more than a name and a status. Write the current state, the last action, and the next action with a date. The next specialist should be able to continue without reading the entire file. A handoff note that says pending tells the next person nothing useful.",
    "Include the reason the item is stuck, such as waiting on a bank letter or an underwriter decision. If the reason is unclear, mark it as needing a check rather than guessing. The next owner can then start with the right question. A clear handoff also protects the team when a specialist is unexpectedly absent."
   ]
  },
  {
   "heading": "Keep the triage list short",
   "paragraphs": [
    "A triage list that contains the entire queue is not a triage. Limit the visible list to the items that need action today and keep the rest in a reference view. Ten to fifteen items is usually enough for a specialist to hold in mind. A longer list turns into a scroll and loses the ordering that made it useful.",
    "Use a separate count for items that are waiting on a third party and need no action today. That count keeps the queue honest without cluttering the working list. Review the waiting items at a fixed point, such as the end of the day or the weekly review. A clear separation helps the team see progress even when the total count is flat."
   ]
  },
  {
   "heading": "Review the triage result at the end of the shift",
   "paragraphs": [
    "At the end of the shift, compare the morning list with what was actually finished. Note the items that moved, the items that stalled, and the reason for each. This short review takes minutes and shows whether the ordering matched reality. It also gives the next shift a realistic starting point.",
    "Do not use the review to grade individuals. Use it to find the pattern, such as a repeated third-party delay or a request that always produces a partial response. Pick one pattern to fix in the next queue review. The triage routine improves when the team learns from the items that did not move."
   ]
  },
  {
   "heading": "Improve the queue from recurring exceptions",
   "paragraphs": [
    "After a week of triage notes, group the exceptions by cause. A cause that appears repeatedly may need a change to the request template, the intake checklist, or the assignment rule. Fixing the source is cheaper than triaging the same item every morning. The triage list is the evidence for that change.",
    "Test one change at a time and compare the next week with the prior one. If the repeated item falls, keep the change and update the checklist. If it does not, the cause may be outside the team's control. Record the result so the next review does not repeat the same experiment without context."
   ]
  }
 ],
 "faq": [
  {
   "q": "How long should the shift-start triage take?",
   "a": "A normal queue should take about fifteen to twenty minutes; the goal is an ordered list with owners, not a full review of every file."
  },
  {
   "q": "What if the queue is too large to triage at all?",
   "a": "Triage only the files nearest a deadline and assign the rest to a later pass, then use the recurring exceptions to justify a staffing or process change."
  },
  {
   "q": "Should the triage list include items waiting on third parties?",
   "a": "Keep them in a separate count so they are not forgotten, but do not let them crowd out the items the team can act on today."
  }
 ],
 "internalService": "/services/pipeline-records",
 "internalSibling": "/blog/build-an-exception-code-list-the-closing-team-will-use",
 "source": {
  "label": "Consumer Financial Protection Bureau",
  "url": "https://www.consumerfinance.gov/"
 }
},
{
 "slug": "write-a-borrower-document-request-that-names-the-exact-page",
 "title": "Write a borrower document request that names the exact page",
 "description": "How to write mortgage document requests that name the period, page, and acceptable source so borrowers respond correctly the first time.",
 "category": "Borrower documentation",
 "publishedAt": "2026-11-09",
 "readTime": "7 min read",
 "thumbnail": "/thumbnails/november-09/write-a-borrower-document-request-that-names-the-exact-page.webp",
 "sections": [
  {
   "heading": "Why page-level requests reduce rework",
   "paragraphs": [
    "A borrower who is asked for a bank statement may send the first page of a four-page statement, a screenshot of a balance, or a statement from the wrong month. Each of those responses is reasonable from the borrower's point of view because the request did not say what complete means. The processor then has to ask again, and the file loses a day or more. A specific request prevents most of that loop.",
    "Page-level wording also helps the reviewer. When the request names the page and the period, the reviewer can compare the response with the condition without guessing. A complete response becomes obvious, and a partial response is easy to describe. That clarity reduces the back-and-forth that makes document collection feel endless."
   ]
  },
  {
   "heading": "Name the document, the period, and the page",
   "paragraphs": [
    "Write the request in three parts: what document, which period, and which pages. For example, ask for the complete statement for the account ending in 4412 covering the period from the first to the last day of the month, including all pages. That wording tells the borrower exactly what to find and what to send. It also gives the reviewer a checklist.",
    "Use the statement's own period rather than a vague phrase like most recent. A borrower may interpret most recent as the latest balance shown in an app. Name the month and the year, and say whether the statement must show all pages or only the summary. If the document has no page numbers, describe the sections that must be included."
   ]
  },
  {
   "heading": "Show an example instead of describing it",
   "paragraphs": [
    "A short example removes ambiguity faster than a paragraph of instructions. Show a sample statement with the period and the page range highlighted, using a blank or fictional document rather than a real borrower's record. Point to the account number, the statement dates, and the page count. The borrower can compare the example with the document in hand.",
    "Keep the example small and readable on a phone. A screenshot with tiny annotations will not help, and it may confuse a borrower who is already anxious. Use plain labels and one sentence that says what to check. If the request is sent through a portal, place the example beside the upload button rather than in a separate email."
   ]
  },
  {
   "heading": "Set the response window and the next step",
   "paragraphs": [
    "Tell the borrower when the document is needed and what happens after it arrives. A request that says as soon as possible gives no way to plan, while a specific date helps the borrower schedule a call to the bank. Explain that the reviewer will check the pages and confirm receipt. That confirmation closes the loop and reduces follow-up calls.",
    "If the borrower cannot meet the date, ask them to reply with the date they can meet and the reason. That reply gives the processor something to work with and keeps the file from sitting silently. Record the new date and the reason in the condition. A revised date is a plan, while silence is a risk."
   ]
  },
  {
   "heading": "Write for a borrower who is not a mortgage expert",
   "paragraphs": [
    "Avoid terms that only make sense inside a mortgage office, such as wet signature, source document, or trailing page. If a term is necessary, explain it in the same sentence. The borrower should not have to search for the meaning while trying to find a statement. Plain language is not less precise when it names the document and the pages.",
    "Use short sentences and one request per message when possible. A message with four unrelated document requests is easy to skim and easy to answer partially. If several documents are needed, number them and give each one its own line. That structure helps the borrower work through the list without losing an item."
   ]
  },
  {
   "heading": "Test the wording before sending",
   "paragraphs": [
    "Ask a colleague who does not work the file to read the request and explain what they would send. If they hesitate, the borrower may hesitate too. Test the wording on the longest and most complex request first, because that is where ambiguity costs the most. A two-minute test can prevent a day of rework.",
    "Keep a small library of requests that produced complete responses on the first try. Use those as templates for similar documents. Review the library when a program or a portal changes, because an old instruction may no longer match the upload flow. The library should be short enough that people actually use it."
   ]
  },
  {
   "heading": "Handle a partial response without restarting",
   "paragraphs": [
    "When a borrower sends part of the request, name the missing piece and keep the received pages. Do not ask for the whole document again unless the received version is unusable. A targeted follow-up is easier for the borrower and faster for the reviewer. It also preserves the work the borrower already did.",
    "Record what was received and what is still missing in the condition. If the same page is missing twice, check whether the request named it clearly or whether the borrower cannot access it. A repeat gap may be a document access problem rather than a borrower error. Adjust the request or offer another acceptable source."
   ]
  },
  {
   "heading": "Keep the request consistent across channels",
   "paragraphs": [
    "The same request may be sent through a portal, an email, and a phone call. If the wording differs, the borrower may receive conflicting instructions and send a document that satisfies one version but not another. Use one approved wording and point every channel to it. The portal should show the same period and page range as the phone script.",
    "Train the people who speak to borrowers on the approved wording, and give them a way to record a variation. If a borrower needs an alternate source, record the reason and the approval. That record keeps the file consistent and shows a reviewer why the evidence differs from the standard request. Review the wording at the same time as the request template so the script and the portal do not drift apart."
   ]
  },
  {
   "heading": "Track which wording reduces resubmissions",
   "paragraphs": [
    "Compare the resubmission rate for requests that use the page-level template with the rate for older wording. A simple before-and-after review is enough to see whether the change helps. Keep the definition stable so the comparison is fair. If the rate falls, expand the template to the next document type.",
    "Also track the time from request to receipt, because a complete response that arrives late is still a delay. If the wording improves completeness but not speed, the problem may be the channel or the borrower's access to the document. Use both measures to choose the next change. Record the sample size beside the result so a small batch is not treated as a trend."
   ]
  }
 ],
 "faq": [
  {
   "q": "What belongs in every document request?",
   "a": "The document name, the exact period, the required pages, the acceptable source, and the date the response is needed."
  },
  {
   "q": "Should the request include a sample document?",
   "a": "Yes, when the document is easy to misidentify; use a blank or fictional sample and label the period and pages."
  },
  {
   "q": "How should a partial response be handled?",
   "a": "Keep the pages received, name the missing piece, and ask only for that piece rather than restarting the whole request."
  }
 ],
 "internalService": "/services/borrower-document-support",
 "internalSibling": "/blog/design-a-same-day-document-re-request-rule",
 "source": {
  "label": "Consumer Financial Protection Bureau, Owning a Home",
  "url": "https://www.consumerfinance.gov/owning-a-home/"
 }
},
{
 "slug": "design-a-verbal-to-written-handoff-note-for-mortgage-files",
 "title": "Design a verbal to written handoff note for mortgage files",
 "description": "A handoff note format that captures the decision, source, and next action after a verbal mortgage file conversation.",
 "category": "Pipeline operations",
 "publishedAt": "2026-11-09",
 "readTime": "7 min read",
 "thumbnail": "/thumbnails/november-09/design-a-verbal-to-written-handoff-note-for-mortgage-files.webp",
 "sections": [
  {
   "heading": "Where verbal handoffs lose evidence",
   "paragraphs": [
    "Mortgage work moves through quick conversations: a processor asks an underwriter about a condition, a closer calls the title agent about a date, a loan officer confirms a borrower's plan. The conversation resolves the question, but the reason often stays in the participants' memory. A day later, the file shows a changed status with no explanation. The next reviewer cannot tell whether the change was a decision or a mistake.",
    "The loss is not caused by carelessness. It is caused by a handoff that has no place for the note. The conversation happens on the phone or in a hallway, and the system is updated later with a status only. A short written note closes that gap without turning every call into a report."
   ]
  },
  {
   "heading": "Capture the decision, not the conversation",
   "paragraphs": [
    "A handoff note should state the decision or the outcome, not a transcript. Write what was decided, who decided it, and what evidence supported it. Then write the next action and its date. That structure gives the next reviewer the information they need without making them read a narrative.",
    "Leave out opinions about the people involved and details that do not affect the file. A note that says the borrower was difficult does not help the next reviewer, while a note that says the borrower will send the missing page by Friday does. Keep the note factual and short enough to read during a busy day. Write the note in the file where the next reviewer will look, not in a separate document."
   ]
  },
  {
   "heading": "Name the source and the next action",
   "paragraphs": [
    "Every note should name the source that supports the decision, such as a guideline section, a document page, or a message from the title agent. A decision without a source is difficult to defend when the file is reviewed later. The source also tells the next person where to look if the question returns. If the source is a conversation, name the person and the date rather than writing that it was discussed.",
    "The next action should be concrete and owned. Write confirm the payoff amount with the servicer by Tuesday rather than follow up on payoff. If there is no next action because the item is complete, say so and attach the evidence. A note that ends with complete is useful only when the record shows what completed it."
   ]
  },
  {
   "heading": "Write the note during the handoff",
   "paragraphs": [
    "The best time to write the note is while the conversation is still fresh. Ask the person who made the decision to dictate the outcome or type it into the file before moving to the next task. A note written at the end of the day will lose the detail that made the decision clear. A short note now is better than a perfect note later.",
    "If the conversation happens away from the system, use a phone note or a shared draft and transfer it within the hour. Set a rule that the file cannot move to the next stage until the note exists. That rule makes the note part of the handoff rather than an optional extra. A note added later should say when it was written so the reader knows it is a reconstruction."
   ]
  },
  {
   "heading": "Use a short template the team will keep",
   "paragraphs": [
    "A template with five fields is easier to use than a blank note. Ask for the decision, the source, the owner, the next action, and the date. Add a field for the reason only when the decision is unusual. The template should fit on one screen and take less than a minute to complete.",
    "Do not require a long explanation for routine decisions. A note that says appraisal effective date confirmed from the report dated the twelfth, accepted by the underwriter is enough. Save the longer notes for exceptions and disagreements. A template that treats every note like an incident will be abandoned."
   ]
  },
  {
   "heading": "Distinguish an update from a decision",
   "paragraphs": [
    "An update reports that something happened, while a decision records that someone chose a path. Both are useful, but they should not look the same in the file. Mark the note type so a reviewer can tell whether the status changed because of a choice or because a document arrived. That distinction matters when a later review asks who approved the change.",
    "When a decision changes a prior one, link the notes and record the reason. A file that shows two conflicting decisions without a link is confusing even when both were legitimate. The link also helps the team see how often decisions are revised and why. Review linked revisions in the weekly sample to see whether the reasons are clear."
   ]
  },
  {
   "heading": "Review handoff notes in the daily stand-up",
   "paragraphs": [
    "Sample two or three recent handoff notes in the daily stand-up and read them aloud. Ask whether the decision, source, and next action are clear. The practice takes a few minutes and shows the team what a good note looks like. It also surfaces notes that are too vague before they cause a problem.",
    "Do not use the review to embarrass anyone. Use it to improve the template and the examples. If several notes are missing a source, the template or the training may be the problem. Fix the shared tool rather than coaching one person repeatedly."
   ]
  },
  {
   "heading": "Handle urgent handoffs without skipping the note",
   "paragraphs": [
    "Urgent files create the strongest temptation to skip the note. A closing that may move today needs a quick call, and the note can feel like a delay. Use a minimal version for urgent handoffs: decision, owner, next action, and time. That version takes seconds and still gives the next person a trail.",
    "After the urgent work is stable, return and add the source and the reason. A two-step note is better than no note. If the same urgency happens repeatedly, review why the file reached the deadline without the information. The fix may be an earlier flag rather than a faster note."
   ]
  },
  {
   "heading": "Measure whether notes reduce repeat questions",
   "paragraphs": [
    "Track how often the same question is asked about the same file after a handoff. A note that answers the question should reduce the repeat. Compare the count before and after the template is introduced, using the same file types. A small drop is meaningful if the volume is steady.",
    "Also track the time a reviewer spends finding the source for a decision. If the note includes a link or a page reference, the search time should fall. Use the result to decide whether the template needs a source field for more document types. The goal is a file that explains itself to the next person."
   ]
  }
 ],
 "faq": [
  {
   "q": "What are the minimum fields in a handoff note?",
   "a": "The decision, the source, the owner, the next action, and the date; add a reason when the decision is unusual."
  },
  {
   "q": "Should every phone call produce a note?",
   "a": "Every call that changes a file status or decides a next step should produce a short note; routine calls with no decision do not need one."
  },
  {
   "q": "How can urgent handoffs stay documented?",
   "a": "Use a minimal four-field note during the urgent call and add the source and reason once the immediate work is stable."
  }
 ],
 "internalService": "/services/pipeline-records",
 "internalSibling": "/blog/cut-rework-at-the-pipeline-record-handoff-with-a-two-field-check",
 "source": {
  "label": "National Institute of Standards and Technology, Cybersecurity Framework",
  "url": "https://www.nist.gov/cyberframework"
 }
},
{
 "slug": "set-a-weekly-review-cadence-for-open-title-items",
 "title": "Set a weekly review cadence for open title items",
 "description": "A weekly title review routine that keeps open commitment items, payoffs, and clearances visible before the closing week.",
 "category": "Closing preparation",
 "publishedAt": "2026-11-09",
 "readTime": "7 min read",
 "thumbnail": "/thumbnails/november-09/set-a-weekly-review-cadence-for-open-title-items.webp",
 "sections": [
  {
   "heading": "Why title items drift between closings",
   "paragraphs": [
    "Title work often starts early and then disappears from the daily queue until the closing week. The commitment arrives, the processor notes a few items, and the file moves on to appraisal and underwriting. Weeks later, a payoff or a survey is still open and the closing calendar is full. The item did not fail suddenly; it drifted because no routine brought it back.",
    "A weekly review gives the title items a fixed time and owner. It does not replace the closing preflight, and it does not decide legal sufficiency. It keeps the open items visible so the team can act while there is still time. The review is a management habit, not a legal opinion."
   ]
  },
  {
   "heading": "List the title items that need a weekly check",
   "paragraphs": [
    "Start with the commitment itself: the effective date, the vesting, the legal description, and the schedule of exceptions. Add the items that commonly require action, such as payoffs, releases, surveys, easements, and entity documents. Include the lender's title policy requirements and any endorsement the program needs. The list should reflect the files the team actually handles.",
    "For each item, write what evidence closes it. A payoff quote is not a payoff, and a survey request is not a survey. The review should look for the record that satisfies the requirement, not the request that started it. That distinction prevents an item from looking complete because someone ordered it."
   ]
  },
  {
   "heading": "Assign one owner for the title review",
   "paragraphs": [
    "Give the weekly review one owner, usually the closing coordinator or a senior processor. The owner runs the meeting, updates the list, and escalates stale items. Other people can contribute, but the review needs one person accountable for the list. A shared owner usually means no one prepares the data.",
    "Name a backup for the owner so the review happens during leave. The backup should know how to read the commitment and where the title partner's updates live. A review that depends on one person is one absence away from stopping. The backup also brings a second set of eyes to old items."
   ]
  },
  {
   "heading": "Read the commitment against the file",
   "paragraphs": [
    "Compare the commitment with the loan file rather than reading it in isolation. Check that the borrower names, the property description, and the loan amount match the application and the sales contract. A mismatch in the vesting or the legal description can delay a closing even when the title itself is clear. The review should catch those administrative gaps early.",
    "Note the commitment's effective date and the date of any update. A commitment that is months old may need a continuation before closing. Ask the title partner what the current requirement is rather than assuming the original document is enough. Record the answer beside the item so the next review can see it."
   ]
  },
  {
   "heading": "Record the open item and the next step",
   "paragraphs": [
    "For each open item, record what is missing, who owns the next step, and when it is due. Use a short status such as waiting on servicer, waiting on survey, or in review. Avoid a status that only says open, because it does not tell the reader what to do. The next step should be a concrete action with a date.",
    "Update the list during the review rather than after it. A list updated later is often updated from memory and loses the details. If an item cannot be updated because the information is missing, mark it as needing a check and assign that check. The list should reflect the current state at the end of the meeting."
   ]
  },
  {
   "heading": "Work the review with the title partner",
   "paragraphs": [
    "Share the open item list with the title partner before the review when possible. The partner can check the status in their system and bring the answer to the meeting. That preparation turns the review from a status call into a decision session. It also gives the partner a clear view of what the lender needs.",
    "Agree on the terms used for status so both sides mean the same thing. Cleared to the lender may mean something different to the title agent, and a mismatch can create a false sense of progress. Write the shared definitions beside the list. Review them when a new partner or a new system is introduced."
   ]
  },
  {
   "heading": "Set escalation rules for stale items",
   "paragraphs": [
    "Define how long an item can stay open before it escalates. A payoff that has not moved in five business days may need a call to the servicer, while a survey that has not moved in ten may need a different provider. The rule should reflect the normal turnaround for that item, not a general deadline. Write the rule down so two reviewers apply the same limit.",
    "Name the escalation contact and the information they need. A message that says the title item is stuck is less useful than one that names the item, the owner, the last action, and the date. The contact can then decide whether to call, reassign, or change the closing date. Record the decision and the new date. Record the escalation date so the next review can see how long the item waited."
   ]
  },
  {
   "heading": "Keep the review close to the closing calendar",
   "paragraphs": [
    "Schedule the review on the same day each week and keep it close to the closing calendar. The person who runs the review should see which files are closing in the next two weeks. That view helps the team prioritize the items that can still affect a date. A review disconnected from the calendar becomes a general title meeting.",
    "If a file is closing sooner than the next review, handle it in the closing preflight instead of waiting. The weekly review is a safety net, not the only check. Use the preflight for the final days and the weekly review for the longer runway. The two routines should share the same item definitions."
   ]
  },
  {
   "heading": "Use the review to fix the intake",
   "paragraphs": [
    "After several weeks, look for title items that repeatedly arrive late or incomplete. A missing entity document or a vague legal description may point to an intake question that should be asked earlier. Fixing the intake reduces the number of items that need weekly attention. The review becomes a source of process improvement rather than a permanent list.",
    "Test one intake change and compare the next month with the prior one. If the item becomes less common, keep the change and update the checklist. If it does not, the cause may be outside the team's control. Record the result so the next review can build on it."
   ]
  }
 ],
 "faq": [
  {
   "q": "How long should the weekly title review take?",
   "a": "About twenty to thirty minutes for a normal pipeline, with extra time only when a file is close to closing or an item has escalated."
  },
  {
   "q": "Does the review replace the closing preflight?",
   "a": "No; the weekly review manages the longer runway, while the closing preflight checks the final package in the days before closing."
  },
  {
   "q": "What should be escalated first?",
   "a": "Escalate items that block funding or have a long replacement time, such as an unresolved payoff, a missing release, or a survey."
  }
 ],
 "internalService": "/services/closing-preparation",
 "internalSibling": "/blog/review-a-title-commitment-for-missing-administrative-items",
 "source": {
  "label": "American Land Title Association",
  "url": "https://www.alta.org/"
 }
},
{
 "slug": "build-a-mortgage-file-qa-sample-that-finds-field-errors",
 "title": "Build a mortgage file QA sample that finds field errors",
 "description": "A practical QA sampling method for mortgage files that tests decision-critical fields against the source record.",
 "category": "Quality review",
 "publishedAt": "2026-11-09",
 "readTime": "7 min read",
 "thumbnail": "/thumbnails/november-09/build-a-mortgage-file-qa-sample-that-finds-field-errors.webp",
 "sections": [
  {
   "heading": "Why field errors survive a completion check",
   "paragraphs": [
    "A file can pass a completion check while a field is wrong. The document exists, the status is set, and the checklist is green, but the loan amount, the property address, or the income figure does not match the source. Completion checks answer whether something is present, not whether it is correct. A QA sample is needed to test the second question.",
    "Field errors matter because they travel. A wrong figure can appear in a disclosure, a title commitment, an insurance binder, or a closing package. By the time someone notices, the correction may involve several parties. A small sample caught early is cheaper than a closing-week correction."
   ]
  },
  {
   "heading": "Choose the fields that change decisions",
   "paragraphs": [
    "Start with the fields that affect eligibility, pricing, or the closing package. Examples include the loan amount, the property address, the borrower's name, the income used for qualification, the purchase price, and the title vesting. Add the fields that appear on disclosures or legal documents. A field that only affects an internal note can wait.",
    "For each field, name the source record that proves the value. A loan amount may come from the application and the sales contract, while the vesting comes from the title commitment. If the field has more than one source, state which one controls when they disagree. The reviewer needs that rule before the sample begins."
   ]
  },
  {
   "heading": "Sample by processor and by loan stage",
   "paragraphs": [
    "A sample drawn only from closed files shows the errors that survived, not the errors that were caught. Include files in process, at closing, and after closing so the review sees different stages. Sample across processors and loan types to avoid attributing a shared problem to one person. The sample should be small enough to review carefully.",
    "Use a fixed selection rule, such as every fifth file or a random draw from each group. Record the rule and the date. If a file cannot be reviewed, replace it only under the stated rule and note the replacement. A sample that is quietly adjusted to include easier files will not tell the team anything useful."
   ]
  },
  {
   "heading": "Read the source record, not just the file",
   "paragraphs": [
    "The reviewer should open the source document and compare it with the field. Reading the file's summary is not a QA check because the summary is the thing being tested. This takes longer, which is why the sample is small. A careful review of ten files is more useful than a quick glance at fifty.",
    "Record the value in the source, the value in the field, and whether they match. If the field is a derived value, record the inputs and the calculation. A mismatch may be a typing error, a stale value, or a rule difference. The note should say which one the reviewer believes it is, with the evidence."
   ]
  },
  {
   "heading": "Score the error by consequence",
   "paragraphs": [
    "Not every field error has the same weight. A misspelled middle name may need a correction, while a wrong loan amount can change the disclosure and the closing package. Score each finding by the number of downstream records it affects and the difficulty of correction. That score helps the team decide what to fix first.",
    "Use a simple scale, such as low, medium, and high, with a written definition for each. A high finding changes a legal or financial figure, a medium finding changes a required disclosure field, and a low finding is cosmetic or internal. Apply the scale consistently so the trend is meaningful. Review the definitions when a new form or system is added."
   ]
  },
  {
   "heading": "Review the sample with the file owner",
   "paragraphs": [
    "Share the findings with the person who worked the file before the report goes to management. The owner can explain the source of the value and whether a rule changed. That conversation often turns a finding into a training point. It also prevents the review from becoming a surprise audit.",
    "Ask the owner what would have made the correct value easier to enter, such as a clearer source, a dropdown, or a validation rule. The answer may point to a system fix rather than a person fix. Record the suggestion beside the finding. The goal is a file that is easier to get right, not a list of mistakes."
   ]
  },
  {
   "heading": "Separate a typing error from a standard gap",
   "paragraphs": [
    "A typing error is a one-time mistake, while a standard gap is a rule that is missing, unclear, or ignored. The two need different responses. A typing error may need a reminder or a validation check, while a standard gap needs a written rule and training. Classify the finding before choosing the fix.",
    "If the same field is wrong across several files, look for the standard before coaching the people. The source may be ambiguous, or the field may accept a value that does not match the document. A standard gap that is fixed once prevents many future errors. A series of individual corrections does not."
   ]
  },
  {
   "heading": "Track the same fields each period",
   "paragraphs": [
    "Keep the field list and the scoring definitions stable so the results can be compared. If a new field is added, record the date and review the prior period separately. A changing list makes a falling error rate look better than it is. The comparison should use the same rules and a similar sample.",
    "Report the error rate by field and by stage, not only as a total. A total can hide a high rate in one field that matters more than the others. Pair the rate with the consequence score so the reader sees the weight. The report should end with one field to improve next."
   ]
  },
  {
   "heading": "Feed the result back into intake",
   "paragraphs": [
    "Use the findings to improve the intake checklist and the source guidance. If a field is often copied from the wrong document, add a note that names the controlling source. If a dropdown allows an invalid value, ask for a validation rule. The QA sample should change the system that produces the file.",
    "Test the change on the next sample and compare the field's error rate. If it falls, keep the change and move to the next field. If it does not, the cause may be workload or training rather than the checklist. Record the result and the next experiment so the work continues."
   ]
  }
 ],
 "faq": [
  {
   "q": "How many files should a QA sample include?",
   "a": "Start with ten to fifteen files across stages and processors; a careful small sample is more useful than a large superficial one."
  },
  {
   "q": "Which fields should be checked first?",
   "a": "Fields that change eligibility, pricing, disclosures, or the closing package, such as loan amount, property address, income, and vesting."
  },
  {
   "q": "Should QA findings be shared with the file owner?",
   "a": "Yes, before the report is finalized, so the owner can explain the source and suggest a fix that prevents the error."
  }
 ],
 "internalService": "/services/loan-file-indexing",
 "internalSibling": "/blog/audit-a-remote-loan-processing-queue-without-micromanaging",
 "source": {
  "label": "Fannie Mae Selling Guide",
  "url": "https://selling-guide.fanniemae.com/"
 }
},
{
 "slug": "prepare-a-rental-income-schedule-review-for-a-loan-file",
 "title": "Prepare a rental income schedule review for a loan file",
 "description": "A review routine for rental income schedules, leases, tax returns, and expense lines that keeps a mortgage file consistent.",
 "category": "Borrower documentation",
 "publishedAt": "2026-11-09",
 "readTime": "8 min read",
 "thumbnail": "/thumbnails/november-09/prepare-a-rental-income-schedule-review-for-a-loan-file.webp",
 "sections": [
  {
   "heading": "What the rental schedule has to prove",
   "paragraphs": [
    "A rental income schedule tells the file how a property produces income and what it costs to operate. It should connect the lease or the market rent to the income used in qualification. It should also show the expenses that reduce the net figure, such as taxes, insurance, maintenance, and management. A schedule that lists only a monthly rent leaves the reviewer without the rest of the story.",
    "The schedule is not a substitute for the tax return or the lease. It is a summary that should agree with them. The reviewer compares the schedule with the source documents and with the property records. When the numbers disagree, the schedule needs an explanation rather than a silent correction."
   ]
  },
  {
   "heading": "Match the lease to the schedule",
   "paragraphs": [
    "Start with the current lease and confirm the rent, the term, the tenant, and the property. Compare the lease rent with the schedule and note any difference. A lease that started mid-month may produce a partial first payment, which affects the annual figure. A schedule that ignores the partial month will not match the bank records.",
    "If the property is vacant, the schedule may use a market rent instead of a lease. That approach needs a documented source and a clear note that the property is not currently leased. Do not present a market rent as if it were contracted income. The reviewer should be able to see which basis was used and why."
   ]
  },
  {
   "heading": "Review the property and the expense lines",
   "paragraphs": [
    "Confirm the property address, the unit count, and the ownership entity on the schedule. A property with multiple units needs a rent for each unit and a clear total. Expenses should be listed by category rather than as one lump sum. A lump sum is difficult to compare with the tax return and easy to double count.",
    "Check that the expense lines match the source, such as the tax bill, the insurance declaration, and the property management agreement. If an expense is estimated, label it as an estimate. Do not mix actual and estimated figures without a note. The reviewer needs to know which numbers are firm."
   ]
  },
  {
   "heading": "Handle a new lease with no history",
   "paragraphs": [
    "A new lease may be the first evidence of rental income for a property. The reviewer should see the signed lease, the deposit, and the rent schedule together. If the lease starts after the application date, note the start date and the expected first payment. A future lease is not the same as current income, and the file should say so.",
    "If the property was previously owner-occupied, the change in use needs a clear note. The tax return may still show the old treatment, which can make the schedule look inconsistent. Record the date of the change and the source that supports the new use. The underwriter can then decide how to treat the income."
   ]
  },
  {
   "heading": "Reconcile the tax return and the schedule",
   "paragraphs": [
    "Compare the schedule with the rental income and expenses reported on the tax return. Differences are normal, but they should have an explanation. A repair that was capitalized, a property that was placed in service mid-year, or a management fee that changed can all create a gap. Note the reason rather than forcing the numbers to match.",
    "Use the same period for both documents. A schedule for the current year compared with a prior-year return will not agree, and that is not necessarily an error. Label the periods clearly and show the basis for the income used. The reviewer should not have to reconstruct the timeline from two documents."
   ]
  },
  {
   "heading": "Ask for the missing page once",
   "paragraphs": [
    "When the schedule or the lease is incomplete, ask for the specific missing page or schedule line. A request for the whole tax return when only one schedule is missing creates extra work for the borrower. Name the form, the year, and the page. That precision makes a complete response more likely.",
    "Keep the pages already received and note what is still missing. If the borrower sends a different year or a different property, check whether it answers the request before asking again. A partial response that is relevant is progress, while a response that misses the property is not. Record the distinction."
   ]
  },
  {
   "heading": "Record the review and the exception",
   "paragraphs": [
    "Write a short review note that names the sources checked, the income basis, and any difference that remains. The note should be specific enough that a second reviewer can repeat the check. If an exception remains, state the question and the owner of the answer. A note that says reviewed is not a review record.",
    "Attach the source pages or link to them in the file. A note without the source is difficult to verify later. If a source cannot be attached, record where it lives and who can access it. The review should leave a trail that survives a handoff."
   ]
  },
  {
   "heading": "Coordinate with the underwriter before the condition",
   "paragraphs": [
    "If the schedule raises a question about income treatment, raise it with the underwriter before the condition is issued. A short conversation can clarify whether the file needs a different document or a different calculation. That conversation prevents a condition that the borrower cannot satisfy. Record the answer in the file.",
    "Do not ask the underwriter to decide from a summary alone. Provide the schedule, the lease, the tax return page, and the specific question. A clear question with the sources attached gets a faster and more reliable answer. The note should also record the date and the person who answered."
   ]
  },
  {
   "heading": "Keep the review current when income changes",
   "paragraphs": [
    "Rental income can change during the file because a lease ends, a tenant leaves, or a property is refinanced. Recheck the schedule when a new lease or a vacancy notice arrives. A schedule that was correct at application may be stale at closing. The reviewer should note the date of the latest source.",
    "If the change affects qualification, update the income calculation and tell the underwriter. Do not leave two versions of the income in the file without a note. The latest reviewed version should be the one that supports the decision, and the earlier version should remain in the history. Note the date of the new source beside the revised figure."
   ]
  }
 ],
 "faq": [
  {
   "q": "What documents support a rental income schedule?",
   "a": "The current lease or a documented market rent source, the tax return pages for the property, and the expense records such as tax and insurance."
  },
  {
   "q": "How should a vacancy be handled?",
   "a": "Use a documented market rent only when the file supports it, and label the schedule clearly so the reviewer knows the income is not contracted."
  },
  {
   "q": "What if the schedule and the tax return disagree?",
   "a": "Note the difference and its cause, such as a mid-year change or a capitalized repair, rather than forcing the figures to match."
  }
 ],
 "internalService": "/services/borrower-document-support",
 "internalSibling": "/blog/build-a-self-employed-income-packet-checklist",
 "source": {
  "label": "Fannie Mae Selling Guide",
  "url": "https://selling-guide.fanniemae.com/"
 }
},
{
 "slug": "keep-a-vendor-access-review-calendar-for-mortgage-systems",
 "title": "Keep a vendor access review calendar for mortgage systems",
 "description": "A recurring access review for mortgage vendors and staff accounts that keeps file exposure visible and removals documented.",
 "category": "Vendor management",
 "publishedAt": "2026-11-09",
 "readTime": "7 min read",
 "thumbnail": "/thumbnails/november-09/keep-a-vendor-access-review-calendar-for-mortgage-systems.webp",
 "sections": [
  {
   "heading": "Why vendor access needs a calendar",
   "paragraphs": [
    "Mortgage files contain income, credit, and property records that vendors may need to do their work. Access is often granted for a project and then left in place after the project ends. Without a recurring review, the list of people who can see a file grows quietly. A calendar makes the review a scheduled task rather than a reaction to an incident.",
    "The review is not only about vendors. Staff who change roles, temporary workers, and shared service accounts can also retain access they no longer need. A single calendar can cover all of them if the owner and the evidence are clear. The goal is to know who can see what and why."
   ]
  },
  {
   "heading": "List the systems and the access level",
   "paragraphs": [
    "Start with the systems that hold borrower records, such as the loan origination system, the document portal, the imaging repository, and the email archive. Add the systems that control file movement, such as the title and appraisal platforms. For each system, list the access levels and what each one allows. A role name without a definition is not enough.",
    "Separate read access from download, edit, and administration. A vendor that only needs to view a document should not have download rights, and a coordinator who uploads should not administer users. The access level should match the task, not the person's seniority. Record the reason for each level so a reviewer can test it."
   ]
  },
  {
   "heading": "Name the owner and the business reason",
   "paragraphs": [
    "Every account should have a named owner in the mortgage operation and a business reason. The owner is accountable for confirming that the access is still needed. The reason should name the workflow, such as closing package review or document indexing. An account with no owner is an account that no one will remove.",
    "For vendor accounts, name the contact at the vendor and the person who manages the relationship. Record the contract end date and the data-sharing terms. The review should check both the operational need and the contractual basis. An expired contract with active access is a finding that needs immediate attention."
   ]
  },
  {
   "heading": "Review access when a role changes",
   "paragraphs": [
    "Do not wait for the quarterly review when someone changes roles. A processor who moves to a different team may no longer need the old queue, and a manager who leaves may still have an administrator account. Trigger a review on role change, departure, and the end of a vendor project. The trigger should be part of the offboarding checklist.",
    "Record the date of the change and the access removed. If access must remain for a transition, set an end date and name the person who will confirm the removal. A temporary exception without an end date becomes permanent. The calendar should show the exception and its expiry."
   ]
  },
  {
   "heading": "Test the review with a sample account",
   "paragraphs": [
    "Pick a small sample of accounts and trace each one from the request to the current access. Check that the business reason still exists and that the access level matches the task. Then compare the account with the offboarding record if the person has left. The sample shows whether the process works, not just whether a list exists.",
    "Include at least one vendor and one staff account in the sample. The two have different lifecycles and different failure modes. A vendor may stay active after a contract ends, while a staff account may stay active after a transfer. Record the finding and the correction. Repeat the sample each quarter with different accounts."
   ]
  },
  {
   "heading": "Record the removal, not just the request",
   "paragraphs": [
    "A request to remove access is not evidence that access was removed. Record the date the account was disabled or the permission was changed, and the person who confirmed it. If the system produces a log, keep the reference. A ticket that says done without a log is a weak record.",
    "Check the removal in the system rather than relying on a reply. An account can be disabled in one system and still active in another. The reviewer should verify each system that held the access. Record the verification date and any remaining access."
   ]
  },
  {
   "heading": "Handle a shared or emergency account",
   "paragraphs": [
    "Shared accounts are difficult to review because the activity cannot be tied to one person. If a shared account is necessary, name the owner, limit the access, and record who uses it. Review the account more often than a personal account. The goal is to reduce the number of people who can use it without a trace.",
    "Emergency accounts should have a documented purpose and a test schedule. The review should confirm that the account still works and that the credential is stored securely. If the account is not needed, remove it. An emergency account that is used for routine work is no longer an emergency control."
   ]
  },
  {
   "heading": "Coordinate with the security contact",
   "paragraphs": [
    "Give the security contact the access list and the findings from the review. The security contact can check the list against the identity system and the vendor register. That cross-check catches accounts that the mortgage team does not see. The review is stronger when two functions compare their records.",
    "Agree on the escalation path for an account that cannot be removed promptly. A vendor with active access after a contract ends may need a formal notice. Record the escalation and the date. The security contact should own the technical removal while the business owner confirms the need."
   ]
  },
  {
   "heading": "Report the review result once a quarter",
   "paragraphs": [
    "Write a short report that shows the number of accounts reviewed, the number changed, and the number still awaiting removal. Name the systems covered and the sample used. A report that only says the review was completed does not show whether access changed. Keep the report with the calendar so the next review can compare.",
    "Use the result to improve the request and offboarding process. If several accounts lacked an owner, add an owner field to the request. If removals were slow, agree on a service standard with the security team. The next review should test whether the change reduced the same finding."
   ]
  }
 ],
 "faq": [
  {
   "q": "How often should vendor access be reviewed?",
   "a": "At least quarterly, plus a review whenever a contract ends, a role changes, or a person leaves the organization."
  },
  {
   "q": "What evidence proves access was removed?",
   "a": "A system log or screenshot showing the account disabled or the permission changed, with the date and the person who verified it."
  },
  {
   "q": "Can a shared account be approved?",
   "a": "Only with a named owner, limited access, a documented purpose, and a more frequent review than a personal account."
  }
 ],
 "internalService": "/services/pipeline-records",
 "internalSibling": "/blog/keep-loan-file-indexing-queue-evidence-durable-when-the-systems-change",
 "source": {
  "label": "National Institute of Standards and Technology, Cybersecurity Framework",
  "url": "https://www.nist.gov/cyberframework"
 }
}
];
