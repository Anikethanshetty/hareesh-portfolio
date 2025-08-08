import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Haressh Shetty",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Accountant turned Advisor. I love making sense of numbers and helping businesses grow. Passionate about finance. Always learning, always balancing.",
  summary:
    "I’m a  account's manager and freelancer helping startups and creators manage their finances. With a commerce background, I streamline systems, optimize taxes, and keep businesses audit-ready. Passionate about personal finance, automation, and making numbers tell a story.",
  avatarUrl: "/photo.jpeg",
  skills: [
    "Tally.ERP9",
    "Saral Paypack",
    "Saral Tds Proffesional",
    "Ms-Word",
    "Ms-Excel",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: false,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
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
      company: "Multiplex Fertilizers Pvt Ltd",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Accounts Manager",
      logoUrl: "/multiplex.jpeg",
      start: "Dec 2003",
      end: "Nov 2006",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Simulation Designs India Pvt Ltd",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Accounts Manager",
      logoUrl: "",
      start: "Dec 2006",
      end: "May 2012",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "International Power Corporation Pvt Ltd",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Accounts Manager",
      logoUrl: "/ipcl.jpeg",
      start: "Jan 2013",
      end: "Jan 2018",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
  ],
  education: [
    {
      school: "Bhandrakar's College",
      href: "https://buildspace.so",
      degree: "B.com",
      logoUrl: "/bh.jpeg",
      start: "2000",
      end: "2003",
    },
  ],
  projects: [
    {
      title: "BooksPro – Freelance Accounting Service",
      href: "",
      dates: "Jan 2024 – Present",
      active: true,
      description:
        "Providing freelance accounting support to startups and small businesses. Services include bookkeeping, GST filing, TDS returns, payroll processing, and financial reporting.",
      technologies: [
        "Tally.ERP9",
        "Saral TDS Professional",
        "Zoho Books",
        "Ms-Excel",
        "Google Sheets",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "GST Filing Dashboard",
      href: "",
      dates: "July 2023 – Sept 2023",
      active: true,
      description:
        "Created a dynamic dashboard using Google Sheets for monthly GST tracking, filing deadlines, and invoice matching for a mid-sized logistics company.",
      technologies: ["Google Sheets", "Ms-Excel", "GST Portal"],
      links: [],
      image: "",
      video: "",
    },
    
  ],  

} as const;
