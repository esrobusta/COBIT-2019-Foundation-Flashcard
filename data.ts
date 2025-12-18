
import { Flashcard } from './types';

export const COBIT_FLASHCARDS: Flashcard[] = [
  // Module 1: Course Introduction
  { id: 'm1-1', chapter: 'Module 01: Course Introduction', front: 'Who is the target audience for COBIT 2019?', back: 'Individuals new to COBIT seeking essential understanding and COBIT 5 certificate holders wishing to upgrade to COBIT 2019.', difficulty: 'Unrated' },
  { id: 'm1-2', chapter: 'Module 01: Course Introduction', front: 'What is the format of the COBIT 2019 Foundation exam?', back: 'Online, remotely proctored, closed-book.', difficulty: 'Unrated' },
  { id: 'm1-3', chapter: 'Module 01: Course Introduction', front: 'How many questions are in the COBIT 2019 Foundation exam?', back: '75 multiple-choice questions.', difficulty: 'Unrated' },
  { id: 'm1-4', chapter: 'Module 01: Course Introduction', front: 'What is the passing score for the COBIT 2019 Foundation exam?', back: '65% (49 out of 75 questions).', difficulty: 'Unrated' },
  { id: 'm1-5', chapter: 'Module 01: Course Introduction', front: 'What is the duration of the exam?', back: '2 hours (120 minutes).', difficulty: 'Unrated' },

  // Module 2: Framework Introduction
  { id: 'm2-1', chapter: 'Module 02: Framework Introduction', front: 'What is the core definition of COBIT?', back: 'A comprehensive framework for the governance and management of enterprise information and technology (I&T).', difficulty: 'Unrated' },
  { id: 'm2-2', chapter: 'Module 02: Framework Introduction', front: 'What does "enterprise-wide" mean in the context of COBIT?', back: 'I&T is treated as an integral part of the business, referred to as Enterprise Governance of I&T (EGIT).', difficulty: 'Unrated' },
  { id: 'm2-3', chapter: 'Module 02: Framework Introduction', front: 'What are the three main outcomes of successful EGIT adoption?', back: 'Benefits realization, Risk optimization, and Resource optimization.', difficulty: 'Unrated' },
  { id: 'm2-4', chapter: 'Module 02: Framework Introduction', front: 'Name one thing COBIT is NOT.', back: 'It is not a full description of the entire IT environment, not an IT-technical management framework, and does not prescribe specific IT decisions.', difficulty: 'Unrated' },
  { id: 'm2-5', chapter: 'Module 02: Framework Introduction', front: 'Who are considered Internal Stakeholders in COBIT?', back: 'Boards, Executive Management, IT Managers, and Assurance Providers.', difficulty: 'Unrated' },
  { id: 'm2-6', chapter: 'Module 02: Framework Introduction', front: 'What are the four main COBIT 2019 core publications?', back: '1. Framework: Introduction and Methodology; 2. Framework: Governance and Management Objectives; 3. Design Guide; 4. Implementation Guide.', difficulty: 'Unrated' },
  { id: 'm2-7', chapter: 'Module 02: Framework Introduction', front: 'What replaces "enablers" in COBIT 2019?', back: 'Governance Components.', difficulty: 'Unrated' },
  { id: 'm2-8', chapter: 'Module 02: Framework Introduction', front: 'What is the purpose of Design Factors?', back: 'To influence and tailor the enterprise\'s governance system.', difficulty: 'Unrated' },
  { id: 'm2-9', chapter: 'Module 02: Framework Introduction', front: 'How many Governance and Management Objectives are in the core model?', back: '40 objectives.', difficulty: 'Unrated' },
  { id: 'm2-10', chapter: 'Module 02: Framework Introduction', front: 'What is the "Umbrella Framework" strategy?', back: 'Aligning and coexisting with major standards (ISO, NIST, TOGAF) without copying their content.', difficulty: 'Unrated' },

  // Module 3: Principles
  { id: 'm3-1', chapter: 'Module 03: Principles', front: 'How many Governance System Principles are there?', back: '6 principles.', difficulty: 'Unrated' },
  { id: 'm3-2', chapter: 'Module 03: Principles', front: 'Define "Provide Stakeholder Value" principle.', back: 'Satisfy stakeholder needs and generate value from I&T use by balancing Benefits, Risk, and Resources.', difficulty: 'Unrated' },
  { id: 'm3-3', chapter: 'Module 03: Principles', front: 'Define "Holistic Approach" principle.', back: 'The system consists of interacting components (processes, people, etc.) that work together cohesively.', difficulty: 'Unrated' },
  { id: 'm3-4', chapter: 'Module 03: Principles', front: 'Define "Dynamic Governance System" principle.', back: 'Changes in design factors must trigger impact considerations and system adjustments.', difficulty: 'Unrated' },
  { id: 'm3-5', chapter: 'Module 03: Principles', front: 'Define "Governance Distinct From Management" principle.', back: 'Clearly separate and delineate activities, responsibilities, and structures between the two.', difficulty: 'Unrated' },
  { id: 'm3-6', chapter: 'Module 03: Principles', front: 'Define "End-to-End Governance System" principle.', back: 'Covers the whole enterprise and all I&T, not just the central IT function.', difficulty: 'Unrated' },
  { id: 'm3-7', chapter: 'Module 03: Principles', front: 'How many Governance Framework Principles are there?', back: '3 principles.', difficulty: 'Unrated' },
  { id: 'm3-8', chapter: 'Module 03: Principles', front: 'Name the three Governance Framework Principles.', back: '1. Based on a Conceptual Model; 2. Open and Flexible; 3. Aligned to Major Standards.', difficulty: 'Unrated' },

  // Module 4: Governance Systems and Components
  { id: 'm4-1', chapter: 'Module 04: Governance Systems and Components', front: 'What are the five domains of Governance and Management Objectives?', back: 'EDM, APO, BAI, DSS, and MEA.', difficulty: 'Unrated' },
  { id: 'm4-2', chapter: 'Module 04: Governance Systems and Components', front: 'How many types of governance system components are there?', back: '7 types.', difficulty: 'Unrated' },
  { id: 'm4-3', chapter: 'Module 04: Governance Systems and Components', front: 'List the 7 Governance Components.', back: '1. Processes; 2. Organizational Structures; 3. Info Flows; 4. People/Skills; 5. Principles/Policies; 6. Culture/Ethics; 7. Services/Infrastructure.', difficulty: 'Unrated' },
  { id: 'm4-4', chapter: 'Module 04: Governance Systems and Components', front: 'What is a Focus Area?', back: 'A governance topic, domain, or issue (e.g., Cybersecurity, Risk, DevOps) addressed by specific objectives.', difficulty: 'Unrated' },
  { id: 'm4-5', chapter: 'Module 04: Governance Systems and Components', front: 'How many Design Factors are defined?', back: '11 factors.', difficulty: 'Unrated' },
  { id: 'm4-6', chapter: 'Module 04: Governance Systems and Components', front: 'What is the purpose of the Goals Cascade?', back: 'To translate stakeholder drivers/needs into Enterprise Goals, then Alignment Goals, and finally Governance/Management Objectives.', difficulty: 'Unrated' },

  // Module 5: Governance and Management Objectives
  { id: 'm5-1', chapter: 'Module 05: Governance and Management Objectives', front: 'What does EDM stand for and which domain is it?', back: 'Evaluate, Direct and Monitor. It is the Governance Domain.', difficulty: 'Unrated' },
  { id: 'm5-2', chapter: 'Module 05: Governance and Management Objectives', front: 'Name the four Management domains.', back: 'APO (Align, Plan, Organize), BAI (Build, Acquire, Implement), DSS (Deliver, Service, Support), MEA (Monitor, Evaluate, Assess).', difficulty: 'Unrated' },
  { id: 'm5-3', chapter: 'Module 05: Governance and Management Objectives', front: 'What is the primary focus of Governance Objectives (EDM)?', back: 'Evaluating strategic options, directing senior management, and monitoring achievement (typically Board accountability).', difficulty: 'Unrated' },
  { id: 'm5-4', chapter: 'Module 05: Governance and Management Objectives', front: 'What are the four dimensions of the Balanced Scorecard used for Enterprise Goals?', back: 'Financial, Customer, Internal, and Growth.', difficulty: 'Unrated' },
  { id: 'm5-5', chapter: 'Module 05: Governance and Management Objectives', front: 'What are Alignment Goals?', back: 'Intermediate goals emphasizing alignment of I&T efforts with business objectives.', difficulty: 'Unrated' },

  // Module 6: Performance Management
  { id: 'm6-1', chapter: 'Module 06: Performance Management', front: 'What does CPM stand for?', back: 'COBIT Performance Management.', difficulty: 'Unrated' },
  { id: 'm6-2', chapter: 'Module 06: Performance Management', front: 'What framework does CPM align with and extend?', back: 'CMMI® Development 2.0.', difficulty: 'Unrated' },
  { id: 'm6-3', chapter: 'Module 06: Performance Management', front: 'What do Capability Levels measure?', back: 'How well a process is implemented and performing.', difficulty: 'Unrated' },
  { id: 'm6-4', chapter: 'Module 06: Performance Management', front: 'What is the range of Capability Levels in COBIT 2019?', back: '0 (Incomplete) to 5 (Optimising).', difficulty: 'Unrated' },
  { id: 'm6-5', chapter: 'Module 06: Performance Management', front: 'Define the "Fully" rating in process performance.', back: 'Achievement greater than 85%.', difficulty: 'Unrated' },
  { id: 'm6-6', chapter: 'Module 06: Performance Management', front: 'What do Maturity Levels measure?', back: 'Performance at the Focus Area level.', difficulty: 'Unrated' },

  // Module 7: Designing a Tailored Governance System
  { id: 'm7-1', chapter: 'Module 07: Designing a Tailored Governance System', front: 'Why is tailoring necessary in COBIT?', back: 'Because every enterprise is distinct; "One size does not fit all."', difficulty: 'Unrated' },
  { id: 'm7-2', chapter: 'Module 07: Designing a Tailored Governance System', front: 'What are the three ways Design Factors influence tailoring?', back: '1. Objective Priority/Capability Levels; 2. Component Variations; 3. Specific Focus Areas.', difficulty: 'Unrated' },
  { id: 'm7-3', chapter: 'Module 07: Designing a Tailored Governance System', front: 'What is the first stage of the Governance System Design Workflow?', back: 'Understand the enterprise context and strategy.', difficulty: 'Unrated' },
  { id: 'm7-4', chapter: 'Module 07: Designing a Tailored Governance System', front: 'What is the final stage of the Governance System Design Workflow?', back: 'Conclude the governance system design (finalize the tailored system).', difficulty: 'Unrated' },

  // Module 8: The COBIT Business Case
  { id: 'm8-1', chapter: 'Module 08: The COBIT Business Case', front: 'What is the purpose of the COBIT Business Case?', back: 'Justification for a course of action based on benefits; answers "Why are we doing this?".', difficulty: 'Unrated' },
  { id: 'm8-2', chapter: 'Module 08: The COBIT Business Case', front: 'Name three components of the COBIT Business Case.', back: 'Executive Summary, Background, Business Challenges, Alternatives, Proposed Solution, Cost-Benefit Analysis, Success Factors.', difficulty: 'Unrated' },

  // Module 9: Implementing Enterprise Governance over I&T
  { id: 'm9-1', chapter: 'Module 09: Implementing Enterprise Governance over I&T', front: 'How many phases are in the Implementation Lifecycle?', back: '7 phases.', difficulty: 'Unrated' },
  { id: 'm9-2', chapter: 'Module 09: Implementing Enterprise Governance over I&T', front: 'What is emphasized in the Implementation Guide besides design?', back: 'Cultural and behavioral changes (Change Enablement).', difficulty: 'Unrated' },
  { id: 'm9-3', chapter: 'Module 09: Implementing Enterprise Governance over I&T', front: 'What question does Phase 1 ask?', back: '"What are the drivers?"', difficulty: 'Unrated' },
  { id: 'm9-4', chapter: 'Module 09: Implementing Enterprise Governance over I&T', front: 'What is the focus of Phase 7?', back: 'How do we keep the momentum going? (Review and prioritize improvement).', difficulty: 'Unrated' },
  { id: 'm9-5', chapter: 'Module 09: Implementing Enterprise Governance over I&T', front: 'Which implementation phases align with the Design Guide?', back: 'Phases 1, 2, and 3.', difficulty: 'Unrated' }
];
