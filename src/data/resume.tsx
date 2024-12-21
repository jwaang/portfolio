import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Jonathan Wang",
  initials: "JW",
  url: "https://jonathanwang.io",
  location: "Austin, TX",
  locationLink: "https://www.google.com/maps/place/austin",
  description:
    "Frontend engineer based in Austin, TX",
  summary:
    `Experienced frontend engineer with 5 years of crafting user-friendly, visually appealing web apps. Skilled in JavaScript, React, and Next.js, and passionate about learning new tech.

  Outside of work, I love cooking, video editing, diving into single-player games, getting rug pulled on memecoins, or unwinding with movies and shows alongside my girlfriend and our three cats.`,
  avatarUrl: "/me.jpg",
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Supabase",
    "PostgreSQL",
    "HTML",
    "CSS",
    "Sass",
    "Jest",
    "Figma",
    "TailwindCSS",
    "Git",
    "Webpack",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "jonathan.wang1996@gmail.com",
    tel: "+17373959590",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/jon-sl",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/jwaang",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "SchooLinks",
      href: "https://www.schoolinks.com/",
      badges: [],
      location: "Remote",
      title: "Senior Frontend Engineer",
      logoUrl: "/schoolinks.jpeg",
      start: "Nov 2021",
      end: "Present",
      description:
        "At SchooLinks, I developed impactful front-end solutions for 200,000+ monthly users, including a Chrome extension that streamlined logins and reduced support time. I led the migration from React 16 to React 18, modernizing the codebase, and reduced technical debt by implementing ESLint plugins for cleaner imports. As the common component lead, I established best practices for design, documentation, and integration. Additionally, I enhanced the front-end interview process, mentored junior developers, and helped foster a culture of high-quality code through improved PR workflows and reviews.",
    },
    {
      company: "Citi",
      badges: [],
      href: "https://www.citi.com/",
      location: "Irving, TX",
      title: "Software Engineer",
      logoUrl: "/citi.png",
      start: "July 2019",
      end: "Nov 2021",
      description:
        "At Citi, I developed dashboards that delivered over 50% effort reduction and ~$0.7M in annual savings, while enhancing SDLC adherence. I standardized technical and UI/UX design, development, and deployment practices for Angular applications, driving improved efficiency and reducing risk. By implementing a micro-frontend architecture, I optimized workflows and boosted productivity. I also collaborated with cross-functional teams, provided technical leadership, and conducted code reviews to maintain high development standards across the team.",
    },
    {
      company: "Abbott",
      badges: [],
      href: "https://www.abbott.com/",
      location: "Plano, TX",
      title: "Co-op",
      logoUrl: "/abbott.webp",
      start: "Jan 2018",
      end: "Aug 2018",
      description: "I worked closely with management to develop a tool that could be used to automate and expedite the population of lengthy Application/Design FMECA risk tables. After carefully gathering user requirements and understanding the process thoroughly, I designed the tool to mimic the manual efforts required to generate risk tables and to help minimize human errors by doing repetitive tasks more quickly and accurately."
    },
    {
      company: "Texas Instruments",
      badges: [],
      href: "https://www.ti.com/",
      location: "Richardson, TX",
      title: "Intern",
      logoUrl: "/ti.jpg",
      start: "May 2017",
      end: "Aug 2018",
      description: "I worked alongside experienced employees from the Security Operations Center to learn more about cybersecurity. Using Python, I also created an automated Splunk application that was able to pull data from an incident response platform allowing management to analyze trends and metrics in incident responses and performances of members within Splunk dashboards."
    },
  ],
  education: [
    {
      school: "Texas A&M University",
      href: "https://www.tamu.edu/",
      degree: "B.S. in Computer Science",
      logoUrl: "/tamu.jpg",
      start: "2014",
      end: "2018",
      minors: ["Cybersecurity", "Art"]
    },
  ],
  projects: [
    {
      title: "Moonshot",
      href: "https://moonshot.tech",
      dates: "Apr 2024 - June 2024",
      active: true,
      description:
        "Co-founded and developed a cryptocurrency trading app focused on memecoins on the Solana network, leveraging Next.js and Supabase. Designed an intuitive UI in Figma to enable quick searches, seamless trades, and portfolio tracking. Led MVP development, coordinating with contractors to implement key features like price tracking, metadata display, and wallet integration. Planned a second phase to transform the app into a social network for traders, introducing features such as user subscriptions and interactive trading.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "TailwindCSS",
        "Figma",
      ],
      links: [
        {
          type: "Design",
          href: "https://www.figma.com/design/c0WdMWkl1sAB4GcHHcGphu/Moonshot-design?node-id=27-363&t=k8x9fSeujmUhcZjw-1",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Pitch deck",
          href: "https://docs.google.com/presentation/d/1pwxoeak8_KkGjyUpPOD9rqz6fN8qh0O2Ntf_vuwse2Y/edit",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/moonshot_mocks.png",
      video: ""
    },
  ],
} as const;
