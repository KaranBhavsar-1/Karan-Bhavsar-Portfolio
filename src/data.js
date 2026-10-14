// Put images in /public: profile.jpg and /public/projects/<id>.png
export const links = {
  github: "https://github.com/KaranBhavsar-1",
  linkedin: "https://www.linkedin.com/in/karan-bhavsar-805160279",
  email: "karanbhavsar0001@gmail.com",
  phone: "+91 8779183292",
};

export const navItems = ["Home", "About", "Skills", "Projects", "Experience", "Education", "Contact"];

export const skills = [
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "ReactJS", "Bootstrap", "Tailwind CSS"] },
  { title: "Backend / Database", items: ["Node.js", "Express", "JDBC", "MySQL", "MongoDB"] },
  { title: "Languages", items: ["Python", "Java", "C++"] },
  { title: "Tools", items: ["Git", "GitHub", "Socket.IO", "Cloudinary", "Jupyter Notebook / Colab"] },
  { title: "Soft Skills", items: ["Clear Communication", "Patience", "Adaptability"] },
];

export const filters = ["All", "Web Apps", "React", "Python", "Games","Others"];

export const projects = [
  {
    id: "chatup", name: "ChatUp", subtitle: "Real-Time Chat Application",
    cats: ["Web Apps", "React"],
    tags: ["React", "Node.js", "MongoDB", "Socket.IO"],
    allTags: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Tailwind CSS", "DaisyUI"],
    desc: "ChatUp is a full-stack real-time chat application that enables 1-to-1 messaging between registered users. It features real-time messaging, online/offline status, image uploads and a clean, responsive UI.",
    features: ["Real-time messaging using Socket.IO", "Online/offline status", "Image uploads with Cloudinary", "Message timestamps & notification sounds", "Responsive and modern UI"],
    live: "https://chatup-1-a7zk.onrender.com", github: "https://github.com/KaranBhavsar-1/ChatUp",
  },
  {
    id: "nmeme", name: "N-meme", subtitle: "Reddit Meme Web App",
    cats: ["Web Apps"], tags: ["HTML", "CSS", "JavaScript", "React"],
    allTags: ["HTML", "CSS", "JavaScript","React"],
    desc: "A meme web app that pulls fresh memes from Reddit and shows them in a clean, responsive layout.",
    features: ["Fetches memes from Reddit", "Responsive layout", "Deployed on Vercel"],
    live: "https://nmeme.vercel.app/", github: "https://github.com/KaranBhavsar-1/Nmeme-React",
  },
  {
    id: "blocknote", name: "BlockNote", subtitle: "Notion-like Notes App",
    cats: ["Web Apps", "React"], tags: ["React", "Tailwind CSS", "Vite"],
    allTags: ["React", "Tailwind CSS", "Vite"],
    desc: "A block-based notes app inspired by Notion with a clean editing experience.",
    features: ["Block-based editing", "Clean modern UI", "Fast Vite build"],
    live: "#", github: "https://github.com/KaranBhavsar-1/Block-Note",
  },
  {
    id: "ecommerce", name: "E-Commerce", planned: true, subtitle: "Full Stack E-commerce Website",
    cats: ["Web Apps", "React"], tags: ["React", "Tailwind CSS", "MongoDB"],
    allTags: ["React", "Tailwind CSS", "MongoDB"],
    desc: "A full stack e-commerce website (planned).",
    features: ["Product listing", "Cart & checkout", "Admin panel"],
    live: "#", github: "https://github.com/KaranBhavsar-1",
  },
  {
    id: "voice", name: "Voice Desktop Assistant", subtitle: "Python Desktop App",
    cats: ["Python"], tags: ["Python", "Tkinter", "pyttsx3"],
    allTags: ["Python", "Tkinter", "pyttsx3"],
    desc: "A desktop voice assistant built with Python that responds to spoken commands.",
    features: ["Voice commands", "Text-to-speech replies", "Tkinter GUI"],
    live: "#", github: "https://github.com/KaranBhavsar-1",
  },
  {
    id: "retro", name: "Retro Game Box", subtitle: "Classic Games in Python",
    cats: ["Python", "Others","Games"], tags: ["Python", "Pygame"],
    allTags: ["Python", "Pygame"],
    desc: "A collection of classic arcade games recreated in Python.",
    features: ["Multiple classic games", "Pygame graphics", "Keyboard controls"],
    live: "#", github: "https://github.com/KaranBhavsar-1",
  },
];

export const experience = {
  role: "Frontend Developer Intern", company: "SDAC, Mumbai", period: "Jan 2025 – Jun 2025 (6 Months)",
  points: [
    "Developed responsive UI components using HTML, CSS, JavaScript, and Bootstrap.",
    "Contributed to an E-Commerce website, implementing product pages and interactive UI features.",
    "Integrated frontend components with backend services using Java, JDBC, and MySQL.",
    "Collaborated with team members to understand requirements and improve UI usability.",
  ],
};

export const education = [
  { degree: "Master of Science (M.Sc.)", field: "Computer Science", uni: "University of Mumbai", years: "2024 - 2026" },
  { degree: "Bachelor of Science (B.Sc.)", field: "Computer Science", uni: "University of Mumbai", years: "2021 - 2024" },
];
