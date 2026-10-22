import { site } from './site';
import type { BlogPost, ResearchPost } from './types';
import { oct12BlogBatch } from './oct12BlogBatch';
import { oct12ResearchBatch } from './oct12ResearchBatch';
import { oct13BlogBatch } from './oct13BlogBatch';
import { oct13ResearchBatch } from './oct13ResearchBatch';

export const blogPosts: BlogPost[] = [
  ...oct13BlogBatch,
  ...oct12BlogBatch,
  {
    "slug": "loan-processor-vs-home-loan-va",
    "title": "Loan processor vs home loan VA",
    "description": "A practical guide to loan processor vs home loan va for mortgage brokers, lenders, and home loan operations teams.",
    "category": "Role design",
    "publishedAt": "2026-10-04",
    "readTime": "9 min read",
    "sections": [
      {
        "heading": "Quick overview",
        "paragraphs": [
          "Loan processor vs home loan VA starts with one practical distinction: repeatable preparation can be delegated, while accountable judgment stays with the person who owns the outcome. For mortgage brokers, lenders, and home loan operations teams, that boundary protects quality and gives the assistant a role they can perform consistently.",
          "A clear role brief names the queue, source material, expected output, review owner, and escalation triggers. It should be short enough to use during real work, not stored as a policy nobody opens."
        ]
      },
      {
        "heading": "Why the workflow becomes difficult",
        "paragraphs": [
          "Recurring work becomes fragile when status lives in inboxes, memory, or private notes. People repeat checks, miss context, and spend meetings reconstructing what happened instead of deciding what happens next.",
          "The goal is not to automate every judgment or move every task away from the team. The goal is to make routine preparation visible so the accountable owner can review the right evidence at the right time."
        ]
      },
      {
        "heading": "What borrower document support can handle",
        "paragraphs": [
          "Keep approved document requests and response status organized. The role can prepare records, maintain approved statuses, coordinate routine communication, and surface exceptions for the right owner.",
          "The assistant should never be asked to invent policy, make a licensed decision, or hide uncertainty. When a request falls outside the documented path, escalation is the work."
        ]
      },
      {
        "heading": "Build the handoff around evidence",
        "paragraphs": [
          "Start with the material the assistant receives. Name the system of record, required fields, acceptable sources, and the point when incomplete information must be returned or escalated.",
          "Then define the output. A useful output might be a review-ready record, an updated queue, a concise status summary, or a documented exception. Each output should show what was checked and what still needs judgment."
        ]
      },
      {
        "heading": "Set decision rights before volume grows",
        "paragraphs": [
          "Decision rights explain who can prepare, approve, communicate, and close the work. They prevent a capable assistant from being pushed into decisions the role should not own.",
          "Use three simple labels: proceed under the written rule, pause for review, and escalate immediately. Apply them to real examples from your workflow so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Create a practical review rhythm",
        "paragraphs": [
          "Review a small sample at a predictable interval. Look for missed fields, weak source notes, unclear escalation, and repeated exceptions. A focused sample is more useful than checking every task without a learning goal.",
          "When a pattern appears, change the checklist or source guidance. Coaching should improve the operating system, not just correct one isolated item."
        ]
      },
      {
        "heading": "Common mistakes to avoid",
        "paragraphs": [
          "Avoid delegating an entire function before one workflow is stable. Large handoffs make it difficult to see whether the problem is training, access, source quality, or an unclear decision boundary.",
          "Avoid measuring activity alone. A long task log can hide weak outputs. Review whether the record is complete, the next owner is clear, and the evidence supports the status."
        ]
      },
      {
        "heading": "What good support looks like",
        "paragraphs": [
          "Good support reduces search, repetition, and uncertainty for the accountable team. The assistant knows where work enters, what complete means, and when the work must change hands.",
          "The manager can inspect the system without chasing updates. That visibility is what makes delegation sustainable as the queue changes."
        ]
      },
      {
        "heading": "Plan the first controlled workflow",
        "paragraphs": [
          "Choose a workflow that repeats often and already has a known owner. Write the acceptance checklist, test it on a small batch, and record the exceptions that appear.",
          "Use the first review to narrow the role before you expand it. A precise role is easier to hire for, easier to manage, and more useful to the team."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Judgment, approval, licensed work, sensitive exceptions, and policy decisions should stay with the qualified owner."
      },
      {
        "q": "What is the safest place to begin?",
        "a": "Begin with one repeatable workflow that has a known source, clear output, and an available reviewer."
      },
      {
        "q": "How should quality be reviewed?",
        "a": "Review a focused sample against a short acceptance checklist, then update the process when patterns appear."
      }
    ],
    "internalService": "/services/borrower-document-support",
    "internalSibling": "/blog/home-loan-document-index",
    "source": {
      "label": "Consumer Financial Protection Bureau",
      "url": "https://www.consumerfinance.gov/owning-a-home/"
    }
  },
  {
    "slug": "home-loan-document-index",
    "title": "Build a home loan document index",
    "description": "A practical guide to build a home loan document index for mortgage brokers, lenders, and home loan operations teams.",
    "category": "Loan file systems",
    "publishedAt": "2026-10-05",
    "readTime": "10 min read",
    "sections": [
      {
        "heading": "Quick overview",
        "paragraphs": [
          "Build a home loan document index starts with one practical distinction: repeatable preparation can be delegated, while accountable judgment stays with the person who owns the outcome. For mortgage brokers, lenders, and home loan operations teams, that boundary protects quality and gives the assistant a role they can perform consistently.",
          "A clear role brief names the queue, source material, expected output, review owner, and escalation triggers. It should be short enough to use during real work, not stored as a policy nobody opens."
        ]
      },
      {
        "heading": "Why the workflow becomes difficult",
        "paragraphs": [
          "Recurring work becomes fragile when status lives in inboxes, memory, or private notes. People repeat checks, miss context, and spend meetings reconstructing what happened instead of deciding what happens next.",
          "The goal is not to automate every judgment or move every task away from the team. The goal is to make routine preparation visible so the accountable owner can review the right evidence at the right time."
        ]
      },
      {
        "heading": "What loan file indexing can handle",
        "paragraphs": [
          "Maintain clear document names, locations, and review status. The role can prepare records, maintain approved statuses, coordinate routine communication, and surface exceptions for the right owner.",
          "The assistant should never be asked to invent policy, make a licensed decision, or hide uncertainty. When a request falls outside the documented path, escalation is the work."
        ]
      },
      {
        "heading": "Build the handoff around evidence",
        "paragraphs": [
          "Start with the material the assistant receives. Name the system of record, required fields, acceptable sources, and the point when incomplete information must be returned or escalated.",
          "Then define the output. A useful output might be a review-ready record, an updated queue, a concise status summary, or a documented exception. Each output should show what was checked and what still needs judgment."
        ]
      },
      {
        "heading": "Set decision rights before volume grows",
        "paragraphs": [
          "Decision rights explain who can prepare, approve, communicate, and close the work. They prevent a capable assistant from being pushed into decisions the role should not own.",
          "Use three simple labels: proceed under the written rule, pause for review, and escalate immediately. Apply them to real examples from your workflow so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Create a practical review rhythm",
        "paragraphs": [
          "Review a small sample at a predictable interval. Look for missed fields, weak source notes, unclear escalation, and repeated exceptions. A focused sample is more useful than checking every task without a learning goal.",
          "When a pattern appears, change the checklist or source guidance. Coaching should improve the operating system, not just correct one isolated item."
        ]
      },
      {
        "heading": "Common mistakes to avoid",
        "paragraphs": [
          "Avoid delegating an entire function before one workflow is stable. Large handoffs make it difficult to see whether the problem is training, access, source quality, or an unclear decision boundary.",
          "Avoid measuring activity alone. A long task log can hide weak outputs. Review whether the record is complete, the next owner is clear, and the evidence supports the status."
        ]
      },
      {
        "heading": "What good support looks like",
        "paragraphs": [
          "Good support reduces search, repetition, and uncertainty for the accountable team. The assistant knows where work enters, what complete means, and when the work must change hands.",
          "The manager can inspect the system without chasing updates. That visibility is what makes delegation sustainable as the queue changes."
        ]
      },
      {
        "heading": "Plan the first controlled workflow",
        "paragraphs": [
          "Choose a workflow that repeats often and already has a known owner. Write the acceptance checklist, test it on a small batch, and record the exceptions that appear.",
          "Use the first review to narrow the role before you expand it. A precise role is easier to hire for, easier to manage, and more useful to the team."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Judgment, approval, licensed work, sensitive exceptions, and policy decisions should stay with the qualified owner."
      },
      {
        "q": "What is the safest place to begin?",
        "a": "Begin with one repeatable workflow that has a known source, clear output, and an available reviewer."
      },
      {
        "q": "How should quality be reviewed?",
        "a": "Review a focused sample against a short acceptance checklist, then update the process when patterns appear."
      }
    ],
    "internalService": "/services/loan-file-indexing",
    "internalSibling": "/blog/borrower-follow-up-workflow",
    "source": {
      "label": "Consumer Financial Protection Bureau",
      "url": "https://www.consumerfinance.gov/owning-a-home/"
    }
  },
  {
    "slug": "borrower-follow-up-workflow",
    "title": "A borrower follow up workflow",
    "description": "A practical guide to a borrower follow up workflow for mortgage brokers, lenders, and home loan operations teams.",
    "category": "Borrower communication",
    "publishedAt": "2026-10-06",
    "readTime": "11 min read",
    "sections": [
      {
        "heading": "Quick overview",
        "paragraphs": [
          "A borrower follow up workflow starts with one practical distinction: repeatable preparation can be delegated, while accountable judgment stays with the person who owns the outcome. For mortgage brokers, lenders, and home loan operations teams, that boundary protects quality and gives the assistant a role they can perform consistently.",
          "A clear role brief names the queue, source material, expected output, review owner, and escalation triggers. It should be short enough to use during real work, not stored as a policy nobody opens."
        ]
      },
      {
        "heading": "Why the workflow becomes difficult",
        "paragraphs": [
          "Recurring work becomes fragile when status lives in inboxes, memory, or private notes. People repeat checks, miss context, and spend meetings reconstructing what happened instead of deciding what happens next.",
          "The goal is not to automate every judgment or move every task away from the team. The goal is to make routine preparation visible so the accountable owner can review the right evidence at the right time."
        ]
      },
      {
        "heading": "What pipeline record support can handle",
        "paragraphs": [
          "Keep milestones, ownership, and next actions accurate. The role can prepare records, maintain approved statuses, coordinate routine communication, and surface exceptions for the right owner.",
          "The assistant should never be asked to invent policy, make a licensed decision, or hide uncertainty. When a request falls outside the documented path, escalation is the work."
        ]
      },
      {
        "heading": "Build the handoff around evidence",
        "paragraphs": [
          "Start with the material the assistant receives. Name the system of record, required fields, acceptable sources, and the point when incomplete information must be returned or escalated.",
          "Then define the output. A useful output might be a review-ready record, an updated queue, a concise status summary, or a documented exception. Each output should show what was checked and what still needs judgment."
        ]
      },
      {
        "heading": "Set decision rights before volume grows",
        "paragraphs": [
          "Decision rights explain who can prepare, approve, communicate, and close the work. They prevent a capable assistant from being pushed into decisions the role should not own.",
          "Use three simple labels: proceed under the written rule, pause for review, and escalate immediately. Apply them to real examples from your workflow so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Create a practical review rhythm",
        "paragraphs": [
          "Review a small sample at a predictable interval. Look for missed fields, weak source notes, unclear escalation, and repeated exceptions. A focused sample is more useful than checking every task without a learning goal.",
          "When a pattern appears, change the checklist or source guidance. Coaching should improve the operating system, not just correct one isolated item."
        ]
      },
      {
        "heading": "Common mistakes to avoid",
        "paragraphs": [
          "Avoid delegating an entire function before one workflow is stable. Large handoffs make it difficult to see whether the problem is training, access, source quality, or an unclear decision boundary.",
          "Avoid measuring activity alone. A long task log can hide weak outputs. Review whether the record is complete, the next owner is clear, and the evidence supports the status."
        ]
      },
      {
        "heading": "What good support looks like",
        "paragraphs": [
          "Good support reduces search, repetition, and uncertainty for the accountable team. The assistant knows where work enters, what complete means, and when the work must change hands.",
          "The manager can inspect the system without chasing updates. That visibility is what makes delegation sustainable as the queue changes."
        ]
      },
      {
        "heading": "Plan the first controlled workflow",
        "paragraphs": [
          "Choose a workflow that repeats often and already has a known owner. Write the acceptance checklist, test it on a small batch, and record the exceptions that appear.",
          "Use the first review to narrow the role before you expand it. A precise role is easier to hire for, easier to manage, and more useful to the team."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Judgment, approval, licensed work, sensitive exceptions, and policy decisions should stay with the qualified owner."
      },
      {
        "q": "What is the safest place to begin?",
        "a": "Begin with one repeatable workflow that has a known source, clear output, and an available reviewer."
      },
      {
        "q": "How should quality be reviewed?",
        "a": "Review a focused sample against a short acceptance checklist, then update the process when patterns appear."
      }
    ],
    "internalService": "/services/pipeline-records",
    "internalSibling": "/blog/loan-condition-tracking",
    "source": {
      "label": "Consumer Financial Protection Bureau",
      "url": "https://www.consumerfinance.gov/owning-a-home/"
    }
  },
  {
    "slug": "loan-condition-tracking",
    "title": "Design a loan condition tracking routine",
    "description": "A practical guide to design a loan condition tracking routine for mortgage brokers, lenders, and home loan operations teams.",
    "category": "Pipeline operations",
    "publishedAt": "2026-10-07",
    "readTime": "12 min read",
    "sections": [
      {
        "heading": "Quick overview",
        "paragraphs": [
          "Design a loan condition tracking routine starts with one practical distinction: repeatable preparation can be delegated, while accountable judgment stays with the person who owns the outcome. For mortgage brokers, lenders, and home loan operations teams, that boundary protects quality and gives the assistant a role they can perform consistently.",
          "A clear role brief names the queue, source material, expected output, review owner, and escalation triggers. It should be short enough to use during real work, not stored as a policy nobody opens."
        ]
      },
      {
        "heading": "Why the workflow becomes difficult",
        "paragraphs": [
          "Recurring work becomes fragile when status lives in inboxes, memory, or private notes. People repeat checks, miss context, and spend meetings reconstructing what happened instead of deciding what happens next.",
          "The goal is not to automate every judgment or move every task away from the team. The goal is to make routine preparation visible so the accountable owner can review the right evidence at the right time."
        ]
      },
      {
        "heading": "What borrower follow up support can handle",
        "paragraphs": [
          "Handle routine approved communication with clear escalation. The role can prepare records, maintain approved statuses, coordinate routine communication, and surface exceptions for the right owner.",
          "The assistant should never be asked to invent policy, make a licensed decision, or hide uncertainty. When a request falls outside the documented path, escalation is the work."
        ]
      },
      {
        "heading": "Build the handoff around evidence",
        "paragraphs": [
          "Start with the material the assistant receives. Name the system of record, required fields, acceptable sources, and the point when incomplete information must be returned or escalated.",
          "Then define the output. A useful output might be a review-ready record, an updated queue, a concise status summary, or a documented exception. Each output should show what was checked and what still needs judgment."
        ]
      },
      {
        "heading": "Set decision rights before volume grows",
        "paragraphs": [
          "Decision rights explain who can prepare, approve, communicate, and close the work. They prevent a capable assistant from being pushed into decisions the role should not own.",
          "Use three simple labels: proceed under the written rule, pause for review, and escalate immediately. Apply them to real examples from your workflow so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Create a practical review rhythm",
        "paragraphs": [
          "Review a small sample at a predictable interval. Look for missed fields, weak source notes, unclear escalation, and repeated exceptions. A focused sample is more useful than checking every task without a learning goal.",
          "When a pattern appears, change the checklist or source guidance. Coaching should improve the operating system, not just correct one isolated item."
        ]
      },
      {
        "heading": "Common mistakes to avoid",
        "paragraphs": [
          "Avoid delegating an entire function before one workflow is stable. Large handoffs make it difficult to see whether the problem is training, access, source quality, or an unclear decision boundary.",
          "Avoid measuring activity alone. A long task log can hide weak outputs. Review whether the record is complete, the next owner is clear, and the evidence supports the status."
        ]
      },
      {
        "heading": "What good support looks like",
        "paragraphs": [
          "Good support reduces search, repetition, and uncertainty for the accountable team. The assistant knows where work enters, what complete means, and when the work must change hands.",
          "The manager can inspect the system without chasing updates. That visibility is what makes delegation sustainable as the queue changes."
        ]
      },
      {
        "heading": "Plan the first controlled workflow",
        "paragraphs": [
          "Choose a workflow that repeats often and already has a known owner. Write the acceptance checklist, test it on a small batch, and record the exceptions that appear.",
          "Use the first review to narrow the role before you expand it. A precise role is easier to hire for, easier to manage, and more useful to the team."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Judgment, approval, licensed work, sensitive exceptions, and policy decisions should stay with the qualified owner."
      },
      {
        "q": "What is the safest place to begin?",
        "a": "Begin with one repeatable workflow that has a known source, clear output, and an available reviewer."
      },
      {
        "q": "How should quality be reviewed?",
        "a": "Review a focused sample against a short acceptance checklist, then update the process when patterns appear."
      }
    ],
    "internalService": "/services/borrower-follow-up",
    "internalSibling": "/blog/closing-preparation-checklist",
    "source": {
      "label": "Consumer Financial Protection Bureau",
      "url": "https://www.consumerfinance.gov/owning-a-home/"
    }
  },
  {
    "slug": "closing-preparation-checklist",
    "title": "Create a closing preparation checklist",
    "description": "A practical guide to create a closing preparation checklist for mortgage brokers, lenders, and home loan operations teams.",
    "category": "Loan file systems",
    "publishedAt": "2026-10-08",
    "readTime": "13 min read",
    "sections": [
      {
        "heading": "Quick overview",
        "paragraphs": [
          "Create a closing preparation checklist starts with one practical distinction: repeatable preparation can be delegated, while accountable judgment stays with the person who owns the outcome. For mortgage brokers, lenders, and home loan operations teams, that boundary protects quality and gives the assistant a role they can perform consistently.",
          "A clear role brief names the queue, source material, expected output, review owner, and escalation triggers. It should be short enough to use during real work, not stored as a policy nobody opens."
        ]
      },
      {
        "heading": "Why the workflow becomes difficult",
        "paragraphs": [
          "Recurring work becomes fragile when status lives in inboxes, memory, or private notes. People repeat checks, miss context, and spend meetings reconstructing what happened instead of deciding what happens next.",
          "The goal is not to automate every judgment or move every task away from the team. The goal is to make routine preparation visible so the accountable owner can review the right evidence at the right time."
        ]
      },
      {
        "heading": "What condition tracking support can handle",
        "paragraphs": [
          "Maintain visible records of requested and received conditions. The role can prepare records, maintain approved statuses, coordinate routine communication, and surface exceptions for the right owner.",
          "The assistant should never be asked to invent policy, make a licensed decision, or hide uncertainty. When a request falls outside the documented path, escalation is the work."
        ]
      },
      {
        "heading": "Build the handoff around evidence",
        "paragraphs": [
          "Start with the material the assistant receives. Name the system of record, required fields, acceptable sources, and the point when incomplete information must be returned or escalated.",
          "Then define the output. A useful output might be a review-ready record, an updated queue, a concise status summary, or a documented exception. Each output should show what was checked and what still needs judgment."
        ]
      },
      {
        "heading": "Set decision rights before volume grows",
        "paragraphs": [
          "Decision rights explain who can prepare, approve, communicate, and close the work. They prevent a capable assistant from being pushed into decisions the role should not own.",
          "Use three simple labels: proceed under the written rule, pause for review, and escalate immediately. Apply them to real examples from your workflow so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Create a practical review rhythm",
        "paragraphs": [
          "Review a small sample at a predictable interval. Look for missed fields, weak source notes, unclear escalation, and repeated exceptions. A focused sample is more useful than checking every task without a learning goal.",
          "When a pattern appears, change the checklist or source guidance. Coaching should improve the operating system, not just correct one isolated item."
        ]
      },
      {
        "heading": "Common mistakes to avoid",
        "paragraphs": [
          "Avoid delegating an entire function before one workflow is stable. Large handoffs make it difficult to see whether the problem is training, access, source quality, or an unclear decision boundary.",
          "Avoid measuring activity alone. A long task log can hide weak outputs. Review whether the record is complete, the next owner is clear, and the evidence supports the status."
        ]
      },
      {
        "heading": "What good support looks like",
        "paragraphs": [
          "Good support reduces search, repetition, and uncertainty for the accountable team. The assistant knows where work enters, what complete means, and when the work must change hands.",
          "The manager can inspect the system without chasing updates. That visibility is what makes delegation sustainable as the queue changes."
        ]
      },
      {
        "heading": "Plan the first controlled workflow",
        "paragraphs": [
          "Choose a workflow that repeats often and already has a known owner. Write the acceptance checklist, test it on a small batch, and record the exceptions that appear.",
          "Use the first review to narrow the role before you expand it. A precise role is easier to hire for, easier to manage, and more useful to the team."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Judgment, approval, licensed work, sensitive exceptions, and policy decisions should stay with the qualified owner."
      },
      {
        "q": "What is the safest place to begin?",
        "a": "Begin with one repeatable workflow that has a known source, clear output, and an available reviewer."
      },
      {
        "q": "How should quality be reviewed?",
        "a": "Review a focused sample against a short acceptance checklist, then update the process when patterns appear."
      }
    ],
    "internalService": "/services/condition-tracking-support",
    "internalSibling": "/blog/loan-processor-vs-home-loan-va",
    "source": {
      "label": "Consumer Financial Protection Bureau",
      "url": "https://www.consumerfinance.gov/owning-a-home/"
    }
  }
];
export const researchPosts: ResearchPost[] = [
  ...oct13ResearchBatch,
  ...oct12ResearchBatch,
  {
    "slug": "borrower-document-support-workflow-boundary-review-1",
    "title": "Non-empirical: Borrower document support: workflow boundary review",
    "summary": "A non-empirical operating hypothesis for how mortgage brokers, lenders, and home loan operations teams can define, inspect, and improve this workflow. It is guidance for process design, not measured research.",
    "cluster": "Loan file systems",
    "publishedAt": "2026-10-01",
    "finding": "Non-empirical operating hypothesis: a visible boundary between routine preparation and accountable judgment can support clearer review when paired with source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "loan-file-indexing-source-quality-audit-2",
    "title": "Non-empirical: Loan file indexing: source quality review",
    "summary": "A non-empirical operating hypothesis for how mortgage brokers, lenders, and home loan operations teams can define, inspect, and improve this workflow. It is guidance for process design, not measured research.",
    "cluster": "Borrower communication",
    "publishedAt": "2026-10-02",
    "finding": "Non-empirical operating hypothesis: a visible boundary between routine preparation and accountable judgment can support clearer review when paired with source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "pipeline-records-exception-pattern-study-3",
    "title": "Non-empirical: Pipeline record support: exception pattern review",
    "summary": "A non-empirical operating hypothesis for how mortgage brokers, lenders, and home loan operations teams can define, inspect, and improve this workflow. It is guidance for process design, not measured research.",
    "cluster": "Pipeline operations",
    "publishedAt": "2026-10-03",
    "finding": "Non-empirical operating hypothesis: a visible boundary between routine preparation and accountable judgment can support clearer review when paired with source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "borrower-follow-up-handoff-reliability-brief-4",
    "title": "Non-empirical: Borrower follow up support: handoff reliability review",
    "summary": "A non-empirical operating hypothesis for how mortgage brokers, lenders, and home loan operations teams can define, inspect, and improve this workflow. It is guidance for process design, not measured research.",
    "cluster": "Role design",
    "publishedAt": "2026-10-04",
    "finding": "Non-empirical operating hypothesis: a visible boundary between routine preparation and accountable judgment can support clearer review when paired with source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "condition-tracking-support-review-consistency-report-5",
    "title": "Non-empirical: Condition tracking support: review consistency review",
    "summary": "A non-empirical operating hypothesis for how mortgage brokers, lenders, and home loan operations teams can define, inspect, and improve this workflow. It is guidance for process design, not measured research.",
    "cluster": "Loan file systems",
    "publishedAt": "2026-10-05",
    "finding": "Non-empirical operating hypothesis: a visible boundary between routine preparation and accountable judgment can support clearer review when paired with source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "closing-preparation-workflow-boundary-review-6",
    "title": "Non-empirical: Closing preparation support: workflow boundary review",
    "summary": "A non-empirical operating hypothesis for how mortgage brokers, lenders, and home loan operations teams can define, inspect, and improve this workflow. It is guidance for process design, not measured research.",
    "cluster": "Borrower communication",
    "publishedAt": "2026-10-06",
    "finding": "Non-empirical operating hypothesis: a visible boundary between routine preparation and accountable judgment can support clearer review when paired with source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "borrower-document-support-source-quality-audit-7",
    "title": "Non-empirical: Borrower document support: source quality review",
    "summary": "A non-empirical operating hypothesis for how mortgage brokers, lenders, and home loan operations teams can define, inspect, and improve this workflow. It is guidance for process design, not measured research.",
    "cluster": "Pipeline operations",
    "publishedAt": "2026-10-07",
    "finding": "Non-empirical operating hypothesis: a visible boundary between routine preparation and accountable judgment can support clearer review when paired with source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "loan-file-indexing-exception-pattern-study-8",
    "title": "Non-empirical: Loan file indexing: exception pattern review",
    "summary": "A non-empirical operating hypothesis for how mortgage brokers, lenders, and home loan operations teams can define, inspect, and improve this workflow. It is guidance for process design, not measured research.",
    "cluster": "Role design",
    "publishedAt": "2026-10-08",
    "finding": "Non-empirical operating hypothesis: a visible boundary between routine preparation and accountable judgment can support clearer review when paired with source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "pipeline-records-handoff-reliability-brief-9",
    "title": "Non-empirical: Pipeline record support: handoff reliability review",
    "summary": "A non-empirical operating hypothesis for how mortgage brokers, lenders, and home loan operations teams can define, inspect, and improve this workflow. It is guidance for process design, not measured research.",
    "cluster": "Loan file systems",
    "publishedAt": "2026-10-01",
    "finding": "Non-empirical operating hypothesis: a visible boundary between routine preparation and accountable judgment can support clearer review when paired with source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "borrower-follow-up-review-consistency-report-10",
    "title": "Non-empirical: Borrower follow up support: review consistency review",
    "summary": "A non-empirical operating hypothesis for how mortgage brokers, lenders, and home loan operations teams can define, inspect, and improve this workflow. It is guidance for process design, not measured research.",
    "cluster": "Borrower communication",
    "publishedAt": "2026-10-02",
    "finding": "Non-empirical operating hypothesis: a visible boundary between routine preparation and accountable judgment can support clearer review when paired with source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "condition-tracking-support-workflow-boundary-review-11",
    "title": "Non-empirical: Condition tracking support: workflow boundary review",
    "summary": "A non-empirical operating hypothesis for how mortgage brokers, lenders, and home loan operations teams can define, inspect, and improve this workflow. It is guidance for process design, not measured research.",
    "cluster": "Pipeline operations",
    "publishedAt": "2026-10-03",
    "finding": "Non-empirical operating hypothesis: a visible boundary between routine preparation and accountable judgment can support clearer review when paired with source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "closing-preparation-source-quality-audit-12",
    "title": "Non-empirical: Closing preparation support: source quality review",
    "summary": "A non-empirical operating hypothesis for how mortgage brokers, lenders, and home loan operations teams can define, inspect, and improve this workflow. It is guidance for process design, not measured research.",
    "cluster": "Role design",
    "publishedAt": "2026-10-04",
    "finding": "Non-empirical operating hypothesis: a visible boundary between routine preparation and accountable judgment can support clearer review when paired with source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "borrower-document-support-exception-pattern-study-13",
    "title": "Non-empirical: Borrower document support: exception pattern review",
    "summary": "A non-empirical operating hypothesis for how mortgage brokers, lenders, and home loan operations teams can define, inspect, and improve this workflow. It is guidance for process design, not measured research.",
    "cluster": "Loan file systems",
    "publishedAt": "2026-10-05",
    "finding": "Non-empirical operating hypothesis: a visible boundary between routine preparation and accountable judgment can support clearer review when paired with source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "loan-file-indexing-handoff-reliability-brief-14",
    "title": "Non-empirical: Loan file indexing: handoff reliability review",
    "summary": "A non-empirical operating hypothesis for how mortgage brokers, lenders, and home loan operations teams can define, inspect, and improve this workflow. It is guidance for process design, not measured research.",
    "cluster": "Borrower communication",
    "publishedAt": "2026-10-06",
    "finding": "Non-empirical operating hypothesis: a visible boundary between routine preparation and accountable judgment can support clearer review when paired with source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "pipeline-records-review-consistency-report-15",
    "title": "Non-empirical: Pipeline record support: review consistency review",
    "summary": "A non-empirical operating hypothesis for how mortgage brokers, lenders, and home loan operations teams can define, inspect, and improve this workflow. It is guidance for process design, not measured research.",
    "cluster": "Pipeline operations",
    "publishedAt": "2026-10-07",
    "finding": "Non-empirical operating hypothesis: a visible boundary between routine preparation and accountable judgment can support clearer review when paired with source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "borrower-follow-up-workflow-boundary-review-16",
    "title": "Non-empirical: Borrower follow up support: workflow boundary review",
    "summary": "A non-empirical operating hypothesis for how mortgage brokers, lenders, and home loan operations teams can define, inspect, and improve this workflow. It is guidance for process design, not measured research.",
    "cluster": "Role design",
    "publishedAt": "2026-10-08",
    "finding": "Non-empirical operating hypothesis: a visible boundary between routine preparation and accountable judgment can support clearer review when paired with source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "condition-tracking-support-source-quality-audit-17",
    "title": "Non-empirical: Condition tracking support: source quality review",
    "summary": "A non-empirical operating hypothesis for how mortgage brokers, lenders, and home loan operations teams can define, inspect, and improve this workflow. It is guidance for process design, not measured research.",
    "cluster": "Loan file systems",
    "publishedAt": "2026-10-01",
    "finding": "Non-empirical operating hypothesis: a visible boundary between routine preparation and accountable judgment can support clearer review when paired with source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "closing-preparation-exception-pattern-study-18",
    "title": "Non-empirical: Closing preparation support: exception pattern review",
    "summary": "A non-empirical operating hypothesis for how mortgage brokers, lenders, and home loan operations teams can define, inspect, and improve this workflow. It is guidance for process design, not measured research.",
    "cluster": "Borrower communication",
    "publishedAt": "2026-10-02",
    "finding": "Non-empirical operating hypothesis: a visible boundary between routine preparation and accountable judgment can support clearer review when paired with source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "borrower-document-support-handoff-reliability-brief-19",
    "title": "Non-empirical: Borrower document support: handoff reliability review",
    "summary": "A non-empirical operating hypothesis for how mortgage brokers, lenders, and home loan operations teams can define, inspect, and improve this workflow. It is guidance for process design, not measured research.",
    "cluster": "Pipeline operations",
    "publishedAt": "2026-10-03",
    "finding": "Non-empirical operating hypothesis: a visible boundary between routine preparation and accountable judgment can support clearer review when paired with source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "loan-file-indexing-review-consistency-report-20",
    "title": "Non-empirical: Loan file indexing: review consistency review",
    "summary": "A non-empirical operating hypothesis for how mortgage brokers, lenders, and home loan operations teams can define, inspect, and improve this workflow. It is guidance for process design, not measured research.",
    "cluster": "Role design",
    "publishedAt": "2026-10-04",
    "finding": "Non-empirical operating hypothesis: a visible boundary between routine preparation and accountable judgment can support clearer review when paired with source records and explicit escalation.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  }
];

export const nav = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/research', label: 'Research' },
  { href: '/contact-us', label: 'Contact' }
];

export function serviceBySlug(slug: string) { return site.services.find((service) => service.slug === slug); }
export function blogBySlug(slug: string) { return blogPosts.find((post) => post.slug === slug); }
export function researchBySlug(slug: string) { return researchPosts.find((post) => post.slug === slug); }
