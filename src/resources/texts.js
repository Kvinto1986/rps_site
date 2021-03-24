import {productsPictures, productsLogo, productsAvatars, learnMoreIcons, startupsIcons} from "./images"

export const classpassPageData = {
    introImage: productsPictures.classpassIntro,
    site: "classpass.com",
    siteLink: "https://classpass.com/",
    logo: productsLogo.classpassLogo,
    features: ["Fitness", "Wellness", "Sports"],
    introText: "ClassPass is a monthly fitness membership that lets you work out at over 7,000 of the best studios and" +
        " gyms in your area and worldwide. With a ClassPass membership, you get access to unlimited classes in " +
        "everything from yoga to Pilates to strength training and cycling.",
    productTeam: ["2 Backend developers", "1 Frontend developer", "1 Product Manager", "2 QA Automation Engineers",
        "1 Technical Architect (CTO)"],
    fundingStage: ["Seed to Series B"],
    services: ["Backend Development", "QA Automation", "Technical Architecture"],
    challengeText: "Classpass was a web only monolithic platform when they engaged RPS to address performance and " +
        "consistency issues and build a robust and scalable platform.",
    solutionsTexst: "RPS worked closely with the internal product & engineering team to resolve a critical issue related" +
        "to the class reservation process and help the platform to scale during the peak noon booking window. The next " +
        "step for our engagement was to build a robust and scalable API to support ClassPass’ new iOS native app. RPS " +
        "built the API using the BDD process to ensure confidence in the API and provide the use-case documentation via " +
        "functional tests.\n" +
        "\n" +
        "By working closely with the mobile development team, we were able to deliver the initial MVP in three months. " +
        "We continued moving away from the original web platform towards the API-centric platform, and within a year the" +
        " web app was using the API to perform business functions.\n" +
        "\n" +
        "During the summer of 2015 RPS focused on supporting Classpass’ transition from a single subscription plan to a" +
        " multi-tier model. RPS worked closely with the internal team to gather requirements, set expectations, and " +
        "discuss architecture to ensure alignment. End-to-end implementation and testing was completed within two months," +
        " on time for the scheduled announcement date.\n" +
        "\n" +
        "At the end of the work the existing users were seamlessly transitioned to their corresponding plans, supported " +
        "by the new subscription model. RPS implemented a battery of functional tests to ensure the proper implementation" +
        " of the use-cases; this allowed Users to seamlessly upgrade or downgrade their plans based on their needs with " +
        "no interruption of service.",
    results: ["- Fixed the reservation system to prevent overbooking and improved scalability and performance.",
        "-  Launched mobile app MVP within 3 months.", "- Transitioned from monolithic to microservices architecture, i" +
        "mproving the long-term stability of the system", "- Created architecture and released a multi-tier subscription" +
        " model within 2 months.", "- Documented and tested API use-cases using functional tests."],
    businessImpactText: "We began working with ClassPass in 2014 after their seed round. While working with Remedy, " +
        "ClassPass raised a $12M Series A in 2014 and a $40M Series B in early 2015; they raised a $30M B extension in " +
        "late 2015, just after we concluded our engagement.\n" +
        "\n" +
        "ClassPass scaled from a few US cities to serve users nationwide and in select international markets. During " +
        "our 2+ year engagement the engineering team at ClassPass grew from 3 to over 30 with Remedy helping onboard " +
        "and transition core team members."
}

