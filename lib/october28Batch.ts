import type { BlogPost, ResearchPost } from './types';

export const october28BlogBatch: readonly BlogPost[] = [
  {
    "slug": "homeloanprocessors-loan-application-receipt-log-2026-10-28",
    "title": "Open a receipt log for every loan application",
    "description": "A receipt record for application date, source, package contents, missing items, and the first review owner.",
    "category": "Intake and Records",
    "publishedAt": "2026-10-28",
    "readTime": "6 min read",
    "thumbnail": "/article-thumbnails/october-28/homeloanprocessors-loan-application-receipt-log-2026-10-28.webp",
    "sections": [
      {
        "heading": "Why application receipt needs a timestamp",
        "paragraphs": [
          "A loan application can arrive through a portal, email, a referral partner, or a branch upload. If the file records only the date it was opened, the team cannot tell whether the first review used a complete package or an early partial file.",
          "The receipt log records when the application arrived, who sent it, which documents were present, and which items were still missing. It does not approve the file. It makes the starting condition visible to the next reviewer."
        ]
      },
      {
        "heading": "What the log should capture",
        "paragraphs": [
          "Capture the borrower name, loan number, application date, source channel, package version, disclosure packet, identity documents, income documents, asset statements, and the name of the person who checked the package.",
          "Separate a missing document from an unreadable file and from a document that was later replaced. Those conditions create different follow-up work, and a single missing label makes the queue harder to review."
        ]
      },
      {
        "heading": "Handle partial and reissued files",
        "paragraphs": [
          "When a file arrives in stages, keep the original receipt and add a new entry for each later package. Do not overwrite the first timestamp. The processor may start on available scope, but each task should point to the package version that supported it.",
          "A reissued file needs a reason code, a list of changed documents, and a disposition for work already prepared. Mark prior items as retained, revised, or held so a second reviewer can see what moved."
        ]
      },
      {
        "heading": "Run the daily intake review",
        "paragraphs": [
          "At the daily review, compare new receipts with the missing-item list and the first review tasks. Ask what arrived, what remains missing, and which task is waiting. Record the answer in the file rather than in a separate chat thread.",
          "Close the receipt review only when the missing items have an owner and a follow-up date. A file that is merely acknowledged is still waiting for the first substantive review."
        ]
      },
      {
        "heading": "Route exceptions before they age",
        "paragraphs": [
          "Define reason codes for intake exceptions: missing identity, missing income, unreadable document, conflicting borrower information, duplicate application, or stale disclosure. The code should lead to one owner and one next action.",
          "If the exception affects eligibility, disclosure timing, or a borrower commitment, stop the dependent action and route it to the lending manager. Urgency does not remove the need for a decision record."
        ]
      },
      {
        "heading": "Review the record at file close",
        "paragraphs": [
          "At closing, sample the first receipt, the latest receipt, and one reissued document. Check the timestamp, source, package version, missing-item history, and the owner who accepted the file.",
          "A clean receipt record does not prove the loan is complete. It shows that the intake history was tested, which makes the remaining exceptions easier to review."
        ]
      }
    ],
    "faq": [
      {
        "q": "What is the first field to capture?",
        "a": "The documented arrival time and source channel, followed by the package version and the documents present at that moment."
      },
      {
        "q": "Should a later package overwrite the first receipt?",
        "a": "No. Add a new entry and keep the original so the review history remains reconstructable."
      },
      {
        "q": "What closes the receipt review?",
        "a": "Every missing item has an owner and a follow-up date, and the first substantive review task has started or is scheduled."
      }
    ],
    "internalService": "/services/loan-file-indexing",
    "internalSibling": "/blog/homeloanprocessors-income-verification-source-map-2026-10-28",
    "source": {
      "label": "CFPB mortgage tools",
      "url": "https://www.consumerfinance.gov/consumer-tools/mortgages/"
    }
  },
  {
    "slug": "homeloanprocessors-income-verification-source-map-2026-10-28",
    "title": "Map each income verification to its source document",
    "description": "A source map for pay statements, tax records, benefit letters, and employer confirmation used in the income review.",
    "category": "Income Review",
    "publishedAt": "2026-10-28",
    "readTime": "6 min read",
    "thumbnail": "/article-thumbnails/october-28/homeloanprocessors-income-verification-source-map-2026-10-28.webp",
    "sections": [
      {
        "heading": "Why income needs a source map",
        "paragraphs": [
          "Income review often fails at the link between a calculated figure and the document that supports it. A number may be correct while the source, period, or borrower is unclear.",
          "The source map records the document, the period covered, the borrower or employer, the figure used, the calculation, and the reviewer. It lets another person repeat the review instead of trusting a summary."
        ]
      },
      {
        "heading": "Start with the document set",
        "paragraphs": [
          "List each income source separately: base employment, overtime, bonus, commission, self-employment, retirement, benefit, rental, or other. For each, name the document that supports it and the date the document was received.",
          "Do not combine two sources into one line until the supporting documents and periods are clear. A combined figure is harder to correct when one source changes."
        ]
      },
      {
        "heading": "Record the calculation and the exception",
        "paragraphs": [
          "Show the figure used, the period, the frequency, and the conversion to the review period. If a calculation depends on an average or a trend, record the rule and the source data.",
          "When documents conflict, preserve both values and label the discrepancy. Do not overwrite the earlier figure to make the file look consistent. The reviewer needs to see the conflict and the decision that resolved it."
        ]
      },
      {
        "heading": "Check identity and period alignment",
        "paragraphs": [
          "Confirm that the document belongs to the borrower or a permitted co-borrower and that the period matches the review. A pay statement with the right amount but the wrong borrower is a serious source error.",
          "For self-employment or variable income, record the additional documents used and the period covered. A single month is not a complete basis for a trend."
        ]
      },
      {
        "heading": "Review before the condition response",
        "paragraphs": [
          "Before responding to an income condition, compare the source map with the condition text. The response should address the specific document or calculation requested, not send a generic packet.",
          "If the condition cannot be cleared with the available evidence, record the gap and route one precise question. A partial response can restart the clock and create more work."
        ]
      },
      {
        "heading": "Sample the map at file review",
        "paragraphs": [
          "Sample one base-income file, one variable-income file, and one file with a conflict. Check the source, period, calculation, reviewer, and resolution note.",
          "A map that cannot be followed by a second reviewer is not complete, even when the final figure happens to be right."
        ]
      }
    ],
    "faq": [
      {
        "q": "What belongs on an income source map?",
        "a": "The document, period, borrower or employer, figure used, calculation, reviewer, and any conflict or exception."
      },
      {
        "q": "How should conflicting documents be handled?",
        "a": "Preserve both values, label the discrepancy, and record the decision that resolved it."
      },
      {
        "q": "What should a condition response include?",
        "a": "The specific document or calculation requested and the evidence that addresses it, with any remaining gap stated clearly."
      }
    ],
    "internalService": "/services/income-verification",
    "internalSibling": "/blog/homeloanprocessors-loan-application-receipt-log-2026-10-28",
    "source": {
      "label": "Fannie Mae Selling Guide",
      "url": "https://selling-guide.fanniemae.com/"
    }
  },
  {
    "slug": "homeloanprocessors-appraisal-order-readiness-2026-10-28",
    "title": "Check appraisal order readiness before the request goes out",
    "description": "A readiness check for property data, borrower contact, access notes, scope, and the expected delivery date.",
    "category": "Appraisal Coordination",
    "publishedAt": "2026-10-28",
    "readTime": "6 min read",
    "thumbnail": "/article-thumbnails/october-28/homeloanprocessors-appraisal-order-readiness-2026-10-28.webp",
    "sections": [
      {
        "heading": "Why an appraisal order can fail before the appraiser starts",
        "paragraphs": [
          "An appraisal request can be complete in the system and still lack the property detail, access instruction, or scope note the appraiser needs. The result is a delay that looks like appraiser capacity but started at order entry.",
          "The readiness check confirms that the property record, borrower contact, access path, assignment conditions, and expected delivery date are present before the order is released."
        ]
      },
      {
        "heading": "Verify the property and contact record",
        "paragraphs": [
          "Check the address, unit number, property type, occupancy status, and any known access restriction. Confirm the borrower or authorized contact method and the best time to reach them.",
          "Do not send an appraiser into a property with an unresolved access question. A missing gate code or a tenant contact can stop an inspection after the appointment window is already reserved."
        ]
      },
      {
        "heading": "Confirm scope and assignment conditions",
        "paragraphs": [
          "Record the assignment type, the intended use, any required forms, and the conditions that must appear in the report. A generic order that omits a required condition often returns a report that has to be revised.",
          "Separate the appraiser's professional judgment from the lender's assignment conditions. The processor may confirm that a condition was communicated; the appraiser decides how to analyze it."
        ]
      },
      {
        "heading": "Set the delivery and review dates",
        "paragraphs": [
          "Record the order date, the expected inspection date, the expected delivery date, and the internal review date. The internal review date should leave room for a revision request before the closing schedule is affected.",
          "If the expected date changes, update the file and notify the owner who depends on it. A stale expected date is worse than an honest delay because it hides the risk from the closing team."
        ]
      },
      {
        "heading": "Handle revisions and re-inspections",
        "paragraphs": [
          "When a revision is requested, record the question, the appraiser response, the revised report, and the reviewer who accepted it. Link the revision to the original order so the history is not split across messages.",
          "A re-inspection needs a reason and an owner. Do not order a second inspection simply because the first report is inconvenient; route the specific deficiency first."
        ]
      },
      {
        "heading": "Review the order at closing readiness",
        "paragraphs": [
          "At closing readiness, sample one routine order, one order with a revision, and one order with a date change. Check the property data, access note, scope, delivery date, and reviewer sign-off.",
          "The order record should let a second person see what was requested, what was received, and what remained unresolved."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should be checked before an appraisal order is released?",
        "a": "Property data, borrower contact, access instructions, assignment conditions, expected delivery date, and the internal review date."
      },
      {
        "q": "How should an appraiser revision be recorded?",
        "a": "Link the question, response, revised report, and reviewer acceptance to the original order."
      },
      {
        "q": "What is the risk of a stale expected date?",
        "a": "It hides a delivery delay from the closing team and can cause avoidable schedule pressure."
      }
    ],
    "internalService": "/services/appraisal-coordination",
    "internalSibling": "/blog/homeloanprocessors-loan-application-receipt-log-2026-10-28",
    "source": {
      "label": "Freddie Mac Guide",
      "url": "https://guide.freddiemac.com/"
    }
  },
  {
    "slug": "homeloanprocessors-title-commitment-review-2026-10-28",
    "title": "Review the title commitment against the loan file",
    "description": "A comparison routine for vesting, legal description, exceptions, requirements, and the closing instructions.",
    "category": "Title and Closing",
    "publishedAt": "2026-10-28",
    "readTime": "6 min read",
    "thumbnail": "/article-thumbnails/october-28/homeloanprocessors-title-commitment-review-2026-10-28.webp",
    "sections": [
      {
        "heading": "Why the title commitment needs its own review",
        "paragraphs": [
          "A title commitment can arrive complete and still conflict with the loan file. The borrower name, vesting, legal description, or an exception may require a condition that is not visible in the closing checklist.",
          "The processor compares the commitment with the application, the sales contract, the survey or property record, and the closing instructions. The goal is to find the mismatch before the closing date is fixed."
        ]
      },
      {
        "heading": "Check the parties and vesting",
        "paragraphs": [
          "Compare the borrower, seller, and vesting language with the application and the contract. A middle name, a trust, or a business entity can change the documents required at closing.",
          "Record the difference and the owner who will resolve it. Do not assume that a familiar borrower name means the vesting is correct."
        ]
      },
      {
        "heading": "Review the legal description and exceptions",
        "paragraphs": [
          "Confirm that the legal description matches the property record and the contract. List each exception and requirement with a disposition: accepted, cleared, or pending.",
          "A standard exception is not automatically harmless. The reviewer should know what it covers and whether it conflicts with the loan purpose or the borrower's intended use."
        ]
      },
      {
        "heading": "Connect requirements to closing tasks",
        "paragraphs": [
          "Each title requirement should link to a task, an owner, and a due date. A requirement that is only noted in the commitment may never reach the closing table.",
          "If a requirement cannot be cleared before closing, record the condition and the person who approved the path. Do not hide it in a general closing note."
        ]
      },
      {
        "heading": "Review the closing instruction match",
        "paragraphs": [
          "Compare the commitment with the closing instructions and the final closing disclosure timing. A mismatch in payoff, vesting, or exception can change the funds or the documents required.",
          "The processor should route the mismatch, not resolve a legal or title judgment independently. The title professional and the lending manager own that decision."
        ]
      },
      {
        "heading": "Sample the review at closing",
        "paragraphs": [
          "At closing, sample one clean commitment, one with an exception, and one with a requirement that was cleared late. Check the parties, legal description, exception disposition, task owner, and closing instruction match.",
          "The record should show what was compared, who accepted the result, and which items remained open."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should be compared first?",
        "a": "The parties, vesting, legal description, exceptions, and requirements against the application, contract, property record, and closing instructions."
      },
      {
        "q": "Should the processor clear a title exception alone?",
        "a": "No. The processor records and routes the issue; the title professional and lending manager own the legal and risk decision."
      },
      {
        "q": "How should a title requirement be tracked?",
        "a": "As a task with an owner, a due date, and a closing disposition."
      }
    ],
    "internalService": "/services/closing-preparation",
    "internalSibling": "/blog/homeloanprocessors-closing-prep-handoff-2026-10-28",
    "source": {
      "label": "CFPB closing information",
      "url": "https://www.consumerfinance.gov/rules-policy/regulations/1026/"
    }
  },
  {
    "slug": "homeloanprocessors-condition-response-ledger-2026-10-28",
    "title": "Track underwriting conditions in one response ledger",
    "description": "A ledger for condition text, requested evidence, owner, due date, response, and reviewer disposition.",
    "category": "Underwriting Support",
    "publishedAt": "2026-10-28",
    "readTime": "6 min read",
    "thumbnail": "/article-thumbnails/october-28/homeloanprocessors-condition-response-ledger-2026-10-28.webp",
    "sections": [
      {
        "heading": "Why conditions need one ledger",
        "paragraphs": [
          "Conditions arrive through underwriting notes, email, portal messages, and phone calls. When the request and the response live in different places, the file can look complete while a condition remains unanswered.",
          "The condition ledger records the exact condition, the requested evidence, the owner, the due date, the response, and the reviewer disposition. It gives every condition one visible path."
        ]
      },
      {
        "heading": "Keep the condition text intact",
        "paragraphs": [
          "Copy the condition as written and link it to the reviewer who issued it. Do not paraphrase a condition into a broader request; a small wording change can produce the wrong document.",
          "If the condition is ambiguous, route one question before collecting a large packet. A precise clarification is faster than a response that has to be redone."
        ]
      },
      {
        "heading": "Record the response and the evidence",
        "paragraphs": [
          "For each response, record the document or explanation supplied, the date, the person who prepared it, and the location in the file. The ledger should point to the evidence rather than duplicate sensitive content.",
          "A response is not cleared just because it was sent. The reviewer must accept it or return a specific follow-up. Record that disposition and the next owner."
        ]
      },
      {
        "heading": "Manage aging and exceptions",
        "paragraphs": [
          "Track the age of each open condition from the date it was issued, not the date it was last mentioned. Show the oldest open item and the number of times it was returned.",
          "If a condition is returned twice for the same reason, review the request or the evidence standard. Repeated reminders do not fix an unclear condition."
        ]
      },
      {
        "heading": "Review before the closing handoff",
        "paragraphs": [
          "Before closing, compare the ledger with the underwriting approval and the closing checklist. Every condition should be cleared, waived by the authorized owner, or explicitly carried as a closing condition.",
          "A condition that is carried forward needs an owner, a due date, and the consequence if it is not met. It cannot be left as a general note."
        ]
      },
      {
        "heading": "Sample the ledger monthly",
        "paragraphs": [
          "Sample one routine condition, one returned condition, and one condition that required an exception. Check the original text, evidence, disposition, owner, and age.",
          "The sample should show whether the ledger is being used to make decisions or merely to record activity."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should a condition ledger contain?",
        "a": "The condition text, requested evidence, owner, due date, response, reviewer disposition, and location of the evidence."
      },
      {
        "q": "When is a condition cleared?",
        "a": "When the reviewer accepts the response or authorizes a waiver, and the disposition is recorded."
      },
      {
        "q": "How should a carried condition be handled?",
        "a": "With an owner, a due date, and a stated consequence if it is not met before closing."
      }
    ],
    "internalService": "/services/underwriting-support",
    "internalSibling": "/blog/homeloanprocessors-appraisal-order-readiness-2026-10-28",
    "source": {
      "label": "Fannie Mae Selling Guide",
      "url": "https://selling-guide.fanniemae.com/"
    }
  },
  {
    "slug": "homeloanprocessors-disclosure-packet-timing-2026-10-28",
    "title": "Check disclosure packet timing before closing",
    "description": "A timing check for changed circumstances, revised disclosures, delivery evidence, and the closing schedule.",
    "category": "Compliance Support",
    "publishedAt": "2026-10-28",
    "readTime": "6 min read",
    "thumbnail": "/article-thumbnails/october-28/homeloanprocessors-disclosure-packet-timing-2026-10-28.webp",
    "sections": [
      {
        "heading": "Why timing needs its own control",
        "paragraphs": [
          "A disclosure packet can be complete and still be late. The file needs to show when the changed circumstance was identified, when the revised disclosure was prepared, how it was delivered, and when the borrower received it.",
          "The processor checks the timing rule and the evidence, but the compliance or lending owner decides whether a specific exception applies. The control is designed to surface the question before closing, not to replace the decision."
        ]
      },
      {
        "heading": "Record the changed circumstance",
        "paragraphs": [
          "Capture the event, the date it was identified, the affected fee or term, and the supporting document. A changed circumstance without a source is difficult to review and easy to dispute.",
          "Separate a valid changed circumstance from a re-disclosure caused by a processing error. The two paths have different review and timing implications."
        ]
      },
      {
        "heading": "Tie the revision to the packet",
        "paragraphs": [
          "Record the disclosure version, the date prepared, the delivery method, the delivery date, and the evidence of receipt. Link the revision to the prior version so the comparison is visible.",
          "Do not overwrite the earlier packet. A later reviewer needs to see what changed and when the borrower received it."
        ]
      },
      {
        "heading": "Check the closing schedule",
        "paragraphs": [
          "Compare the disclosure timing with the closing date and the closing disclosure delivery. If the schedule does not leave enough time, raise the conflict before the closing is confirmed.",
          "A closing date that was already promised is not evidence that the timing rule was met. The file should show the actual delivery, not the intended delivery."
        ]
      },
      {
        "heading": "Handle errors and exceptions",
        "paragraphs": [
          "When a timing error is found, record the error, the correction, the owner, and the borrower communication. Route the compliance question to the authorized reviewer.",
          "Do not backdate a disclosure or recreate a receipt to match the schedule. Preserve the original evidence and document the correction path."
        ]
      },
      {
        "heading": "Review the timing file at closing",
        "paragraphs": [
          "At closing, sample one routine revision, one changed circumstance, and one corrected packet. Check the event date, revision date, delivery evidence, receipt, and closing schedule.",
          "The sample should show whether the timing control is working before the closing table, not only after a complaint."
        ]
      }
    ],
    "faq": [
      {
        "q": "What starts the disclosure timing review?",
        "a": "The documented changed circumstance or revision event, the affected term, and the source that supports the change."
      },
      {
        "q": "Can a promised closing date substitute for delivery evidence?",
        "a": "No. The file needs evidence of the actual delivery and receipt, not only the intended schedule."
      },
      {
        "q": "What should happen when a timing error is found?",
        "a": "Preserve the original evidence, record the correction, and route the compliance question to the authorized reviewer."
      }
    ],
    "internalService": "/services/compliance-support",
    "internalSibling": "/blog/homeloanprocessors-document-expiration-monitor-2026-10-28",
    "source": {
      "label": "CFPB TRID resources",
      "url": "https://www.consumerfinance.gov/rules-policy/regulations/1026/"
    }
  },
  {
    "slug": "homeloanprocessors-document-expiration-monitor-2026-10-28",
    "title": "Monitor document expirations before they block closing",
    "description": "A monitoring routine for appraisal, title, income, insurance, and identity documents with renewal owners and dates.",
    "category": "Pipeline Records",
    "publishedAt": "2026-10-28",
    "readTime": "6 min read",
    "thumbnail": "/article-thumbnails/october-28/homeloanprocessors-document-expiration-monitor-2026-10-28.webp",
    "sections": [
      {
        "heading": "Why expiration belongs in the pipeline",
        "paragraphs": [
          "A document can be valid when it is collected and expire before closing. If the expiration date is not visible in the pipeline, the team discovers the problem at the closing table.",
          "The expiration monitor records the document, the issue date, the expiration rule, the renewal action, the owner, and the date the file should be rechecked."
        ]
      },
      {
        "heading": "List the documents that can expire",
        "paragraphs": [
          "Include the appraisal, title commitment, income documents, employment verification, insurance evidence, identity documents, and any document with a stated validity period.",
          "Use the rule that applies to the document and the loan program. Do not apply one generic expiration period to every item."
        ]
      },
      {
        "heading": "Set a recheck date before the deadline",
        "paragraphs": [
          "The recheck date should leave enough time to obtain a renewal without moving the closing. Record the owner and the action required if the document is not renewed.",
          "A recheck that happens on the expiration date is too late. The control should create a decision window, not a same-day emergency."
        ]
      },
      {
        "heading": "Handle renewals and replacements",
        "paragraphs": [
          "When a document is renewed, record the new version, the issue date, the expiration date, and the reviewer who accepted it. Keep the prior version for the audit trail.",
          "If a replacement changes a term or a figure, route the change to the owner who approved the original document. A renewal is not always a like-for-like update."
        ]
      },
      {
        "heading": "Review the monitor at pipeline meetings",
        "paragraphs": [
          "At the weekly pipeline review, show documents expiring within the risk window, the owner, the renewal action, and the closing date. Prioritize by closing date and by the time needed to renew.",
          "A document that is already expired needs a stop rule. Do not continue a dependent closing task until the owner records the path."
        ]
      },
      {
        "heading": "Sample the monitor monthly",
        "paragraphs": [
          "Sample one routine document, one renewed document, and one expired document. Check the issue date, rule, recheck date, owner, renewal evidence, and closing impact.",
          "The sample should show whether the monitor prevented a closing delay or only recorded it after the fact."
        ]
      }
    ],
    "faq": [
      {
        "q": "Which documents should be monitored?",
        "a": "Appraisal, title, income, employment, insurance, identity, and any document with a stated validity period."
      },
      {
        "q": "When should a recheck happen?",
        "a": "Early enough to renew the document without moving the closing, not on the expiration date."
      },
      {
        "q": "What should happen when a document expires?",
        "a": "Stop the dependent closing task and record the owner, the renewal path, and the closing impact."
      }
    ],
    "internalService": "/services/pipeline-records",
    "internalSibling": "/blog/homeloanprocessors-disclosure-packet-timing-2026-10-28",
    "source": {
      "label": "HUD Handbook 4000.1",
      "url": "https://www.hud.gov/program_offices/housing/sfh/handbook_4000-1"
    }
  },
  {
    "slug": "homeloanprocessors-borrower-message-record-2026-10-28",
    "title": "Keep borrower messages reviewable in the loan file",
    "description": "A record for borrower questions, commitments, delivery evidence, and the next action without copying sensitive detail.",
    "category": "Borrower Communication",
    "publishedAt": "2026-10-28",
    "readTime": "6 min read",
    "thumbnail": "/article-thumbnails/october-28/homeloanprocessors-borrower-message-record-2026-10-28.webp",
    "sections": [
      {
        "heading": "Why borrower messages need a record",
        "paragraphs": [
          "Borrower communication often contains a commitment: a document will be sent, a closing date will be confirmed, or a fee will be explained. If the message stays in a personal inbox, the next reviewer cannot see the promise.",
          "The message record captures the date, channel, topic, owner, commitment, and next action. It points to the approved location for sensitive content rather than duplicating it in a general queue."
        ]
      },
      {
        "heading": "Separate a question from a commitment",
        "paragraphs": [
          "A question needs an answer; a commitment needs a date and an owner. Record which one the message created before routing it.",
          "When the borrower promises a document, record the expected date and the follow-up owner. When the team promises an action, record who approved the commitment and when it will be met."
        ]
      },
      {
        "heading": "Use the approved channel",
        "paragraphs": [
          "Record the channel used and confirm that it is approved for the content. Do not move a sensitive document into a general chat just because the borrower sent it there.",
          "If the borrower uses an unapproved channel, acknowledge the message through the approved path and explain the secure next step without repeating sensitive detail."
        ]
      },
      {
        "heading": "Track delivery and response",
        "paragraphs": [
          "For each commitment, record the delivery evidence and the date the borrower confirmed receipt. A sent message is not proof that the borrower received or understood it.",
          "If a message is returned or the borrower asks the same question twice, review the explanation and the channel. Repeated confusion may be a communication problem, not a borrower problem."
        ]
      },
      {
        "heading": "Route complaints and escalations",
        "paragraphs": [
          "A complaint or a threat to cancel needs a separate escalation owner and a response date. Do not bury it in a routine follow-up queue.",
          "The processor should document the issue and route it; the lending manager or compliance owner decides the response and any remedy."
        ]
      },
      {
        "heading": "Review the message record monthly",
        "paragraphs": [
          "Sample one routine question, one commitment, and one escalated message. Check the date, channel, owner, commitment, delivery evidence, and next action.",
          "The record should let a second reviewer understand what was promised without reading a personal inbox."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should a borrower message record contain?",
        "a": "Date, channel, topic, owner, commitment, next action, and the approved location for sensitive content."
      },
      {
        "q": "How is a commitment different from a question?",
        "a": "A commitment needs an owner and a date; a question needs an answer and a record of the response."
      },
      {
        "q": "What should happen to a complaint?",
        "a": "Route it to the named escalation owner with a response date; do not leave it in the routine follow-up queue."
      }
    ],
    "internalService": "/services/borrower-follow-up",
    "internalSibling": "/blog/homeloanprocessors-loan-application-receipt-log-2026-10-28",
    "source": {
      "label": "CFPB mortgage tools",
      "url": "https://www.consumerfinance.gov/consumer-tools/mortgages/"
    }
  },
  {
    "slug": "homeloanprocessors-closing-prep-handoff-2026-10-28",
    "title": "Write a closing preparation handoff that survives the shuffle",
    "description": "A closing handoff for open conditions, title items, document dates, funding details, and the next owner.",
    "category": "Title and Closing",
    "publishedAt": "2026-10-28",
    "readTime": "6 min read",
    "thumbnail": "/article-thumbnails/october-28/homeloanprocessors-closing-prep-handoff-2026-10-28.webp",
    "sections": [
      {
        "heading": "Why closing prep needs one handoff",
        "paragraphs": [
          "Closing preparation involves title, appraisal, insurance, disclosures, conditions, and funding. When each area sends its own update, the closing team has to reconcile several versions of the same file.",
          "The handoff note records the current state, the open items, the owner of each item, and the date the next decision is due. It is an index to the evidence, not a second loan file."
        ]
      },
      {
        "heading": "Start with the closing date and the blockers",
        "paragraphs": [
          "Record the target closing date, the scheduled time, and every item that could move it. Prioritize blockers by the time needed to resolve them, not by the order they arrived.",
          "A blocker without an owner is not a plan. Name the person who will resolve it and the date the closing team should expect an update."
        ]
      },
      {
        "heading": "Summarize title and appraisal status",
        "paragraphs": [
          "Record the title commitment status, open requirements, exceptions, and the reviewer who accepted them. Record the appraisal status, revisions, and the date the report was accepted.",
          "Do not repeat the entire report. Link to the source and state the decision the closing team needs."
        ]
      },
      {
        "heading": "List conditions and document dates",
        "paragraphs": [
          "List every open underwriting condition, the evidence expected, the owner, and the due date. Add the expiration dates for documents that could lapse before closing.",
          "A condition that is cleared should show the reviewer disposition, not just a check mark. A document that was renewed should show the new version."
        ]
      },
      {
        "heading": "Confirm funding and delivery details",
        "paragraphs": [
          "Record the funding source, the disbursement path, the closing disclosure delivery, and the person who confirmed the numbers. Do not let a verbal confirmation stand alone.",
          "If a number changes, record the revision, the reason, and the owner who approved it. The closing team should not have to guess which version is current."
        ]
      },
      {
        "heading": "Review the handoff before release",
        "paragraphs": [
          "The closing lead and one independent reviewer compare the handoff with the closing checklist and the loan file. They check that every blocker and open condition is visible.",
          "The final note records the review date and the next update. If the closing is delayed, the note is revised rather than replaced without history."
        ]
      }
    ],
    "faq": [
      {
        "q": "What is the purpose of a closing handoff?",
        "a": "To give the closing team one current view of blockers, open conditions, document dates, funding details, and owners."
      },
      {
        "q": "How should a blocker be recorded?",
        "a": "With a named owner, the action required, and the date the closing team should expect an update."
      },
      {
        "q": "What should happen when a funding number changes?",
        "a": "Record the revision, the reason, and the owner who approved it, and update the handoff."
      }
    ],
    "internalService": "/services/closing-preparation",
    "internalSibling": "/blog/homeloanprocessors-title-commitment-review-2026-10-28",
    "source": {
      "label": "CFPB closing information",
      "url": "https://www.consumerfinance.gov/rules-policy/regulations/1026/"
    }
  },
  {
    "slug": "homeloanprocessors-pipeline-stage-definitions-2026-10-28",
    "title": "Define pipeline stages with evidence, not labels",
    "description": "A stage definition for the evidence required, the owner, the next action, and the condition that moves a loan forward.",
    "category": "Pipeline Management",
    "publishedAt": "2026-10-28",
    "readTime": "6 min read",
    "thumbnail": "/article-thumbnails/october-28/homeloanprocessors-pipeline-stage-definitions-2026-10-28.webp",
    "sections": [
      {
        "heading": "Why stage labels can mislead",
        "paragraphs": [
          "A pipeline stage is often used as a status label: in review, in underwriting, or clear to close. If the label does not define the evidence required, two files at the same stage can be in very different conditions.",
          "The stage definition states what must be true, who owns the next action, and what condition moves the file to the next stage. The label becomes a decision, not a guess."
        ]
      },
      {
        "heading": "Define the entry and exit evidence",
        "paragraphs": [
          "For each stage, list the evidence required to enter and the evidence required to leave. For example, an appraisal stage may require an accepted report, not merely an order date.",
          "Keep the evidence list short enough to use. A stage that requires twenty documents will be bypassed under volume."
        ]
      },
      {
        "heading": "Name the stage owner",
        "paragraphs": [
          "Each stage needs one owner who is accountable for the next action. Supporting roles can contribute, but the stage owner should be the person who reports the status.",
          "When a file is waiting on another team, the stage owner still owns the next update. The dependency is recorded, not used as a reason to disappear."
        ]
      },
      {
        "heading": "Set the movement condition",
        "paragraphs": [
          "Define the condition that moves the file forward: reviewer acceptance, document receipt, condition clearance, or a signed disclosure. Do not move a file because time passed.",
          "If the condition is not met, record the exception and the date of the next review. A file can remain in a stage without becoming invisible."
        ]
      },
      {
        "heading": "Use the definitions in the weekly review",
        "paragraphs": [
          "At the weekly pipeline review, compare the stage label with the evidence. Start with files that have been in the same stage longest and files whose target closing date is nearest.",
          "If a file is frequently moved backward, review the entry evidence. The problem may be an unclear stage definition rather than a difficult loan."
        ]
      },
      {
        "heading": "Audit stage accuracy monthly",
        "paragraphs": [
          "Sample one file from each stage and compare the label with the exit evidence. Record the exceptions and the owner who corrected them.",
          "The audit should improve the definitions, not just produce a score. A repeated mismatch is a signal that the stage rule is not usable."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should a pipeline stage define?",
        "a": "The evidence required to enter, the evidence required to leave, the owner, and the condition that moves the file forward."
      },
      {
        "q": "Can a file move stages because time passed?",
        "a": "No. Movement should require the defined evidence or an authorized exception."
      },
      {
        "q": "What does a repeated backward move suggest?",
        "a": "The entry evidence or the stage definition may be unclear and should be reviewed."
      }
    ],
    "internalService": "/services/pipeline-records",
    "internalSibling": "/blog/homeloanprocessors-condition-response-ledger-2026-10-28",
    "source": {
      "label": "FHFA mortgage data",
      "url": "https://www.fhfa.gov/"
    }
  },
  {
    "slug": "homeloanprocessors-loan-file-audit-sample-2026-10-28",
    "title": "Run a monthly loan file audit on a fixed sample",
    "description": "A file audit for source evidence, condition disposition, disclosure timing, document dates, and closing readiness.",
    "category": "Quality Control",
    "publishedAt": "2026-10-28",
    "readTime": "6 min read",
    "thumbnail": "/article-thumbnails/october-28/homeloanprocessors-loan-file-audit-sample-2026-10-28.webp",
    "sections": [
      {
        "heading": "Why a fixed sample matters",
        "paragraphs": [
          "A file audit that selects whatever is convenient shows that someone looked, not whether the control works. A fixed sample gives the team comparable evidence across months.",
          "The audit should define the population, the sample rule, the fields tested, the reviewer, and the disposition. The result is a local quality signal, not a regulatory conclusion."
        ]
      },
      {
        "heading": "Choose the sample before the review",
        "paragraphs": [
          "Select files by a rule set in advance: every nth file, a fixed number from each stage, or all files above a risk threshold. Record the rule and the population count.",
          "Include at least one routine file, one exception, and one file that was corrected. A sample of only clean files will not test the control."
        ]
      },
      {
        "heading": "Test the evidence trail",
        "paragraphs": [
          "For each file, check the application receipt, income source map, condition ledger, disclosure timing, document expirations, title review, and closing handoff. Record the source and the reviewer for each field.",
          "Do not score a field as complete because a document exists. The evidence must support the specific decision the file records."
        ]
      },
      {
        "heading": "Record findings by cause",
        "paragraphs": [
          "Classify each finding as missing source, conflicting source, stale document, unclear owner, timing gap, or template problem. The cause determines whether the fix belongs to training, the form, or the process.",
          "A repeated finding in the same field is a design signal. Do not respond with a general reminder when the template caused the omission."
        ]
      },
      {
        "heading": "Review the audit with the owners",
        "paragraphs": [
          "Share the findings with the stage owners and agree on one process change, one owner, and one check date. Keep the audit evidence with the quality record.",
          "Do not use the audit to rank individuals without context. The sample is small, and the cause may sit in the workflow."
        ]
      },
      {
        "heading": "Follow up on the prior month",
        "paragraphs": [
          "At the next audit, check whether the prior process change was implemented and whether the finding changed. A closed action that did not change the evidence is not a fix.",
          "The audit is useful when it creates a visible improvement loop, not when it produces a report that no one uses."
        ]
      }
    ],
    "faq": [
      {
        "q": "How should the audit sample be selected?",
        "a": "By a rule set in advance, with the population and sample recorded, and with routine, exception, and corrected files included."
      },
      {
        "q": "What makes a field complete?",
        "a": "The evidence supports the specific decision in the file, not merely that a document exists."
      },
      {
        "q": "How should repeated findings be handled?",
        "a": "Treat them as a design signal and change the form or process, not only the coaching."
      }
    ],
    "internalService": "/services/quality-control",
    "internalSibling": "/blog/homeloanprocessors-pipeline-stage-definitions-2026-10-28",
    "source": {
      "label": "HUD Handbook 4000.1",
      "url": "https://www.hud.gov/program_offices/housing/sfh/handbook_4000-1"
    }
  },
  {
    "slug": "homeloanprocessors-vendor-document-return-2026-10-28",
    "title": "Track vendor document returns without chasing blind",
    "description": "A return tracker for title, appraisal, insurance, and closing vendors with request dates, owners, and acceptance evidence.",
    "category": "Vendor Coordination",
    "publishedAt": "2026-10-28",
    "readTime": "6 min read",
    "thumbnail": "/article-thumbnails/october-28/homeloanprocessors-vendor-document-return-2026-10-28.webp",
    "sections": [
      {
        "heading": "Why vendor follow-up needs a record",
        "paragraphs": [
          "Vendor requests often disappear into a shared inbox. The processor sends a request, waits, sends a reminder, and still cannot tell whether the vendor received the correct property or loan number.",
          "The return tracker records the request, the vendor, the contact, the due date, the response, and the acceptance evidence. It turns follow-up into a visible queue."
        ]
      },
      {
        "heading": "Record the request before sending",
        "paragraphs": [
          "Capture the vendor, the service requested, the property or loan reference, the required documents, the due date, and the person who will review the return.",
          "A request without a reference number is difficult to match when the vendor replies with a generic subject line. Use the identifier the vendor will recognize."
        ]
      },
      {
        "heading": "Set the follow-up cadence",
        "paragraphs": [
          "Define the first check, the escalation date, and the owner. The cadence should reflect the vendor's normal response time and the closing schedule, not a generic reminder interval.",
          "If the vendor misses the date, record the reason and the new expected date. Do not reset the original request date; keep the history visible."
        ]
      },
      {
        "heading": "Check the return against the request",
        "paragraphs": [
          "When a document arrives, compare it with the request: property, borrower, period, scope, signature, and required exhibits. Accept it or return one precise question.",
          "A returned document is not complete until the reviewer accepts it. Record the acceptance and the location in the file."
        ]
      },
      {
        "heading": "Escalate without duplicating",
        "paragraphs": [
          "If a vendor is unresponsive, escalate through the named contact and record the escalation. Do not send the same request to three people without linking the attempts.",
          "A duplicate request can create two versions of the same document. Keep one request record and add the escalation to it."
        ]
      },
      {
        "heading": "Review vendor performance with context",
        "paragraphs": [
          "At the monthly review, sample one routine return, one late return, and one rejected return. Check the request, contact, date, acceptance, and escalation.",
          "The result is a local coordination measure, not a vendor rating. Volume, property type, and document complexity matter."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should a vendor request record contain?",
        "a": "Vendor, service, loan or property reference, required documents, due date, contact, and the reviewer who will accept the return."
      },
      {
        "q": "Should a missed due date reset the original request?",
        "a": "No. Record the reason and the new expected date while preserving the original request history."
      },
      {
        "q": "When is a vendor return complete?",
        "a": "When the reviewer accepts the document against the request and records the acceptance."
      }
    ],
    "internalService": "/services/vendor-coordination",
    "internalSibling": "/blog/homeloanprocessors-appraisal-order-readiness-2026-10-28",
    "source": {
      "label": "Freddie Mac Guide",
      "url": "https://guide.freddiemac.com/"
    }
  }
];

export const october28ResearchBatch: readonly ResearchPost[] = [
  {
    "slug": "homeloanprocessors-condition-response-aging-study-2026-10-28",
    "title": "Measuring condition response aging without a vanity average",
    "summary": "A bounded protocol for measuring the age, return count, and ownership of underwriting conditions.",
    "cluster": "Underwriting Support",
    "publishedAt": "2026-10-28",
    "thumbnail": "/article-thumbnails/october-28/homeloanprocessors-condition-response-aging-study-2026-10-28.webp",
    "finding": "A condition aging measure is useful when it starts at the date the condition was issued and reports the oldest open item, the return count, and the owner beside any average [Source: Fannie Mae Selling Guide].",
    "sections": [
      {
        "heading": "Define the start and stop points",
        "paragraphs": [
          "Start the clock when the condition is issued in the underwriting record, not when it is copied into a tracker. Stop when the reviewer accepts the response or authorizes a waiver.",
          "Record the response date separately from the acceptance date. A response that sits in review is still open, and the file should show where the time went."
        ]
      },
      {
        "heading": "Report the age and the returns",
        "paragraphs": [
          "For each open condition, record the issue date, the response date, the reviewer disposition, the number of returns, and the current owner. Report the oldest open item and the count past the target.",
          "Do not report only the average age. A small number of old conditions can disappear behind a healthy average, especially when volume is high [Source: CFPB mortgage tools]."
        ]
      },
      {
        "heading": "Sample and limit the claim",
        "paragraphs": [
          "Select a fixed period and include every condition issued in that period. Report the sample size, the loan types, and the reviewer capacity. The result describes the reviewed queue, not the industry [Source: Freddie Mac Guide].",
          "A condition can be old because the borrower is unavailable, the document is difficult to obtain, or the condition is unclear. The reason code should distinguish those cases."
        ]
      },
      {
        "heading": "Use the result to test one control",
        "paragraphs": [
          "If returns are high for the same condition, test a clearer request template. If age is high but returns are low, test the reviewer capacity or the handoff between processor and underwriter.",
          "Keep the measure in place long enough to compare before and after the change. One month is a case, not proof of improvement."
        ]
      }
    ],
    "sources": [
      {
        "label": "Fannie Mae Selling Guide",
        "url": "https://selling-guide.fanniemae.com/"
      },
      {
        "label": "CFPB mortgage tools",
        "url": "https://www.consumerfinance.gov/consumer-tools/mortgages/"
      },
      {
        "label": "Freddie Mac Guide",
        "url": "https://guide.freddiemac.com/"
      }
    ]
  },
  {
    "slug": "homeloanprocessors-document-expiration-risk-study-2026-10-28",
    "title": "A document expiration risk protocol for loan files",
    "summary": "A bounded method for identifying documents that may expire before closing and assigning a recheck owner.",
    "cluster": "Pipeline Records",
    "publishedAt": "2026-10-28",
    "thumbnail": "/article-thumbnails/october-28/homeloanprocessors-document-expiration-risk-study-2026-10-28.webp",
    "finding": "A document expiration review should record the document, issue date, applicable validity rule, recheck date, owner, and closing dependency rather than applying one generic expiration period [Source: HUD Handbook 4000.1].",
    "sections": [
      {
        "heading": "List the documents and rules",
        "paragraphs": [
          "Include appraisal, title, income, employment, insurance, identity, and any document with a stated validity period. Record the rule that applies to the document and the loan program [Source: HUD Handbook 4000.1].",
          "Separate a document that expires by rule from one that becomes stale because the facts changed. The review action may differ even when both create a closing risk."
        ]
      },
      {
        "heading": "Set the recheck before the deadline",
        "paragraphs": [
          "Choose a recheck date that leaves time to renew the document without moving the closing. Record the owner and the action required if the document is not renewed [Source: Fannie Mae Selling Guide].",
          "A recheck on the expiration date is a notification, not a control. The file should create a decision window."
        ]
      },
      {
        "heading": "Tie the document to the closing task",
        "paragraphs": [
          "For each document, record the closing task that depends on it. A document that is not linked to a task can expire without anyone noticing the consequence [Source: Freddie Mac Guide].",
          "When a document is renewed, record the new version and the reviewer acceptance. A renewal that changes a figure should return to the owner who approved the original."
        ]
      },
      {
        "heading": "Report the risk window",
        "paragraphs": [
          "At the pipeline review, show documents expiring within the risk window, the owner, the renewal action, and the closing date. Report counts and the nearest deadline, not only a percentage.",
          "The measure describes the reviewed pipeline and does not predict whether a specific closing will be delayed."
        ]
      }
    ],
    "sources": [
      {
        "label": "HUD Handbook 4000.1",
        "url": "https://www.hud.gov/program_offices/housing/sfh/handbook_4000-1"
      },
      {
        "label": "Fannie Mae Selling Guide",
        "url": "https://selling-guide.fanniemae.com/"
      },
      {
        "label": "Freddie Mac Guide",
        "url": "https://guide.freddiemac.com/"
      }
    ]
  },
  {
    "slug": "homeloanprocessors-appraisal-revision-fanout-study-2026-10-28",
    "title": "Measuring appraisal revision fan-out in the loan file",
    "summary": "A protocol for linking an appraisal revision to the conditions, documents, and closing tasks it affects.",
    "cluster": "Appraisal Coordination",
    "publishedAt": "2026-10-28",
    "thumbnail": "/article-thumbnails/october-28/homeloanprocessors-appraisal-revision-fanout-study-2026-10-28.webp",
    "finding": "An appraisal revision review should count the affected conditions, disclosure checks, and closing tasks linked to the revised report, not only the number of revision messages [Source: Freddie Mac Guide].",
    "sections": [
      {
        "heading": "Start with the revision request",
        "paragraphs": [
          "Record the original report date, the revision question, the appraiser response, the revised report date, and the reviewer who accepted it [Source: Freddie Mac Guide].",
          "Keep the revision linked to the original order. A separate message thread makes it difficult to see which report is current."
        ]
      },
      {
        "heading": "Map the affected file records",
        "paragraphs": [
          "List every condition, value review, title or insurance dependency, and closing task that used the original report. Mark each one as retained, revised, or reopened [Source: Fannie Mae Selling Guide].",
          "A revision that changes the value may affect more than the appraisal line. The review should follow the documented dependencies, not assume the change is isolated."
        ]
      },
      {
        "heading": "Distinguish a correction from a new assignment",
        "paragraphs": [
          "A correction fixes an error in the same assignment. A new assignment changes the scope, the property, or the intended use. The file should record which one occurred [Source: HUD Handbook 4000.1].",
          "Do not send a new assignment through the old order just to save time. The scope and disclosure implications may differ."
        ]
      },
      {
        "heading": "Report the fan-out with limits",
        "paragraphs": [
          "Report the number of revisions, affected records, reopened conditions, and the elapsed days. State the sample and the property types. The result is local evidence, not a performance benchmark.",
          "A high fan-out count can reflect a complex property or a late scope change. The file should explain the cause before the team changes the process."
        ]
      }
    ],
    "sources": [
      {
        "label": "Freddie Mac Guide",
        "url": "https://guide.freddiemac.com/"
      },
      {
        "label": "Fannie Mae Selling Guide",
        "url": "https://selling-guide.fanniemae.com/"
      },
      {
        "label": "HUD Handbook 4000.1",
        "url": "https://www.hud.gov/program_offices/housing/sfh/handbook_4000-1"
      }
    ]
  },
  {
    "slug": "homeloanprocessors-income-source-conflict-study-2026-10-28",
    "title": "A bounded method for reviewing income source conflicts",
    "summary": "A protocol for preserving conflicting income documents and recording the decision that resolves the file.",
    "cluster": "Income Review",
    "publishedAt": "2026-10-28",
    "thumbnail": "/article-thumbnails/october-28/homeloanprocessors-income-source-conflict-study-2026-10-28.webp",
    "finding": "An income conflict review should preserve both values, identify the source and period for each, and record the owner who resolved the discrepancy rather than overwriting the earlier evidence [Source: Fannie Mae Selling Guide].",
    "sections": [
      {
        "heading": "Define what counts as a conflict",
        "paragraphs": [
          "A conflict exists when two documents support different figures for the same period, borrower, or income type, or when a calculation does not match the source document [Source: Fannie Mae Selling Guide].",
          "Separate a conflict from a missing document. A missing document is an evidence gap; a conflict is a decision problem."
        ]
      },
      {
        "heading": "Preserve both records",
        "paragraphs": [
          "Record the document, date, period, figure, and source for each value. Do not replace the earlier value in the source map. Add the resolution note and the reviewer who accepted it [Source: CFPB mortgage tools].",
          "If the conflict involves a self-employment or variable-income calculation, record the rule and the period used. A resolution without the calculation path is difficult to repeat."
        ]
      },
      {
        "heading": "Sample conflicts by income type",
        "paragraphs": [
          "Select a fixed period and include base, variable, self-employment, retirement, and benefit income when present. Report the number of conflicts, the type, and the resolution path [Source: Freddie Mac Guide].",
          "A conflict rate without the income mix can mislead. Different income types have different document and calculation complexity."
        ]
      },
      {
        "heading": "Use the result to improve the source map",
        "paragraphs": [
          "If conflicts cluster around one document type or one calculation step, change the intake question or the template. Do not treat every conflict as an individual error.",
          "The measure describes the reviewed files and should not be presented as an industry defect rate."
        ]
      }
    ],
    "sources": [
      {
        "label": "Fannie Mae Selling Guide",
        "url": "https://selling-guide.fanniemae.com/"
      },
      {
        "label": "CFPB mortgage tools",
        "url": "https://www.consumerfinance.gov/consumer-tools/mortgages/"
      },
      {
        "label": "Freddie Mac Guide",
        "url": "https://guide.freddiemac.com/"
      }
    ]
  },
  {
    "slug": "homeloanprocessors-closing-handoff-lag-study-2026-10-28",
    "title": "Measuring closing handoff lag from readiness to receipt",
    "summary": "A protocol for measuring the interval between closing readiness and the closing team's acceptance of the handoff.",
    "cluster": "Title and Closing",
    "publishedAt": "2026-10-28",
    "thumbnail": "/article-thumbnails/october-28/homeloanprocessors-closing-handoff-lag-study-2026-10-28.webp",
    "finding": "A closing handoff measure should start when the file is marked ready for closing review, stop when the closing team accepts the handoff, and record every returned item with its owner [Source: CFPB closing information].",
    "sections": [
      {
        "heading": "Define readiness and acceptance",
        "paragraphs": [
          "Readiness means the file has the required evidence, conditions are cleared or authorized, and the handoff note is complete. Acceptance means the closing team has reviewed the note and recorded the next action [Source: CFPB closing information].",
          "Do not use the target closing date as the start or stop point. The measure should describe the handoff, not the entire loan cycle."
        ]
      },
      {
        "heading": "Record the returned items",
        "paragraphs": [
          "For each handoff, record the items returned to the processing team, the reason, the owner, and the time to correction. A handoff that is accepted after three returns took longer than the first timestamp suggests [Source: Fannie Mae Selling Guide].",
          "Separate a missing document from an unclear note. The first is an evidence gap; the second is a communication problem."
        ]
      },
      {
        "heading": "Sample by closing type",
        "paragraphs": [
          "Include purchase, refinance, and any specialized closing type in the sample. Report the count, median, range, and return reasons. The result describes the reviewed handoffs [Source: Freddie Mac Guide].",
          "A small sample can be dominated by one complex file. Report the sample size and the closing type so the reader can judge the claim."
        ]
      },
      {
        "heading": "Test one handoff control",
        "paragraphs": [
          "If returns cluster around title or funding details, test a required field in the handoff template. If acceptance is slow without returns, test the closing team's review capacity or the timing of the handoff.",
          "Keep the measure in place long enough to compare. One fast closing is not evidence that the handoff improved."
        ]
      }
    ],
    "sources": [
      {
        "label": "CFPB closing information",
        "url": "https://www.consumerfinance.gov/rules-policy/regulations/1026/"
      },
      {
        "label": "Fannie Mae Selling Guide",
        "url": "https://selling-guide.fanniemae.com/"
      },
      {
        "label": "Freddie Mac Guide",
        "url": "https://guide.freddiemac.com/"
      }
    ]
  }
];
