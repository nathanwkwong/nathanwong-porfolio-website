export const config = {
    main: {
        name: 'Nathan Wong',
        role: 'Frontend Developer'
    },
    // education: [],
    workExperience: [
        {
            company: 'Markato',
            url: 'https://www.markato.com/',
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
            title: 'Implement Forgot/Reset Password Flow with Nest.js',
            date: 'Step 13, 2024',
            description:
                'Explained how to implement a secure forgot/reset password feature with Nest.js.',
            url: 'https://medium.com/@wkwong.nathan/implement-forgot-reset-password-flow-with-nest-js-2bce846b0495',
            type: 'Coding'
        }
    ],
    projects: [
        {
            title: 'Backend App for Banking Transactions',
            url: 'https://github.com/nathanwkwong/node-ts-banking',
            description:
                'A back application which can perform traditional bank transactions with ledger and security measurements.',
            technologies: ['Typescript', 'Node.js', 'TypeORM'],
            isOnGoing: true
        },
        {
            title: 'Game Wordle for 2 players',
            url: 'https://github.com/nathanwkwong/react-websocket-wordle',
            description:
                'Wordle that can play with others built from Typescript, React.js, SCSS, Node.js and Websocket.',
            technologies: ['React', 'TypeScript', 'Websocket']
        },
        {
            title: 'Crypto Exchange Order Book',
            url: 'https://react-websocket-orderbook.vercel.app',
            description:
                'A simple UI display for a order book for a crypto pair using React.js and Websocket.',
            technologies: ['React', 'TypeScript', 'Websocket']
        }
    ]
};
