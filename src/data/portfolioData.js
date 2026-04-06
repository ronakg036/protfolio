const portfolioData = {
  personalInfo: {
    name: "Ronak Gondaliya",
    role: "BTech IT Student | Full-Stack Developer | Competitive Programmer",
    tagline: "Building scalable systems and solving complex DSA problems consistently.",
    bio: "I am a BTech Information Technology student at Dharmsinh Desai University with a strong focus on full-stack development and competitive programming. I enjoy building scalable systems like Campus Connect and strengthening problem-solving skills through consistent practice across multiple coding platforms.",
    availability: "Open for job opportunities, freelance work, and collaboration",
    location: "India",
    resumeLink: "https://drive.google.com/file/d/1w-wQMjuwCpfyye5NVcHe5kd_HMHFMh_S/view",
    heroStats: [
      { label: "LeetCode Problems", value: "750+" },
      { label: "Codeforces Max Rating", value: "1249" },
      { label: "CodeChef Rating", value: "1652 (3★)" }
    ],
    ctaButtons: [
      { label: "Explore Projects", href: "#projects", type: "primary" },
      { label: "Contact Me", href: "#contact", type: "secondary" }
    ]
  },

  navLinks: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "coding-profiles", label: "Coding Profiles" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "leadership", label: "Leadership" },
    { id: "events", label: "Events" },
    { id: "contact", label: "Contact" }
  ],

  sectionContent: {
    hero: {
      snapshotLabel: "Quick Snapshot",
      profileLinksTitle: "Profiles"
    },
    about: {
      eyebrow: "About",
      title: "Engineering scalable solutions",
      description: "Focused on building real-world systems and improving problem-solving through competitive programming."
    },
    education: {
      eyebrow: "Education",
      title: "Academic journey",
      description: "Strong academic foundation with consistent performance."
    },
    skills: {
      eyebrow: "Skills",
      title: "Technical expertise",
      description: "Core technologies and tools I use to build scalable applications.",
      primaryLabel: "Primary"
    },
    codingProfiles: {
      eyebrow: "Competitive Programming",
      title: "Coding Profiles",
      description: "Performance and consistency across major coding platforms.",
      ctaLabel: "Visit Profile"
    },
    projects: {
      eyebrow: "Projects",
      title: "Featured work",
      description: "Full-stack applications and system-driven projects.",
      allFilterLabel: "All",
      githubLabel: "GitHub",
      liveLabel: "Live Demo"
    },
    achievements: {
      eyebrow: "Achievements",
      title: "Key highlights",
      description: "Milestones in competitive programming and problem solving."
    },
    leadership: {
      eyebrow: "Leadership",
      title: "Leadership & Contributions",
      description: "Community involvement and mentorship roles."
    },
    events: {
      eyebrow: "Community",
      title: "Events & Hackathons",
      description: "Organizing and contributing to developer communities."
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s connect"
    }
  },

  education: [
    {
      institution: "Dharmsinh Desai University, Gujarat",
      degree: "B.Tech in Information Technology",
      duration: "2023 - Present",
      detail: "CGPA: 9.23"
    },
    {
      institution: "Sarvodaya Science School (GHSEB)",
      degree: "Higher Secondary Education",
      duration: "2022 - 2023",
      detail: "Percentage: 78.61%"
    },
    {
      institution: "Sarvodaya School (GSEB)",
      degree: "Secondary Education",
      duration: "2020 - 2021",
      detail: "Percentage: 90%"
    }
  ],

  skills: {
    languages: {
      title: "Languages",
      items: [
        { name: "Java", primary: true },
        { name: "C", primary: false },
        { name: "C++", primary: false },
        { name: "SQL", primary: false },
        { name: "JavaScript", primary: false }
      ]
    },
    web: {
      title: "Web",
      items: [
        { name: "React", primary: true },
        { name: "Spring Boot", primary: true },
        { name: "Tailwind CSS", primary: true },
        { name: "Spring Security", primary: true },
        { name: "JWT", primary: true },
        {name: "MySQL", primary: true },
        {name: "Redis", primary: false },
        {name: "HTML", primary: false },
        { name: "CSS", primary: false },
        {name : "JavaScript", primary: false },
        { name: "JSP", primary: false },
        { name: "Servlet", primary: false },
        { name: "Bootstrap", primary: false },
        
      ]
    },
    android: {
      title: "Android",
      items: [
        { name: "Java", primary: true },
        { name: "Firebase", primary: true },
        {name:"xml", primary: true},
        {name:"Material Design", primary: false}
      ]
    },
    tools: {
      title: "Tools",
      items: [
        { name: "IntelliJ IDEA", primary: true },
        { name: "GitHub", primary: true },
        { name: "VS Code", primary: true },
        { name:"Android Studio", primary: true},
        { name: "Git", primary: false },
        { name: "Postman", primary: false },
        
      ]
    },
    coreConcepts: {
      title: "Core Concepts",
      items: [
        { name: "Data Structures & Algorithms", primary: true },
        { name: "Object-Oriented Programming", primary: true },
        {name: "System Design", primary: true },
        { name: "Competitive Programming", primary: true },
        { name: "Database Management", primary: true },
        
      ]
    }
  },

  projects: [
    {
      title: "Campus Connect",
      description: "A scalable full-stack platform for college communication, research sharing, club management, and announcements.",
      techStack: ["React", "Tailwind CSS", "Spring Boot", "SQL", "JWT", "Redis"],
      githubLink: "https://github.com/vasuchandrani/Campus-Connect",
      liveLink: "https://campus-conect.xyz"
    },
    {
      title: "Expense Tracker App",
      description: "Android app to track daily expenses with Firebase authentication and real-time database storage.",
      techStack: ["Java", "Android", "Firebase"],
      githubLink: "https://github.com/ronak1743/Expense-Tracker",
    },
    {
      title: "Sudoku Ninja",
      description: "Interactive Sudoku game with solver, generator, hints, timer, and scoring using backtracking.",
      techStack: ["Java", "AWT", "Backtracking", "OOP"],
      githubLink: "https://github.com/ronak1743/Sudoku-Ninja",
      
    },
    {
      title:"ATM Simulator System",
      description:"A Java-based ATM simulator built with Java AWT, JDBC, and MySQL. Features login (Card No + PIN), deposits, withdrawals, quick withdrawals, balance inquiry, PIN change, and transaction history for realistic ATM operations.",
      techStack:["Java", "AWT", "JDBC", "MySQL"],
      githubLink:"https://github.com/ronak1743/ATM_Simulation",
    }
  ],

  codingProfiles: [
    {
      platform: "LeetCode",
      iconText: "LC",
      metricLabel: "Problems Solved",
      metricValue: "700+",
      profileLink: "https://leetcode.com/u/gondaliyaronak78/"
    },
    {
      platform: "Codeforces",
      iconText: "CF",
      metricLabel: "Max Rating",
      metricValue: "1249 (Pupil)",
      profileLink: "https://codeforces.com/profile/gondaliyaronak78"
    },
    {
      platform: "CodeChef",
      iconText: "CC",
      metricLabel: "Rating",
      metricValue: "1652 (3★)",
      profileLink: "https://www.codechef.com/users/error_four_04"
    },
    {
      platform: "GeeksforGeeks",
      iconText: "GFG",
      metricLabel: "Problems Solved",
      metricValue: "400+",
      profileLink: "https://www.geeksforgeeks.org/user/ronak1743/"
    },
    {
      platform: "Codolio",
      iconText: "CD",
      metricLabel: "Total Problems",
      metricValue: "1600+",
      profileLink: "https://codolio.com/profile/Ronak78"
    }
  ],

  achievements: [
    {
      title: "CodeChef 3★",
      value: "1652 Rating",
      detail: "Achieved 3-star rating with strong contest performance."
    },
    {
      title: "Codeforces Pupil",
      value: "1249 Max",
      detail: "Solved 400+ problems and improved through contests."
    },
    {
      title: "LeetCode Top 15%",
      value: "700+ Problems",
      detail: "Consistent problem solving across multiple topics."
    },
    {
      title: "Total Problems Solved",
      value: "1600+",
      detail: "Across LeetCode, Codeforces, GFG, and Codolio."
    }
  ],

  leadership: [
    {
      title: "Competitive Programming Team Member",
      organization: "GDG DDU",
      duration: "2024 - Present",
      detail: "Actively contributing to CP community and peer learning."
    }
  ],

  eventsHosted: [
    {
      title: "DU Hacks 4.0",
      role: "Organizer",
      description: "Organized national-level hackathon operations and coordination."
    },
    {
      title: "DU Hacks 5.0",
      role: "Organizer",
      description: "Managed large-scale hackathon execution and logistics."
    },
    {
      title: "CodeQuest 1.0",
      role: "Contest Organizer",
      description: "Conducted competitive programming contest."
    },
    {
      title: "CodeQuest 2.0",
      role: "Contest Organizer",
      description: "Enhanced contest structure and participation experience."
    }
  ],

  contact: {
    descriptionTemplate: "{availability}. Location: {location}.",
    links: [
      { label: "Email", url: "mailto:gondaliyaronak78@gmail.com" },
      { label: "GitHub", url: "https://github.com/ronak1743" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/ronak-gondaliya" }
    ]
  },

  footer: {
    message: "Built with React, Tailwind CSS, and consistency."
  }
}

export default portfolioData;