import type { ResearchPost } from './types';

export const november11ResearchPosts: readonly ResearchPost[] = [
 {
  "slug": "how-condition-re-requests-vary-by-evidence-type",
  "title": "How condition re-requests vary by evidence type",
  "summary": "A measurement design for comparing condition re-request rates across income, asset, property, and identity evidence, with definitions and limits.",
  "cluster": "Pipeline operations",
  "publishedAt": "2026-11-11",
  "thumbnail": "/thumbnails/november-11/how-condition-re-requests-vary-by-evidence-type.webp",
  "finding": "Condition re-request rates are comparable only when the team defines a re-request, groups evidence by type, and records the first acceptance rule that the original document failed.",
  "sections": [
   {
    "heading": "Question and scope",
    "paragraphs": [
     "This brief asks whether some evidence types are re-requested more often than others within the same loan pipeline. The unit is one condition that was requested, received, and later requested again. The comparison is the re-request rate by evidence type. The question matters because a repeated request adds borrower effort and can delay a closing.",
     "Scope should name the loan types, the investor programs, and the review period. A purchase file with a gift letter may behave differently from a refinance file with retirement assets. Include both if the team serves both. Exclude conditions that were withdrawn before any document arrived, because they do not test the acceptance process."
    ]
   },
   {
    "heading": "Define a re-request",
    "paragraphs": [
     "A re-request occurs when a condition was marked received or accepted and later reopened for the same evidence. The reason may be a missing page, an unreadable image, an expired statement, or a source that the reviewer could not accept. Record the date of the original acceptance and the date of the reopen. A request that arrives before the first acceptance is a follow-up, not a re-request.",
     "The definition should state whether a request for a different date range counts. If the original request covered the wrong period, the second request is a correction rather than a duplicate. Record the cause so the analysis can separate a process error from a borrower error. The definition should be written before the sample is pulled."
    ]
   },
   {
    "heading": "Classify the evidence types",
    "paragraphs": [
     "Use a fixed list of evidence types, such as income, assets, property, identity, credit explanation, and title. Add a subtype only when it changes the acceptance rule, such as a self-employed income schedule versus a salaried pay stub. A long taxonomy will produce small groups that cannot be compared. Start with the types the team already uses in its checklist.",
     "Record the document source as well as the type. A bank statement downloaded from a portal may follow a different review path than a statement scanned from paper. The source can explain a re-request that the type alone does not. Keep the source field simple and consistent across reviewers."
    ]
   },
   {
    "heading": "Select the observation window",
    "paragraphs": [
     "Start the observation at the date the condition was first requested. End it at the date the file closed or the condition was finally accepted. Use a fixed window, such as thirty days, so every condition has the same chance to be re-requested. A longer window may capture more events but can mix in unrelated changes.",
     "Record the file stage at the start and end of the window. A condition requested early may have more time to be reopened than one requested near closing. Report the window and the stage beside the rate. A rate without that context is hard to compare across teams."
    ]
   },
   {
    "heading": "Capture the request history",
    "paragraphs": [
     "Build one row per condition with the request date, the receipt date, the acceptance date, and every reopen date. Add the reviewer, the evidence type, and the reason for the reopen. Link the row to the loan file so the document can be checked. A row that records only the final status cannot show a re-request.",
     "Use a fixed reason list and add a short note for unusual cases. Check a sample of rows against the document history before reporting. A missing reopen date will understate the rate. The log should be built from the system of record, not from memory."
    ]
   },
   {
    "heading": "Compare rates by evidence type",
    "paragraphs": [
     "Calculate the re-request rate as the number of conditions with at least one reopen divided by the number of accepted conditions of that type. Show the count and the rate together. A type with a high rate and a small count may not be a stable finding. A type with a modest rate and a large count may still create most of the rework.",
     "Report the reasons within each type. If most income re-requests are missing pages, the fix may be a clearer request. If most asset re-requests are unacceptable sources, the fix may be a source rule. The rate tells the team where to look, while the reason tells the team what to change."
    ]
   },
   {
    "heading": "Control for file complexity",
    "paragraphs": [
     "Files differ in borrower type, loan purpose, and the number of conditions. A self-employed borrower may have more income conditions than a salaried borrower. Record a small set of control variables so the comparison is not driven by mix. Do not build a model that the team cannot explain.",
     "At minimum, record the loan purpose, the income type, and the review team. Report the rate within each segment when the groups are large enough. A simple table by segment is more useful than one average that hides the difference. Keep the categories stable across periods."
    ]
   },
   {
    "heading": "Limits and error sources",
    "paragraphs": [
     "A reopened condition may reflect a borrower who uploaded the wrong document rather than an unclear request. The analysis cannot assign fault from the record alone. It can show where rework clusters and which reasons dominate. Keep the claim at that level and read a sample of files before drawing a conclusion.",
     "The log may miss a reopen that happened in a message thread rather than the system. Review a sample of messages against the condition history to estimate the gap. If the gap is large, fix the capture before expanding the sample. The cited public guidance describes documentation expectations, not a benchmark for re-request rates."
    ]
   },
   {
    "heading": "Review cadence",
    "paragraphs": [
     "Review the report monthly for the first quarter, then quarterly if the rates are stable. Compare the new result with the prior period and note any change in requirements, staffing, or document sources. A new investor rule can shift the pattern without a process change. Mark the change before interpreting the trend.",
     "Share the result with the processors and the reviewers who handle the conditions. Ask which acceptance rules are hard to apply and which requests are hard to write. Their answers can explain a rate that looks surprising. Keep the discussion on the process rather than on individual performance."
    ]
   },
   {
    "heading": "Build the reason table",
    "paragraphs": [
     "Create a reason table before pulling the sample so every reviewer uses the same labels. Include missing page, unreadable image, expired document, unacceptable source, and wrong borrower or account. Add a category for a request that was never made. The table should describe the document problem, not the person who supplied it.",
     "Test the table on ten conditions and compare the labels across two reviewers. Resolve any disagreement by reading the request and the document together. Write the resolution into the table. A reason table that changes during the analysis will make the result hard to interpret."
    ]
   },
   {
    "heading": "Sample the request text",
    "paragraphs": [
     "Read the original request for a sample of re-requested conditions. Look for missing page counts, unclear date ranges, and ambiguous source rules. Compare the request with the reason for the repeat. A request that did not name the needed page is a likely cause of a missing-page repeat.",
     "Record whether the request used a template or a free text message. A free text request may be clear in one case and vague in another. The sample shows whether the problem is the template, the sender, or the borrower response. Keep the finding beside the rate."
    ]
   },
   {
    "heading": "Test one request change",
    "paragraphs": [
     "Choose one evidence type and one change, such as adding a page list or a source example to the request. Apply the change to a small group and compare the re-request rate with the prior period. Keep the acceptance rule and the review team the same. A change in either would make the result hard to read.",
     "Run the test long enough to include a normal mix of files. Ask the borrowers or the processors whether the new request was easier to use. A lower rate with a confusing request may not be a real improvement. Keep the change only if the rate and the feedback both support it."
    ]
   },
   {
    "heading": "Document the assumptions",
    "paragraphs": [
     "Write down the evidence types, the re-request definition, the observation window, and the reason list. State how a withdrawn condition and a file that closed early are treated. A reader should be able to rebuild the table from the note. Keep the note short enough to read before the next review.",
     "Record any change to the definitions and the date it took effect. A new investor requirement can add a document type or change an acceptance rule. Mark the change so the next period is not compared with a different process. The assumptions are part of the result."
    ]
   },
   {
    "heading": "Share the finding",
    "paragraphs": [
     "Present the result as a request and review pattern, not as a ranking of processors or borrowers. Show the rate, the count, and the dominant reason for each evidence type. Ask the team which request is hardest to write clearly. The discussion should produce one test for the next period.",
     "Keep borrower communication separate from the internal analysis. A borrower should receive a clear request, not a reference to a re-request metric. The account owner should handle any conversation about a repeated document. The measurement is a tool for the team."
    ]
   }
  ],
  "sources": [
   {
    "label": "Fannie Mae, Selling Guide",
    "url": "https://selling-guide.fanniemae.com/"
   },
   {
    "label": "Consumer Financial Protection Bureau, Owning a Home",
    "url": "https://www.consumerfinance.gov/owning-a-home/"
   }
  ]
 },
 {
  "slug": "a-method-for-measuring-underwriter-handoff-completeness",
  "title": "A method for measuring underwriter handoff completeness",
  "summary": "A measurement design for whether a file sent to underwriting includes the story, open questions, evidence index, and decision rights the reviewer needs.",
  "cluster": "Pipeline operations",
  "publishedAt": "2026-11-11",
  "thumbnail": "/thumbnails/november-11/a-method-for-measuring-underwriter-handoff-completeness.webp",
  "finding": "Handoff completeness is measurable when the team defines the required note elements, records the reviewer first action, and distinguishes a missing element from a judgment disagreement.",
  "sections": [
   {
    "heading": "Question and scope",
    "paragraphs": [
     "This brief asks whether a file sent to underwriting includes the information the reviewer needs to begin. The unit is one handoff from processing to underwriting. The outcome is the share of handoffs that contain each required element and the share that generate a clarifying contact. The question matters because a weak handoff moves work without moving the file.",
     "Scope should name the loan types, the underwriting team, and the period. A purchase file with a recent appraisal may need a different handoff than a refinance file with a rate lock. Include both if they use the same template. Exclude files that were withdrawn before the reviewer opened them."
    ]
   },
   {
    "heading": "Define a complete handoff",
    "paragraphs": [
     "A complete handoff contains a short file story, the open questions with evidence, the checks completed, the decision rights, and an index of key documents. Each element should be present in the note, not only in the loan file. Define what counts as present, such as a named owner for every open question. A blank section does not count.",
     "The definition should allow a short note when the file is simple. Completeness is not length. A three-sentence story can be complete if it names the borrower, the purpose, and the reason for the handoff. Measure the elements rather than the word count."
    ]
   },
   {
    "heading": "Build the checklist from the review",
    "paragraphs": [
     "Ask the underwriters which note elements they use in the first ten minutes of a review. Build the checklist from those answers rather than from a generic template. Add one element at a time and remove any element that no reviewer uses. The checklist should reflect the actual review, not an ideal process.",
     "Test the checklist on a sample of files that produced clarifying questions. Look for the element that was missing in those files. If the same element is missing repeatedly, the template or the training needs a change. If the questions are about judgment rather than missing facts, the checklist is not the problem."
    ]
   },
   {
    "heading": "Record the receiving reviewer first action",
    "paragraphs": [
     "Record the first action the reviewer takes after opening the file. The action may be reading a document, sending a question, or approving a condition. A first action that is a question suggests a missing element. A first action that is a document review suggests the note did its job. Use a small set of action codes.",
     "Capture the time from handoff to first action as well. A long gap may reflect queue capacity rather than note quality. Separate the queue time from the note quality before drawing a conclusion. The two measures answer different questions and should be reported separately."
    ]
   },
   {
    "heading": "Measure rework after handoff",
    "paragraphs": [
     "Count the clarifying contacts that occur within two business days of the handoff. Group them by the note element they requested, such as a missing document, an unclear owner, or an unexplained change. A contact about a judgment call is different from a contact about a missing file story. Report the groups separately.",
     "Also count the handoffs that are returned to processing for more work. A return may be appropriate when the file is incomplete. A high return rate for the same reason points to an intake or checklist problem. The measure should describe the work, not assign blame to a person."
    ]
   },
   {
    "heading": "Control for file type and complexity",
    "paragraphs": [
     "A file with a recent appraisal and a clean income picture may need a shorter note than a file with multiple entities. Record the loan purpose, the income type, and the number of open conditions. Compare the completeness rate within similar groups. A single average can hide a problem in one segment.",
     "Include the reviewer and the processing team as grouping variables when the sample is large enough. A new reviewer may ask more questions because the file is unfamiliar, not because the note is weak. Use the groups to prompt a conversation, not to rank people. Report the group counts so a small group is not treated as a general finding."
    ]
   },
   {
    "heading": "Sample the handoff notes",
    "paragraphs": [
     "Read a sample of notes against the checklist without looking at the file first. Mark each required element as present, partial, or missing. Then open the file and check whether the note was accurate. A note can contain all the elements and still misstate a fact. Accuracy and completeness are separate measures.",
     "Choose the sample across the period and across teams. Include files that were reviewed quickly and files that generated questions. A sample of only difficult files will overstate the problem. Record the sampling method so the next review can repeat it."
    ]
   },
   {
    "heading": "Limits and error sources",
    "paragraphs": [
     "A complete note does not guarantee a good underwrite, and a short note does not guarantee a bad one. The measure describes the information available at handoff, not the quality of the decision. Keep the claim at that level. Read the files before drawing a broader conclusion.",
     "The note may be complete but hard to read, or short but precise. The checklist should include a readability check for the reviewer. If reviewers disagree about whether an element is present, revise the definition. The cited public guidance describes file documentation, not a benchmark for handoff completeness."
    ]
   },
   {
    "heading": "Review cadence",
    "paragraphs": [
     "Review the result monthly while the template is new, then quarterly if it is stable. Compare the new result with the prior period and note any change in template, staffing, or file mix. A new template can improve one element and weaken another. Report the elements separately before reporting a total.",
     "Share the result with processors and underwriters together. A handoff is a shared process, and each side sees a different part of the problem. Ask for one change that both groups can test. The goal is a review that starts with context, not a longer note."
    ]
   },
   {
    "heading": "Build the handoff log",
    "paragraphs": [
     "Create one row per handoff with the loan, the sender, the receiver, the handoff time, and the first review action. Add a field for each required note element and a field for the time to first action. Keep the log linked to the loan file so the note can be checked. A log built after the review from memory will miss the details.",
     "Use a fixed list for the first action and the clarifying reason. Add a short note for an unusual case. Check the log against the underwriting queue for one week before relying on it. A log that records only the handoff time cannot show whether the note was usable."
    ]
   },
   {
    "heading": "Test the checklist with a second reviewer",
    "paragraphs": [
     "Ask a second person to score a sample of handoffs without seeing the first result. Compare the element scores and the accuracy finding. A disagreement about whether an element is present usually means the definition is too broad. Resolve it by reading the note together.",
     "Write the resolution into the checklist and repeat the test after a template change. A checklist that only one person can apply is not ready for a trend. Report the agreement beside the completeness rate. The goal is a shared standard, not a perfect score."
    ]
   },
   {
    "heading": "Report by team and file type",
    "paragraphs": [
     "Show the completeness rate by processing team and by file type. Add the count and the share of handoffs that generated a clarifying contact. A team with a high rate and a small count may not be stable. A team with a lower rate and a large count may still create most of the rework.",
     "Look for a file type that is weak across teams, because that pattern is more likely to be a template issue. Note any change in staffing or file mix during the period. Report the groups separately before reporting a total. A single average can hide the group that needs help."
    ]
   },
   {
    "heading": "Document the assumptions",
    "paragraphs": [
     "Write down the required elements, the accuracy test, the first-action codes, and the observation window. State how a handoff that is returned before review is counted. A reader should be able to rebuild the result from the note. Keep the note beside the checklist.",
     "Record any change to the template or the review process and the date it took effect. A new reviewer or a new queue can change the result without a change in note quality. Mark the change before comparing periods. The assumptions protect the team from a misleading trend."
    ]
   },
   {
    "heading": "Share the finding",
    "paragraphs": [
     "Present the result to processors and underwriters together. Show the element that is most often missing and the clarifying question it creates. Ask both groups for one change that would make the next handoff easier. The conversation should end with a test, not a list of complaints.",
     "Do not use the result to rank individual writers. A missing element may reflect a busy day or a template that is hard to complete. Keep the discussion on the handoff process. The goal is a review that starts with context."
    ]
   }
  ],
  "sources": [
   {
    "label": "Freddie Mac, Single-Family Seller Servicer Guide",
    "url": "https://guide.freddiemac.com/"
   },
   {
    "label": "Fannie Mae, Selling Guide",
    "url": "https://selling-guide.fanniemae.com/"
   }
  ]
 },
 {
  "slug": "what-lock-expiration-clusters-reveal-about-pipeline-timing",
  "title": "What lock expiration clusters reveal about pipeline timing",
  "summary": "A measurement brief on grouping lock expirations by working day to see whether pipeline timing, not pricing, creates the last-minute extension.",
  "cluster": "Rate lock",
  "publishedAt": "2026-11-11",
  "thumbnail": "/thumbnails/november-11/what-lock-expiration-clusters-reveal-about-pipeline-timing.webp",
  "finding": "Lock expiration clusters are useful only when expirations are grouped by working day and compared with the date the extension decision was actually made.",
  "sections": [
   {
    "heading": "Question and scope",
    "paragraphs": [
     "This brief asks whether lock expirations cluster on particular working days and whether the clusters line up with pipeline delays. The unit is one locked loan. The observation is the expiration date and the date the team first discussed an extension. The question matters because a cluster can hide a scheduling problem behind a pricing conversation.",
     "Scope should name the lock desk, the loan types, and the period. A purchase pipeline with weekend closings may look different from a refinance pipeline. Include both if they share a desk. Exclude loans that were never locked and loans whose lock was cancelled before any decision."
    ]
   },
   {
    "heading": "Define a lock expiration event",
    "paragraphs": [
     "A lock expiration event is the date and time the pricing commitment ends according to the written confirmation. Do not use the date in an email if the confirmation says something else. Record whether the lock was extended, relocked, or allowed to expire. The event should be tied to the confirmation, not to a pipeline note.",
     "Record the initial lock date and the number of extensions. A loan with three extensions is different from a loan with one. Keep the extension history so the cluster analysis does not treat a moved date as the original. A single row per loan should show the current date and the first date."
    ]
   },
   {
    "heading": "Group expirations by working day",
    "paragraphs": [
     "Count expirations by the working day on which they fall, not by the calendar week alone. A cluster on a Monday may reflect a Friday deadline that slipped. A cluster before a holiday may reflect a shortened review window. Show the count and the share for each working day.",
     "Compare the expiration cluster with the intake and closing clusters. If the same days carry a high intake volume and a high expiration volume, the desk may be working against a recurring schedule. The comparison is descriptive and does not prove cause. It gives the team a place to look."
    ]
   },
   {
    "heading": "Capture the decision date",
    "paragraphs": [
     "Record the date the team first identified that the lock might expire. This is not the date the extension was requested or approved. The gap between the first identification and the final decision shows how long the team had to act. A cluster with a short decision gap is more urgent than one with a long gap.",
     "Use the system timestamp for the first flag when one exists. If the flag lives in a message thread, record the message date and the person who raised it. A decision date that is reconstructed from memory is less reliable. Note the source beside the date."
    ]
   },
   {
    "heading": "Compare extension and relock outcomes",
    "paragraphs": [
     "An extension keeps the existing terms and may add a fee, while a relock creates new pricing. Compare the share of each outcome by cluster. A cluster with many relocks may point to a process that consistently misses the original date. A cluster with many extensions may point to short windows or late decisions.",
     "Record the cost of each outcome when the data is available. Cost can show whether the cluster is a minor administrative issue or a material pattern. Do not compare costs across loans with different balances without a normalizing measure. Keep the result descriptive and note the limitation."
    ]
   },
   {
    "heading": "Control for pipeline mix",
    "paragraphs": [
     "A cluster may reflect the loan types that happen to close that week. Record the loan purpose, the product, and the investor. Compare the expiration pattern within similar groups. A purchase cluster before a holiday may not appear in a refinance group.",
     "Include the closing date and the number of open conditions at the decision point. A loan with a short window and many conditions is different from one with a single missing signature. These variables help explain a cluster without turning the review into a complex model. Record any missing value rather than treating it as a zero."
    ]
   },
   {
    "heading": "Limits and error sources",
    "paragraphs": [
     "The expiration date can be recorded incorrectly, especially when a lock is extended and the old date remains in a note. Reconcile the lock system with the confirmation before grouping. A missing confirmation should be treated as a data gap rather than a zero. Note the source of each date beside the row.",
     "The analysis cannot show that a cluster caused a borrower to pay more. It can show where expirations concentrate and how much decision time the team had. Keep the claim at that level. The cited public guidance explains rate locks, not a benchmark for expiration timing."
    ]
   },
   {
    "heading": "Review cadence",
    "paragraphs": [
     "Review the cluster monthly and compare it with the prior quarter. A stable cluster may be a scheduling feature, while a new cluster may follow a policy or staffing change. Note the change before deciding whether the pattern is a problem. Keep the working-day calendar with the report so the comparison can be repeated.",
     "Share the result with the lock desk, the processors, and the people who set closing dates. Ask which deadline they cannot control. The conversation often reveals a handoff that the data alone cannot show. The review should end with one scheduling change to test."
    ]
   },
   {
    "heading": "What to fix first",
    "paragraphs": [
     "Start with the cluster that has the shortest decision gap and the highest count. Add a watchlist threshold that gives the team one more working day to act. Measure the extension and relock counts after the change. Do not change the pricing policy in the same test.",
     "If the cluster persists, review the intake and condition timelines that lead to it. A lock expiration is often the visible end of an earlier delay. Fix the earlier step before adding more extension capacity. The goal is a predictable schedule, not a longer list of exceptions."
    ]
   },
   {
    "heading": "Build the expiration log",
    "paragraphs": [
     "Create one row per locked loan with the lock date, the current expiration, the original expiration, and the number of extensions. Add the product, investor, closing date, and the date the team first flagged a risk. Keep the log linked to the lock confirmation. A row that records only the current date cannot show a cluster.",
     "Use a fixed list for the extension outcome and the reason. Add a short note for a relock. Check the log against the lock desk report for one month before using it. Reconcile any date that differs before the analysis."
    ]
   },
   {
    "heading": "Test a watchlist threshold",
    "paragraphs": [
     "Choose one threshold, such as ten working days, and add a daily review for files inside it. Measure the number of extensions, the number of relocks, and the decision gap before and after the change. Keep the lock policy and the pricing grid the same during the test. A threshold that is not followed will not produce a useful result.",
     "Ask the processors whether the threshold gives them enough time to act. A threshold that is too short creates alarm without a useful action. Adjust the threshold once, then keep it stable for the test period. Record the change date."
    ]
   },
   {
    "heading": "Report by product and investor",
    "paragraphs": [
     "Show the expiration cluster by product and investor. A product with a long closing timeline may have a different pattern from a short one. Add the count and the share for each group. A small group should be described rather than ranked.",
     "Look for a cluster that appears across products, because that pattern is more likely to be a scheduling issue. Note any investor change during the period. Report the groups separately before drawing a conclusion about the desk. Show the count beside each share so a small group is not overread."
    ]
   },
   {
    "heading": "Document the assumptions",
    "paragraphs": [
     "Write down the definition of expiration, the source of the date, the working-day calendar, and the decision date. State how an extension that is approved after expiration is counted. A reader should be able to rebuild the cluster from the log. Keep the note short and current.",
     "Record any holiday or system change that affects the working-day count. A holiday can move a cluster without a process change. Mark the change before comparing periods. The assumptions are part of the finding."
    ]
   },
   {
    "heading": "Share the finding",
    "paragraphs": [
     "Present the cluster as a timing pattern, not as a pricing failure. Show the days with the highest count and the decision gap for each. Ask the lock desk and the processors which deadline they cannot control. The discussion should produce one scheduling change to test.",
     "Keep the borrower conversation separate from the internal analysis. A borrower should hear about the rate and the closing date, not about the extension cluster. The account owner should handle any pricing question. The measurement is a planning aid."
    ]
   }
  ],
  "sources": [
   {
    "label": "Consumer Financial Protection Bureau, What is a rate lock",
    "url": "https://www.consumerfinance.gov/ask-cfpb/what-is-a-rate-lock-en-143/"
   },
   {
    "label": "Freddie Mac, Single-Family Seller Servicer Guide",
    "url": "https://guide.freddiemac.com/"
   }
  ]
 },
 {
  "slug": "measuring-vendor-order-turnaround-from-order-to-receipt",
  "title": "Measuring vendor order turnaround from order to receipt",
  "summary": "A measurement design for title and appraisal orders that separates vendor time, internal review time, and the gap between receipt and acceptance.",
  "cluster": "Vendor coordination",
  "publishedAt": "2026-11-11",
  "thumbnail": "/thumbnails/november-11/measuring-vendor-order-turnaround-from-order-to-receipt.webp",
  "finding": "Vendor turnaround is comparable only when the clock starts at a complete order, stops at an accepted deliverable, and separates vendor time from internal review time.",
  "sections": [
   {
    "heading": "Question and scope",
    "paragraphs": [
     "This brief asks how long title and appraisal orders take from a complete order to an accepted deliverable. The unit is one vendor order attached to one loan file. The outcome is the elapsed working time and the share of time spent inside the vendor versus inside the team. The question matters because a late closing is often blamed on a vendor without separating the internal steps.",
     "Scope should name the vendor types, the order types, and the period. A title commitment and an appraisal report have different production paths. Report them separately rather than combining them into one average. Exclude orders that were cancelled before the vendor acknowledged them."
    ]
   },
   {
    "heading": "Define order and receipt",
    "paragraphs": [
     "An order starts when the vendor receives a complete request, not when someone in the team drafts it. Record the timestamp of the vendor acknowledgement as the start. Receipt occurs when the deliverable arrives, while acceptance occurs when the file owner confirms that it meets the rule. Measure both receipt and acceptance.",
     "A complete order includes the loan number, property details, contact information, and any access instructions. If the order is incomplete, record the missing field and the date it was resolved. An incomplete order that waits for information is an internal delay, not a vendor delay. The distinction is the point of the measure."
    ]
   },
   {
    "heading": "Record the promised date",
    "paragraphs": [
     "Capture the date the vendor promises at acknowledgement and any revision to that date. Record who provided the promise and whether it was written. A promise made in a call should be confirmed in the order record. The promised date is the baseline for the turnaround comparison.",
     "If the vendor does not provide a date, record that gap rather than inventing one. A missing promise is itself a finding about the order process. Compare the actual receipt date with the promise and with the team target. The two comparisons answer different questions."
    ]
   },
   {
    "heading": "Measure elapsed and working time",
    "paragraphs": [
     "Calculate the elapsed calendar time and the working time between order and receipt. Working time excludes weekends and known holidays. Show both numbers because a short calendar gap can still cross a weekend. A team that works only weekdays needs the working-day view to plan.",
     "Measure the gap between receipt and acceptance separately. A deliverable can arrive quickly and wait for review. That wait belongs to the team, not the vendor. Report the vendor time and the internal time as two columns. A total that hides the split cannot guide a fix."
    ]
   },
   {
    "heading": "Separate vendor delay from internal delay",
    "paragraphs": [
     "A vendor delay occurs when the deliverable arrives after the promised date without a missing requirement. An internal delay occurs when the order was incomplete, the review queue was backed up, or the acceptance rule was unclear. Use a fixed reason list and record the evidence for the label. A general late code will hide the difference.",
     "When both causes appear, record the primary cause and the secondary cause. A late order that was also incomplete is not a clean vendor delay. The analysis should show the overlap rather than forcing every case into one bucket. Review a sample of labels before reporting the split."
    ]
   },
   {
    "heading": "Control for order type",
    "paragraphs": [
     "Appraisal orders may depend on property access, while title orders may depend on recording or payoff information. Record the order type and the property type. Compare turnaround within similar groups. A mixed average can make one vendor look slow when the mix is the real cause.",
     "Include the loan purpose and the closing timeline as context. A refinance order may have a different schedule from a purchase order. Report the count beside each group average. Small groups should be described rather than ranked."
    ]
   },
   {
    "heading": "Limits and error sources",
    "paragraphs": [
     "The vendor acknowledgement may be delayed even when the vendor received the order. The start timestamp can therefore overstate the vendor time. Review a sample against the vendor portal. If the gap is large, use the portal timestamp or note the limitation.",
     "The acceptance date depends on the reviewer and may reflect queue capacity. The analysis cannot show whether the vendor caused a closing delay without the internal timeline. It can show where the time sits. The cited public guidance describes property and title documentation, not a benchmark for turnaround."
    ]
   },
   {
    "heading": "Review cadence",
    "paragraphs": [
     "Review the result monthly while the order process is new, then quarterly if it is stable. Compare the new period with the prior one and note any vendor, system, or requirement change. A new contact can change the acknowledgement time without changing the production time. Keep the order type definitions beside the report so the comparison stays consistent.",
     "Share the result with the processors and the vendor relationship owner. Ask which orders are hard to complete and which promises are unrealistic. The vendor sees a different part of the process, and that view can explain a delay. Keep the conversation on the order path, not on a single late file."
    ]
   },
   {
    "heading": "What to fix first",
    "paragraphs": [
     "Start with the order type that has the largest internal gap between receipt and acceptance. A review queue fix may improve the total more than a vendor conversation. Then check the orders with the most incomplete submissions. Fix the order template before adding more follow-up.",
     "Test one change at a time and compare the same measure. Do not change the vendor and the template in the same period. Keep the result long enough to see whether the change holds. The goal is a reliable order path that the team can plan around."
    ]
   },
   {
    "heading": "Build the order log",
    "paragraphs": [
     "Create one row per order with the loan, vendor, order type, order date, acknowledgement date, promised date, receipt date, and acceptance date. Add the reviewer and the reason for any delay. Keep the log linked to the vendor portal reference. A row that starts at the draft date will overstate the vendor time.",
     "Use a fixed list for the order type and the delay reason. Add a short note for a revised order. Check the log against the vendor portal for one week before relying on it. A log that records only the receipt date cannot separate the internal review time."
    ]
   },
   {
    "heading": "Reconcile with the vendor portal",
    "paragraphs": [
     "Compare the internal log with the vendor portal on a fixed day each week. Match each order by loan and reference number. Note any order the portal shows as received but the log shows as pending. Investigate the difference before the next report.",
     "Record which source is treated as final for each date. A duplicate entry can make an order look faster or slower than it was. The reconciliation is a control, not a clerical task. Keep the reconciliation note with the log."
    ]
   },
   {
    "heading": "Report by order type and vendor",
    "paragraphs": [
     "Show a table with the order type, the vendor, the count, the median working days to receipt, and the median days to acceptance. Add the share of orders that arrived after the promised date. Report the internal and vendor time as separate columns. Keep the table to one page so the team can read it in the review.",
     "Keep the counts beside every average. A small group can show a dramatic number that does not generalize. Look for an order type that is slow across vendors, because that pattern is more likely to be a process issue. Note any vendor change during the period."
    ]
   },
   {
    "heading": "Test an earlier complete order",
    "paragraphs": [
     "Move one order type earlier in the process and compare the next quarter with the prior period. Measure the same turnaround and delay measures. Do not change the vendor or the review rule in the same test. Record the date and the owner of the change.",
     "Ask the processors whether the earlier order is complete enough to be useful. An order sent before the property details are confirmed may create more rework. If the test works, apply it to the next order type. If it does not, review the order template before adding more follow-up."
    ]
   },
   {
    "heading": "Document the assumptions",
    "paragraphs": [
     "Write down the start and stop points, the working-day calendar, the delay reasons, and the treatment of a revised order. State how an order that is cancelled before acknowledgement is counted. A reader should be able to rebuild the table from the log. Keep the note beside the order log.",
     "Record any change in vendor, system, or requirement and the date it took effect. A new contact can change the acknowledgement time without changing the production time. Mark the change before comparing periods. The assumptions are part of the result."
    ]
   }
  ],
  "sources": [
   {
    "label": "Fannie Mae, Selling Guide",
    "url": "https://selling-guide.fanniemae.com/"
   },
   {
    "label": "Consumer Financial Protection Bureau, Owning a Home",
    "url": "https://www.consumerfinance.gov/owning-a-home/"
   }
  ]
 },
 {
  "slug": "how-closing-disclosure-review-errors-cluster-by-fee-category",
  "title": "How closing disclosure review errors cluster by fee category",
  "summary": "A measurement brief on sorting closing disclosure review findings by fee category, source document, and correction time to target the next fix.",
  "cluster": "Post-closing",
  "publishedAt": "2026-11-11",
  "thumbnail": "/thumbnails/november-11/how-closing-disclosure-review-errors-cluster-by-fee-category.webp",
  "finding": "Closing disclosure errors cluster by fee category only when the review records the correct source value, the difference found, and the time needed to correct it.",
  "sections": [
   {
    "heading": "Question and scope",
    "paragraphs": [
     "This brief asks whether closing disclosure review findings cluster in particular fee categories. The unit is one reviewed disclosure with one or more findings. The outcome is the count and share of findings by category and the correction time. The question matters because a category with many small findings may matter less than one with a few blocking errors.",
     "Scope should name the loan types, the review stage, and the period. A pre-signing review may find different issues than a post-closing audit. Include both only if they use the same checklist. Exclude files where the disclosure was not reviewed because the loan was withdrawn."
    ]
   },
   {
    "heading": "Define a review error",
    "paragraphs": [
     "A review error is a difference between the disclosure and the approved terms or the settlement record that requires a correction or an explanation. A formatting difference alone is not an error unless it changes the borrower obligation. Record the field, the disclosed value, the correct value, and the source of the correct value. Record the severity beside the category so the two are not confused.",
     "Separate a blocking error from a note. A blocking error requires a new disclosure or a closing delay. A note is a question that was resolved without a change. The two should not be combined in one count. A high note count can make the process look worse than it is."
    ]
   },
   {
    "heading": "Build fee categories",
    "paragraphs": [
     "Use the categories on the disclosure, such as lender fees, title services, recording charges, transfer taxes, prepaid items, and escrow. Add a category for terms and one for borrower information. Keep the list stable so the periods can be compared. A category that changes definition will break the trend.",
     "Map each finding to one primary category and one secondary category when needed. A title fee that affects the cash to close may belong to title services first and cash to close second. Record the mapping rule so two reviewers code the same finding the same way. Test the rule on a small sample."
    ]
   },
   {
    "heading": "Record the source of the correct value",
    "paragraphs": [
     "Name the document used to judge the finding, such as the approval, the lock confirmation, the settlement statement, or the title commitment. A finding without a source is an opinion. Record the page or line when the source is long. The source makes the finding reviewable and the correction verifiable.",
     "If the correct value is not available, mark the finding as unresolved rather than assuming the disclosed value is wrong. An unresolved finding needs an owner and a date. The analysis should show unresolved items separately from confirmed errors. A false error count undermines the review."
    ]
   },
   {
    "heading": "Compare error rates by category",
    "paragraphs": [
     "Calculate the share of reviewed disclosures with at least one finding in each category. Show the count and the rate together. A category with a high rate and a small denominator may not be stable. A category with a lower rate and a large count may still create most of the correction work.",
     "Report the severity mix within the category. A category with many blocking errors deserves attention even if its total count is small. A category with many notes may need a clearer checklist rather than a process change. The mix is more useful than a single ranking."
    ]
   },
   {
    "heading": "Measure correction time",
    "paragraphs": [
     "Record the time from the finding to the corrected disclosure or the documented resolution. Use working hours and show the elapsed time as well. A finding that is easy to fix but sits in a queue can still delay a closing. Correction time connects the review to the borrower experience.",
     "Group correction time by category and by owner. A category that is corrected quickly may not need a process change, even if it appears often. A category that takes days needs a different response. Report the median and the count rather than an average alone."
    ]
   },
   {
    "heading": "Limits and error sources",
    "paragraphs": [
     "A finding may be recorded differently by different reviewers, especially when the checklist uses broad categories. Test agreement on a sample before reporting a trend. A category that two reviewers define differently will produce a misleading rate. Revise the definition before expanding the sample.",
     "The review may miss an error that a later audit finds. The measure describes what the review caught, not the true error rate. Keep the claim at that level. The cited public guidance describes disclosure requirements, not a benchmark for review accuracy."
    ]
   },
   {
    "heading": "Review cadence",
    "paragraphs": [
     "Review the result monthly while the checklist is new, then quarterly if it is stable. Compare the new result with the prior period and note any change in fees, vendors, or disclosure rules. A new fee can create a cluster without a process failure. Mark the change before interpreting the trend.",
     "Share the result with the review team and the closing team. Ask which categories are hard to judge and which sources are hard to find. The review team sees the document, while the closing team sees the settlement record. Both views are needed for a useful fix."
    ]
   },
   {
    "heading": "What to fix first",
    "paragraphs": [
     "Start with the category that has the highest share of blocking errors and a meaningful count. Add a source reference to the checklist for that category before adding a new review step. Measure the blocking rate after the change. Do not change the whole checklist at once.",
     "If the category improves, move to the next one. If it does not, read a sample of findings to see whether the issue is the rule, the source, or the review timing. A checklist change should make the next review faster and more consistent. The goal is fewer corrections, not more findings."
    ]
   },
   {
    "heading": "Build the finding log",
    "paragraphs": [
     "Create one row per finding with the loan, review date, category, disclosed value, correct value, source document, and correction date. Add the reviewer and whether the finding blocked signing. Keep the log linked to the reviewed disclosure. A row that records only the category cannot support a correction-time measure.",
     "Use a fixed category list and a separate severity field. Add a short note for a finding that spans two categories. Check the log against a sample of disclosures before relying on it. A finding without a source is not ready for the trend."
    ]
   },
   {
    "heading": "Test the coding with a second reviewer",
    "paragraphs": [
     "Have a second person code a sample of findings without seeing the first result. Compare the category, the severity, and the source. A disagreement about category is usually a definition problem. Resolve it by reading the disclosure and the source together.",
     "Write the resolution into the category rules and repeat the test after a checklist change. A coding scheme that only one person can apply will not support a reliable trend. Report the agreement beside the finding count. The goal is a shared standard."
    ]
   },
   {
    "heading": "Report by loan type and reviewer",
    "paragraphs": [
     "Show the finding rate by loan type and by review team. Add the count and the share of blocking findings. A loan type with a high rate and a small count may not be stable. A type with a lower rate and a large count may still create most of the correction work.",
     "Look for a category that is weak across teams, because that pattern is more likely to be a checklist or form issue. Note any change in fees, vendors, or rules during the period. Report the groups separately before reporting a total. Show the count beside each rate so a small group is not overread."
    ]
   },
   {
    "heading": "Test one checklist change",
    "paragraphs": [
     "Choose one category and add one specific check, such as a source line for title fees. Measure the blocking findings and the correction time for that category before and after. Keep the rest of the checklist the same. A change that adds time without reducing findings is not an improvement.",
     "Run the test long enough to include a normal mix of files. Ask the reviewers whether the new check is easy to apply. If the category improves, keep the change and move to the next one. If it does not, read a sample of findings before changing the rule again."
    ]
   },
   {
    "heading": "Document the assumptions",
    "paragraphs": [
     "Write down the review stage, the finding definition, the category rules, the severity levels, and the correction-time measure. State how a finding that is resolved by explanation is counted. A reader should be able to rebuild the table from the log. Keep the note short and current.",
     "Record any change in the disclosure form, the fee rule, or the review checklist and the date it took effect. A new form can move findings from one category to another. Mark the change before comparing periods. The assumptions are part of the finding."
    ]
   }
  ],
  "sources": [
   {
    "label": "Consumer Financial Protection Bureau, Closing disclosure",
    "url": "https://www.consumerfinance.gov/owning-a-home/closing-disclosure/"
   },
   {
    "label": "Consumer Financial Protection Bureau, Regulation Z",
    "url": "https://www.consumerfinance.gov/rules-policy/regulations/1026/"
   }
  ]
 },
 {
  "slug": "a-framework-for-auditing-borrower-escalation-summaries",
  "title": "A framework for auditing borrower escalation summaries",
  "summary": "An audit framework for checking whether a borrower escalation summary is factual, complete, and clear about the next step and its owner.",
  "cluster": "Borrower communication",
  "publishedAt": "2026-11-11",
  "thumbnail": "/thumbnails/november-11/a-framework-for-auditing-borrower-escalation-summaries.webp",
  "finding": "A borrower escalation summary can be audited against four tests: confirmed facts, a named blocking item, one next step, and a date the team can keep.",
  "sections": [
   {
    "heading": "Question and scope",
    "paragraphs": [
     "This brief asks whether borrower escalation summaries meet a consistent standard for facts, ownership, and next steps. The unit is one summary sent to a borrower about a stalled file. The outcome is the share of summaries that pass each test. The question matters because an unclear escalation can increase calls and erode trust.",
     "Scope should name the teams, the communication channels, and the period. A portal message may have different constraints from a letter. Include both if they use the same review standard. Exclude general marketing messages and routine status updates that were not escalations."
    ]
   },
   {
    "heading": "Define an escalation summary",
    "paragraphs": [
     "An escalation summary is a written message that explains a file delay, names the blocking item, and gives the borrower a next step or a next update date. A message that only says the file is in review is a status update, not an escalation summary. A message that asks for a document is a request, not an escalation, unless it also explains a delay. Record the channel and the sender so the sample can be checked.",
     "The definition should state the minimum elements and the allowed channels. It should also state who may send the summary and who must approve it. A summary sent without the right authority can create a commitment the team cannot keep. Write the definition before sampling the messages."
    ]
   },
   {
    "heading": "Build the evidence standard",
    "paragraphs": [
     "Each factual claim should be traceable to the loan file, the vendor record, or a dated system event. A claim about when a document was received needs a receipt date. A claim about a review queue needs a queue entry time. A claim about the next step needs an owner and a date.",
     "Separate confirmed facts from estimates and label them in the review. An estimate is acceptable when it is presented as one. An estimate presented as a fact is a finding. The standard should be strict enough to protect the borrower and practical enough for a busy processor."
    ]
   },
   {
    "heading": "Sample summaries across stages",
    "paragraphs": [
     "Sample summaries from intake, processing, underwriting, and closing. A delay at each stage has different evidence and different owners. A sample from one stage will not show the full pattern. Include messages sent through different channels when the team uses more than one.",
     "Choose the sample across the period and across senders. Include summaries that led to a complaint or a repeat call, and summaries that did not. A sample of only problem cases will overstate the failure rate. Record the sampling method so the next audit can repeat it."
    ]
   },
   {
    "heading": "Score clarity and factual support",
    "paragraphs": [
     "Score each summary on four tests: confirmed facts, a named blocking item, one next step, and a realistic date. Add a readability check for plain language and a check that the message does not expose internal codes. A summary can be factual and still be hard to understand. Record the score beside the source file so a reviewer can check it.",
     "Use a simple pass, partial, or fail score for each test. Have a second reviewer score a sample without seeing the first result. Compare the scores and resolve disagreements by reading the file. A framework that only one person can apply is not ready for a trend."
    ]
   },
   {
    "heading": "Compare outcomes after the summary",
    "paragraphs": [
     "Record whether the borrower responded, called, complained, or completed the requested action. Compare the outcomes for summaries that passed the standard with those that did not. The comparison is descriptive and may reflect the difficulty of the file rather than the message. Do not claim that a better summary caused a better outcome.",
     "Also record the time to the next update and whether the team met the promised date. A summary that passes every test but misses its date still damages trust. The outcome measure should include the follow-through, not only the wording. Report the follow-through separately from the wording score."
    ]
   },
   {
    "heading": "Limits and error sources",
    "paragraphs": [
     "A borrower may not respond because of work schedules or preferences rather than the message. The audit cannot isolate the effect of the summary from those factors. It can show where the message is unclear or unsupported. Keep the claim at that level and read the file before drawing a conclusion.",
     "The sample may miss messages sent by phone or in person. Record the channel and note the gap. If most escalations happen by phone, the written audit covers only part of the process. The cited public guidance describes borrower communication expectations, not a benchmark for summary quality."
    ]
   },
   {
    "heading": "Review cadence",
    "paragraphs": [
     "Review the audit monthly while the standard is new, then quarterly if the scores are stable. Compare the new result with the prior period and note any change in template, staffing, or channel. A new portal can change the message format without changing the underlying behavior. Keep the scoring guide with the report so the next review uses the same standard.",
     "Share the result with the people who write the summaries and the people who take the calls. Ask which facts are hard to confirm and which dates are hard to keep. Their answers can explain a score that looks surprising. Keep the discussion on the process rather than on individual performance."
    ]
   },
   {
    "heading": "What to fix first",
    "paragraphs": [
     "Start with the test that fails most often and has the clearest fix. A missing next update date may be easier to fix than a missing evidence trail. Add a required field to the summary template and measure the pass rate after the change. Do not rewrite every template at once.",
     "If the scores improve, move to the next test. If they do not, review the source record that the writer uses. A writer cannot produce a factual summary from an incomplete file. Fix the record before asking for a better message."
    ]
   },
   {
    "heading": "Build the summary sample",
    "paragraphs": [
     "Select summaries from a fixed list of files and channels. Record the stage, the sender, the date, and the reason for the escalation. Include messages that were followed by a call and messages that were not. A sample of only complaint files will overstate the problem.",
     "Remove borrower identifiers before scoring and store the sample in an approved location. Keep the file reference in a separate list so a finding can be checked. A sample that cannot be traced back to the source is hard to verify. Record the sampling method for the next audit."
    ]
   },
   {
    "heading": "Test the scoring with a second reviewer",
    "paragraphs": [
     "Ask a second reviewer to score the same sample without seeing the first result. Compare the four tests and the readability check. A disagreement about facts usually means the file record is incomplete. A disagreement about clarity means the standard needs an example.",
     "Resolve the disagreement by reading the summary and the file together. Write the resolution into the scoring guide. Repeat the test after a template change. A framework that only one person can apply is not ready for a trend."
    ]
   },
   {
    "heading": "Report by stage and sender",
    "paragraphs": [
     "Show the pass rate by file stage and by sender role. Add the count and the share of summaries that led to a repeat call. A stage with a high rate and a small count may not be stable. A stage with a lower rate and a large count may still create most of the follow-up work.",
     "Look for a test that fails across stages, because that pattern is more likely to be a template or training issue. Note any change in channel or staffing during the period. Report the groups separately before reporting a total. Show the count beside each rate so a small group is not overread."
    ]
   },
   {
    "heading": "Test one template change",
    "paragraphs": [
     "Choose one failing test and add one field to the summary template. For example, require the next update date and the role that will provide it. Measure the pass rate and the repeat-call rate before and after. Keep the rest of the template the same.",
     "Ask the writers whether the field is easy to complete from the file. A field that requires missing information will be filled with a guess. If the test works, keep the change and move to the next test. If it does not, fix the source record before changing the wording."
    ]
   },
   {
    "heading": "Document the assumptions",
    "paragraphs": [
     "Write down the escalation definition, the four tests, the scoring scale, the sample method, and the outcome measures. State how a summary that was corrected after sending is scored. A reader should be able to rebuild the result from the note. Keep the note beside the scoring guide.",
     "Record any change in template, channel, or approval rule and the date it took effect. A new channel can change the length and the tone without changing the facts. Mark the change before comparing periods. The assumptions protect the team from a misleading trend."
    ]
   }
  ],
  "sources": [
   {
    "label": "Consumer Financial Protection Bureau, Owning a Home",
    "url": "https://www.consumerfinance.gov/owning-a-home/"
   },
   {
    "label": "Consumer Financial Protection Bureau, Mortgage servicing",
    "url": "https://www.consumerfinance.gov/rules-policy/regulations/1024/"
   }
  ]
 },
 {
  "slug": "measuring-document-exception-recurrence-within-a-loan-file",
  "title": "Measuring document exception recurrence within a loan file",
  "summary": "A measurement design for whether the same document exception returns after it was cleared, and what the repeat interval says about the request and review.",
  "cluster": "Pipeline operations",
  "publishedAt": "2026-11-11",
  "thumbnail": "/thumbnails/november-11/measuring-document-exception-recurrence-within-a-loan-file.webp",
  "finding": "Recurrence is measurable when the team defines a cleared exception, records the first and second open dates, and separates a new issue from a true repeat.",
  "sections": [
   {
    "heading": "Question and scope",
    "paragraphs": [
     "This brief asks whether a document exception that was cleared returns later in the same loan file. The unit is one exception on one file. The outcome is the share that reopens and the interval between the first clearance and the second open. The question matters because a repeat adds borrower effort and can signal an unclear request or a weak review.",
     "Scope should name the document types, the loan types, and the period. A title exception may recur for a different reason than an income exception. Report the types separately. Exclude exceptions on files that were withdrawn before the first clearance."
    ]
   },
   {
    "heading": "Define a cleared exception",
    "paragraphs": [
     "A cleared exception is one where the required evidence was received, reviewed, and accepted under the written rule. A document that arrived but was not reviewed is not cleared. A conditional acceptance that still needs a follow-up is not cleared. Record the person who accepted it and the date.",
     "The definition should distinguish a clearance from a status change. A status change may reflect a queue move rather than an accepted document. Read the note and the acceptance field together. A clearance without a note is weak evidence for this measure."
    ]
   },
   {
    "heading": "Set the observation window",
    "paragraphs": [
     "Start the window at the first clearance and end it at closing or at a fixed number of days, whichever comes first. Use the same window for every exception so the comparison is fair. A long window gives more time for a repeat, while a short window may miss a late one. Report the window beside the rate.",
     "Record whether the file closed during the window. A file that closed quickly had less opportunity to reopen. A file that remained open may have had more chances. The analysis should account for the difference before comparing types."
    ]
   },
   {
    "heading": "Classify the original exception",
    "paragraphs": [
     "Record the original reason, such as a missing page, an unreadable document, an expired statement, or an unacceptable source. The reason helps separate a true repeat from a new issue on the same topic. A second request for a different month is not a recurrence of the first exception. A second request for the same missing page is.",
     "Use a fixed list of original reasons and a separate flag for whether the second open has the same reason. Two reviewers should be able to apply the flag the same way. Test the coding on a sample before reporting the rate. A broad definition will inflate the recurrence count."
    ]
   },
   {
    "heading": "Measure the repeat interval",
    "paragraphs": [
     "Calculate the working days between the first clearance and the second open. A short interval may indicate that the first review missed a problem. A longer interval may indicate a new requirement or a document that expired. Report the distribution and the count rather than only an average.",
     "Group the intervals into practical buckets, such as zero to three days, four to ten days, and more than ten days. Show the reason mix within each bucket. A repeat within a day is a different process problem from a repeat after two weeks. The interval gives the team a clue about where to look."
    ]
   },
   {
    "heading": "Compare recurrence by evidence type",
    "paragraphs": [
     "Calculate the recurrence rate for each document type and show the count beside it. A type with a high rate and a small count may not be stable. A type with a lower rate and a large count may still create most of the repeat work. Report both numbers before ranking the types.",
     "Look at the reason mix within each type. If most income repeats are missing pages, the request format may need a page list. If most asset repeats are unacceptable sources, the source rule may need a clearer example. The reason is more actionable than the rate alone."
    ]
   },
   {
    "heading": "Control for file and team",
    "paragraphs": [
     "Files differ in complexity, borrower type, and the number of exceptions. Record the loan purpose, the income type, and the processing team. Compare the recurrence rate within similar groups. A team with a complex pipeline may have a higher rate for reasons unrelated to its review quality.",
     "Include the reviewer when the sample is large enough to protect privacy. Use the grouping to prompt a conversation, not to rank individuals. A new reviewer may reopen more items because the file is unfamiliar. The analysis should describe the pattern, not assign fault."
    ]
   },
   {
    "heading": "Limits and error sources",
    "paragraphs": [
     "A repeat may reflect a borrower who uploaded the wrong document rather than an unclear request. The record alone cannot assign cause. Read a sample of files and notes before drawing a conclusion. Keep the claim at the level the evidence supports.",
     "The log may miss a reopen that happened in a message thread or a phone call. Reconcile a sample with the communication record. If the gap is large, improve the capture before expanding the sample. The cited public guidance describes document expectations, not a benchmark for recurrence."
    ]
   },
   {
    "heading": "Review cadence",
    "paragraphs": [
     "Review the result monthly for the first quarter, then quarterly if it is stable. Compare the new period with the prior one and note any change in document rules, staffing, or systems. A new requirement can create repeats without a process failure. Mark the change before interpreting the trend.",
     "Share the result with the processors, reviewers, and borrower communication team. A repeat often crosses more than one role. Ask for one change that the group can test together. The goal is a request that is clear the first time, not a longer follow-up list."
    ]
   },
   {
    "heading": "Build the recurrence log",
    "paragraphs": [
     "Create one row per exception with the loan, document type, original open date, clearance date, second open date, and reason. Add the reviewer and whether the file closed during the window. Keep the log linked to the document history. A row that records only the first open date cannot show a repeat.",
     "Use a fixed list for the original reason and the second reason. Add a short note for a repeat that involves a different document on the same topic. Check the log against a sample of files before relying on it. A missing second date will understate the rate."
    ]
   },
   {
    "heading": "Reconcile with the message history",
    "paragraphs": [
     "Compare the log with the borrower and vendor message history for a sample of files. Look for a reopen that happened in a message thread rather than the system. Record the difference and the date. A repeat that is invisible in the log is still a repeat for the borrower.",
     "Decide which source is final for each date and write the rule down. A message may arrive before the system status changes. Use the earlier date when it reflects the actual request. The reconciliation improves the log and the next review."
    ]
   },
   {
    "heading": "Report by document type and team",
    "paragraphs": [
     "Show the recurrence rate by document type and by processing team. Add the count and the median interval. A type with a high rate and a small count may not be stable. A type with a lower rate and a large count may still create most of the repeat work.",
     "Look for a type that recurs across teams, because that pattern is more likely to be a request or source issue. Note any change in requirements or staffing during the period. Report the groups separately before reporting a total. Show the count beside each rate so a small group is not overread."
    ]
   },
   {
    "heading": "Test one request change",
    "paragraphs": [
     "Choose one document type and add one specific detail to the request, such as the exact pages or a source example. Measure the recurrence rate and the interval before and after. Keep the acceptance rule the same during the test. A change that moves the repeat to a different reason is not a success.",
     "Ask the processors and the borrowers whether the request was easier to answer. A lower rate with a confusing request may not hold. If the test works, keep the change and move to the next type. If it does not, read a sample of requests before changing the template again."
    ]
   },
   {
    "heading": "Document the assumptions",
    "paragraphs": [
     "Write down the clearance definition, the observation window, the reason list, and the treatment of a file that closes early. State how a repeat on the same topic but a different document is counted. A reader should be able to rebuild the table from the log. Keep the note short and current.",
     "Record any change in document rules, staffing, or systems and the date it took effect. A new rule can create a repeat without a process failure. Mark the change before comparing periods. The assumptions are part of the result."
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
