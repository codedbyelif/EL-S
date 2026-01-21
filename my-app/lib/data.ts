export interface Project {
    id: string;
    category: string;
    title: string;
    description: string;
    image: string;
    buttonText: string;
    content: {
        heading: string;
        paragraphs: string[];
        images: string[];
    };
}

export const projects: Project[] = [
    {
        id: "innovation-spotlight",
        category: "Featured",
        title: "Innovation Spotlight: AI in Frontend",
        description: "Explore how tools like GitHub Copilot, AI design generators, and code assistants are changing the way developers build UIs and ship features faster.",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
        buttonText: "Discover the Future",
        content: {
            heading: "How AI is Transforming Frontend Development",
            paragraphs: [
                "Artificial Intelligence is revolutionizing the way we approach frontend development. From intelligent code completion to automated design systems, AI tools are becoming indispensable.",
                "We explore the impact of AI on developer productivity, code quality, and the future of user interface design. Learn how to leverage these powerful tools in your workflow.",
                "Join us as we dive deep into the practical applications of AI in modern web development."
            ],
            images: [
                "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw17.jpeg",
                "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw7.jpeg",
                "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw8.jpeg"
            ]
        }
    },
    {
        id: "vscode-extensions",
        category: "En Yeni",
        title: "5 VS Code Extensions That Will Save You Hours",
        description: "Discover must-have extensions to boost your coding efficiency and streamline your workflow.",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
        buttonText: "Boost Your Editor",
        content: {
            heading: "Essential VS Code Extensions",
            paragraphs: [
                "Visual Studio Code is powerful out of the box, but the right extensions can take your productivity to the next level.",
                "In this guide, we review 5 top-rated extensions that help with code formatting, debugging, version control, and more.",
                "Stop wasting time on repetitive tasks and let your editor work for you."
            ],
            images: [
                "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw17.jpeg",
                "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw7.jpeg",
                "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw8.jpeg"
            ]
        }
    },
    {
        id: "time-management",
        category: "Devam Eden",
        title: "Time Management for Developers",
        description: "Learn proven strategies to avoid burnout and stay on top of your tasks without stress.",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
        buttonText: "Manage Your Time",
        content: {
            heading: "Mastering Time as a Developer",
            paragraphs: [
                "Time management is a critical skill for any developer. Balancing coding, meetings, and learning can be challenging.",
                "We discuss techniques like the Pomodoro method, time blocking, and setting realistic goals to keep you focused and productive.",
                "Avoid burnout and achieve a healthy work-life balance with these expert tips."
            ],
            images: [
                "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw17.jpeg",
                "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw7.jpeg",
                "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw8.jpeg"
            ]
        }
    },
    {
        id: "automation",
        category: "Yatırım Alan",
        title: "Automate Your Workflow with Task Runners",
        description: "Use tools like Gulp, npm scripts, and GitHub Actions to automate repetitive development tasks.",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
        buttonText: "Automate Now",
        content: {
            heading: "The Power of Automation",
            paragraphs: [
                "Automation is the key to scaling your development process. Task runners and CI/CD pipelines can handle the heavy lifting.",
                "Learn how to set up automated workflows for testing, building, and deploying your applications.",
                "Focus on writing code, not running commands. Let automation handle the rest."
            ],
            images: [
                "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw17.jpeg",
                "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw7.jpeg",
                "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw8.jpeg"
            ]
        }
    }
];
