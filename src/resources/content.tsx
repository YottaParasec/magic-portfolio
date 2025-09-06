import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work, Recommendations } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";


const person: Person = {
  firstName: "Mohammed",
  lastName: "Bookwala",
  name: "Mohammed Bookwala",
  role: "Business & Data Analyst | Psychology - AI - Data Science",
  avatar: "/images/avatar.jpg",
  email: "mdbk2004@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English (Fluent)", "Hindi (Fluent)", "Gujarati (Fluent)", "Arabic (Basic)"],
};


const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: <>My weekly newsletter about data science and machine learning</>,
};


const social: Social = [
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
    link: "mailto:mdbk2004@gmail.com",
  },
];


const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "Mohammed Bookwala | Business & Data Analyst Portfolio",
  description: "Business and Data Analyst blending psychology, AI and data science to deliver actionable business insights, process improvement, and real-world analytics.",
  headline: <>Hi, I&apos;m Mohammed. A Business and Data Analyst creating data-driven solutions that bridge the gap between user behavior and business outcomes.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Psychometric & Cognitive Hiring Tool (SaaS MVP)</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/psychometric-hiring-tool",
  },
  subline: (
    <>
      I specialize in cross-functional teamwork and project-driven learning, always with a focus on process improvement and user experience.
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
        I&apos;m a Business and Data Analyst driven by a fascination with the human mind and a passion for technology. My journey began with psychology, where I learned to understand the &apos;why&apos; behind human behavior. Now, I combine that with my skills in AI and data science to not only understand the &apos;why&apos;, but also to predict the &apos;what&apos; and prescribe the &apos;how&apos;. I believe that data is a powerful tool for telling stories and driving meaningful change, and I&apos;m passionate about using my skills to build data-driven solutions that bridge the gap between user behavior and business outcomes.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Playdawn Consulting",
        timeframe: "Dec 2024 – Feb 2025",
        role: "Data Science/Business Analytics Intern",
        achievements: [
          <>
            Built and deployed a salary prediction platform (Python, Pandas, NumPy, SciPy, scikit-learn, Matplotlib) for the gaming sector.
          </>,
          <>
            Managed requirements gathering, stakeholder analysis, model training, and system deployment (FastAPI/AWS Lambda).
          </>,
          <>
            Led data cleaning and mapping (LLMs), engineered company segmentation (Excel), and delivered business reporting.
          </>,
        ],
        images: [
          {
            src: "/images/playdawnnew.jpg",
            alt: "Playdawn Consulting",
            width: 16,
            height: 9,
            link: "https://playdawn.com/salary-prediction",
          },
        ],
      },
      {
        company: "Studio Sirah",
        timeframe: "June 2025 – July 2025",
        role: "Data Analyst Intern (College Internship)",
        achievements: [
          <>
            Streamlined analytics pipelines (SQL, Python, Pandas) for robust business reporting and enhanced user experience.
          </>,
          <>
            Improved data backfilling for analytics workflows and enhanced product metrics reliability.
          </>,
          <>
            Participated in user playtesting, synthesized feedback for designers, and presented findings to college faculty.
          </>,
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "RV University, Bengaluru",
        course: "B.Sc. Psychology, Minor in Artificial Intelligence & Data Science",
        timeframe: "Aug 2023 – May 2026",
        coursework: "Key coursework: behavioral analysis, machine learning, statistics, data pipelines, data visualization, informal debates, and fieldwork (ProtoVillage Rural Sustainability Contributor). Led major analytics and dashboarding projects.",
        images: [
          {
            src: "/images/rv_university.png",
            alt: "RV University",
            width: 16,
            height: 9,
            link: "https://rvu.edu.in/",
          },
        ],
      },
      {
        name: "University of Padua, Italy",
        course: <><strong>Unfinished</strong> Bachelor&apos;s Degree in Psychological Science</>,
        timeframe: "October 2022 - July 2023",
        coursework: "Focused on experimental design, academic research in psychology, and collaborative group projects.",
        images: [
          {
            src: "/images/unipdnew.jpg",
            alt: "University of Padua",
            width: 16,
            height: 9,
            link: "https://www.unipd.it/en/educational-offer/first-cycle-degrees/school-of-psychology?tipo=L&scuola=PS&ordinamento=2025&key=PS2959",
          },
        ],
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Core Business & Analytics",
        tags: [
          { name: "Market Research", icon: "star" },
          { name: "Requirement Analysis", icon: "document" },
          { name: "Stakeholder Communication", icon: "person" },
          { name: "Project Planning", icon: "calendar" },
          { name: "Process Documentation", icon: "document" },
          { name: "Data Cleaning", icon: "star" },
          { name: "Statistical Analysis", icon: "star" },
          { name: "Dashboarding (Tableau)", icon: "grid" },
          { name: "Data Storytelling", icon: "book" },
          { name: "Presentation Skills", icon: "star" },
          { name: "Agile Methodology", icon: "star" },
        ],
      },
      {
        title: "Programming & Tools",
        tags: [
          { name: "Python", icon: "python" },
          { name: "SQL", icon: "star" },
          { name: "Pandas", icon: "star" },
          { name: "NumPy", icon: "star" },
          { name: "SciPy", icon: "star" },
          { name: "Scikit-learn", icon: "star" },
          { name: "Tableau", icon: "star" },
          { name: "Excel", icon: "document" },
          { name: "AWS", icon: "rocket" },
          { name: "FastAPI", icon: "rocket" },
          { name: "Flask", icon: "rocket" },
          { name: "MySQL", icon: "star" },
          { name: "Matplotlib", icon: "figma" },
          { name: "Seaborn", icon: "figma" },
          { name: "Plotly", icon: "figma" },
          { name: "REST APIs", icon: "openLink" },
          { name: "Git/GitHub", icon: "github" },
          { name: "Jira (basic)", icon: "star" },
          { name: "Confluence (basic)", icon: "document" },
          { name: "MS Office", icon: "document" },
        ],
      },
      {
        title: "Interpersonal & Soft Skills",
        tags: [
          { name: "Cross-cultural teamwork", icon: "person" },
          { name: "Leadership", icon: "person" },
          { name: "Public Speaking", icon: "star" },
          { name: "Adaptability", icon: "star" },
          { name: "Collaborative problem-solving", icon: "star" },
        ],
      },
    ],
  },
  achievements: {
    display: true,
    title: "Achievements & Certifications",
    certifications: [
      {
        name: "IBM Artificial Intelligence Fundamentals",
        image: "/images/ibm_logo.jpeg",
      },
      {
        name: "IBM Generative AI",
        image: "/images/ibm_logo.jpeg",
      },
    ],
    other: [
      "Debate/Public Speaking: multiple intercollegiate contests, solo informal debates, university presentations",
      "Fieldwork: Rural sustainability contributor (ProtoVillage)",
      "Esports: Valorant clan champion (informal)",
      "Publication: “100 Quotes for the Warrior Within” (2023, Author)",
    ],
  },
};


const insights: Blog = {
  path: "/insights",
  label: "Insights",
  title: "Ideas in Progress. Thoughts Unfiltered.",
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




const testimonials: Recommendations = {
  path: "/testimonials",
  label: "Testimonials",
  title: `Testimonials – ${person.name}`,
  description: `Testimonials and recommendations for ${person.name}`,
  testimonials: [
    {
      name: "John Doe",
      role: "CEO at Company",
      quote: "Mohammed is a great team player and a valuable asset to any team.",
      avatar: "/images/projects/project-01/avatar-01.jpg",
    },
    {
      name: "Jane Smith",
      role: "Project Manager",
      quote: "I was impressed by Mohammed&apos;s ability to quickly learn new technologies.",
      avatar: "/images/projects/project-01/avatar-01.jpg",
    },
  ],
};




export { person, social, newsletter, home, about, insights, work, testimonials };



export const navigation = [
  {
    ...home,
    display: true,
  },
  {
    ...work,
    display: true,
  },
  {
    ...about,
    display: true,
  },
  {
    ...testimonials,
    display: true,
  },
  {
    ...insights,
    display: true,
  },
];
