import type { ResearchPost } from './types';

export const november10ResearchPosts: readonly ResearchPost[] = [
 {
  "slug": "a-method-for-measuring-welcome-call-completion-before-document-collection",
  "title": "A method for measuring welcome call completion before document collection",
  "summary": "A measurement design for whether a same-day welcome call is completed before the first document request, with definitions, sampling, and limits.",
  "cluster": "Borrower communication",
  "publishedAt": "2026-11-10",
  "thumbnail": "/thumbnails/november-10/a-method-for-measuring-welcome-call-completion-before-document-collection.webp",
  "finding": "Welcome call completion is measurable only when the team defines what counts as a completed call, records the timestamp of the first document request, and compares files with similar intake complexity.",
  "sections": [
   {
    "heading": "Question and scope",
    "paragraphs": [
     "This brief asks whether a welcome call is completed before the first document request goes to the borrower. The unit is one new loan file observed from intake to the first request. The comparison is between files that meet the completion definition and files that do not. The question is operational because the timing of the call can shape how the borrower understands the request.",
     "Scope should name the loan types, the intake channel, and the team. A purchase file from a referral source may behave differently from a refinance file from a digital channel. Include both groups if the team serves them. Exclude files withdrawn before intake, because they do not test the call timing."
    ]
   },
   {
    "heading": "Define completion",
    "paragraphs": [
     "A completed call needs more than a dial attempt. Define it as a live conversation with the borrower or an authorized co-borrower that confirms contact details and the next document step. Record the date, the duration, and the person who made the call. A voicemail is an attempt, not a completion.",
     "The definition should also state whether a text exchange counts. If the team accepts a written confirmation, define what the message must contain. Do not let the definition drift between reviewers. Write it beside the call log so the same standard applies to every file."
    ]
   },
   {
    "heading": "Select the observation window",
    "paragraphs": [
     "Start the clock at the moment the file is assigned to intake. Stop it when the first document request is sent. The gap is the window in which the call can happen. A call after the request may still be useful, but it does not test the same question. Record both timestamps from the system, not from memory.",
     "Use a fixed window, such as the same business day, and state the cutoff time. A file assigned at four in the afternoon may not have a realistic chance to complete a call that day. Record the assignment time so the analysis can adjust. The window should reflect the team's actual service promise."
    ]
   },
   {
    "heading": "Record the call artifacts",
    "paragraphs": [
     "Capture the call note, the contact confirmations, and the next-step agreement. The note should show that the borrower understood the document process. A note that says the call was completed without any detail cannot support the definition. Use a short checklist in the note so the reviewer can see the content.",
     "Keep the attempt log as well. A file with three attempts and no answer is different from a file with no attempts. The attempt log shows whether the team tried. It also shows whether the borrower was unreachable, which belongs in the analysis as a separate state."
    ]
   },
   {
    "heading": "Compare document outcomes",
    "paragraphs": [
     "For each file, record whether the first document request was returned complete. Add the number of follow-up messages and the days to the first complete upload. Compare the groups after adjusting for file complexity. The outcome should be defined before the data is collected.",
     "A complete return means the requested items arrived and passed the intake check, not merely that something was uploaded. Use the same acceptance standard for both groups. If the standard changes during the period, mark the change and treat the result as a new baseline."
    ]
   },
   {
    "heading": "Control for file mix",
    "paragraphs": [
     "Files differ in borrower type, loan purpose, and document complexity. A self-employed borrower may need more documents than a salaried borrower. Record a small set of control variables so the comparison is not driven by mix. Do not build a model that the team cannot explain.",
     "At minimum, record the loan purpose, the income type, and the intake channel. If one group has more complex files, report the comparison within each segment. A simple table by segment is more useful than a single average that hides the difference."
    ]
   },
   {
    "heading": "Limits and error sources",
    "paragraphs": [
     "A completed call may reflect borrower availability rather than the quality of the script. A borrower who answers at noon may differ from one who works nights. The analysis should not claim that the call caused a better outcome. It can show an association that deserves a closer look.",
     "Call notes can be incomplete, and timestamps can be recorded late. Review a sample of notes against the call system to estimate the error. If the error is large, fix the capture before expanding the sample. The cited public sources describe borrower communication expectations, not a benchmark for completion rates."
    ]
   },
   {
    "heading": "Review cadence",
    "paragraphs": [
     "Repeat the review each quarter with the same definitions and window. Compare the result with the prior period and record any change in staffing or file mix. A new script or a new portal can change the result without changing the underlying behavior. Note the change before drawing a conclusion.",
     "Review the findings with the intake team and the processors who make the calls. Ask which parts of the script are hard to use. The people doing the work can explain a result that the data alone cannot. Keep the discussion focused on the process, not on individual performance."
    ]
   },
   {
    "heading": "What to fix first",
    "paragraphs": [
     "Start with the step that most often prevents a completed call, such as a missing phone number or a bad time of day. Fixing the contact data may improve completion more than rewriting the script. Test one change on a small group before rolling it out.",
     "Do not add more measures until the first one is reliable. A completion rate built on inconsistent notes will mislead the team. Choose one definition, one window, and one outcome. Then extend the review when the baseline is stable."
    ]
   },
   {
    "heading": "Communication",
    "paragraphs": [
     "Share the result as a process finding, not a scorecard. A low completion rate may reflect assignment timing or borrower schedules. Tell the team what the data shows and what it does not show. Ask for one change that the team can test.",
     "Tell borrowers only what they need to know about the process. Do not mention internal completion metrics or use them to pressure a borrower. The account owner should handle any date conversation. The measurement is for the team, not for the borrower."
    ]
   },
   {
    "heading": "Build the data collection sheet",
    "paragraphs": [
     "Build one row per file with the assignment time, the call time, and the first request time. Add the call outcome, the number of attempts, and the person who made the call. Record the loan purpose, the income type, and the intake channel so the file can be segmented. Keep the sheet in the same system as the call log so the timestamps do not have to be copied by hand.",
     "Add the first-request result, the number of follow-ups, and the days to the first complete upload. Use a fixed list of values for each field so the sheet can be summarized. Leave a note field for a case that does not fit the list. Review the sheet with the intake team before the sample begins, because a field nobody understands will be filled with guesses."
    ]
   },
   {
    "heading": "Set a coding reliability check",
    "paragraphs": [
     "Ask a second reviewer to code a sample of twenty files without seeing the first reviewer's result. Compare the completion status, the call outcome, and the first-request result. A disagreement on completion often means the definition includes a case the team has not discussed. Resolve the case and write the decision into the definition.",
     "Report the agreement rate before reporting the main result. A low rate means the team should revise the definitions or the sheet, not expand the sample. A high rate gives the comparison more credibility. Repeat the check when a new reviewer joins or when the call process changes."
    ]
   },
   {
    "heading": "Report by segment",
    "paragraphs": [
     "Show a table with the intake channel, the loan purpose, and the income type. For each row, report the file count, the share with a completed call, and the share with a complete first request. Add the median days to the first complete upload. A single overall rate can hide a segment where the call rarely happens.",
     "Keep small segments visible but mark them as small. A row with four files is still useful if the pattern is strong, but it should not drive a conclusion. Compare the segments with the same definitions and window. Note any segment that was added or removed during the period."
    ]
   },
   {
    "heading": "Turn the finding into one test",
    "paragraphs": [
     "Choose one change that the team can make within a week, such as confirming the phone number at application or moving the assignment cutoff earlier. Apply it to a small group and keep the prior period as the comparison. Measure the same completion and document outcomes. Do not change the script and the assignment rule at the same time.",
     "Run the test long enough to cover a normal mix of files, usually four to six weeks. Review the result with the people who make the calls before deciding to keep the change. A test that works in one week may fail in a busy week. Record the decision and the next review date."
    ]
   }
  ],
  "sources": [
   {
    "label": "Consumer Financial Protection Bureau, Owning a Home",
    "url": "https://www.consumerfinance.gov/owning-a-home/"
   },
   {
    "label": "U.S. Department of Housing and Urban Development, HUD Handbook 4000.1",
    "url": "https://www.hud.gov/program_offices/housing/sfh/handbook_4000-1"
   }
  ]
 },
 {
  "slug": "how-lock-desk-request-errors-cluster-by-form-field",
  "title": "How lock desk request errors cluster by form field",
  "summary": "A measurement brief on where lock desk requests fail by field, with a coding scheme, sampling plan, and limits.",
  "cluster": "Rate lock",
  "publishedAt": "2026-11-10",
  "thumbnail": "/thumbnails/november-10/how-lock-desk-request-errors-cluster-by-form-field.webp",
  "finding": "Lock desk request errors are easier to fix when they are coded by form field and request stage, because the pattern shows whether the cause is a label, a missing source, or a timing cutoff.",
  "sections": [
   {
    "heading": "Question and scope",
    "paragraphs": [
     "This brief asks where lock desk requests fail and whether the failures cluster by form field. The unit is one lock request submitted to the desk. The outcome is whether the request was confirmed as submitted, returned for correction, or declined. The question matters because each return adds a round trip near a price cutoff.",
     "Scope should name the products, the request channel, and the desk's operating hours. A request from a loan officer may differ from one prepared by a processor. Include both if they use the same form. Exclude duplicate submissions that repeat an open request."
    ]
   },
   {
    "heading": "Define an error",
    "paragraphs": [
     "An error is a request that cannot be processed without additional information or correction. A missing product, an unsupported term, or an unreadable attachment all qualify. A request that the desk can complete with a reasonable inference is not an error, but note the inference. The definition should be applied before the sample is coded.",
     "Separate a blocking error from a clarification. A blocking error stops the request, while a clarification may only slow it. Record both, but report them separately. Mixing the two makes the error rate look worse without showing where the work actually stops."
    ]
   },
   {
    "heading": "Choose the field taxonomy",
    "paragraphs": [
     "Use the form's own fields as the first level of the taxonomy. Add a small set of categories for missing attachments, authority issues, and pricing conflicts. Keep the list short so two coders can apply it consistently. A taxonomy with fifty codes will produce disagreement.",
     "Define each code with one example and one exclusion. For example, a missing note rate is a pricing field, while a rate that conflicts with the pricing sheet is a pricing conflict. The distinction tells the team whether to fix the form or the source. Write the definitions in a shared document."
    ]
   },
   {
    "heading": "Sample the requests",
    "paragraphs": [
     "Sample requests across the full operating day, including the last hour before the cutoff. Errors may cluster near the cutoff because preparation time is short. Include requests from each processor and each loan officer group. A sample from only the morning will miss the pressure period.",
     "Use consecutive requests within each time block, and record the selection rule. If the volume is small, review every request in the period. Keep the sample list with the coded results so another reviewer can repeat the work. Note any request that was withdrawn before the desk acted."
    ]
   },
   {
    "heading": "Code the errors",
    "paragraphs": [
     "Code the first blocking error and any additional errors that would have required a separate correction. Do not stop at the first error if the request has several. Record the field, the code, and a short description. The description should be specific enough to check later.",
     "Have a second person code a sample of the requests without seeing the first coder's result. Compare the two sets and resolve disagreements. A low agreement rate means the definitions need work. Do not report the distribution until the coding is reliable."
    ]
   },
   {
    "heading": "Compare volumes and timing",
    "paragraphs": [
     "Report error counts and rates by field, by processor group, and by time of day. A field with many errors may be poorly labeled, while a time block with many errors may need a cutoff change. Show the denominator beside each rate. A rate without a denominator is easy to misread.",
     "Look at the requests that needed more than one correction. A repeated correction may indicate a source document that was not updated. Compare those requests with the ones that passed on the first try. The difference often points to a missing check before submission."
    ]
   },
   {
    "heading": "Limits and error sources",
    "paragraphs": [
     "An error rate depends on the definition and the sample. A narrow definition will produce a lower rate than a broad one. The desk's own corrections may not be recorded, which can hide a repeated issue. Review the desk notes as well as the request form.",
     "The analysis cannot show whether a faster desk would have prevented a closing delay. It can show where requests fail and whether the failure is avoidable. Keep the claim at that level. The public pricing guidance describes rate lock terms, not a benchmark for request quality."
    ]
   },
   {
    "heading": "Review cadence",
    "paragraphs": [
     "Repeat the review monthly for the first quarter, then quarterly if the rate is stable. Compare the new distribution with the prior period and note any form change. A new field can shift the errors from one code to another. Mark the change before interpreting the trend.",
     "Share the result with the people who prepare the requests and the desk that receives them. Ask both groups which fields cause the most questions. The desk sees the pattern from the other side, and that view can explain a code that looks odd in the data."
    ]
   },
   {
    "heading": "What to fix first",
    "paragraphs": [
     "Start with the field that has both a high error rate and a high blocking effect. A missing lock period may stop the request, while a missing internal note may only slow it. Fix the blocking field first, even if another field has a higher count.",
     "Test the fix on a small group before changing the form for everyone. A required field can reduce errors, but it can also create a new workaround if the data is not available. Measure the rate after the change and compare it with the baseline."
    ]
   },
   {
    "heading": "Communication",
    "paragraphs": [
     "Report the finding as a form and process issue, not as a performance judgment. A processor who submits an incomplete request may be working from an outdated template. Show the pattern and ask for a fix that helps the work.",
     "Do not share individual error counts outside the review group. The purpose is to improve the form and the timing, not to rank people. Keep the borrower conversation separate from the internal analysis. The borrower needs a clear status, not the error taxonomy."
    ]
   },
   {
    "heading": "Build the request log",
    "paragraphs": [
     "Build one row per request with the submission time, the processor, the product, the term, the note rate, and the price. Add the attachments, the desk status, and the correction reason. Record whether the request was a quote or a lock, because the two have different outcomes. Keep the log beside the form so the fields match.",
     "Use a fixed list for the status and the correction reason. A free text reason will produce a different phrase for the same problem. Add a short note for an unusual case. Check the log against the desk's own record for one week before relying on it."
    ]
   },
   {
    "heading": "Test the coding with a second reviewer",
    "paragraphs": [
     "Have a second person code a sample of twenty requests without seeing the first result. Compare the field, the code, and the blocking status. A disagreement about blocking status is more serious than a disagreement about the label. Resolve it by reading the request and the desk response together.",
     "Write the resolution into the code definitions. Repeat the check after any change to the form. A coding scheme that only one person can apply is not ready for a trend. Report the agreement beside the error rate."
    ]
   },
   {
    "heading": "Report by time block and form version",
    "paragraphs": [
     "Break the requests into time blocks, including the last hour before the cutoff. Report the count and the error rate for each block. Then compare the current form with the prior version if one exists. A change in the form can move errors from one field to another without reducing the total.",
     "Show the denominator for every rate. A block with ten requests and three errors is different from a block with one hundred requests and three errors. Look for a block where the rate is high and the volume is meaningful. That is the first place to test a cutoff change."
    ]
   },
   {
    "heading": "Run one form change as a test",
    "paragraphs": [
     "Change one field at a time, such as making the lock period required or adding a product list. Keep the prior period as the comparison and measure the same error codes. Do not change the cutoff in the same test, because the two effects will be hard to separate. Record the date of the change on the log.",
     "Run the test for at least four weeks and include the last hour of the day. Ask the desk whether the change created a new question. A required field can reduce one error and create another if the data is not available. Keep the change only if the total blocking rate improves."
    ]
   }
  ],
  "sources": [
   {
    "label": "Freddie Mac, Single-Family Seller Servicer Guide",
    "url": "https://guide.freddiemac.com/"
   },
   {
    "label": "Consumer Financial Protection Bureau, What is a rate lock",
    "url": "https://www.consumerfinance.gov/ask-cfpb/what-is-a-rate-lock-en-143/"
   }
  ]
 },
 {
  "slug": "where-pipeline-aging-buckets-hide-files-waiting-on-review",
  "title": "Where pipeline aging buckets hide files waiting on review",
  "summary": "A measurement brief on how standard pipeline age buckets can conceal files that are waiting on an internal review, with definitions and sampling.",
  "cluster": "Pipeline operations",
  "publishedAt": "2026-11-10",
  "thumbnail": "/thumbnails/november-10/where-pipeline-aging-buckets-hide-files-waiting-on-review.webp",
  "finding": "Pipeline age buckets obscure review waits unless the analysis separates the current owner's queue time from total file age and records the last substantive action.",
  "sections": [
   {
    "heading": "Question and scope",
    "paragraphs": [
     "This brief asks whether common pipeline age buckets hide files that are waiting on an internal review. The unit is one open loan file at a weekly observation point. The outcome is the current waiting state and the age of that state. The question matters because a file can look young while its current task has been idle for days.",
     "Scope should name the pipeline, the milestones, and the reporting period. A purchase pipeline with many third-party dependencies may behave differently from a refinance pipeline. Include both if they share a report. Exclude closed and withdrawn files from the weekly snapshot."
    ]
   },
   {
    "heading": "Define waiting on review",
    "paragraphs": [
     "A file is waiting on review when the next required action belongs to an internal reviewer and no review has been completed since the last handoff. The state should name the reviewer group, not an individual. A file waiting on the borrower or a vendor is a different state.",
     "Record the start of the wait at the moment the file entered the reviewer's queue. Use the system timestamp, not the date the file was last touched. If the queue has no timestamp, the analysis should say so. A missing timestamp is itself a finding."
    ]
   },
   {
    "heading": "Build the buckets",
    "paragraphs": [
     "Use the buckets the team already reports, such as zero to seven days, eight to fourteen days, and more than fourteen days. Then add a separate bucket for the current state age. The two views answer different questions and should not be merged.",
     "Keep the bucket boundaries fixed across periods. A change in boundaries can make the pipeline look better or worse without any change in the work. If a boundary must change, report the old and new views for one period. Mark the change in the review notes."
    ]
   },
   {
    "heading": "Capture the handoff",
    "paragraphs": [
     "Record when the file entered the current queue and who sent it. A handoff with no timestamp cannot be aged. The sender and receiver should both appear in the record. This is the minimum needed to test whether the bucket hides a wait.",
     "Also record the last substantive action before the handoff. A file that was sent after a complete review is different from one sent with an open question. The action note explains why the file is in the queue. Without it, the age has no context."
    ]
   },
   {
    "heading": "Compare age and state",
    "paragraphs": [
     "Cross-tabulate the total age bucket with the current state age bucket. A file in the oldest total bucket may have a young current state, while a file in a young total bucket may have an old review wait. The cross-tab makes both visible.",
     "Report the count and the share in each cell. A small cell may be unstable, so show the count beside the percentage. Look for the cells where a young total age hides an old wait. Those are the files the standard report can miss."
    ]
   },
   {
    "heading": "Sample the oldest files",
    "paragraphs": [
     "Review a sample of files in the oldest total bucket and the oldest state bucket. Read the notes to see what the file is actually waiting on. A file may be in a review queue but waiting on a missing document that nobody requested. The sample explains the number.",
     "Include files that moved during the week as a comparison. A file that left the review queue shows what a completed wait looks like. Compare the notes and the timestamps. The difference can reveal a step that is not captured in the report."
    ]
   },
   {
    "heading": "Limits and error sources",
    "paragraphs": [
     "The analysis depends on the accuracy of the queue timestamps and the state labels. A file that is moved between queues without a timestamp will look younger than it is. A reviewer who works from a personal list may not appear in the system at all. Note these gaps.",
     "The result cannot show whether a longer review wait caused a closing delay. It can show where the wait sits and how the standard report represents it. Keep the claim at that level. The cited public guidance describes file documentation, not a benchmark for review time."
    ]
   },
   {
    "heading": "Review cadence",
    "paragraphs": [
     "Run the cross-tab weekly and review the trend monthly. A single week can be distorted by a holiday or a large intake day. Compare the new result with the prior four weeks. Note any change in staffing or pipeline mix.",
     "Share the result with the processors and the reviewers. Ask whether the state labels match the work they actually do. A label that nobody uses will produce a misleading bucket. Adjust the label before adjusting the process."
    ]
   },
   {
    "heading": "What to fix first",
    "paragraphs": [
     "Start with the review queue that has the largest old-state count. Add a timestamp at the handoff if one is missing. Then set a daily check for files that have waited longer than the team's target. Measure the state age after the change.",
     "Do not add more buckets until the current ones are reliable. A complex report can hide the same problem in more detail. Choose one queue, one timestamp, and one target. Extend the method when the first view is trusted."
    ]
   },
   {
    "heading": "Communication",
    "paragraphs": [
     "Present the finding as a reporting gap, not as a criticism of reviewers. A queue without timestamps is a system problem. Show the cross-tab and ask for one change that makes the wait visible. The team can then decide whether the target is realistic.",
     "Keep borrower communication separate from the internal analysis. A borrower should hear about the next step and the expected date, not about queue buckets. The account owner should confirm any date change. The measurement is a planning aid."
    ]
   },
   {
    "heading": "Build the weekly snapshot",
    "paragraphs": [
     "Build one row per open file with the stage, the queue entry time, the last substantive action, and the next action date. Add the owner and the state code. Calculate the total age and the state age from the same snapshot date. Keep the file id so the row can be checked against the loan file.",
     "Record whether the state changed during the week. A file that moved from review to closing is not a stuck file even if its total age is high. A file that stayed in the same state with no action is the one to inspect. Use the same snapshot day each week so the comparison is consistent."
    ]
   },
   {
    "heading": "Check the state labels with the reviewers",
    "paragraphs": [
     "Ask two reviewers to label a sample of files using the state definitions. Compare their labels with the system status. A mismatch often shows that the system status is updated for reporting rather than for the work. Fix the label or the definition before using the bucket.",
     "Review the files that neither reviewer could classify. Those cases often reveal a handoff that the report does not capture. Add a state only when the team can name the action and the owner. A state that nobody uses will make the pipeline look cleaner than it is."
    ]
   },
   {
    "heading": "Report by queue and segment",
    "paragraphs": [
     "Show a table with the queue, the file count, the median state age, and the share over the team's target. Add the loan purpose and the program if the segments are large enough. A queue with a long median and a small count is a different problem from one with a short median and a large count.",
     "Keep the total-age view beside the state-age view. The two tables should tell a consistent story. If they do not, the state timestamp or the label is probably wrong. Investigate the difference before presenting the result."
    ]
   },
   {
    "heading": "Test one timestamp change",
    "paragraphs": [
     "Add a timestamp at the handoff for one queue and compare the next four weeks with the prior period. Measure the state age and the share of files with no next action. Do not change the target in the same test. Keep the old report available so the team can see the difference.",
     "Ask the reviewers whether the new timestamp is easy to record. A timestamp that requires a separate step may be skipped in a busy week. If the change works, extend it to the next queue. If it does not, fix the capture before adding more fields."
    ]
   },
   {
    "heading": "Document the reporting assumptions",
    "paragraphs": [
     "Write down the snapshot day, the bucket boundaries, and the rule for counting business days. State which queue timestamps are trusted and which are estimated. A reader should be able to reproduce the table from the note. Keep the note beside the weekly report rather than in a separate policy file.",
     "Review the assumptions when a queue or a system changes. A new handoff can make the old timestamp meaningless. A new target can change the share over target without changing the work. Record the change date so the next review does not compare two different measures."
    ]
   }
  ],
  "sources": [
   {
    "label": "U.S. Department of Housing and Urban Development, HUD Handbook 4000.1",
    "url": "https://www.hud.gov/program_offices/housing/sfh/handbook_4000-1"
   },
   {
    "label": "Consumer Financial Protection Bureau, Owning a Home",
    "url": "https://www.consumerfinance.gov/owning-a-home/"
   }
  ]
 },
 {
  "slug": "measuring-third-party-document-escalation-latency",
  "title": "Measuring third-party document escalation latency",
  "summary": "A measurement brief on the time between a missed third-party document and the next escalation, with definitions, sampling, and limits.",
  "cluster": "Vendor coordination",
  "publishedAt": "2026-11-10",
  "thumbnail": "/thumbnails/november-10/measuring-third-party-document-escalation-latency.webp",
  "finding": "Third-party escalation latency is measurable when the team timestamps the missed promise, the rung that should follow, and the actual escalation, then reports the gap by vendor and document type.",
  "sections": [
   {
    "heading": "Question and scope",
    "paragraphs": [
     "This brief asks how long a file waits between a missed third-party promise and the next escalation. The unit is one escalation event for a required document. The outcome is the elapsed time between the promise date and the escalation date. The question matters because a late escalation can consume the remaining closing window.",
     "Scope should name the document types, the vendors, and the escalation ladder in use. A title document and an insurance certificate may follow different paths. Include the major document types if the ladder covers them. Exclude events with no recorded promise date."
    ]
   },
   {
    "heading": "Define latency",
    "paragraphs": [
     "Define the start as the date the vendor promised the document. Define the stop as the date the next rung was actually contacted. If the promise was revised, use the most recent promise and record the revision. The difference is the latency for that event.",
     "A negative value means the escalation happened before the promise date, which may be appropriate for a rush. Report those events separately rather than treating them as errors. A zero value means the escalation happened on the promise date. State the rule for counting business days."
    ]
   },
   {
    "heading": "Set the start and stop points",
    "paragraphs": [
     "Use the vendor's written promise when one exists. If the promise was verbal, record the date and the person who gave it. The start point should be visible to the next reviewer. A promise that lives only in a call note is easy to miss.",
     "The stop point should be the contact with the next rung, not the decision to escalate. A decision without a contact does not move the file. Record the contact method and the person reached. If the contact failed, record the attempt and the next action."
    ]
   },
   {
    "heading": "Build the ladder map",
    "paragraphs": [
     "Write the ladder as a sequence of rungs with a trigger for each. The map should show which rung applies to each document type and who owns the contact. A ladder that exists only in a policy document cannot be measured. The map is the reference for coding the events.",
     "Include the time target for each rung. A target of one business day after a missed promise is different from a target of three. The target is the standard against which latency is compared. Record any approved exception beside the event."
    ]
   },
   {
    "heading": "Sample escalations",
    "paragraphs": [
     "Sample escalation events across vendors, document types, and time periods. Include events that escalated on time and events that did not. A sample of only late events cannot show the base rate. Use consecutive events within each group.",
     "Record the file, the document, the promise date, the escalation date, and the rung used. Note whether the file was in a rush status. Keep the sample list with the coded results. A second reviewer should be able to repeat the coding."
    ]
   },
   {
    "heading": "Report by cause",
    "paragraphs": [
     "Group the latency by vendor, document type, and cause. A common cause is an unreachable contact, while another is a promise that was never entered. The cause explains the delay and points to a fix.",
     "Show the median and the range rather than only the average. A few very late events can pull an average away from the typical experience. Report the count beside each group. A small group should not be overread."
    ]
   },
   {
    "heading": "Limits and error sources",
    "paragraphs": [
     "The analysis depends on promises that are recorded and dates that are accurate. A verbal promise may be missing, and a contact may be logged after the fact. Review a sample against the vendor's own record if one exists. Note the missing data rather than assuming it is zero.",
     "The result cannot show whether a faster escalation would have saved the closing. It can show where the ladder is slow and whether the delay is avoidable. Keep the claim at that level. The cited public guidance describes documentation expectations, not a benchmark for vendor response."
    ]
   },
   {
    "heading": "Review cadence",
    "paragraphs": [
     "Repeat the review monthly while the ladder is new, then quarterly if the pattern is stable. Compare the new result with the prior period and note any vendor or staffing change. A new contact at a title company can change the latency without a process change.",
     "Share the result with the owners who make the escalations and the vendors who receive them. Ask both sides what makes a contact effective. A short conversation can explain a pattern that the dates alone cannot."
    ]
   },
   {
    "heading": "What to fix first",
    "paragraphs": [
     "Start with the rung that has the longest latency and the highest volume. Add a timestamp at the point where the promise is recorded. Then set a daily check for promises that have passed. Measure the latency after the change.",
     "Do not add more rungs until the current ones are used consistently. A ladder with many steps can create more places for a file to wait. Choose one document type and one rung. Extend the method when the first path is reliable."
    ]
   },
   {
    "heading": "Communication",
    "paragraphs": [
     "Present the result as a process finding, not a vendor scorecard. A late escalation may reflect a missing promise or an unclear owner. Show the pattern and ask for one change that makes the next step easier.",
     "Keep the borrower message focused on the next action and the expected date. Do not share internal latency figures or vendor names. The account owner should confirm any date change. The measurement is for the team."
    ]
   },
   {
    "heading": "Build the event log",
    "paragraphs": [
     "Build one row per escalation with the file, the document, the vendor, and the promise date. Add the rung that was due, the date it was contacted, the method, and the person reached. Record the response and the next action date. Keep the log beside the ladder so the rung names match.",
     "Use a fixed list for the cause, such as unreachable contact, missing promise, or unclear owner. Add a note for a case that does not fit. Check the log against the vendor's confirmation for a sample of events. A log built only from memory will understate the delay."
    ]
   },
   {
    "heading": "Verify the promise record",
    "paragraphs": [
     "Compare the promise date in the file with the vendor's written confirmation or call record. A promise that was never entered cannot be measured. A promise that was entered twice should be treated as one event with the latest date. Record the source of the date beside the row.",
     "Review the events with no promise date separately. They may be the most important cases, because the team had no date to follow. Add a rule that requires a promise date before the request leaves the first rung. Measure the share of events with a missing date."
    ]
   },
   {
    "heading": "Report by vendor and document type",
    "paragraphs": [
     "Show a table with the vendor, the document type, the event count, the median latency, and the range. Add the share of events escalated within the target. A vendor with a long median and a small count is different from one with a long median and a large count.",
     "Keep the cause breakdown beside the latency. A long delay caused by an unreachable contact calls for a different fix than one caused by a missing promise. Report the count for each cause. Do not rank vendors on a single number without the context."
    ]
   },
   {
    "heading": "Test one rung",
    "paragraphs": [
     "Add a follow-up at a fixed interval after the missed promise and compare the next month with the prior period. Measure the latency, the share within target, and the number of events that needed the next rung. Do not change the whole ladder at once. Record the date and the owner of the change.",
     "Ask the owners whether the new follow-up is realistic on a busy day. A rule that cannot be followed will be ignored. If the test works, apply it to the next document type. If it does not, review the contact list before adding another step."
    ]
   },
   {
    "heading": "Document the ladder assumptions",
    "paragraphs": [
     "Write down the start point, the stop point, and the rule for business days. State how a revised promise is handled and how a rush event is reported. A reader should be able to recalculate the latency from the event log. Keep the note beside the ladder map.",
     "Review the assumptions when a vendor or a contact changes. A new contact can reset the effective start of the ladder. A new rush rule can change which events count as early. Record the change date so the next review compares like with like."
    ]
   }
  ],
  "sources": [
   {
    "label": "U.S. Department of Housing and Urban Development, HUD Handbook 4000.1",
    "url": "https://www.hud.gov/program_offices/housing/sfh/handbook_4000-1"
   },
   {
    "label": "Fannie Mae, Selling Guide",
    "url": "https://selling-guide.fanniemae.com/"
   }
  ]
 },
 {
  "slug": "how-self-employed-income-files-differ-in-condition-volume",
  "title": "How self-employed income files differ in condition volume",
  "summary": "A measurement brief on whether self-employed income files generate more conditions than salaried files, with segmentation and limits.",
  "cluster": "Income review",
  "publishedAt": "2026-11-10",
  "thumbnail": "/thumbnails/november-10/how-self-employed-income-files-differ-in-condition-volume.webp",
  "finding": "Self-employed income files can be compared with salaried files only when conditions are counted by type, normalized for income sources, and segmented by entity structure.",
  "sections": [
   {
    "heading": "Question and scope",
    "paragraphs": [
     "This brief asks whether self-employed income files generate more conditions than files with salaried income. The unit is one loan file observed through the condition review. The outcome is the number and type of income-related conditions. The question matters because condition volume affects review time and borrower effort.",
     "Scope should name the loan programs, the income types, and the period. A file with a sole proprietorship may behave differently from one with an S corporation. Include the common entity types if the sample allows. Exclude files with no income conditions recorded."
    ]
   },
   {
    "heading": "Define a condition",
    "paragraphs": [
     "A condition is a documented request for additional information or action. Count each distinct request once, even if it is reissued. A duplicate request for the same document is a process event, not a new condition. Record the type, the owner, and the date.",
     "Separate an income condition from a condition that merely mentions income. A condition about a bank statement may be an asset condition even when the statement shows business deposits. The coding should follow the reviewer's reason, not the document name."
    ]
   },
   {
    "heading": "Segment the files",
    "paragraphs": [
     "Segment by income type, entity structure, and the number of income sources. A borrower with one salary is not comparable to a borrower with a salary and two businesses. Record the segments before comparing counts.",
     "Also record the loan purpose and the program. A purchase file may have more conditions than a refinance for reasons unrelated to income. If the segments are small, combine them and state the combination. Do not compare a small group with a large one without a note."
    ]
   },
   {
    "heading": "Capture the documents",
    "paragraphs": [
     "Record the documents requested and the documents received for each file. A condition count without the document list cannot show whether the request was reasonable. Note the tax years, the schedules, and any extension. The document list also shows where a request was incomplete.",
     "Keep the acceptance standard consistent. A document that arrived but was unreadable is not complete. A document that arrived after the review is still part of the file history. Record both the request date and the acceptance date."
    ]
   },
   {
    "heading": "Compare counts by segment",
    "paragraphs": [
     "Report the median and the range of income conditions for each segment. An average can be pulled by a few files with many conditions. Show the count of files beside each result. A segment with five files should be described as a small sample.",
     "Compare the types of conditions as well as the number. A self-employed file may have more requests for the same document rather than more distinct documents. That difference points to a different fix. Count both distinct conditions and repeat requests."
    ]
   },
   {
    "heading": "Normalize by complexity",
    "paragraphs": [
     "Adjust the comparison for the number of income sources and the number of tax years required. A file with three businesses should not be compared directly with a file with one salary. A simple ratio can help, but it should not replace the segment view.",
     "Record the complexity inputs from the file, not from a guess. If the inputs are missing, mark the file as unclassified. Do not drop it silently, because the missing inputs may be the most interesting cases. Report the unclassified count."
    ]
   },
   {
    "heading": "Limits and error sources",
    "paragraphs": [
     "Condition counts depend on how the team records requests. One reviewer may combine several asks into one condition, while another may split them. Review a sample of files with two coders to estimate the difference. A large difference means the count is not comparable yet.",
     "The analysis cannot show whether self-employed borrowers are treated fairly. It can show where the documentation burden falls. Keep the claim at that level. The cited public guidance describes tax reporting and borrower documents, not a benchmark for condition counts."
    ]
   },
   {
    "heading": "Review cadence",
    "paragraphs": [
     "Repeat the review annually or when the program guidance changes. Tax form changes and program updates can shift the condition mix. Compare the new result with the prior period and note the change. A new checklist can also change the count.",
     "Share the result with the processors and underwriters who review the files. Ask which conditions are avoidable and which are required. The people doing the review can explain a pattern that the count alone cannot."
    ]
   },
   {
    "heading": "What to fix first",
    "paragraphs": [
     "Start with the condition type that is both common and avoidable, such as a request for a page that the checklist already covers. Fix the request before adding more review steps. Measure the count after the change.",
     "Do not use the result to set a quota for conditions. A lower count is not better if it means a required document was skipped. The goal is a complete file with the fewest avoidable requests. State that principle in the review."
    ]
   },
   {
    "heading": "Communication",
    "paragraphs": [
     "Present the finding as a documentation burden, not as a borrower problem. A self-employed borrower may need more documents because the income is more complex. Show the pattern and ask for one change that makes the request clearer.",
     "Tell the borrower what is needed and why, without sharing internal comparisons. The loan officer should handle any conversation about the file's complexity. The measurement is for the team."
    ]
   },
   {
    "heading": "Build the condition log",
    "paragraphs": [
     "Build one row per income condition with the file, the income type, the entity, and the number of income sources. Add the condition type, the date requested, the date accepted, and whether it was a repeat request. Keep the reviewer's reason in a short note. The log should let another person recount the conditions without reopening every file.",
     "Use a fixed list for the condition type, such as tax return, schedule, letter, or explanation. Add a code for a request that was withdrawn. Check the log against the condition system for one week before using it. A count that includes duplicate entries will overstate the burden."
    ]
   },
   {
    "heading": "Check coding consistency",
    "paragraphs": [
     "Ask two reviewers to code the same sample of files. Compare the number of conditions and the type of each one. A difference in the count often comes from combining several asks into one request. A difference in type often comes from coding the document rather than the reason.",
     "Resolve the differences and write the rule into the definitions. Repeat the check after a checklist change. Report the agreement before the comparison. A count that two reviewers cannot reproduce is not ready to guide a process change."
    ]
   },
   {
    "heading": "Report by entity and program",
    "paragraphs": [
     "Show a table with the entity type, the program, the file count, the median conditions, and the range. Add the median number of income sources. A sole proprietor with one business is not comparable to an S corporation with several owners. Keep the small groups visible but marked.",
     "Compare the condition types within each row. A group with many repeat requests may need a clearer checklist, while a group with many distinct requests may need a different document set. The type breakdown is more useful than the total alone. Note any group that was added during the period."
    ]
   },
   {
    "heading": "Test one checklist change",
    "paragraphs": [
     "Change one line of the checklist, such as naming the exact schedule or the page that shows the owner's share. Apply it to a small group and compare the repeat-request rate with the prior period. Do not change the program guidance at the same time. Record the date and the reviewer who approved the change.",
     "Run the test for one filing cycle. Ask the processors whether the new line reduced questions or created confusion. A checklist that is more precise but harder to use may not help. Keep the change only if the repeat rate falls without a new error."
    ]
   },
   {
    "heading": "Document the condition assumptions",
    "paragraphs": [
     "Write down the count rule, the entity mapping, and the program version used for the sample. State whether a repeat request counts once or separately. Record how a condition that covers several documents is counted. A reader should be able to recount a file from the note and the log. Keep the note beside the condition report.",
     "Review the assumptions when a checklist or a program guide changes. A new line can reduce one condition and create another. A new entity type can change the segment mix. Record the change date so the next review does not blend two different definitions."
    ]
   }
  ],
  "sources": [
   {
    "label": "Internal Revenue Service, Self-Employed Individuals Tax Center",
    "url": "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center"
   },
   {
    "label": "Consumer Financial Protection Bureau, Owning a Home",
    "url": "https://www.consumerfinance.gov/owning-a-home/"
   }
  ]
 },
 {
  "slug": "what-appraisal-revision-reasons-reveal-about-order-quality",
  "title": "What appraisal revision reasons reveal about order quality",
  "summary": "A measurement brief on coding appraisal revision reasons to find order-quality problems, with definitions, sampling, and limits.",
  "cluster": "Appraisal coordination",
  "publishedAt": "2026-11-10",
  "thumbnail": "/thumbnails/november-10/what-appraisal-revision-reasons-reveal-about-order-quality.webp",
  "finding": "Appraisal revision reasons become useful when they are coded by cause and compared with the order inputs, because the pattern shows whether the revision came from a missing fact, an unclear instruction, or a genuine valuation question.",
  "sections": [
   {
    "heading": "Question and scope",
    "paragraphs": [
     "This brief asks what the reasons behind appraisal revisions reveal about the quality of the order. The unit is one revision request tied to one appraisal order. The outcome is the coded reason and the order input that may have caused it. The question matters because revisions add time near the closing date.",
     "Scope should name the property types, the appraisal channels, and the period. A purchase order with a complex property may behave differently from a simple refinance. Include both if the team handles them. Exclude revisions that correct a clerical error in the request itself, but count them separately."
    ]
   },
   {
    "heading": "Define a revision",
    "paragraphs": [
     "A revision is a request to change or clarify the appraisal report after delivery. It is not a new order and not a request for a reconsideration of value under a separate process. Define which process the team uses. The definition should be applied before the sample is coded.",
     "Record the date of the request, the date of the response, and the number of items. A revision with five items is different from one with a single factual correction. Count the items separately from the request. This distinction matters for the analysis."
    ]
   },
   {
    "heading": "Build the reason codes",
    "paragraphs": [
     "Start with a short set of codes: factual correction, missing comparable, condition or repair, value concern, and report quality. Add a code for an order input error if the team sees one. Keep the definitions narrow enough for two coders to agree.",
     "Write one example and one exclusion for each code. A value concern is not the same as a request to explain an adjustment. A report quality issue is not the same as a factual error. The codes should describe the reason, not the person who sent it."
    ]
   },
   {
    "heading": "Sample the orders",
    "paragraphs": [
     "Sample orders across appraisers, property types, and time periods. Include orders with no revision as a comparison group. A sample of only revised orders cannot show the base rate. Use consecutive orders within each group.",
     "Record the order inputs: the property data, the instructions, the comparables provided, and the deadline. The inputs are needed to test whether a revision reason connects to something the team could have fixed. Keep the sample list with the coded results."
    ]
   },
   {
    "heading": "Code the reason",
    "paragraphs": [
     "Code the primary reason and any secondary reason that required a separate response. Use the report and the request together. Do not infer a reason from the appraiser's tone. If the reason is unclear, use an unclassified code and review it with a second person.",
     "Compare the coding across two reviewers on a sample. Resolve disagreements by returning to the definitions. A high disagreement rate means the codes are too broad. Report the agreement before reporting the distribution."
    ]
   },
   {
    "heading": "Compare with order inputs",
    "paragraphs": [
     "Cross-tabulate the reason codes with the order inputs. A factual correction may cluster around a property characteristic that was not verified at intake. A missing comparable may cluster around a market with few recent sales. The cross-tab shows where the order could improve.",
     "Report the count and the share for each cell. Look for a pattern that appears across appraisers, because that pattern is more likely to be an order issue. A pattern with one appraiser may be a training or capacity issue. Both are worth knowing."
    ]
   },
   {
    "heading": "Limits and error sources",
    "paragraphs": [
     "The revision reason is a judgment recorded by the person who wrote the request. It may reflect the pressure of the closing date rather than the report. Review the request text as well as the code. A short request may hide a larger concern.",
     "The analysis cannot show whether a revision changed the value or delayed the closing. It can show why requests happen and where the order can improve. Keep the claim at that level. The cited public guidance describes appraisal and property requirements, not a benchmark for revision rates."
    ]
   },
   {
    "heading": "Review cadence",
    "paragraphs": [
     "Review the codes quarterly with the order desk and the appraisers. A change in the market or the order form can shift the reasons. Compare the new distribution with the prior period. Note any change in the sample or the definitions.",
     "Share the result with the people who prepare the order and the people who review the report. Ask both groups which inputs are missing most often. A short conversation can explain a pattern that the data alone cannot."
    ]
   },
   {
    "heading": "What to fix first",
    "paragraphs": [
     "Start with the reason that is both common and preventable, such as a factual correction caused by an unverified property detail. Add a check at intake before the order goes out. Measure the reason rate after the change.",
     "Do not use the result to discourage legitimate revision requests. A value concern or a condition issue may be necessary to protect the file. The goal is fewer avoidable revisions, not fewer questions. State that principle in the review."
    ]
   },
   {
    "heading": "Communication",
    "paragraphs": [
     "Present the finding as an order-quality issue, not as an appraiser scorecard. A revision may reflect a missing fact or an unclear instruction. Show the pattern and ask for one change that makes the order clearer.",
     "Keep the borrower conversation separate from the internal analysis. The borrower should hear about the next step and the expected date. The account owner should confirm any change. The measurement is for the team."
    ]
   },
   {
    "heading": "Build the revision log",
    "paragraphs": [
     "Build one row per revision with the order, the appraiser, the property type, and the request date. Add the response date, the number of items, and the reason code. Record the order input that may have caused the issue, such as a property detail or a comparable. Keep the log beside the order file so the codes can be checked.",
     "Use a fixed list for the reason code and the order input. Add a note for an unusual case. Check the log against the appraisal report for a sample of orders. A log that records only the request date cannot show how long the revision took."
    ]
   },
   {
    "heading": "Check the reason codes",
    "paragraphs": [
     "Have a second reviewer code a sample of revisions without seeing the first result. Compare the primary reason and the order input. A disagreement about the primary reason may mean the codes overlap. A disagreement about the input may mean the order file is incomplete.",
     "Resolve the cases and update the definitions. Repeat the check after a form or vendor change. Report the agreement before the distribution. A code that only one person can apply will not support a trend."
    ]
   },
   {
    "heading": "Report by appraiser group and property type",
    "paragraphs": [
     "Show a table with the appraiser group, the property type, the order count, and the revision rate by reason. Add the median response days. A group with a high rate and a small count is different from one with a high rate and a large count. Mark the small groups.",
     "Look for a reason that appears across groups. A shared pattern is more likely to be an order issue than an appraiser issue. A pattern in one group may still matter, but it calls for a different conversation. Keep the counts beside every rate."
    ]
   },
   {
    "heading": "Test one intake check",
    "paragraphs": [
     "Add one verification step at intake, such as confirming the property detail that most often causes a factual correction. Apply it to a small group and compare the revision rate with the prior period. Do not change the appraiser panel at the same time. Record the date and the owner of the change.",
     "Run the test for at least one quarter. Ask the order desk whether the check is easy to complete. A check that adds five minutes to every order may not be worth the reduction. Keep it only if the avoidable revision rate falls."
    ]
   },
   {
    "heading": "Document the revision assumptions",
    "paragraphs": [
     "Write down the revision definition, the reason codes, and the rule for a separate reconsideration process. State how multiple items in one request are counted. A reader should be able to recode a sample from the note. Keep the note beside the revision log.",
     "Review the assumptions when the order form or the appraiser panel changes. A new form can change which inputs are available. A new panel can change the revision mix. Record the change date so the next review compares the same measure."
    ]
   }
  ],
  "sources": [
   {
    "label": "U.S. Department of Housing and Urban Development, HUD Handbook 4000.1",
    "url": "https://www.hud.gov/program_offices/housing/sfh/handbook_4000-1"
   },
   {
    "label": "Fannie Mae, Selling Guide",
    "url": "https://selling-guide.fanniemae.com/"
   }
  ]
 },
 {
  "slug": "measuring-trailing-document-capture-after-loan-purchase",
  "title": "Measuring trailing document capture after loan purchase",
  "summary": "A measurement brief on how quickly trailing documents are captured after a loan purchase, with definitions, sampling, and limits.",
  "cluster": "Post-closing",
  "publishedAt": "2026-11-10",
  "thumbnail": "/thumbnails/november-10/measuring-trailing-document-capture-after-loan-purchase.webp",
  "finding": "Trailing document capture is measurable when the team defines the expected list, timestamps delivery and acceptance separately, and reports capture by document type against the investor deadline.",
  "sections": [
   {
    "heading": "Question and scope",
    "paragraphs": [
     "This brief asks how quickly trailing documents are captured after a loan is purchased. The unit is one expected trailing document for one purchased loan. The outcome is the time from purchase to acceptance. The question matters because a late document can trigger a repurchase request or a penalty.",
     "Scope should name the investors, the document types, and the period. A recorded mortgage and a final title policy may follow different production paths. Include the common types if the sample allows. Exclude loans that were not purchased during the period."
    ]
   },
   {
    "heading": "Define a trailing document",
    "paragraphs": [
     "A trailing document is a record required by the purchase agreement that is not part of the closing package at funding. Define the list from the agreement and the investor guide. Do not rely on a generic list from another investor. Write the definition beside the log.",
     "Record the acceptable form for each document. A copy may be acceptable for one type and not for another. A recorded instrument may need the recording stamp, while a title policy may need the final schedule. The definition should be specific enough to review."
    ]
   },
   {
    "heading": "Set the purchase checkpoint",
    "paragraphs": [
     "Use the purchase date as the start of the clock. If the purchase date is not available, use the funding date and note the substitution. Record the date from the investor report, not from memory. A consistent start point is needed for comparison.",
     "Define the stop as the date the document was accepted, not the date it arrived. A document that arrived but was rejected is still open. Record both dates so the analysis can show the difference. The gap between arrival and acceptance is part of the process."
    ]
   },
   {
    "heading": "Build the expected list",
    "paragraphs": [
     "For each purchased loan, build the expected list from the purchase agreement. Include the document type, the producer, and the deadline. Mark any document that the investor waives. A waiver should be recorded, not inferred from silence.",
     "Keep the list with the loan record so the next reviewer can see what was expected. A list built after the fact is easier to bias. Build it at purchase and update it only when the investor changes a requirement. Note the change date."
    ]
   },
   {
    "heading": "Sample the purchases",
    "paragraphs": [
     "Sample purchases across investors, document types, and months. Include loans with no missing documents as a comparison group. A sample of only late loans cannot show the base rate. Use consecutive purchases within each group.",
     "Record the purchase date, the expected list, the delivery date, and the acceptance date. Note any escalation and the reason. Keep the sample list with the coded results. A second reviewer should be able to repeat the work."
    ]
   },
   {
    "heading": "Report capture and age",
    "paragraphs": [
     "Report the share of documents accepted by the investor deadline and the median days from purchase to acceptance. Show the count beside each result. A document type with a long production path should be reported separately from one that arrives quickly.",
     "Also report the share of documents that arrived but were rejected on the first review. That number shows whether the problem is production or review. A high rejection rate may call for a clearer request, while a low delivery rate may call for an earlier follow-up."
    ]
   },
   {
    "heading": "Limits and error sources",
    "paragraphs": [
     "The analysis depends on purchase dates and acceptance records that are complete. A document may be accepted in the investor portal before the internal log is updated. Reconcile the two sources before reporting. Note any missing data.",
     "The result cannot show whether a late document caused a repurchase. It can show where the capture process is slow. Keep the claim at that level. The cited investor guidance describes delivery requirements, not a benchmark for capture time."
    ]
   },
   {
    "heading": "Review cadence",
    "paragraphs": [
     "Review the result monthly while the process is new, then quarterly if it is stable. Compare the new result with the prior period and note any investor change. A new requirement can shift the list without a process change.",
     "Share the result with the post-closing team and the closing team. The closing team can improve the package, while the post-closing team can improve the follow-up. Ask both groups which documents are hardest to obtain."
    ]
   },
   {
    "heading": "What to fix first",
    "paragraphs": [
     "Start with the document type that has the longest median age and the highest volume. Add a timestamp at the point of request and a weekly check. Measure the capture rate after the change.",
     "Do not add more document types until the current list is reliable. A long list can hide the items that actually matter. Choose one type and one deadline. Extend the method when the first is trusted."
    ]
   },
   {
    "heading": "Communication",
    "paragraphs": [
     "Present the finding as a delivery process issue, not as a team failure. A late document may reflect a title company's recording queue. Show the pattern and ask for one change that makes the next request earlier.",
     "Keep investor and borrower communication separate. The borrower should not receive internal capture metrics. The account owner should handle any question about the file. The measurement is for the team."
    ]
   },
   {
    "heading": "Build the document log",
    "paragraphs": [
     "Build one row per expected document with the loan, the investor, the document type, and the producer. Add the purchase date, the delivery date, the acceptance date, and any rejection reason. Record whether the document was waived. Keep the log linked to the loan record so the expected list can be checked.",
     "Use a fixed list for the document type and the rejection reason. Add a note for a document that arrived in an unusual form. Check the log against the investor report for one month before using it. A log that records only the delivery date cannot show the review delay."
    ]
   },
   {
    "heading": "Reconcile the log with the investor report",
    "paragraphs": [
     "Compare the internal log with the investor report on a fixed day each week. Match each document by loan and type. Note any item the investor lists as missing but the log shows as accepted. Investigate the difference before the next report.",
     "Record which source is treated as final for each field. A duplicate request wastes the producer's time, while a missed requirement can cost the team. The reconciliation is a control, not a clerical task. Keep the reconciliation note with the log."
    ]
   },
   {
    "heading": "Report by document type and investor",
    "paragraphs": [
     "Show a table with the investor, the document type, the expected count, the share accepted by the deadline, and the median days to acceptance. Add the share rejected on the first review. A type with a long production path should be reported separately from one that arrives quickly.",
     "Keep the counts beside every percentage. A small group can show a dramatic rate that does not generalize. Look for a type that is late across investors, because that pattern is more likely to be a process issue. Note any investor change during the period."
    ]
   },
   {
    "heading": "Test one earlier request",
    "paragraphs": [
     "Request one document type at purchase instead of waiting for the first check and compare the next quarter with the prior period. Measure the capture rate, the median days, and the rejection share. Do not change the investor deadline in the same test. Record the date and the owner of the change.",
     "Ask the producers whether the earlier request is realistic. A request that arrives before the closing package is complete may be ignored. If the test works, apply it to the next document type. If it does not, review the request format before adding more follow-up."
    ]
   },
   {
    "heading": "Document the capture assumptions",
    "paragraphs": [
     "Write down the expected list, the purchase date source, and the rule for waivers. State whether a rejected document stays open and how a re-delivery is counted. Record how a document that is accepted in the portal but not in the internal log is treated. A reader should be able to rebuild the capture table from the log. Keep the note beside the document log and short enough to read during a weekly review.",
     "Review the assumptions when an investor changes a requirement or a producer changes. A new requirement can add a document type. A new producer can change the delivery path. Record the change date so the next review does not mix two different lists. Share the updated note with the closing team, because the expected list starts there."
    ]
   }
  ],
  "sources": [
   {
    "label": "Fannie Mae, Selling Guide",
    "url": "https://selling-guide.fanniemae.com/"
   },
   {
    "label": "Freddie Mac, Single-Family Seller Servicer Guide",
    "url": "https://guide.freddiemac.com/"
   }
  ]
 }
];
