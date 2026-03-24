export const profile = {
	name: 'Vikram Thalithaje',
	email: 'vikram.january@gmail.com',
	location: 'Tallinn, Estonia',
	resumePath: '/vikram-thalithaje-resume.pdf',
	links: {
		linkedin: 'https://linkedin.com',
		github: 'https://github.com',
	},
};

export const hero = {
	eyebrow: 'Software Engineer | Technical Analyst',
	title: 'Backend systems, technical analysis, and workflow automation shaped into a stronger personal site.',
	summary:
		'Product-minded engineer and analyst with experience spanning backend services, platform operations, SQL-based analysis, security workflows, and internal tools that make teams faster and systems more reliable.',
	focus:
		'Position the site around credible strengths: backend delivery, technical analysis, automation, analytics, security, and cross-functional execution.',
};

export const featuredStats = [
	{ value: '8+', label: 'years across software, product systems, and analysis' },
	{ value: '5', label: 'industries touched through product and platform work' },
	{ value: '6', label: 'strong case-study candidates already visible in the resume' },
	{ value: '3', label: 'core lanes: engineering, analytics, and operations' },
];

export const skillCategories = [
	{
		id: 'backend',
		title: 'Backend Engineering',
		summary: 'API-driven systems, migrations, integrations, and service reliability work.',
		skills: ['Node.js', 'Go', 'Python', 'APIs', 'System integrations'],
		evidence: [
			'Led a Node.js to Go migration for a key student demo service.',
			'Built backend modules in healthcare and partner-management products.',
			'Delivered workflow automation across repositories and internal systems.',
		],
	},
	{
		id: 'analytics',
		title: 'Data and Analytics',
		summary: 'SQL-heavy analysis, internal dashboards, crash insights, and reporting systems.',
		skills: ['SQL', 'Utilization analysis', 'Reporting', 'Dashboards', 'Crash analysis'],
		evidence: [
			'Compared broker usage patterns against Microsoft Partner Centre data.',
			'Built an API crash analysis dashboard for backend teams.',
			'Automated reporting to support operational decision-making.',
		],
	},
	{
		id: 'technical-analysis',
		title: 'Product and Technical Analysis',
		summary: 'Feasibility analysis, risk assessment, stakeholder communication, and system mapping.',
		skills: ['Requirements analysis', 'Risk assessment', 'UML diagrams', 'Jira', 'Confluence'],
		evidence: [
			'Assessed technical feasibility and integration impact for new features.',
			'Reworked internal knowledge systems to reduce support effort.',
			'Translated business and platform needs into actionable technical work.',
		],
	},
	{
		id: 'cloud-ops',
		title: 'Cloud and Operations',
		summary: 'Monitoring, event-driven workflows, internal tooling, and operational stability.',
		skills: ['AWS Lambda', 'Monitoring', 'Automation', 'Workflow tooling', 'Notifications'],
		evidence: [
			'Built a Lambda-based service monitoring tool with real-time alerts.',
			'Designed internal automations to reduce manual vulnerability triage.',
			'Improved platform reliability through operational visibility and tooling.',
		],
	},
	{
		id: 'security',
		title: 'Security and Compliance',
		summary: 'Security hardening, vulnerability workflows, and compliance-oriented delivery.',
		skills: ['AWS WAF', 'ISMS', 'ISO 27001', 'Dependency security', 'Risk reviews'],
		evidence: [
			'Contributed to ISMS work that supported ISO 27001 certification.',
			'Implemented AWS WAF to strengthen service protection.',
			'Converted dependency alerts into actionable Jira tickets automatically.',
		],
	},
	{
		id: 'leadership',
		title: 'Collaboration and Leadership',
		summary: 'Cross-functional execution, documentation, partner collaboration, and team guidance.',
		skills: ['Stakeholder management', 'Team leadership', 'Documentation', 'Partner communication'],
		evidence: [
			'Led cross-functional initiatives in CRM integration and dashboard delivery.',
			'Managed and supported small engineering teams on product-facing systems.',
			'Reworked knowledge-base content to improve internal usability.',
		],
	},
];

