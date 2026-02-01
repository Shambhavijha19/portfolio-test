import { v4 as uuidv4 } from 'uuid';
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const projectsData = [
	{
		id: 1,
		title: 'NutritionalTherapy',
		url: 'nutritional-therapy',
		category: 'Web Application',
		img: '/images/web-project-1.jpg',
		ProjectHeader: {
			title: 'NutritionalTherapy - Diet Consultation Website',
			publishDate: 'Jan 2025',
			tags: 'Web Development / AWS',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'NutritionalTherapy Homepage',
				img: '/images/web-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Services Section',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Consultation Booking',
				img: '/images/ui-project-1.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Project Type',
					details: 'Portfolio Website',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Diet Consultation & Nutrition',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://shreyanutricare.live',
				},
				{
					id: uuidv4(),
					title: 'Hosting',
					details: 'AWS S3',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Built a responsive portfolio website for diet consultation and nutritional guidance. The goal was to create a clean, professional platform for client engagement with services, consultation booking, testimonials, and blog content.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'AWS S3',
						'Static Website Hosting',
					],
				},
			],
			ProjectDetailsHeading: 'Features',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Designed clean UI sections including services, consultation booking, testimonials, and blog content for effective client engagement and user experience.',
				},
				{
					id: uuidv4(),
					details:
						'Ensured mobile-first performance with responsive design, accessibility features, and SEO optimization for enhanced reach across all devices.',
				},
				{
					id: uuidv4(),
					details:
						'Deployed the website on AWS S3 with static website hosting configuration for reliable uptime and cost-effective hosting solution.',
				},
			],
			SocialSharingHeading: 'Share This',
		},
	},
	{
		id: 2,
		title: 'TaxAide - Income Tax Calculator',
		url: 'taxaide-calculator',
		category: 'Web Application',
		img: '/images/web-project-2.jpg',
		ProjectHeader: {
			title: 'TaxAide — Modern Income Tax Calculator',
			publishDate: 'Dec 2024',
			tags: 'Python / Data Analysis',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'TaxAide Dashboard',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Tax Calculation Interface',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Tax Slab Visualization',
				img: '/images/ui-project-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Project Type',
					details: 'Web Application',
				},
				{
					id: uuidv4(),
					title: 'Purpose',
					details: 'Income Tax Calculation',
				},
				{
					id: uuidv4(),
					title: 'Tax Years',
					details: 'FY 2024-25 & 2025-26',
				},
				{
					id: uuidv4(),
					title: 'Version Control',
					details: 'GitHub',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Built a Python-based application for Indian income tax calculations supporting both old and new tax regimes with a user-friendly web interface. The calculator helps users understand their tax liability with visual breakdowns.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Python',
						'Pandas',
						'NumPy',
						'Matplotlib',
						'HTML',
						'CSS',
						'JavaScript',
					],
				},
			],
			ProjectDetailsHeading: 'Features',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Engineered logic supporting old and new tax regimes with slab-wise calculations using Pandas for efficient data manipulation and processing.',
				},
				{
					id: uuidv4(),
					details:
						'Integrated interactive tax slab visualization using Matplotlib, generating dynamic charts that are embedded in the frontend for better user understanding.',
				},
				{
					id: uuidv4(),
					details:
						'Processed tax data efficiently using NumPy for numerical computations and array operations, ensuring accurate and fast calculations.',
				},
				{
					id: uuidv4(),
					details:
						'Used GitHub for version control and collaborative development, maintaining clean code practices and documentation.',
				},
			],
			SocialSharingHeading: 'Share This',
		},
	},
	{
		id: 3,
		title: 'Personal Finance Tracker',
		url: 'personal-finance-tracker',
		category: 'Web Application',
		img: '/images/mobile-project-2.jpg',
		ProjectHeader: {
			title: 'Personal Finance Tracker',
			publishDate: 'Nov 2024',
			tags: 'Full-Stack / AWS EC2',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Finance Dashboard',
				img: '/images/mobile-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Expense Tracking',
				img: '/images/web-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Budget Analysis',
				img: '/images/ui-project-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Project Type',
					details: 'Full-Stack Application',
				},
				{
					id: uuidv4(),
					title: 'Purpose',
					details: 'Financial Management',
				},
				{
					id: uuidv4(),
					title: 'Database',
					details: 'MySQL',
				},
				{
					id: uuidv4(),
					title: 'Hosting',
					details: 'AWS EC2',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Created a full-stack application for managing daily expenses, budgets, and income tracking with secure user authentication and interactive data visualization dashboards.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Python',
						'MySQL',
						'HTML',
						'CSS',
						'JavaScript',
						'AWS EC2',
						'Matplotlib',
					],
				},
			],
			ProjectDetailsHeading: 'Features',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Designed backend logic with MySQL database to support complete CRUD operations for transaction records, budget management, and income tracking.',
				},
				{
					id: uuidv4(),
					details:
						'Implemented user authentication and session management using Python with secure password hashing for data protection.',
				},
				{
					id: uuidv4(),
					details:
						'Crafted interactive dashboards using Matplotlib to visualize spending trends and category-wise analysis exported as static charts for the web interface.',
				},
				{
					id: uuidv4(),
					details:
						'Deployed on AWS EC2 for reliable hosting with proper security configurations and database connectivity.',
				},
			],
			SocialSharingHeading: 'Share This',
		},
	},
];
