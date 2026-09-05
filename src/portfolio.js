/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Vishal's Portfolio",
  description:
    "I am a passionate and result-driven tech professional with a background in Technical Support and a growing expertise in full stack development. With 1.5 years of experience at Wipro, I handled backup operations, incident resolution, and client support using tools like Cohesity and TSM. Currently pursuing my MCA, I’ve built strong development skills in JavaScript, React, Node.js, and MongoDB. I’m highly focused on problem-solving, teamwork, and continuous learning. My goal is to leverage both my support and development experience to contribute effectively to innovative, scalable software solutions in a dynamic and growth-oriented environment.",
  og: {
    title: "Vishal Chandrabanshi Portfolio",
    type: "website",
    url: "http://vishalchandrabanshi.com/",
  },
};

//Home Page
const greeting = {
  title: "Vishal Chandrabanshi",
  logo_name: "Vishal Chandrabanshi",
  nickname: "AI Automation & Test Engineer",
  subTitle:
    "MCA student & Ex-Wipro professional specializing in AI-driven test automation. Building intelligent, self-healing frameworks with Selenium, Playwright, and API testing — powered by AI to ship reliable software faster.",
  resumeLink:
    "https://drive.google.com/file/d/12uYl4PN6tEVzxyMevx-aJB2Bvjp6vUDo/view?usp=sharing",
  portfolio_repository: "https://github.com/codewithvishal-26?tab=repositories",
  githubProfile: "https://github.com/codewithvishal-26",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ItsVisu",
  // linkedin: "https://www.linkedin.com/in/vishal-chandrabanshi-a0214a222/",
  // gmail: "vishalchandrabanshi125@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/codewithvishal-26",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vishal-chandrabanshi-a0214a222/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:ashutoshhathidara98@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/ashutosh_1919",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/layman_brother/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "API & Performance Testing",
      fileName: "APIPerformanceTestingImg",
      skills: [
        "● Designed and executed API test cases using Postman to validate request/response accuracy and error handling",

        "● Automated API testing workflows to verify functionality, data integrity, and service reliability",

        "● Performed load, stress, and scalability testing to validate application performance under real-world traffic",

        "● Identified performance bottlenecks in backend services and collaborated with developers to optimize response times",

        "● Validated REST API endpoints for status codes, response schemas, and authentication flows",

        "● Analyzed server-side metrics (CPU, memory, throughput) to pinpoint root causes of performance degradation",

        "● Documented API test results and performance benchmarks to guide release readiness decisions",
      ],
      softwareSkills: [
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: {
            color: "#E97627",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F25022",
          },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: {
            color: "#217346",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },

    {
      title: "Infrastructure & Automation Support",
      fileName: "SupportImg",
      skills: [
        "● 1.5+ years at Wipro managing enterprise backup operations and infrastructure reliability",
        "● Hands-on expertise with Cohesity and TSM for automated backup and recovery solutions",
        "● Diagnosed and resolved critical incidents, minimizing downtime through structured root-cause analysis",
        "● Applied ITIL practices to streamline service delivery and incident response workflows",
        "● Troubleshot complex system issues across distributed environments, building a strong foundation for automation thinking",
        "● Communicated technical solutions clearly to clients, bridging the gap between engineering and business needs",
      ],
      softwareSkills: [
        {
          skillName: "Cohesity",
          fontAwesomeClassname: "simple-icons:cohesity",
          style: {
            color: "#00A3E0",
          },
        },
        {
          skillName: "TSM",
          fontAwesomeClassname: "simple-icons:tsm",
          style: {
            color: "#FF6F20",
          },
        },
        {
          skillName: "DELLEMC",
          fontAwesomeClassname: "simple-icons:itil",
          style: {
            color: "#4B8BBE",
          },
        },
      ],
    },
    {
      title: "AI Test Automation",
      fileName: "AutomationTestingImg",
      skills: [
        "● Designed and built scalable test automation frameworks using Selenium and Playwright for web application testing",
        "● Automated API testing workflows to validate functionality, performance, and reliability across services",
        "● Integrated AI-powered self-healing locators and smart test generation to reduce test maintenance and flaky failures",
        "● Developed and maintained CI/CD test pipelines to enable continuous testing and faster, reliable software delivery",
        "● Performed cross-browser and regression testing to ensure consistent application behavior across environments",
        "● Applied AI/LLM-assisted techniques for test case generation, bug prediction, and intelligent test prioritization",
        "● Collaborated with development teams to embed automated testing early in the SDLC, improving overall software quality",
      ],
      softwareSkills: [
        {
          skillName: "Selenium",
          fontAwesomeClassname: "simple-icons:selenium",
          style: {
            color: "#43B02A",
          },
        },
        {
          skillName: "TestNG",
          fontAwesomeClassname: "simple-icons:testinglibrary",
          style: {
            color: "#E33332",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:openjdk",
          style: {
            color: "#437291",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
        {
          skillName: "Playwright",
          fontAwesomeClassname: "simple-icons:playwright",
          style: {
            color: "#2EAD33",
          },
        },
        {
          skillName: "API Testing",
          fontAwesomeClassname: "simple-icons:swagger",
          style: {
            color: "#85EA2D",
          },
        },
      ],
    },

    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "● Designing responsive and modern web interfaces using HTML, CSS, Tailwind CSS, and Bootstrap",

        "● Developing server-side applications and RESTful APIs using Node.js and Express.js",

        "● Creating and managing databases using MongoDB (NoSQL) and MySQL (SQL)",

        "● Implementing CRUD operations and integrating front-end with backend services",

        "● Structuring scalable backend architectures and ensuring efficient data flow",

        "● Experience with MVC architecture and modular coding practices",

        "● Hands-on with form validation, session handling, and authentication techniques",

        "● Deploying and testing web apps in local and cloud environments (Heroku, Vercel)",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "geeksforgeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#5A373D",
      },
      profileLink: "",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Dr BC Roy Engineering College",
      subtitle: "Bachelor of Computer Applications",
      duration: "2019 - 2022",
      descriptions: [
        "● Core subjects included DBMS, Operating Systems, Computer Networks, Programming Fundamentals (C/C++), and Software Engineering.",
        "● Completed projects and practical assignments in web development, Python, and basic system design.",
        "● Scored well across semesters and developed a strong foundation for advanced studies in computer applications.",
      ],
      website_link: "https://www.bcrec.ac.in/",
      logo_path: "bc roy.jpg",
      alt_name: "Dr BC Roy Engineering College",
    },
    {
      title: "NSHM Knowledge Campus Durgapur",
      subtitle: "Master of Computer Applications",
      duration: "2023 - 2025",
      website_link: "https://www.nshm.com/",
      descriptions: [
        "● Gaining in-depth knowledge in advanced subjects like Full Stack Web Development, Python, and Data Communication & Networking.",
        "● Actively working on practical projects to strengthen backend and frontend development skills.",
        "● Focusing on logic building, coding, and real-world application development.",
      ],
      logo_path: "nshm.jpg",
      alt_name: "NSHM Knowledge Campus Durgapur",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Ethical Hacking",
      subtitle: "Internshala",
      logo_path: "internshala.png",
      certificate_link:
        "https://drive.google.com/file/d/1lDYl16HLppZFQ_Tio6tu77hxFN6X-shj/view?usp=drive_link",
      alt_name: "Internshala",
      color_code: "rgba(37,99,235,0.06)",
    },
    {
      title: "Data Structures in C",
      subtitle: "Great Learning",
      logo_path: "Great_lrn.png",
      certificate_link:
        "https://drive.google.com/file/d/1YZmYNs2yAbQEMTMq_QA528u-KB9tYuUc/view?usp=drive_link",
      alt_name: "Great Learning",
      color_code: "rgba(37,99,235,0.06)",
    },

    {
      title: "Smart English Basics for Professionals",
      subtitle: "Great Learning",
      logo_path: "Great_lrn.png",
      certificate_link:
        "https://drive.google.com/file/d/1YxvSsHacNgOKIxstb279kiXZ4nlHmI0_/view?usp=drive_link",
      alt_name: "Internshala",
      color_code: "rgba(37,99,235,0.06)",
    },

    {
      title: "The Fundamentals of Digital Marketing",
      subtitle: "Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1iDcdkeyupFhbhQZbVyZFGZCok-QAovTx/view?usp=drive_link",
      alt_name: "Internshala",
      color_code: "rgba(37,99,235,0.06)",
    },

    {
      title: "Introduction to Internet of Things",
      subtitle: "NPTEL",
      logo_path: "nptel.png",
      certificate_link:
        "https://drive.google.com/file/d/12HLd1y2v2VtZm93SZC1Hmnd8k6K56kjJ/view?usp=drive_link",
      alt_name: "Internshala",
      color_code: "rgba(37,99,235,0.06)",
    },

    {
      title: "Developing Soft Skills and Personality",
      subtitle: "NPTEL",
      logo_path: "nptel.png",
      certificate_link:
        "https://drive.google.com/file/d/13t_oYcXAL1HEuQbg4L-n81zrAVzQZR6U/view?usp=drive_link",
      alt_name: "NPTEL",
      color_code: "rgba(37,99,235,0.06)",
    },

    {
      title: "Python Programming",
      subtitle: "Great Learning",
      logo_path: "Great_lrn.png",
      certificate_link:
        "https://drive.google.com/file/d/16EaEKLVsEOHlWUfTzA2Kf5qD-ec3IEW-/view?usp=drive_link",
      alt_name: "Great Learning",
      color_code: "rgba(37,99,235,0.06)",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked in the IT industry with 3+ years of experience, starting as an Associate Engineer – Infrastructure & Functional Testing in data backup and storage domains, and now specializing in AI-driven test automation. Along the way, I've gained hands-on expertise with enterprise tools, ticketing systems, client support, and building automated test frameworks using Selenium, Playwright, and API testing to deliver reliable, high-quality software.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Associate Engineer – Infrastructure & Functional Testing",
          company: "Wipro Ltd.",
          company_url: "https://www.wipro.com/",
          logo_path: "wipro.png",
          duration: "May 2022 – Oct 2023",
          location: "Coimbatore, India",
          description:
            "Provided technical support in the domain of data backup and storage for enterprise clients. Hands-on experience with tools like Cohesity, TSM, and Data Domain. Responsible for handling tickets, resolving backup issues, monitoring storage systems, and performing functional and performance checks to ensure data integrity and system reliability for critical infrastructure.",
          color: "#00A4EF",
        },

        {
          title: "Quality Analyst",
          company: "Techno Exponent",
          company_url: "https://www.technoexponent.com/",
          logo_path: "technoexponent.png",
          duration: "2024 – 2025",
          location: "Kolkata, India",
          description:
            "Working as a Quality Analyst at Techno Exponent, an AI-driven digital solutions company. Responsible for manual and automated testing of web applications, building test automation frameworks using Selenium and Playwright, and performing API and performance testing to ensure reliable, high-quality releases.",
          color: "#E94B3C",
        },
        {
          title: "Quality Assurance Analyst",
          company: "Infosys",
          company_url: "https://www.infosys.com/",
          logo_path: "infosys.png",
          duration: "2025 – Present",
          location: "India",
          description:
            "Working as a Quality Assurance Analyst at Infosys, one of India's leading IT services companies. Responsible for ensuring software quality through manual and automated testing using Selenium and Playwright, API and performance testing, defect tracking, and collaborating with cross-functional teams in an Agile environment.",
          color: "#007CC2",
        },
      ],
    },

    {
      title: "Internships",
      experiences: [
        {
          title: "Data Analyst Intern",
          company: "Anudip Foundation",
          company_url: "https://www.anudip.org/",
          logo_path: "af.png", // Replace with actual logo path if needed
          duration: "Nov 2024 – March 2025",
          location: "Kolkata, India",
          description:
            "Worked on analyzing training and placement data using Python (Pandas, Matplotlib), SQL, Power BI, and Advanced Excel. Designed interactive dashboards to monitor student performance and placement success rates. Cleaned large datasets and generated insights that helped improve program outcomes and reporting efficiency.",
          color: "#1E88E5", // A clean, professional blue shade
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Arcade Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google.png.jpg",
          duration: "April 2025 - Present",
          location: "Remote / India",
          description:
            "Selected as a Google Arcade Facilitator to mentor and guide students through curated programs and challenges in Web, Cloud, and AI/ML domains. Helping peers build strong foundational and project-based learning through structured learning paths and interactive sessions.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a wide range of modern technologies, combining test automation frameworks with strong analytical and development tools. My best experience lies in building automated test suites and API validation frameworks using Selenium, Playwright, and Postman, integrated with AI-driven self-healing and smart test generation. I have also worked on developing and testing dynamic web applications using technologies like HTML, CSS, JavaScript, Node.js, MongoDB, and React, applying automation practices across the full development lifecycle.",
  avatar_image_path: "projects_image.svg",
};

// const publicationsHeader = {
//   title: "Publications",
//   description: "My projects make use of a wide range of modern technologies, combining frontend and backend development with strong analytical tools. My best experience lies in creating data analysis projects and visualizing business insights using Python, Excel, and Power BI. I have also worked on deploying dynamic web applications and clones using technologies like HTML, CSS, JavaScript, Node.js, and MongoDB, React",
//   avatar_image_path: "projects_image.svg",
// };

// const publications = {
//   data: [
//     {
//       id: "neuro-symbolic-sudoku-solver",
//       name: "Neuro-Symbolic Sudoku Solver",
//       createdAt: "2023-07-02T00:00:00Z",
//       description: "Paper published in KDD KiML 2023",
//       url: "https://arxiv.org/abs/2307.00653",
//     },
//     {
//       id: "Spotify Clone",
//       name: "SPOTIFY Clone",
//       createdAt: "2024-06-19T00:00:00Z",
//       description: "A front-end-only clone of the Spotify music player, built using HTML, CSS, and JavaScript. This project replicates the core look and feel of Spotify’s user interface with basic interactivity.",
//       url: "https://github.com/ItsVisu/Spotify-Clone",
//     },
//     {
//       id: "consistency-models",
//       name: "Consistency Models",
//       createdAt: "2023-10-12T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/consistency-models/",
//     },
//   ],
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "vishal_pic.jpg",
    description:
      "I’m always open to exciting opportunities and meaningful collaborations. Whether you have a project idea, want to discuss technology, or simply want to connect — feel free to reach out! I'm active on most social platforms and usually respond within 24 hours. I can help you with Web Development (MERN Stack), Data Analysis, Resume Building, and Portfolio Projects.",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "Address",
    subtitle: "EN Block, Sector V, Bidhannagar, West Bengal 700091",
    locality: "Sector V, Bidhannagar",
    country: "Kolkata",
    region: "West Bengal",
    postalCode: "700091",
    streetAddress: "EN Block, Sector V",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/io1nTW8cW8Dz7SRA8",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  // publicationsHeader,
  // publications,
  contactPageData,
};
