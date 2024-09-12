export const config = {
    main: {
        name: 'Nathan Wong',
        role: 'Software Engineer'
    },
    // education: [],
    workExperience: [
        {
            company: 'Markato',
            url: 'https://www.markato.com/',
            // logo: 'https://www.company.com/logo.png',
            title: 'Software Engineer',
            date: '2023 - 2024',
            descriptions: [
                `- Developed a B2B e-commerce platform featuring flows of user KYC process, product update and search, checkout, and administration in full-stack.`,
                `- Improved the platform search and discovery of over 800+ brands, and 20k+ products by integrating  with search, filtering, and user data analytics modules.`,
                `- Integrated Strapi (a Headless CMS) and data schema allowing admin to self-serve and change the content from the CMS.`
            ],
            technologies: [
                'React',
                'Next',
                'TypeScript',
                'Nest',
                'PostgreSQL',
                'AWS'
            ]
        },
        {
            company: 'Speedy Linkage',
            url: 'https://www.acmarketscn.com',
            // logo: 'https://www.company.com/logo.png',
            title: 'Front-end Developer II',
            date: '2021 - 2023',
            descriptions: [
                '- Developed web and mobile applications, using ReactJS and React Native, to retrieve clients trading data from MT5 (a trading platform) for account managers and clients for order tracking, commission distribution, new feeds, and gift redemption',
                '- Established horizontally scalable web payment gateways for 10+ merchant brands to process multiple currencies payment transactions using ReactJS and Webpack  (https://www.uenjoytrade.com)'
            ],
            technologies: ['React', 'React Native', 'TypeScript']
        },
        {
            company: 'Virtual Gaming Technology',
            url: 'https://www.vgt.com.hk',
            // logo: 'https://www.company.com/logo.png',
            title: 'Front-end Developer',
            date: '2020 - 2021',
            descriptions: [
                `- Developed and enhanced the functionality and responsiveness for 10+ gambling brands' websites based on ReactJS`,
                `- Revamped a web-based front-end customer management system for the merchants and operators of different brands to manage customers’ account status and website promotion contents using ReactJS`
            ],
            technologies: ['React', 'Node', 'TypeScript']
        }
    ],
    blogs: [
        {
            title: 'Implement Forgot/Reset Password Flow with Nest.js',
            date: 'Step 13, 2024',
            url: 'https://dev.to/nathanwong/implement-forgot-reset-password-flow-with-nest-js-3f0d',
            type: 'Coding'
        },
        {
            title: 'Sending E-mail via nodemailer in Nest.js with Google OAuth2',
            date: 'Step 13, 2024',
            url: 'https://dev.to/nathanwong/implement-forgot-reset-password-flow-with-nest-js-3f0d',
            type: 'Coding'
        }
    ]
};
