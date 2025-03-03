import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mashrab Yo'ldashov",
  initials: "MY",
  url: "https://yoldashov.uz",
  location: "Tashkent Uzbekistan",
  description:
    "Frontend Developer focused on React and TypeScript, creating responsive, user-friendly web apps.",
  summary:
    "I have been working as a front-end developer since 2022, specializing in React and Next.js with a strong focus on building scalable, performant web applications. My expertise in TypeScript allows me to write clean, maintainable code with enhanced type safety, contributing to efficient project development. I am passionate about delivering high-quality user interfaces and optimizing web performance while staying up to date with the latest technologies in the field.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "React-Native",
    "Redux/Toolkit",
    "React-Query",
    "Shadcn",
    "framer-motion",
    "Mui",
    "AntDesign",
    "Node.js",
    "Mongodb",
    "Postgresql",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "yoldashovmashrab@gmail.com",
    tel: "+998901117723",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mashraby",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mashrabyoldashov",
        icon: Icons.linkedin,
        navbar: true,
      },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/MashrabYoldashov",
        icon: Icons.telegram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "/",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Digital Business",
      href: "https://digitalbiznes.uz",
      badges: [],
      location: "Tashkent",
      title: "Frontend Developer",
      logoUrl: "/dgb-logo.svg",
      start: "Nov 2024",
      end: "Mar 2025",
      description:
        "We developed a CRM system for banks within our digital business company, designed to streamline operations and improve customer experience. The system integrates e-imzo functionality, enabling secure digital document signing. It supports electronic documentation management, online payments, and bank card transactions, providing a comprehensive solution for modern banking needs. Our CRM also offers real-time tracking, seamless customer interactions, and efficient handling of financial transactions, ensuring enhanced productivity and service quality for banks and their clients. https://my.dgb.uz",
    },
    {
      company: "Woodline Pro",
      href: "https://woodlinepro.uz",
      badges: [],
      location: "Tashkent",
      title: "Frontend Developer",
      logoUrl: "/woodline.jpg",
      start: "Jan 2023",
      end: "Dec 2023",
      description:
        "Together with the team, I developed woodlinepro.uz, an e-commerce website using Next.js, TypeScript, and SCSS. I played a key role in improving the website’s SEO, which contributed to an increase in Woodline’s sales volume. We also integrated a payment system and built an admin panel for tracking and analyzing sales data. Throughout the project, we utilized libraries like React.js, TypeScript, and React-Query.",
    },
    {
      company: "Najot Ta'lim",
      href: "https://najottalim.uz",
      badges: [],
      location: "Tashkent",
      title: "Assistant Mentor",
      logoUrl: "/najot-talim.jpg",
      start: "Sep 2022",
      end: "Apr 2023",
      description:
        "As an assistant mentor at Najot Ta'lim, I guided over 50 students in mastering frontend development, focusing on React, Next.js, and TypeScript. My role involved providing personalized support to students, helping them overcome technical challenges, and ensuring they gained practical knowledge through real-world projects. I am dedicated to mentoring aspiring developers and fostering a collaborative learning environment that encourages growth and skill development.",
    },
  ],
  education: [
    {
      school: "TUIT",
      href: "https://tuit.uz",
      degree: "Bachelor's Degree of Cyber Security",
      logoUrl: "/tuit.jpg",
      start: "2022",
      end: "2027",
    },
    {
      school: "Najot Ta'lim",
      href: "https://najottalim.uz",
      degree: "FullStack Web Development Course",
      logoUrl: "/najot-talim.jpg",
      start: "Nov 2021",
      end: "Aug 2022",
    },
    {
      school: "Self study",
      href: "https://youtube.com",
      degree: "Fullstack Web",
      logoUrl: "/youtube.jpg",
      start: "Jun 2021",
      end: "Nov 2021",
    },
  ],
  projects: [
    {
      title: "Digital Busieness",
      href: "https://my.dgb.uz",
      active: true,
      description:
        "Digital platform for banks and entrepreneurs to manage their business and financial operations. The platform offers a range of services, including e-imzo functionality, electronic documentation management, online payments, and bank card transactions.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Flowbite Ui",
        "E-imzo",
      ],
      links: [
        {
          type: "Website",
          href: "https://my.dgb.uz",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/my-dgb-uz.png",
      video: "",
    },
    {
      title: "Woodline Pro Online Shop",
      href: "https://woodlinepro.uz",
      active: true,
      description:
        "WoodlinePro is an online marketplace specializing in high-quality wooden products, offering a curated selection of furniture, decor, and DIY materials.",
      technologies: ["Next.js", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://woodlinepro.uz",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/woodlinepro.png",
      video: "",
    },
    {
      title: "Vocab Assist",
      href: "https://vocab-assist.vercel.app",
      active: true,
      description:
        "The Vocabulary Assistant is designed to enhance vocabulary skills in English and Uzbek through personalized learning experiences.",
      technologies: [
        "Next.js",
        "Typescript",
        "Mongodb",
        "Next.js Server Actions",
        "TailwindCSS",
        "Shadcn UI",
        "framer motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://vocab-assist.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/vocab-assist.png",
      video: "",
    },
    {
      title: "Event managemant system",
      href: "https://myevently.vercel.app",
      active: true,
      description:
        "This website serves as a comprehensive platform for planning, organizing, and managing events of all types, from corporate functions to personal celebrations.",
      technologies: [
        "Next.js",
        "Typescript",
        "Mongodb",
        "Next.js Server Actions",
        "TailwindCSS",
        "Shadcn UI",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://myevently.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mashraby/evently",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/evently.png",
      video: "",
    },
    {
      title: "Online Electronics Store",
      href: "https://shopify-m23.vercel.app",
      active: true,
      description:
        "This platform aims to provide a convenient shopping experience for customers looking to purchase a wide range of electronic products, from smartphones to home appliances.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://shopify-m23.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mashraby/shopify",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/shopify.png",
      video: "",
    },
    {
      title: "Travel App",
      href: "https://travel-app-modern-ui-ux.vercel.app",
      active: true,
      description:
        "This landing page introduces users to our innovative travel app, designed to simplify the planning and booking of their next adventure with a strong emphasis on user experience (UX) and user interface (UI).",
      technologies: ["React.js", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://travel-app-modern-ui-ux.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mashraby/travel-app-modern-ui-ux",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/travel.png",
      video: "",
    },
    {
      title: "Xora AI",
      href: "https://xora-ai-amazing-landing.vercel.app",
      active: true,
      description:
        "The modern UI/UX design for Xora AI’s landing page is crafted to provide an intuitive, engaging, and functional user experience. Designed to showcase the platform's AI-driven capabilities, the interface focuses on delivering a seamless interaction that reflects the intelligence and innovation of Xora AI.",
      technologies: ["React.js", "Vite", "Javascript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://xora-ai-amazing-landing.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mashraby/xora-ai-landing",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/xora.png",
      video: "",
    },
    {
      title: "Shirt generator",
      href: "https://shirt-generator-zeta.vercel.app",
      active: true,
      description:
        "Shirt Generator is an online platform that lets users easily create custom t-shirt designs. Built with Vite for speed and Tailwind CSS for a modern look, it offers a user-friendly experience. With Three.js, users can visualize their designs in 3D, making custom apparel fun and accessible!",
      technologies: [
        "React.js",
        "Vite",
        "Javascript",
        "TailwindCSS",
        "Three.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://shirt-generator-zeta.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mashraby/shirt-generator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/shirt-gen.png",
      video: "",
    },
  ],
} as const;
