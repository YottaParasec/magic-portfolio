import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Mohammed",
  lastName: "Bookwala",
  name: `Mohammed Bookwala`,
  role: "Aspiring Data Scientist",
  avatar: "/images/avatar.jpg",
  email: "mdbk2004@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Gujarati", "Hindi", "Arabic"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about data science and machine learning</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/YottaParasec",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/mb04",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Aspiring Data Scientist focused on Real-World Impact</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "",
  },
  subline: (
    <>
      I'm Mohammed, a psychology undergraduate with a strong foundation in data science and behavioral analysis.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Psychology undergraduate with a strong foundation in data science and behavioral analysis. Skilled in Python, SQL, and machine learning libraries such as Pandas and Scikit-learn. I enjoy applying data-driven thinking to real-world challenges, blending analytical skills with human-centered insights. Seeking a Data Scientist role across industries that value thoughtful, impact-oriented work.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Playdawn Consulting",
        timeframe: "Dec 2024 - Feb 2025",
        role: "Data Science Intern",
        achievements: [
          <>
            Built an end-to-end salary-prediction pipeline for the gaming industry.
          </>,
          <>
            Performed data cleaning, feature engineering, model training, containerized API deployment with Docker, and serverless hosting via AWS.
          </>,
        ],
        images: [],
      },
      {
        company: "Studio Sirah",
        timeframe: "June 2025 - July 2025",
        role: "Data Science Intern (College Internship)",
        achievements: [
          <>
            Worked on debugging and testing Python ETL scripts.
          </>,
          <>
            Assisted in identifying broken data flows and helped maintain the reliability of internal analytics processes.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "RV University",
        description: <>B.Sc. in Psychology with a Minor in Artificial Intelligence & Data Science (Aug 2023 - May 2026)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Data Science",
        description: (
          <>Python, SQL, Data Analysis, Machine Learning, Data Visualization, Feature Engineering, Tableau, API Development, Model Deployment, Pandas</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
            {
            name: "SQL",
            icon: "sql",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about data science and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