export const experience = [
	{
		company: 'Cloudmore',
		title: 'Technical Analyst',
		period: 'Feb 2024 - Present',
		location: 'Tallinn, Estonia',
		summary:
			'Driving product and platform understanding through feasibility analysis, platform data review, automation, and documentation improvement.',
		highlights: [
			'Analyzed new feature feasibility, integration impact, and implementation risks before development.',
			'Used SQL to compare broker usage patterns against Microsoft Partner Centre data and surface platform insights.',
			'Designed a Dependabot-to-Jira workflow that reduced manual vulnerability triage across repositories.',
			'Supported ISMS and ISO 27001 compliance efforts through documentation and risk-related work.',
		],
		skills: ['Technical analysis', 'SQL', 'Security automation', 'Documentation'],
	},
	{
		company: 'Camp K12',
		title: 'Software Engineer - Product and Ops Tools',
		period: 'Jan 2022 - Jun 2023',
		location: 'Gurgaon, India',
		summary:
			'Built product and operations tooling with a strong focus on service reliability, migration, and security.',
		highlights: [
			'Improved the student demo booking flow through a user-centric redesign.',
			'Implemented AWS WAF to strengthen web application protection.',
			'Built a Lambda-based monitoring system for real-time service alerts.',
			'Led migration of a key service from Node.js to Go for better scalability and efficiency.',
		],
		skills: ['Backend', 'AWS', 'Monitoring', 'Go migration'],
	},
	{
		company: 'Fitternity',
		title: 'Software Engineer - Product Integrations',
		period: 'Jan 2020 - Dec 2021',
		location: 'Mumbai, India',
		summary:
			'Worked across integrations, internal dashboards, and partner-facing systems after CRM acquisition.',
		highlights: [
			'Acted as a key technical stakeholder in CRM integration after the BYG acquisition.',
			'Led delivery of a dashboard for partners to track bookings, attendance, and revenue.',
			'Built an API crash analysis dashboard to help backend teams diagnose issues faster.',
		],
		skills: ['Integrations', 'Dashboards', 'Leadership', 'Analytics'],
	},
	{
		company: 'Kaam 24',
		title: 'Backend Developer',
		period: 'May 2019 - Dec 2019',
		location: 'New Delhi, India',
		summary:
			'Focused on chatbot workflows, scheduled notifications, engagement experimentation, and reporting automation.',
		highlights: [
			'Built a rule-based Facebook chatbot that increased registrations by 30 percent.',
			'Implemented scheduled notifications and A/B tested messaging to improve engagement.',
			'Automated report generation for smoother operational analysis.',
		],
		skills: ['Backend', 'Automation', 'Experimentation', 'Reporting'],
	},
	{
		company: 'Applied Cognition Systems Pvt Ltd',
		title: 'Software Engineer',
		period: 'Jun 2016 - Apr 2019',
		location: 'Manipal, India',
		summary:
			'Delivered healthcare-oriented backend capabilities focused on operational clarity and data consistency.',
		highlights: [
			'Implemented a medication reminder and tracking module for patient monitoring.',
			'Designed a centralized drug database for a pharmacy supply chain platform.',
		],
		skills: ['Backend', 'Data modeling', 'Healthcare systems'],
	},
];

export const caseStudies = [
	{
		tag: 'Security Automation',
		title: 'Dependabot alerts into actionable Jira tickets',
		summary:
			'Turned dependency alerts into a workflow teams could actually act on, reducing repetitive triage and improving visibility across repositories.',
		approach:
			'Mapped alert inputs, ticket rules, and repository workflows into an automated vulnerability-management path that fit existing team operations.',
		impact: 'Reduced manual triage',
		skills: ['Automation', 'Security', 'Workflow design', 'Jira'],
	},
	{
		tag: 'Backend Migration',
		title: 'Migrated a key service from Node.js to Go',
		summary:
			'Led a service migration to improve performance, scalability, and operational efficiency in a product-critical workflow.',
		approach:
			'Balanced migration planning, implementation, and rollout concerns while preserving service continuity for a user-facing product flow.',
		impact: 'Improved performance profile',
		skills: ['Go', 'Node.js', 'Architecture', 'Backend systems'],
	},
	{
		tag: 'Monitoring',
		title: 'Built AWS Lambda service monitoring with real-time alerts',
		summary:
			'Created internal tooling that surfaced service issues faster and helped teams respond before problems lingered.',
		approach:
			'Used serverless monitoring and notification logic to detect service issues and send immediate signals to the right teams.',
		impact: 'Faster issue response',
		skills: ['AWS Lambda', 'Monitoring', 'Reliability', 'Operations'],
	},
	{
		tag: 'Analytics',
		title: 'Analyzed broker utilization with SQL',
		summary:
			'Used platform data and partner-center comparisons to identify how brokers were actually using the system and where platform efficiency could improve.',
		approach:
			'Queried and compared usage patterns against external system data to produce decision-ready insights for product and platform teams.',
		impact: 'Sharper platform insight',
		skills: ['SQL', 'Technical analysis', 'Reporting', 'Platform operations'],
	},
];

export const sideProjects = [
	{
		name: 'NoFluff AI',
		url: 'https://www.nofluff.space',
		summary:
			'AI-powered personal project that summarises long-form LinkedIn posts into concise, high-signal insights.',
		highlights: [
			'Built around the idea that many LinkedIn posts are long on framing and short on signal.',
			'Focuses on helping readers get to the actual point faster.',
			'Published publicly at nofluff.space.',
		],
	},
];
