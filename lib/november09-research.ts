import type { ResearchPost } from './types';

export const november09ResearchPosts: readonly ResearchPost[] = [
{
 "slug": "how-missing-evidence-predicts-closing-date-slippage",
 "title": "How missing evidence predicts closing date slippage",
 "summary": "A measurement brief on whether missing closing evidence predicts a moved closing date, with definitions, sampling, and limits.",
 "cluster": "Closing preparation",
 "publishedAt": "2026-11-09",
 "finding": "Missing evidence is a useful leading indicator only when the item is tied to a specific closing dependency, a replacement lead time, and a named owner.",
 "thumbnail": "/thumbnails/november-09/how-missing-evidence-predicts-closing-date-slippage.webp",
 "sections": [
  {
   "heading": "Question and scope",
   "paragraphs": [
    "This brief asks whether the evidence a mortgage file is missing at a given point predicts a later move in the closing date. The unit is one file observed at a fixed checkpoint, usually ten business days before the target closing. The outcome is whether the closing occurred on or before the target date or moved. The question is operational because a team that can see slippage early can act before the calendar is committed.",
    "The scope should name the loan types, the programs, and the checkpoint. A purchase file with a fixed move-out date has different pressure from a rate-and-term refinance. Include files that closed on time and files that moved so the comparison is balanced. Exclude files withdrawn before the checkpoint, because they do not test the closing outcome."
   ]
  },
  {
   "heading": "Define missing evidence",
   "paragraphs": [
    "Treat missing evidence as a required item with no acceptable record at the checkpoint. The item must be one that the program or the investor requires before closing, not a nice-to-have note. A document that exists but has not been reviewed is pending review, not missing. That distinction matters because the two states call for different actions and may predict differently.",
    "For each item, record the requirement, the expected source, and the standard for acceptance. A title commitment is not a clearance, and an insurance certificate is not a binder. Write the acceptance standard beside the item so the reviewer classifies it consistently. If the standard is unclear, mark the item as unclassified rather than guessing."
   ]
  },
  {
   "heading": "Set the checkpoint and the outcome",
   "paragraphs": [
    "Choose the checkpoint before the data is collected and keep it fixed. Ten business days before closing is a common choice because many replacement items can still be obtained. A checkpoint too close to closing will miss the chance to act, while one too early may flag items that would have arrived anyway. Record the exact rule for counting business days.",
    "Define the outcome as the difference between the target closing date recorded at the checkpoint and the actual closing date. A move of one day counts as slippage if the team promised the original date. Report both the share of files that moved and the size of the move. A file that moved one day is a different problem from one that moved three weeks."
   ]
  },
  {
   "heading": "Evidence standard",
   "paragraphs": [
    "Use the loan file, the condition log, and the closing calendar as the primary sources. Record the checkpoint date, the target date, the item status, and the actual closing date. If the target date changed during the period, record both the original and the revised date. A comparison that uses only the final target will hide the earlier promise.",
    "For each missing item, record the owner and the last action. An item with no owner is a queue defect as well as a missing document. Note whether the item was waiting on the borrower, a third party, or the team. That cause is needed to interpret the prediction, because a borrower delay and a title delay may behave differently."
   ]
  },
  {
   "heading": "Sampling and collection",
   "paragraphs": [
    "Sample files at the checkpoint across processors, programs, and property types. Include enough files with no missing evidence to serve as a comparison group. If the volume is small, review every file in the period and state the count. If the volume is large, use consecutive files within each group and record the selection rule.",
    "Freeze the sample at a stated date and collect the outcome after the closing window has passed. Do not replace a file that is difficult to classify, because those files often carry the most useful signal. Keep the sample list with the definitions so another reviewer can repeat the work. Record the systems searched and any access limits."
   ]
  },
  {
   "heading": "Analysis and reporting",
   "paragraphs": [
    "Report the slippage rate for files with at least one missing item and for files with none. Then break the missing-item group by dependency type and by replacement lead time. A file missing a payoff with a long lead time may predict differently from one missing a utility bill. Show the count beside each rate so a small group is not overread.",
    "Use a simple comparison rather than a complex model. The team needs to know whether the flag is useful, not whether it explains every outcome. Show the share of moved files that had a missing item and the share of missing-item files that moved. Those two numbers answer different questions and should both appear."
   ]
  },
  {
   "heading": "Limits and sources of error",
   "paragraphs": [
    "A missing item is not the only cause of a moved closing. A title defect, a changed loan term, or a borrower's schedule can move the date even when the evidence is complete. The analysis should not claim causation from an association. Review a sample of moved files to see what else changed and record the other causes.",
    "The checkpoint itself can bias the result. An item that arrives the day after the checkpoint will look missing even though it was never at risk. The sample should note the timing and avoid treating every late arrival as a prediction failure. The cited public sources describe documentation expectations, not a benchmark for slippage."
   ]
  },
  {
   "heading": "Review cadence",
   "paragraphs": [
    "Repeat the review each quarter using the same checkpoint and definitions. Compare the new result with the prior period and record any change in volume, staffing, or loan mix. A shift in the mix can change the rate without any change in the process. Review the findings with the closing team and the processors who own the items.",
    "When the closing process changes, mark the date and treat the next result as a new baseline. A new checklist or a new title partner can change the prediction without changing the underlying risk. Ask whether the definition or the capture method changed before claiming an improvement. Keep the earlier baseline so the effect of the new process can be checked against the old one."
   ]
  },
  {
   "heading": "What to fix first",
   "paragraphs": [
    "Start with the missing item that has both a high slippage association and a long replacement time. A payoff or a title clearance is a better first target than a document that can arrive in a day. Add an earlier request and a named owner for that item. Test the change on a small group and compare the next period.",
    "Do not add more fields to the flag until the first change has been tested. A flag that collects every possible item becomes a second checklist and loses its signal. Choose one dependency, make its status reliable, and then extend the approach. The smallest useful flag is easier to maintain."
   ]
  },
  {
   "heading": "Communication",
   "paragraphs": [
    "Use the result to improve the conversation with the closing coordinator, not to assign blame. A missing item is often a sign that the request was unclear or the owner was unavailable. Share the pattern with the team and ask what would make the item easier to obtain. Record the answer beside the finding.",
    "Tell the borrower only what is relevant to their file and avoid predicting a closing date from a risk score. The account owner should confirm any date change after reviewing the evidence. The internal flag is a planning tool, not a promise. Keep the borrower message focused on the next action and the date it is needed."
   ]
  },
  {
   "heading": "Data handling and privacy",
   "paragraphs": [
    "The review uses loan-level records, so store the sample under a loan key and limit the fields to those needed for the analysis. Remove names, addresses, and account numbers when a category is enough. Keep the source reference rather than a copy when the document contains personal data. Store the sample in the approved system and limit access to the review team.",
    "If a finding must be illustrated, use a fictional or redacted example. Do not paste a borrower document into a slide or a shared report. The organization's privacy and security policy controls the retention period and the access list. Record the approval for any exception."
   ]
  },
  {
   "heading": "Keeping the measure current",
   "paragraphs": [
    "Store the definitions, the checkpoint rule, and the sample with the result. Name an owner who updates the method when the systems or the programs change. Record the date and the reason for each change. A measure that is redefined without a note cannot be compared over time.",
    "Review the measure with the people who work the queue, not only with management. They can explain why an item was missing and what would have helped. That explanation is the bridge between a number and a change. Without it, the report becomes another document nobody uses."
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
 "slug": "a-method-for-classifying-borrower-document-exceptions-by-cause",
 "title": "A method for classifying borrower document exceptions by cause",
 "summary": "A classification method that separates mortgage document exceptions by cause so the team fixes the request instead of blaming the borrower.",
 "cluster": "Quality review",
 "publishedAt": "2026-11-09",
 "finding": "Document exceptions become actionable only when each one is classified by the cause the team can change, such as an unclear request, a missing page, or an expired source.",
 "thumbnail": "/thumbnails/november-09/a-method-for-classifying-borrower-document-exceptions-by-cause.webp",
 "sections": [
  {
   "heading": "Question and scope",
   "paragraphs": [
    "This brief asks how a mortgage team can classify borrower document exceptions by cause in a way that leads to a fix. The unit is one exception on one requirement, from the first request to the accepted evidence or the current open state. The question matters because a queue that labels everything as borrower delay hides the requests the team can improve. A useful classification points to a specific change.",
    "The scope should name the document types, the loan stages, and the observation window. A missing bank statement at intake is different from a missing page at closing. Include exceptions that were resolved and exceptions that remain open. Exclude new requirements created by a program change, because those are new work rather than an exception in the original request."
   ]
  },
  {
   "heading": "Define the cause categories",
   "paragraphs": [
    "Use a small set of causes that the team can act on. Common categories include an unclear request, a missing page, an expired document, an illegible image, a wrong period, a wrong borrower, and a document the borrower cannot access. Add a category for a team-side delay and one for an unclassified item. A list of twenty causes will not be applied consistently.",
    "Write a one-line definition and an example for each cause. An unclear request means the borrower sent what was asked but the request did not name the needed item. A missing page means the document was otherwise correct. The definitions should be specific enough that two reviewers classify the same exception the same way."
   ]
  },
  {
   "heading": "Avoid blame as a category",
   "paragraphs": [
    "A category called borrower error is not useful because it does not say what to change. The same outcome may come from a request that assumed knowledge, a portal that hid the page count, or a document the borrower genuinely could not obtain. Classify the mechanism rather than the person. That shift turns the review into a process conversation.",
    "If a cause is genuinely outside the team's control, such as a bank that will not issue a statement for a closed account, record it as an external constraint. That category is still actionable because the team can document the alternative source it accepted. Do not mix external constraints with avoidable request errors. Record the alternative source and the approval so the exception is still auditable."
   ]
  },
  {
   "heading": "Evidence standard",
   "paragraphs": [
    "Use the request text, the uploaded document, the condition note, and the resolution message as the primary sources. Record the exact request, the date, and the channel. Then record what arrived and what was missing. A classification without the request text is a guess about what the borrower was asked.",
    "If the request was verbal, record the note made after the call and mark it as verbal. A verbal request may have been clear in the moment but leave no record for the reviewer. That limitation is itself a finding. Note the unverifiable share rather than dropping those exceptions from the sample."
   ]
  },
  {
   "heading": "Sampling and collection",
   "paragraphs": [
    "Sample exceptions across document types, processors, and loan stages. Include exceptions that were resolved on the first response and those that required several. A sample of only the difficult cases shows the failure modes but not how often they occur. Record the selection rule and the period.",
    "Collect the request and the response together so the sequence is visible. An exception that looks like a borrower delay may have started with a request that named the wrong month. Read the original wording before assigning the cause. Freeze the sample and keep the list with the report."
   ]
  },
  {
   "heading": "Analysis and reporting",
   "paragraphs": [
    "Report the share of exceptions by cause and the median number of responses per exception. Show the top three causes with an example and the change each one suggests. A table with cause, count, share, and median responses is more useful than a single total. Pair the result with the volume of requests in the period.",
    "Group the causes by whether the team controls the fix. An unclear request is a team fix, while a bank closure is an external constraint. The split shows how much of the rework is preventable. It also prevents the team from treating every exception as a borrower problem."
   ]
  },
  {
   "heading": "Limits and sources of error",
   "paragraphs": [
    "The request record may be incomplete, and the borrower may have misunderstood a clear message. The classification describes the recorded interaction, not the borrower's intent. Review a sample with the people who sent the requests before drawing a conclusion. They can explain a cause the record does not show.",
    "The categories can drift if new document types are added without a definition. Review the category list each quarter and merge any that are rarely used. The cited sources describe documentation and disclosure expectations, not a benchmark for exception causes. Use the result to compare the team with itself."
   ]
  },
  {
   "heading": "Review cadence",
   "paragraphs": [
    "Repeat the review monthly or quarterly, depending on volume. Keep the categories stable so the comparison is meaningful. Review the results with the processing team and the borrower communication owner. Choose one cause to fix and check the next period. Record the change and the result beside the baseline.",
    "When a portal or a request template changes, mark the date and treat the next result as a new baseline. A new upload flow can reduce missing pages without changing the request. Ask whether the capture method or the definition changed before claiming an improvement. Keep the request examples with the baseline so the team can see what changed."
   ]
  },
  {
   "heading": "What to fix first",
   "paragraphs": [
    "Start with the cause that is both common and clearly within the team's control. An unclear request is usually the best first target because the fix is a wording change. A missing page may need a page count in the request. A wrong period may need an example. Choose one cause and one document type. Record the change beside the baseline so the next review can see what was tested.",
    "Test the change on a small group and compare the next period. Ask the reviewer whether the new request reduced the back-and-forth. If the cause does not move, the problem may be the channel or the borrower's access. A short conversation with the people doing the work is often faster than another data pull."
   ]
  },
  {
   "heading": "Communication",
   "paragraphs": [
    "Share the classification with the team in plain language and avoid ranking individuals. The purpose is to improve the request, not to identify who caused the most rework. Use examples that show the wording before and after. Ask the team which cause they think is easiest to fix first.",
    "When a borrower is affected by an unclear request, correct the request and acknowledge the extra step. Do not ask the borrower to guess what was meant. A short apology and a precise follow-up preserve the relationship and reduce the chance of another partial response. Record the correction in the file so the next reviewer knows the earlier request was incomplete."
   ]
  },
  {
   "heading": "Data handling and privacy",
   "paragraphs": [
    "Use a loan key and only the fields needed for the classification. Remove names, account numbers, and addresses when a category is enough. Keep the request text only when it is needed to classify the cause, and redact personal details. Store the sample in the approved system and limit access.",
    "Do not use a real borrower document as a training example without approval. Create a fictional example that preserves the structure but removes the identity. The organization's privacy policy controls the retention and sharing of the sample. Record any exception and its approval."
   ]
  },
  {
   "heading": "Keeping the method usable",
   "paragraphs": [
    "Keep the category list short and visible beside the queue. A reviewer should be able to classify an exception in a few seconds. If the list requires a manual to use, it will be skipped during a busy day. Review the list with the team after the first month and remove categories that are not used.",
    "Store the definitions and the examples with the report. Name an owner who updates them when a document type or a portal changes. A classification method is only useful if it survives turnover and system changes. The next reviewer should be able to apply it without asking the original author."
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
 "slug": "where-document-request-wording-changes-borrower-response-time",
 "title": "Where document request wording changes borrower response time",
 "summary": "A review method for testing whether clearer mortgage document request wording shortens borrower response time without hiding slow files.",
 "cluster": "Borrower communication",
 "publishedAt": "2026-11-09",
 "finding": "Request wording affects response time mainly at the first contact, so the useful comparison is between complete first responses and the follow-up cycles that vague wording creates.",
 "thumbnail": "/thumbnails/november-09/where-document-request-wording-changes-borrower-response-time.webp",
 "sections": [
  {
   "heading": "Question and scope",
   "paragraphs": [
    "This brief asks where the wording of a mortgage document request changes how quickly a borrower responds. The unit is one request on one requirement, from the time the request is sent to the time an acceptable response arrives. The question is practical because a processor can change wording faster than they can change a portal or a staffing level. A small wording change may remove a whole follow-up cycle.",
    "The scope should name the document types, the channels, and the loan stages. A request sent through a portal may behave differently from one sent by email or spoken on a call. Include requests that were answered on the first response and requests that needed several. Exclude requests that were never sent, because they do not test the wording."
   ]
  },
  {
   "heading": "Define the request event",
   "paragraphs": [
    "A request event is the first message that asks for a specific document, plus any follow-up that repeats the ask. Record the timestamp, the channel, the sender, and the exact wording. If the request was verbal, record the note made after the call. The first request is the main event because later messages are shaped by the first response.",
    "Distinguish a request from a reminder. A reminder repeats an existing ask without new information, while a follow-up may add a page range or an example. Both affect response time, but they answer different questions. Keep the first request and the follow-up as separate events so the analysis does not merge them."
   ]
  },
  {
   "heading": "Measure response time",
   "paragraphs": [
    "Measure from the send time to the time the acceptable document arrives, not to the time someone opens the message. Use the upload timestamp or the received timestamp in the system of record. If the document arrives after hours, keep the actual time and report the business-hour version separately. Mixing the two hides the delay.",
    "Report the median and the share of requests answered within one business day. A median alone can hide a long tail of files that take a week. Pair the response time with the number of follow-ups per request. A fast first response with three follow-ups is not a good outcome."
   ]
  },
  {
   "heading": "Evidence standard",
   "paragraphs": [
    "Use the message log, the document portal, and the condition record as the primary sources. Record the exact wording and the document that satisfied the request. If the borrower sent a partial response, record that response and the next request. A response is only complete when the reviewer accepts it against the condition.",
    "If the message log is incomplete, mark the request as partially verifiable rather than reconstructing the wording from memory. The wording is the variable being tested, so a guessed version cannot support the comparison. Keep the sample list and the messages together so another reviewer can check the classification. Note the missing record in the sample so the unverifiable share is visible."
   ]
  },
  {
   "heading": "Sampling and collection",
   "paragraphs": [
    "Compare requests that use the page-level wording with requests that use the older, general wording. Sample across processors and document types so the result is not driven by one person. Include a similar number of each version. If the volume is small, report the count and avoid treating a small difference as meaningful.",
    "Collect the request and the response in one pass and freeze the sample at a stated date. Do not drop a request because the borrower was difficult, because those cases may show where the wording fails. Record the channel and the loan stage beside each request. Keep the selection rule with the report."
   ]
  },
  {
   "heading": "Analysis and reporting",
   "paragraphs": [
    "Report the median response time, the share answered in one business day, and the number of follow-ups for each wording version. Show the result by document type, because a bank statement and a tax return may respond differently to the same wording. A single average across all types can hide the place where the change works. Show the count of requests in each version so the reader can judge the weight.",
    "Group the slow responses by cause, such as a partial response, a wrong period, or a document the borrower could not access. That grouping shows whether the wording improved completeness or only speed. The report should end with the document type where the new wording made the largest difference. Name the change that would address the largest group."
   ]
  },
  {
   "heading": "Limits and sources of error",
   "paragraphs": [
    "Response time depends on the borrower's schedule, the bank's hours, and the channel. A wording change cannot remove those constraints. The comparison should note holidays, weekends, and any period when the team changed its follow-up rule. A slow week may reflect the calendar rather than the message.",
    "The sample describes the requests reviewed and not the whole operation. Borrowers differ in their familiarity with mortgage documents, and a wording that works for one group may not work for another. Record the dates of any holidays or channel outages that overlapped the sample. The cited sources describe disclosure and communication expectations, not a benchmark for response time. Use the result to test a specific change."
   ]
  },
  {
   "heading": "Review cadence",
   "paragraphs": [
    "Repeat the review after a wording change has been in use long enough to produce a comparable sample. Keep the definitions and the measurement window stable. Review the result with the processors who send the requests, because they see the replies. Choose one document type to revise next.",
    "When the portal or the message template changes, mark the date and treat the next result as a new baseline. A new upload flow can change response time without changing the wording. Ask whether the capture method changed before claiming an improvement. Keep the old wording sample so the comparison is not lost."
   ]
  },
  {
   "heading": "What to fix first",
   "paragraphs": [
    "Start with the request that most often produces a partial response. Add the period, the page range, and the acceptable source in the first message. Show a small example if the document is easy to misidentify. Test the change on one document type and compare the next period.",
    "Do not rewrite every request at once. A broad change makes it hard to see which wording helped. Choose the request with the highest volume and the clearest gap. Keep the old wording for a comparison group if the volume allows. That comparison is the evidence for the next change. Keep the approved wording beside the measurement rule so a later reviewer can see exactly which version produced the result. Record it in the report."
   ]
  },
  {
   "heading": "Communication",
   "paragraphs": [
    "Tell the borrower what to send, why it is needed, and when it is needed. Avoid implying that the borrower did something wrong. A request that explains the purpose is easier to act on than one that only lists a document. Keep the tone direct and helpful.",
    "If the borrower cannot access the document, offer the acceptable alternatives the program allows. Record the alternative and the approval. Do not ask the borrower to guess which substitute is acceptable. A clear option reduces the chance of another cycle."
   ]
  },
  {
   "heading": "Data handling and privacy",
   "paragraphs": [
    "Keep the request text and the response metadata under a loan key. Remove names and account numbers when the analysis only needs the wording and the timing. Do not store the borrower's document in an unapproved tool. Use the approved system for the sample and limit access to the review team.",
    "If a message contains personal details, redact them before sharing the finding. Use a fictional example in training rather than a real request. The organization's privacy and security policy controls retention. Record any exception and who approved it."
   ]
  },
  {
   "heading": "Keeping the result useful",
   "paragraphs": [
    "Store the approved wording, the measurement rule, and the result together. Name an owner who updates the wording when a program or a portal changes. Review the approved wording with the team each quarter and remove versions that no longer apply. A library that grows without review becomes unused.",
    "Check the result with the people who answer borrower questions, not only with the reporting team. They can explain why a message worked or failed in a real conversation. That explanation is more useful than another chart. Use it to choose the next wording change."
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
   "label": "U.S. Bureau of Labor Statistics, Loan Officers",
   "url": "https://www.bls.gov/ooh/business-and-financial/loan-officers.htm"
  }
 ]
},
{
 "slug": "how-handoff-notes-affect-file-review-time-in-a-mortgage-queue",
 "title": "How handoff notes affect file review time in a mortgage queue",
 "summary": "A measurement brief on whether written mortgage handoff notes reduce the time a reviewer spends reconstructing a file.",
 "cluster": "Pipeline operations",
 "publishedAt": "2026-11-09",
 "finding": "Handoff notes reduce review time when they record the decision, the source, and the next action, because the next reviewer spends less time reconstructing why a file changed.",
 "thumbnail": "/thumbnails/november-09/how-handoff-notes-affect-file-review-time-in-a-mortgage-queue.webp",
 "sections": [
  {
   "heading": "Question and scope",
   "paragraphs": [
    "This brief asks whether a written handoff note changes the time the next person spends reviewing a mortgage file. The unit is one file review that follows a handoff, from the time the reviewer opens the file to the time the review decision is recorded. The question matters because a note takes time to write, and the team needs to know whether it saves more time than it costs. A short note that prevents a repeat question may pay for itself even if it takes a minute to write.",
    "The scope should name the handoff types, such as processor to underwriter, processor to closer, and closer to post-closing. Include reviews that happened after a verbal conversation and reviews that happened after a written note. Exclude reviews with no prior handoff, because they do not test the note. Record the handoff type beside each review so the groups remain comparable."
   ]
  },
  {
   "heading": "Define a handoff note",
   "paragraphs": [
    "A handoff note is a record that states what changed, who decided, what source supports the change, and what happens next. A status change alone is not a note because it does not explain the reason. A chat message may be a note if it contains those elements and is stored with the file. The definition should focus on the content, not the tool.",
    "Classify notes as complete, partial, or absent. A complete note has the decision, the source, the owner, and the next action. A partial note has some of those fields, and an absent note has none. The classification lets the review compare review time with note quality rather than only with the presence of a note."
   ]
  },
  {
   "heading": "Measure review time",
   "paragraphs": [
    "Measure from the moment the reviewer opens the file to the moment the decision is recorded. Use the system timestamps rather than a self-reported estimate. If the review is interrupted, record the interruption and exclude it only under a stated rule. A review that spans a lunch break is not comparable to one that runs continuously.",
    "Separate the time spent reading from the time spent waiting for another person. A note cannot reduce the wait for an underwriter's answer. Report the two parts so the result shows where the note helps. A total review time that includes waiting will understate the effect of a good note."
   ]
  },
  {
   "heading": "Evidence standard",
   "paragraphs": [
    "Use the file activity log, the note itself, and the reviewer's decision record as the primary sources. Record the handoff type, the note quality, the review time, and whether the reviewer had to contact another person. The contact count is a useful secondary measure because a good note often prevents a question. If the reviewer had to ask a question, record who was asked and how long the answer took.",
    "If the reviewer's time is not logged, use a structured observation for a small sample. Record the start and end time and the reason for any pause. Do not rely on memory at the end of the day. A short observation with a clear method is more reliable than a large sample with estimated times."
   ]
  },
  {
   "heading": "Sampling and collection",
   "paragraphs": [
    "Sample reviews across handoff types and across reviewers. Include files with complete notes, partial notes, and no notes so the comparison has a baseline. If the volume is small, observe every review in the period. If the volume is large, use consecutive reviews within each group and record the selection rule.",
    "Collect the note and the review time together. A note that was written after the review cannot have helped the reviewer, and the timestamp will show the sequence. Record the systems searched and any access limits. Freeze the sample and keep the list with the result."
   ]
  },
  {
   "heading": "Analysis and reporting",
   "paragraphs": [
    "Report the median review time by note quality and by handoff type. Show the share of reviews that required a follow-up contact and the average number of contacts. A complete note should reduce both the review time and the contacts if it is doing its job. Pair the result with the volume so a small group is not overread. A note that leaves out the next action will send the reviewer back to the same person.",
    "Group the reviews by reviewer only when the sample is large enough to avoid identifying individuals unfairly. The purpose is to find a shared standard, not to rank people. If one handoff type has long reviews across several reviewers, the problem may be the file or the note format rather than the person. Report the handoff type beside the reviewer grouping so the pattern is not misread."
   ]
  },
  {
   "heading": "Limits and sources of error",
   "paragraphs": [
    "Review time depends on the complexity of the file, not only on the note. A complex file with a good note may still take longer than a simple file with no note. The analysis should compare similar file types or record complexity as a factor. A raw average across all files will mix the two effects.",
    "The observation itself can change behavior, and a reviewer may work faster when watched. The sample should note the observation method and avoid claiming a precise effect. The cited sources describe recordkeeping and security expectations, not a benchmark for review time. Use the result to compare the team with itself."
   ]
  },
  {
   "heading": "Review cadence",
   "paragraphs": [
    "Repeat the review after a note template has been in use for a full period. Keep the definitions and the measurement method stable. Review the result with the people who write and read the notes. Choose one handoff type to improve and check the next period.",
    "When the file system or the note template changes, mark the date and treat the next result as a new baseline. A new template can change both the note quality and the time to write it. Ask whether the capture method changed before claiming an improvement. Keep the earlier note template so the change can be compared."
   ]
  },
  {
   "heading": "What to fix first",
   "paragraphs": [
    "Start with the handoff type that has the longest review time and the highest share of follow-up contacts. Add the decision, source, owner, and next action to the note template. Test the template on a small group and compare the next period. A complete note should reduce the contacts first.",
    "Do not require a long narrative. A note that takes ten minutes to write will not be used during a busy day. Keep the template short and make the source a link or a page reference. The goal is a note that a reviewer can read in under a minute."
   ]
  },
  {
   "heading": "Training and examples",
   "paragraphs": [
    "Show the team two or three real examples of a complete note and explain why each one works. Use examples from different handoff types so the format does not look like a closing-only tool. Ask the team to rewrite a weak note in the session. That practice is more useful than a written policy.",
    "Include a short section on what not to write, such as opinions about colleagues or details unrelated to the file. A note that blames someone is harder to use and may create a personnel issue. Keep the training focused on the decision and the evidence. Review the examples when the template changes."
   ]
  },
  {
   "heading": "Communication",
   "paragraphs": [
    "Explain to the team why the note matters: it helps the next person and it protects the person who made the decision. A note is not extra paperwork when it prevents a repeat call or a reopened condition. Share the review-time result with the team so they can see the effect. Show a concrete example of a note that saved a call.",
    "Do not use the review to criticize a person's writing style. The measure is whether the next reviewer can act, not whether the note is elegant. Ask the reviewers what information they needed and were missing. Use that answer to improve the template."
   ]
  },
  {
   "heading": "Keeping the measure current",
   "paragraphs": [
    "Store the note template, the definitions, and the sample with the result. Name an owner who updates the template when a system or a handoff changes. Record the date and the reason for each change. A measure that is redefined without a note cannot be compared over time.",
    "Review the measure with the people who work the queue, not only with management. They can explain why a review took longer and what would have helped. That explanation is the bridge between a number and a change. Without it, the report becomes another document nobody uses."
   ]
  }
 ],
 "sources": [
  {
   "label": "National Institute of Standards and Technology, Cybersecurity Framework",
   "url": "https://www.nist.gov/cyberframework"
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
  },
  {
   "label": "Freddie Mac Single-Family Seller/Servicer Guide",
   "url": "https://guide.freddiemac.com/"
  }
 ]
},
{
 "slug": "measuring-title-item-age-before-the-closing-week",
 "title": "Measuring title item age before the closing week",
 "summary": "A measurement method for open title items in the weeks before closing, with definitions, sampling, and escalation thresholds.",
 "cluster": "Closing preparation",
 "publishedAt": "2026-11-09",
 "finding": "Title item age is more useful than a count because a small number of old items can hold several closings, while many new items may clear without affecting a date.",
 "thumbnail": "/thumbnails/november-09/measuring-title-item-age-before-the-closing-week.webp",
 "sections": [
  {
   "heading": "Question and scope",
   "paragraphs": [
    "This brief asks how long title items remain open before the closing week and what the age pattern reveals about the closing pipeline. The unit is one open title item on one file, from the date it was identified to the date it was cleared or the observation date. The question matters because title work is often handled outside the main queue and can drift without appearing in a daily report. The answer helps the closing team decide which items need attention before the calendar is full.",
    "The scope should name the item types, such as payoffs, releases, surveys, easements, entity documents, and commitment updates. Include files that closed on time and files that moved. Exclude items that were never required for the file, because they do not test the title process. Keep the definitions with the report."
   ]
  },
  {
   "heading": "Define the title items",
   "paragraphs": [
    "List the items the team actually tracks and give each one a clear definition. A payoff is a quote plus a payment confirmation, not a request. A release is a recorded document, not a message from the servicer. A survey is the final document, not the order. The definition should name the evidence that clears the item.",
    "Separate the commitment review from the item follow-up. The commitment may reveal several items, and each one needs its own row. A file-level status cannot show which item is old. The unit should be the item so the age is specific enough to act on."
   ]
  },
  {
   "heading": "Measure age correctly",
   "paragraphs": [
    "Measure from the date the item was identified, not the date it was last updated. A note added today does not reset the clock. If the item was identified before the commitment arrived, use the earlier date and note the source. Record both the age and the time since the last update so the reader can see whether anyone is working it.",
    "Use business days for the internal service standard and calendar days for the closing calendar view. State which one the report uses. A item that spans a holiday will look older in calendar days, and that difference matters when the team compares periods. Keep the calculation in one place."
   ]
  },
  {
   "heading": "Evidence standard",
   "paragraphs": [
    "Use the title commitment, the title partner's portal, the loan file, and the closing calendar as the primary sources. Record the item type, the date identified, the owner, the last action, and the evidence that cleared it. If the item is open, record the next action and the date it is due. An item with no next action is not being worked.",
    "If the title partner's record and the loan file disagree, record both and note which one the team treats as authoritative. A status that is cleared in one system and open in another is a finding about the handoff. Do not average the two or choose the more convenient one without a note. Ask the partner to confirm the authoritative status in writing when the two records differ."
   ]
  },
  {
   "heading": "Sampling and collection",
   "paragraphs": [
    "Take a snapshot of open title items at a fixed time each week for a quarter. Follow the items that clear and note the age at clearing. The snapshot shows what is open now, while the follow-up shows how long items take. Use both if the volume allows. If the volume is small, report every item and state the count.",
    "Record the systems searched and the date. If an item appears in two systems, keep one row and note the duplicate. Do not drop an item because it is difficult to classify. Use an unclassified category and report its size. That category is a finding about the title process."
   ]
  },
  {
   "heading": "Analysis and reporting",
   "paragraphs": [
    "Report the median and the oldest age for each item type, plus the number of items with no next action. Show the distribution, not only the average, because a few old items can pull the mean away from the typical experience. Pair the age with the number of files closing in the next two weeks so the reader sees the risk. Sort the report by closing date so the oldest items on the nearest files appear first.",
    "Group the items by owner and by source of the dependency. A payoff that waits on a servicer has a different fix from an entity document that waits on the borrower. The report should name the oldest items and the next action for each. That list is more useful than a single age for the pipeline."
   ]
  },
  {
   "heading": "Limits and sources of error",
   "paragraphs": [
    "Title work depends on third parties, and an item may be old because a county recorder or a servicer is slow. The review should distinguish a delay the team can fix from one it cannot. A short conversation with the title partner can explain a gap that the record does not show. Record the explanation with the result.",
    "The snapshot describes the items open at that time and not the whole operation. Volume, property mix, and partner performance can change the pattern. The cited public sources describe title and closing expectations, not a benchmark for item age. Use the result to compare the team with itself and to test a specific change."
   ]
  },
  {
   "heading": "Review cadence",
   "paragraphs": [
    "Run the snapshot weekly and review the full distribution monthly. Keep the item definitions and the age calculation stable. Review the oldest items with the title partner and the closing team. Choose one item type to improve and check the next period. Keep the earlier result so the change is visible.",
    "When a title partner or a system changes, mark the date and treat the next result as a new baseline. A new partner can reduce age without changing the team's process. Ask whether the source or the capture method changed before claiming an improvement. Keep the earlier snapshot so the comparison survives the change."
   ]
  },
  {
   "heading": "What to fix first",
   "paragraphs": [
    "Start with the item type that has the oldest items and a clear owner. A payoff may need an earlier request, while an entity document may need a question at intake. Do not apply the same fix to every type. The age is a symptom, and the type tells you where to look.",
    "Add a next-action date to every item and review the overdue ones. An item with no date will drift. Test the change on one item type and compare the age distribution. If the oldest items move, extend the practice to the next type."
   ]
  },
  {
   "heading": "Partner communication",
   "paragraphs": [
    "Share the open item list with the title partner before the weekly review. The partner can check the status and bring the answer to the meeting. Agree on the status terms so both sides mean the same thing by cleared. A shared definition prevents a false sense of progress.",
    "If a partner repeatedly misses the response time, escalate through the relationship owner with the item list and the dates. A factual pattern is more useful than a single complaint. Record the escalation and the response so the next review can see whether it helped. Follow up with a short note that records the response and the new date."
   ]
  },
  {
   "heading": "Data handling and privacy",
   "paragraphs": [
    "Use a loan key and only the fields needed for the review. Remove borrower names, property addresses, and account numbers when a category is enough. Keep the source reference rather than a copy when the document contains personal data. Store the sample in the approved system and limit access.",
    "Do not share a title document with a partner outside the approved channel. Use the partner's portal or the agreed secure method. The organization's privacy and security policy controls retention. Record any exception and who approved it."
   ]
  },
  {
   "heading": "Keeping the measure current",
   "paragraphs": [
    "Store the item definitions, the snapshot rule, and the result together. Name an owner who updates the definitions when a partner or a program changes. Record the date and the reason for each change. A measure that is redefined without a note cannot be compared over time.",
    "Review the measure with the closing coordinator and the title contact. They can explain why an item stayed open and what would have helped. Use that explanation to choose the next change. The goal is a shorter, clearer path to a cleared title item."
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
 "slug": "what-field-error-rates-reveal-about-a-mortgage-file-qa-sample",
 "title": "What field error rates reveal about a mortgage file QA sample",
 "summary": "An analysis method for mortgage file field error rates, including the unit, the evidence, the scoring, and the limits of a small sample.",
 "cluster": "Quality review",
 "publishedAt": "2026-11-09",
 "finding": "A field error rate is only meaningful when the field list, the source of truth, and the consequence of each error stay fixed across samples.",
 "thumbnail": "/thumbnails/november-09/what-field-error-rates-reveal-about-a-mortgage-file-qa-sample.webp",
 "sections": [
  {
   "heading": "Question and scope",
   "paragraphs": [
    "This brief asks what a mortgage file QA sample can reveal about field error rates and where those errors originate. The unit is one field on one file, compared with the source record that should control its value. The question matters because a completion check can pass while a field is wrong, and a wrong field can travel into a disclosure or a closing package. The answer helps the team decide whether to fix a field, a form, or a review step.",
    "The scope should name the fields, the loan stages, and the file types included. A field that affects pricing may need a stricter standard than an internal note. Include files from several processors and stages so the result is not driven by one group. Exclude fields that have no source record, because they cannot be tested against evidence."
   ]
  },
  {
   "heading": "Define a field error",
   "paragraphs": [
    "A field error exists when the value in the file does not match the controlling source, or when the value is missing but required. A difference that is explained by a documented rule is not an error. A value that is correct but entered in the wrong field is still an error because the file will use it incorrectly. The definition should cover both value and placement.",
    "Classify the error by consequence, such as a change to a legal or financial figure, a change to a required disclosure field, or an internal inconsistency. Use a scale with written definitions so two reviewers score the same finding the same way. The consequence score is what turns a raw rate into a priority. Record the score beside the finding so the report can be sorted by weight."
   ]
  },
  {
   "heading": "Set the unit and population",
   "paragraphs": [
    "Use the field as the unit and the file as the grouping level. A file with ten fields checked can produce several errors, and each one needs its own row. Report both the share of fields with an error and the share of files with at least one error. The two measures answer different questions about breadth and density.",
    "Define the population as the files reviewed during the window, including files that passed. A sample of only failed files shows the failure modes but not the rate. If the sample is drawn from a queue, state the selection rule. The reader should know which files had a chance to be included."
   ]
  },
  {
   "heading": "Evidence standard",
   "paragraphs": [
    "Use the source document, the application, the disclosure, and the closing package as the primary sources. Record the field, the value in the file, the value in the source, and the page or record that supports it. If the source is a calculation, record the inputs. A finding without the source cannot be verified later.",
    "If the source itself is ambiguous, mark the field as unresolved rather than counting it as an error. The unresolved share is a finding about the standard, not a failure of the reviewer. Report it beside the error rate. A team that hides ambiguity will produce a rate that looks better than the file quality."
   ]
  },
  {
   "heading": "Sampling and collection",
   "paragraphs": [
    "Sample across processors, loan types, and stages. Include files that are in process, at closing, and after closing so the review sees errors at different points. Use a fixed selection rule, such as every fifth file or a random draw within each group. Record the rule and the date.",
    "If a file cannot be reviewed, replace it only under the stated rule and note the replacement. A sample that is quietly adjusted to include easier files will not tell the team anything useful. Keep the sample list with the result so the work can be repeated. Note the replacement and the reason so the sample remains auditable."
   ]
  },
  {
   "heading": "Analysis and reporting",
   "paragraphs": [
    "Report the error rate by field, by stage, and by consequence level. Show the count beside each rate so a rare field is not treated as a major problem. A total rate can hide a high rate in one field that matters more than the others. Pair the rate with the volume of files reviewed in the period.",
    "Group the findings by cause, such as a typing error, a stale value, a wrong source, or a missing validation. The cause determines the fix. A typing error may need a reminder, while a wrong source needs a clearer instruction. A repeated cause across several files points to a standard gap rather than a person."
   ]
  },
  {
   "heading": "Limits and sources of error",
   "paragraphs": [
    "A small sample has a wide margin of uncertainty, and a difference of one or two findings can change the rate substantially. The report should show the count and avoid claiming a precise improvement from a small batch. Use the same field list and sample size each period so the comparison is fair. Report the count and the rate together so the reader can see the uncertainty.",
    "The reviewer may miss an error or classify an ambiguous value differently. A second reviewer on a subset can check consistency. The cited sources describe documentation and disclosure expectations, not a benchmark for field error rates. Use the result to compare the team with itself and to test a specific change."
   ]
  },
  {
   "heading": "Review cadence",
   "paragraphs": [
    "Run the sample monthly or quarterly, depending on volume. Keep the field list and the scoring definitions stable. Review the result with the people who work the files and with the underwriter. Choose one field to improve and check the next sample. Keep the earlier result so the change is visible.",
    "When a system or a form changes, mark the date and treat the next result as a new baseline. A new validation rule can reduce errors without changing the process. Ask whether the definition or the capture method changed before claiming an improvement. Keep the earlier field list so the comparison is not lost."
   ]
  },
  {
   "heading": "What to fix first",
   "paragraphs": [
    "Start with the field that has both a high error rate and a high consequence score. A wrong loan amount is a better first target than a misspelled middle name. Fix the source instruction or the validation before adding another review step. A fix that adds work will be skipped under pressure.",
    "Test the change on one field and compare the next sample. If the rate falls, keep the change and move to the next field. If it does not, the cause may be workload or training rather than the instruction. Record the result and the next experiment."
   ]
  },
  {
   "heading": "Feedback to the team",
   "paragraphs": [
    "Share the findings with the file owners before the report is finalized. They can explain the source and suggest a fix that prevents the error. That conversation turns a finding into a training point. It also prevents the review from becoming a surprise audit.",
    "Do not rank individuals by error rate. The sample is small and the file mix varies. Focus on the field and the cause. Recognize the people who identified a standard gap, because that finding is more valuable than a clean sample."
   ]
  },
  {
   "heading": "Data handling and privacy",
   "paragraphs": [
    "Use a loan key and only the fields needed for the review. Remove names, addresses, and account numbers when a category is enough. Keep the source reference rather than a copy when the document contains personal data. Store the sample in the approved system and limit access.",
    "If a finding must be shown in training, use a fictional example that preserves the structure but removes the identity. Do not share a borrower document outside the approved channel. The organization's privacy and security policy controls retention and access. Get approval before using any real file in a training session."
   ]
  },
  {
   "heading": "Keeping the measure current",
   "paragraphs": [
    "Store the field list, the scoring definitions, and the sample with the result. Name an owner who updates the list when a form or a system changes. Record the date and the reason for each change. A measure that is redefined without a note cannot be compared over time.",
    "Review the measure with the people who work the files, not only with management. They can explain why a field was wrong and what would have helped. That explanation is the bridge between a number and a change. Use it to choose the next field to improve."
   ]
  }
 ],
 "sources": [
  {
   "label": "Fannie Mae Selling Guide",
   "url": "https://selling-guide.fanniemae.com/"
  },
  {
   "label": "Freddie Mac Single-Family Seller/Servicer Guide",
   "url": "https://guide.freddiemac.com/"
  },
  {
   "label": "U.S. Department of Housing and Urban Development, HUD Handbook 4000.1",
   "url": "https://www.hud.gov/program_offices/housing/sfh/handbook_4000-1"
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
 "slug": "how-vendor-access-reviews-limit-mortgage-file-exposure",
 "title": "How vendor access reviews limit mortgage file exposure",
 "summary": "An analysis of vendor and staff access reviews for mortgage systems, with scope, evidence, cadence, and limits.",
 "cluster": "Vendor management",
 "publishedAt": "2026-11-09",
 "finding": "Access reviews limit exposure when they test the business need, the access level, and the removal evidence for each account rather than only counting accounts.",
 "thumbnail": "/thumbnails/november-09/how-vendor-access-reviews-limit-mortgage-file-exposure.webp",
 "sections": [
  {
   "heading": "Question and scope",
   "paragraphs": [
    "This brief asks how a recurring vendor access review limits the exposure of mortgage file data. The unit is one account on one system, from the access request to the current permission or the removal. The question matters because mortgage files contain income, credit, and property records that many vendors need for a period, and access often outlives the need. The answer helps the business owner decide how often to review and what evidence to keep.",
    "The scope should name the systems that hold borrower records and the account types, such as staff, vendor, temporary, and shared service accounts. Include accounts with read, download, edit, and administration rights. Exclude systems that hold no borrower data, even if they are part of the workflow. Keep the scope with the report."
   ]
  },
  {
   "heading": "Define an access review",
   "paragraphs": [
    "An access review is a documented check that each account still has a business reason, the correct access level, and an owner. It is not a count of accounts or a confirmation that a list exists. The review should produce a decision for each account: keep, change, or remove. A review without decisions does not limit exposure.",
    "Distinguish a periodic review from an event-driven review. The periodic review covers the full list on a schedule, while the event-driven review follows a role change, a departure, or the end of a vendor project. Both are needed because a periodic review can be months away when a person leaves. Record which type of review produced each decision so the evidence is clear."
   ]
  },
  {
   "heading": "Evidence standard",
   "paragraphs": [
    "Use the identity system, the application's user list, the vendor register, and the offboarding record as the primary sources. Record the account, the system, the access level, the owner, the business reason, and the date last reviewed. If the account belongs to a vendor, record the contract end date and the data-sharing terms. Keep the source records with the decisions so a later reviewer can repeat the check.",
    "For each removal, record the date and the evidence that the account was disabled or the permission changed. A ticket that says done without a system record is weak evidence. If the system produces a log, keep the reference. The review should be able to show what changed, not only what was requested."
   ]
  },
  {
   "heading": "Sampling and collection",
   "paragraphs": [
    "Review the full account list for the systems in scope if the volume allows. If the list is large, sample across systems, account types, and access levels, and include every administrator account. Administrator accounts deserve a full check because they can change other permissions. Record the selection rule.",
    "Collect the account list and the business reason together. An account without an owner is a finding, not an incomplete row. If the owner cannot be identified, mark the account for removal or escalation. Keep the evidence with the review so a later reviewer can repeat the check."
   ]
  },
  {
   "heading": "Analysis and reporting",
   "paragraphs": [
    "Report the number of accounts reviewed, the number changed, and the number still awaiting removal. Break the result down by system and by account type. A total that combines staff and vendor accounts hides where the problem sits. Show the number of accounts with no owner and the number with access above the task need.",
    "Group the removals by cause, such as departure, role change, contract end, or duplicate account. The cause shows whether the offboarding process or the request process needs work. Pair the result with the time from the trigger to the removal. A removal that takes weeks leaves a window that the review should measure."
   ]
  },
  {
   "heading": "Limits and sources of error",
   "paragraphs": [
    "The identity system may not include every application, and a vendor may have access through a shared account that is not tied to an individual. The review should note those gaps rather than treating the list as complete. A short interview with the system owner can reveal access paths that the list misses. List the systems that could not be checked so the gap is visible.",
    "The review describes the accounts checked and not the whole security posture. The cited sources describe security and privacy expectations, not a specific retention or access standard for a mortgage company. Use the result to compare the organization with itself and to test a specific change. Do not treat a clean review as proof that no exposure exists."
   ]
  },
  {
   "heading": "Review cadence",
   "paragraphs": [
    "Run the periodic review at least quarterly and after any major system change. Trigger an event review on role change, departure, and contract end. Keep the account types and the access definitions stable so the comparison is meaningful. Review the result with the security contact and the business owners.",
    "When a system or a vendor changes, mark the date and treat the next result as a new baseline. A new identity tool can improve the evidence without changing the process. Ask whether the source or the capture method changed before claiming an improvement. Keep the earlier account list so the change can be compared."
   ]
  },
  {
   "heading": "What to fix first",
   "paragraphs": [
    "Start with administrator accounts that have no clear owner or an expired business reason. Then review vendor accounts with an expired contract. These accounts carry the highest potential exposure and the clearest fix. Remove or reduce access before adding a new review step.",
    "Next, fix the offboarding trigger so a departure or role change produces a review automatically. A manual reminder will be missed during a busy week. Test the trigger with one role change and confirm the removal. Record the result and the time it took. Record the date of each removal in the same report so a slow offboarding step is visible."
   ]
  },
  {
   "heading": "Offboarding and role changes",
   "paragraphs": [
    "Include access removal in the offboarding checklist and name the person who confirms it. The manager should confirm the business need, while the security contact confirms the technical removal. Record both confirmations and the date. A checklist item that only says notify IT is not enough.",
    "For a role change, review the old access before granting the new access. A person who moves to a different team may no longer need the old queue, and keeping both sets of permissions increases exposure. Record the change and the reason. Review the account again after the new role is established."
   ]
  },
  {
   "heading": "Communication",
   "paragraphs": [
    "Explain the review to the team as a way to protect borrower data and to keep access aligned with the work. Avoid framing it as a hunt for mistakes. Give people a simple way to confirm or remove their own access. A review that feels punitive will produce inaccurate lists.",
    "Share the result with the business owners and the security contact, not with the whole company. Keep the report factual and focused on the decisions. Recognize the teams that removed access promptly. The goal is a routine that people trust."
   ]
  },
  {
   "heading": "Data handling and privacy",
   "paragraphs": [
    "The access list contains names and system identifiers, so store it in the approved location and limit access to the review team. Do not send the list through an unapproved channel. Remove account numbers or personal details that are not needed for the review. Keep the evidence with the decisions.",
    "If a vendor needs to confirm an account, use the agreed secure method. Do not share a list of all accounts with a vendor. The organization's privacy and security policy controls retention. Record any exception and who approved it."
   ]
  },
  {
   "heading": "Keeping the review current",
   "paragraphs": [
    "Store the account list, the definitions, and the decisions with the result. Name an owner for the review and a backup so it happens during leave. Record the date and the reason for each change. A review that is redefined without a note cannot be compared over time.",
    "Review the process with the security contact and the system owners each quarter. They can explain why an account remained and what would make removal easier. Use that explanation to improve the request and offboarding steps. The goal is fewer unnecessary accounts, not a longer checklist. A small quarterly change is easier to sustain than a one-time cleanup. Review the contract end date beside the owner field so an expired agreement is visible in the same view."
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
   "label": "U.S. Small Business Administration",
   "url": "https://www.sba.gov/"
  }
 ]
}
];