export const b6aData = {
    introImage: productsPictures.b6aIntro,
    site: "blocksixanalytics.com",
    siteLink: "https://www.blocksixanalytics.com/",
    logo: productsLogo.b6aLogo,
    features: ["Sports", "Analytics", "Machine Learning"],
    introText: "Block Six Analytics is a data-driven sports sponsorship management platform and marketplace. Sports " +
        "properties, agencies and brands use B6A’s analytics platform to maximize ROI on their sports sponsorship spend across all advertising channels. Partners include Pepsi, Citi, Miami Heat, Cleveland Browns, Soldier Field (home of the Chicago Bears), and Comcast SportsNet.",
    productTeam: ["2 Backend developers", "1 Frontend developer", "1 Product Manager", "1 UX/UI Designer",
        "1 Technical Architect (CTO)"],
    fundingStage: ["Friends & Family to Series A"],
    services: ["Backend Development", "Frontend Development", "Data Science", "API Development",
        "Product Management", "UX/UI Design", "QA Automation", "Technical Architecture"],
    testimonials: {
        avatar: productsAvatars.b6aCeoAvatar,
        name: "Adam Grossman",
        position: "Founder & CEO",
        comment: "\"B6A has leveraged RPS resources to solve difficult challenges for our Software as a Service (SaaS)" +
            " and machine learning platforms. RPS has been able to scale up teams with the specific skill sets critical" +
            " for our past and future growth as a company. We would not be in the position we are in now without the help of RPS.\""

    },
    challengeText: "RPS needed to build the new product, while maintaining support for B6A customers on the existing platform.",
    solutionsTexst: "Block Six Analytics had been in development for over 4 years before engaging RPS. RPS was brought " +
        "in to replace the existing legacy product with a modern, scalable solution. Our design team presented several" +
        " options of how to make the product more user friendly. After the design approach was selected, the team " +
        "created and executed a technical plan to transition from the outdated platform to the new solution.\n" +
        "The legacy platform was built as a monolithic PHP application; the new architecture utilized a combination of " +
        "React/Redux SPA with the support of a custom backend API using Python. Technical steps involved adding initial " +
        "API support to the legacy application and transitioning API’s to the new stack as product development progressed" +
        " to guarantee uninterrupted service. Within 3 months RPS completely replaced the client facing functionality " +
        "and moved on to admin/back office development.\n New features required Machine Learning (Media analysis" +
        " platform) integration to process games and visualize on-screen sponsorship results, Social Sentiment Analysis" +
        " Platform (natural language processing) for Twitter Instagram and Facebook.",
    results: ["- Fixed the reservation system to prevent overbooking and improved scalability and performance.",
        "- Launched web app MVP within 3 months.", "- Integrated released machine learning and natural language " +
        "processing suite.", "- Documented and tested API use-cases using functional tests."],
    businessImpactText: "Remedy worked with Block Six Analytics from 2012 through 2017. During this time Block Six " +
        "Analytics raised a $2M Seed Round, led by Bowery Capital and follow-on funding from notable angel investors, " +
        "including NBA superagent David Falk. B6A grew to service a multitude of sports properties and consumer brands," +
        " including the Detroit Lions, Wisconsin Badgers, and Marketcast."
}

export const walkliData = {
    introImage: productsPictures.walkliIntro,
    site: "walkli.com",
    siteLink: "https://walkli.com/",
    logo: productsLogo.walkliLogo,
    features: ["Travel", "Hospitality", "Tourism"],
    introText: "Walkli provides free walking routes for travelers exploring the world on foot in search of local, " +
        "authentic travel experiences. Maps are crowdsourced from locals, travelers, and bloggers to meet a wide variety" +
        " of interests from classical history to street art, from local dive bars to a city’s best Instagram spots.",
    productTeam: ["1 Backend developer", "1 Frontend developer", "1 part-time Product Manager", "1 UX/UI Designer"],
    fundingStage: ["Friends & Family"],
    services: ["Backend Development", "Frontend Development", "iOS Development", "API Development",
        "Product Management", "UX/UI Design", "QA Automation", "Technical Architecture", "Venture Strategy"],
    testimonials: {
        avatar: productsAvatars.walkliCeoAvatar,
        name: "Jeff Peo",
        position: "Founder & CEO",
        comment: "\"I met with a number of development options – both on- and off-shore – before choosing to work with RPS." +
            "  What set them apart was their drive to understand my business and to help determine which features should" +
            " be built out for the MVP vs. future releases.  This has really enabled me to accurately match my strategic" +
            " planning with our technical development.\""

    },
    challengeText: "Walkli did not raise pre-seed funding and was bootstrapped by its Founder. RPS needed to deliver a " +
        "functional application within a limited budget and timeframe to allow walkli to prove its product/market fit " +
        "and raise funding.",
    solutionsTexst: "After product roadmapping, feature scoping, and sizing, RPS and walkli agreed on the parameters and" +
        " deliverables for the first release. RPS’ Product Manager led one week sprints to gauge team development " +
        "velocity, before switching to two week sprints. \n Key Features & Integrations: google Maps API customization" +
        " for custom map creation, admin system with CMS, rich content creation and viewing interfaces, city search " +
        "functionality, user profiles, social media sharing",
    results: ["- RPS released the first version of the web app after 3 months.",
        "- Walkli has retained RPS for continued iteration and feature development since March 2016.",
        "- Future development plans include the release of a mobile app using the web app’s framework."],
    businessImpactText: "After the launch of the MVP web app, walkli successfully raised a Friends & Family round. " +
        "In addition to user growth, walkli successfully launched a travel blogger content partnership program. They " +
        "secured numerous travel and hospitality clients, including Westin Hotels, Hostelling international, the " +
        "Amsterdam tourism board, and Croatia tourism board. Walkli was selected as a MassChallenge 2018 finalist."
}

