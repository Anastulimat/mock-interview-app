import {CreateAssistantDTO} from "@vapi-ai/web/dist/api";
import {z} from "zod";

export const mappings = {
    "react.js": "react",
    reactjs: "react",
    react: "react",
    "next.js": "nextjs",
    nextjs: "nextjs",
    next: "nextjs",
    "vue.js": "vuejs",
    vuejs: "vuejs",
    vue: "vuejs",
    "express.js": "express",
    expressjs: "express",
    express: "express",
    "node.js": "nodejs",
    nodejs: "nodejs",
    node: "nodejs",
    mongodb: "mongodb",
    mongo: "mongodb",
    mongoose: "mongoose",
    mysql: "mysql",
    postgresql: "postgresql",
    sqlite: "sqlite",
    firebase: "firebase",
    docker: "docker",
    kubernetes: "kubernetes",
    aws: "aws",
    azure: "azure",
    gcp: "gcp",
    digitalocean: "digitalocean",
    heroku: "heroku",
    photoshop: "photoshop",
    "adobe photoshop": "photoshop",
    html5: "html5",
    html: "html5",
    css3: "css3",
    css: "css3",
    sass: "sass",
    scss: "sass",
    less: "less",
    tailwindcss: "tailwindcss",
    tailwind: "tailwindcss",
    bootstrap: "bootstrap",
    jquery: "jquery",
    typescript: "typescript",
    ts: "typescript",
    javascript: "javascript",
    js: "javascript",
    "angular.js": "angular",
    angularjs: "angular",
    angular: "angular",
    "ember.js": "ember",
    emberjs: "ember",
    ember: "ember",
    "backbone.js": "backbone",
    backbonejs: "backbone",
    backbone: "backbone",
    nestjs: "nestjs",
    graphql: "graphql",
    "graph ql": "graphql",
    apollo: "apollo",
    webpack: "webpack",
    babel: "babel",
    "rollup.js": "rollup",
    rollupjs: "rollup",
    rollup: "rollup",
    "parcel.js": "parcel",
    parceljs: "parcel",
    npm: "npm",
    yarn: "yarn",
    git: "git",
    github: "github",
    gitlab: "gitlab",
    bitbucket: "bitbucket",
    figma: "figma",
    prisma: "prisma",
    redux: "redux",
    flux: "flux",
    redis: "redis",
    selenium: "selenium",
    cypress: "cypress",
    jest: "jest",
    mocha: "mocha",
    chai: "chai",
    karma: "karma",
    vuex: "vuex",
    "nuxt.js": "nuxt",
    nuxtjs: "nuxt",
    nuxt: "nuxt",
    strapi: "strapi",
    wordpress: "wordpress",
    contentful: "contentful",
    netlify: "netlify",
    vercel: "vercel",
    "aws amplify": "amplify",
};

export const interviewer: CreateAssistantDTO = {
    name: "Interviewer",
    firstMessage:
        "Hello! Thank you for taking the time to speak with me today. I'm excited to learn more about you and your experience.",
    transcriber: {
        provider: "deepgram",
        model: "nova-2",
        language: "en",
    },
    voice: {
        provider: "11labs",
        voiceId: "sarah",
        stability: 0.4,
        similarityBoost: 0.8,
        speed: 0.9,
        style: 0.5,
        useSpeakerBoost: true,
    },
    model: {
        provider: "openai",
        model: "gpt-4",
        messages: [
            {
                role: "system",
                content: `You are a professional job interviewer conducting a real-time voice interview with a candidate. Your goal is to assess their qualifications, motivation, and fit for the role.

Interview Guidelines:
Follow the structured question flow:
{{questions}}

Engage naturally & react appropriately:
Listen actively to responses and acknowledge them before moving forward.
Ask brief follow-up questions if a response is vague or requires more detail.
Keep the conversation flowing smoothly while maintaining control.
Be professional, yet warm and welcoming:

Use official yet friendly language.
Keep responses concise and to the point (like in a real voice interview).
Avoid robotic phrasing—sound natural and conversational.
Answer the candidate’s questions professionally:

If asked about the role, company, or expectations, provide a clear and relevant answer.
If unsure, redirect the candidate to HR for more details.

Conclude the interview properly:
Thank the candidate for their time.
Inform them that the company will reach out soon with feedback.
End the conversation on a polite and positive note.


- Be sure to be professional and polite.
- Keep all your responses short and simple. Use official language, but be kind and welcoming.
- This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`,
            },
        ],
    },
};

