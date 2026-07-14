const withBase = (path) => {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  return `${base}${path.replace(/^\//, "")}`;
};

export const profile = {
  name: "Rifqi Aldino Amin",
  tagline: "Software Developer & Data Analyst",
  shortDescription:
    "Enthusiastic developer and analyst with experience across web, mobile, game development, and data analysis. I build interactive experiences using React Native and Unity, and turn raw data into actionable insight using SQL, Python, and machine learning.",
  location: "Tangerang, Indonesia",
  photoUrl: withBase("/photo.jpeg"),
};

export const about = {
  paragraphs: [
    "Informatics undergraduate student with hands-on experience in SQL-based data modeling, statistical analysis, and machine learning for business insight generation, alongside solid software development skills in Python, Kotlin, C#, TypeScript, and JavaScript. Experienced in organizational activities as a logistics division member, developing teamwork, coordination, and problem-solving skills. Committed to learning new technologies and eager to apply both analytical and technical knowledge in real-world projects."
  ],
  skills: [
     "SQL",
     "Python (Pandas, Scikit-learn)",
     "Data Modeling",
     "Statistical Analysis",
     "Machine Learning",
     "MongoDB",
     "Supabase",
     "C#",
     "TypeScript",
     "JavaScript",
     "HTML",
     "CSS",
     "Kotlin",
     "Git & Version Control Basics",
     "Unity"
  ],
};

export const education = [
  {
    period: "Aug 2023 — Aug 2027 (Expected)",
    title: "Bachelor of Informatics",
    place: "Universitas Multimedia Nusantara",
    description:
      "GPA 3.65/4.00. Built a strong foundation in software engineering through hands-on projects, focusing on web and mobile development, as well as interactive game and VR applications using Unity.",
  },
  {
    period: "2019 — 2022",
    title: "High School",
    place: "SMAN 7 Tangerang",
    description:
      "Developed an early interest in computer science and programming, which led to pursuing a degree in Informatics.",
  },
];

export const certificates = [
  {
    title: "Introduction to Python",
    issuer: "Sololearn",
    year: "2025",
    color: "var(--cn-cyan)",
    logo: withBase("/sololearn.png"),
    file: withBase("/certificates/introduction-to-python.png")
  },
  {
    title: "Python Intermediate",
    issuer: "Sololearn",
    year: "2025",
    color: "var(--cn-pink)",
    logo: withBase("/sololearn.png"),
    file: withBase("/certificates/python-intermediate.png")
  },
  {
    title: "Python Developer",
    issuer: "Sololearn",
    year: "2025",
    color: "var(--cn-purple)",
    logo: withBase("/sololearn.png"),
    file: withBase("/certificates/python-developer.png")
  },
  {
    title: "Huawei Talent HCIA-AI V3.5 Course",
    issuer: "Huawei",
    year: "2025",
    color: "var(--cn-blue)",
    logo: withBase("/huawei-hcia.png"),
    file: withBase("/certificates/huawei-hcia-ai.png")
  },
];

export const projects = [
  {
    title: "Amazon Sales Prediction",
    tag: "Data Analysis · Machine Learning",
    description:
      "Analyzed 200K+ Amazon product records to identify the key drivers of e-commerce sales performance, comparing Linear Regression, Random Forest, and XGBoost.",
    stack: ["Python", "Pandas", "Scikit-learn", "XGBoost"],
    link: null,
    highlights: [
      "Compared linear (Linear Regression) vs non-linear models (Random Forest, XGBoost) to predict product purchase volume, reaching an R² of 0.99 with the best model.",
      "Found that review activity (review_velocity, total_reviews) and sponsorship status (is_sponsored) were far stronger predictors of sales than price or discount.",
      "Business implication: sellers may gain more from driving product reviews and sponsored placement than from price-based promotions alone.",
    ],
  },
  {
    title: "Supermarket Data Model",
    tag: "SQL · Data Modeling",
    description:
      "Designed a relational database schema for retail operations — customers, transactions, products, and suppliers — with analytical queries for sales and workforce reporting.",
    stack: ["SQL", "MySQL", "Data Modeling"],
    link: null,
    highlights: [
      "Modeled a normalized schema linking customers, transactions, products, and suppliers to support sales and inventory reporting.",
      "Wrote analytical queries and views (e.g. total salary by position, product revenue) to summarize business performance by category and employee.",
      "Implemented stored procedures and triggers to automate stock updates and revenue calculation after each transaction, keeping reporting data consistent.",
    ],
  },
  {
    title: "Pick it Up",
    tag: "Unity · XR Toolkit",
    description:
      "A VR game built in Unity and tested with the XRDevice Simulator. Players pick up and place objects across two levels, guided by narrator instructions at the start.",
    stack: ["Unity", "C#", "XR Interaction Toolkit"],
    link: "https://umn.itch.io/pick-it-up",
  },
  {
    title: "Parkobby",
    tag: "Unity · Windows Game",
    description:
      "A Windows adventure parkour game where players overcome obstacles and collect keys to unlock progress, across three levels starting with a tutorial stage.",
    stack: ["Unity", "C#", "Windows"],
    link: "https://umn.itch.io/parkobby",
  },
  {
    title: "Ufound",
    tag: "Cross-platform Mobile App",
    description:
      "A mobile app for reporting and searching lost items on campus, with quick report submission and an admin system to track and manage lost & found records.",
    stack: ["TypeScript", "React Native", "Supabase"],
    link: null,
    photos: [
      {
        src: withBase("/Ufound/cropped/02_UserHomeDashboardProfile_1.png"),
        label: "User Dashboard",
      },
      {
        src: withBase("/Ufound/03_ReportLostAnItem_1.png"),
        label: "Report Item Feature",
      },
      {
        src: withBase("/Ufound/cropped/03_ReportLostAnItem_3.png"),
        label: "Report Item Feature",
      },
      {
        src: withBase("/Ufound/cropped/05_AdminHomeDashboardProfile_1.png"),
        label: "Admin Panel",
      },
      {
        src: withBase("/Ufound/cropped/06_AdminAcceptRejectReportPage_1.png"),
        label: "Admin Panel · Review Reports",
      },
    ],
  },
  {
    title: "tamanBacaan",
    tag: "Android Mobile App",
    description:
      "An Android app for managing book borrowing and returns using MVVM architecture, with ML-based content filtering for personalized book recommendations.",
    stack: ["Kotlin", "Android", "MVVM", "MongoDB", "Machine Learning"],
    link: null,
    photos: [
      {
        src: withBase("/TamanBacaan/03_HomeScreen.png"),
        label: "Home Screen",
      },
      {
        src: withBase("/TamanBacaan/05_BookDetail.png"),
        label: "Book Detail",
      },
      {
        src: withBase("/TamanBacaan/04_SearchScreen.png"),
        label: "Search Screen",
      },
      {
        src: withBase("/TamanBacaan/06_MyLibraryTab.png"),
        label: "My Library Tab",
      },
      {
        src: withBase("/TamanBacaan/08_AdminBookManagement_2.png"),
        label: "Admin Book Management",
      },
    ],
  },
];

export const contacts = [
  { type: "github", label: "GitHub", href: "https://github.com/M1goNu" },
  {
    type: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rifqi-aldino-amin",
  },
  {
    type: "instagram",
    label: "Instagram",
    href: "https://instagram.com/rifqi_aldino",
  },
];