export const cardsItems = [
    {
        title: 'startups',
        image: learnMoreIcons.startups,
        text: 'For startups, RPS helps with overall strategy to assist founders with building and taking their products to market.',
    },
    {
        title: 'enterprise',
        image: learnMoreIcons.enterprise,
        text: 'For enterprise companies, RPS applies their startup expertise to implement nimble digital transformations.',
    },
    {
        title: 'investment',
        image: learnMoreIcons.investment,
        text: 'RPS invests in select companies across industries. You can find investment criteria here.',
    },
]

export const invesmentTexts = [
    {
        title: 'Why remedy product studio?',
        body: 'Our experience working with venture backed startups gives us insight into what a company needs to demonstrate to successfully raise its next round of funding. We know the importance of hitting key metrics to demonstrate product-market fit and growth potential.'
    },
    {
        title: 'How does it work?',
        body: 'We help startups prepare for fundraising by crafting the narrative, preparing the pitch, and ensuring you can demonstrate product-market fit. We actively connect startups with angels and venture capitalists in our network. During the fundraising process we help with deck preparation, pitch practice, and technical due diligence.'
    },
    {
        title: 'Looking for a Technical Co-Founder?',
        body: 'On a limited basis, Remedy co-founds companies with talented entrepreneurs who are looking for a technical co-founder. Ideal Founders for this program are industry experts that have a competitive advantage in a large market.'
    },
    {
        title: 'What do we offer?',
        body: 'Remedy provides funding, technical resources, and senior technical and product leadership in exchange for a meaningful equity stake.'
    },
]

export const startupsTexts = [
    {
        title: 'What should we build',
        name: 'strategy',
        image: startupsIcons.oneIcon,
        body: 'We will sit down with you to understand your long term goals, business objectives, KPI’s, and budget to create an effective strategy to take your product to market. Our extensive network allows us to make strategic introductions for our partners to VCs, potential clients, and other resources to accelerate growth.'
    },
    {
        title: 'How should you build it?',
        name: 'execution',
        image: startupsIcons.twoIcon,
        body: 'We will work with you to execute your product in the most efficient way possible. We use lean development practices and believe in releasing early and iterating often. We will consider using off the shelf tools, APIs, and custom code to see what best fits your company’s needs. Our MVPs are built in around 8 weeks and we institute analytics, reporting, and user interviews to iterate based on user feedback.'
    },
    {
        title: 'When and how should you deploy?',
        name: 'launch',
        image: startupsIcons.threeIcon,
        body: 'The RPS team will create a deployment strategy for when your product is ready to hit the market. We work closely with your team and make sure we have an understanding of your stakeholders expectations as we plan the launch. Once released, RPS implements reporting & analytics tools to gather qualitative and quantitative feedback.'
    },
    {
        title: 'How will you grow it',
        name: 'investment',
        image: startupsIcons.fourIcon,
        body: 'RPS invests in select companies across industries. You can find requirements for investment here. In addition to our own investment, we work with a network of angels and venture capitalists to match startups to the best investor fits. We help startups prepare for fundraising by crafting the narrative, preparing the pitch, and ensuring you are hitting key metrics to demonstrate product-market fit.'
    },

]