export const feedbackSchema = z.object({
    totalScore: z.number(),
    categoryScores: z.tuple([
        z.object({
            name: z.literal("Communication Skills"),
            score: z.number(),
            comment: z.string(),
        }),
        z.object({
            name: z.literal("Technical Knowledge"),
            score: z.number(),
            comment: z.string(),
        }),
        z.object({
            name: z.literal("Problem Solving"),
            score: z.number(),
            comment: z.string(),
        }),
        z.object({
            name: z.literal("Cultural Fit"),
            score: z.number(),
            comment: z.string(),
        }),
        z.object({
            name: z.literal("Confidence and Clarity"),
            score: z.number(),
            comment: z.string(),
        }),
    ]),
    strengths: z.array(z.string()),
    areasForImprovement: z.array(z.string()),
    finalAssessment: z.string(),
});

export const interviewCovers = [
    "/adobe.png",
    "/amazon.png",
    "/facebook.png",
    "/hostinger.png",
    "/pinterest.png",
    "/quora.png",
    "/reddit.png",
    "/skype.png",
    "/spotify.png",
    "/telegram.png",
    "/tiktok.png",
    "/yahoo.png",
];

export const dummyInterviews: Interview[] = [
    {
        id: "1",
        role: "Frontend Developer",
        level: "Junior",
        questions: ["What is React?", "Explain the Virtual DOM."],
        techStack: ["JavaScript", "React", "CSS"],
        createdAt: "2023-01-01T10:00:00Z",
        userId: "user1",
        type: "Technical",
        finalized: true,
    },
    {
        id: "2",
        role: "Backend Developer",
        level: "Mid",
        questions: ["What is REST?", "Explain middleware."],
        techStack: ["Node.js", "Express", "MongoDB"],
        createdAt: "2023-01-02T11:00:00Z",
        userId: "user2",
        type: "Technical",
        finalized: false,
    },
    {
        id: "3",
        role: "Full Stack Developer",
        level: "Senior",
        questions: ["What is GraphQL?", "Explain microservices."],
        techStack: ["JavaScript", "Node.js", "React"],
        createdAt: "2023-01-03T12:00:00Z",
        userId: "user3",
        type: "Technical",
        finalized: true,
    },
    {
        id: "4",
        role: "Data Scientist",
        level: "Junior",
        questions: ["What is machine learning?", "Explain overfitting."],
        techStack: ["Python", "Pandas", "NumPy"],
        createdAt: "2023-01-04T13:00:00Z",
        userId: "user4",
        type: "Technical",
        finalized: false,
    },
    {
        id: "5",
        role: "DevOps Engineer",
        level: "Mid",
        questions: ["What is CI/CD?", "Explain containerization."],
        techStack: ["Docker", "Kubernetes", "AWS"],
        createdAt: "2023-01-05T14:00:00Z",
        userId: "user5",
        type: "Technical",
        finalized: true,
    },
    {
        id: "6",
        role: "UX Designer",
        level: "Senior",
        questions: ["What is user-centered design?", "Explain wireframing."],
        techStack: ["Figma", "Sketch", "Adobe XD"],
        createdAt: "2023-01-06T15:00:00Z",
        userId: "user6",
        type: "Design",
        finalized: false,
    },
    {
        id: "7",
        role: "Product Manager",
        level: "Mid",
        questions: ["What is Agile methodology?", "Explain MVP."],
        techStack: ["Jira", "Trello", "Confluence"],
        createdAt: "2023-01-07T16:00:00Z",
        userId: "user7",
        type: "Management",
        finalized: true,
    },
    {
        id: "8",
        role: "QA Engineer",
        level: "Junior",
        questions: ["What is automated testing?", "Explain test cases."],
        techStack: ["Selenium", "Jest", "Mocha"],
        createdAt: "2023-01-08T17:00:00Z",
        userId: "user8",
        type: "Technical",
        finalized: false,
    },
    {
        id: "9",
        role: "Mobile Developer",
        level: "Senior",
        questions: ["What is Flutter?", "Explain native vs hybrid apps."],
        techStack: ["Flutter", "Dart", "Swift"],
        createdAt: "2023-01-09T18:00:00Z",
        userId: "user9",
        type: "Technical",
        finalized: true,
    },
    {
        id: "10",
        role: "System Analyst",
        level: "Mid",
        questions: ["What is system analysis?", "Explain requirements gathering."],
        techStack: ["UML", "SQL", "Visio"],
        createdAt: "2023-01-10T19:00:00Z",
        userId: "user10",
        type: "Analysis",
        finalized: false,
    },
];

