import { useState } from "react";
import { FaHome,FaPaste,FaUser,FaProjectDiagram,FaGithub,FaLinkedin,FaEnvelope,FaPhoneAlt,FaMapMarkerAlt,FaGraduationCap,FaCode,FaServer,FaTools,FaHeart,FaBars,FaTimes,FaMoon,FaDownload,FaArrowLeft,FaCheckCircle,FaExternalLinkAlt,FaPaperPlane} from "react-icons/fa";
import { links,navItems,skills,filters,projects,experience,education} from "./data";
import { PiStudentBold } from "react-icons/pi";
import { Analytics } from '@vercel/analytics/react';

const skillIcons = [FaCode, FaServer, FaCode, FaTools, FaHeart];
const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";
const Tag = ({ children }) => (
  <span className="rounded-md border border-line bg-bg px-2 py-0.5 text-[11px] text-headtext">
    {children}
  </span>
);
const IconBox = ({ children }) => (
  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/20 text-brand2">
    {children}
  </span>
);

function Navbar({ goHome }) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("midnight");

  const changeTheme = (selectedTheme) => {
    setTheme(selectedTheme);
    document.documentElement.setAttribute("data-theme", selectedTheme);
  };

  const navIcons = {
    Home: FaHome,
    About: FaUser,
    Skills: FaCode,
    Projects: FaProjectDiagram,
    Experience: FaPaste,
    Education: PiStudentBold,
    Contact: FaEnvelope,
  };

  const click = (e, n) => {
    e.preventDefault();
    goHome(n.toLowerCase());
    setOpen(false);
  };

  const themes = [
    { name: "daylight", color: "#f8fafc" },
    { name: "midnight", color: "#0f172a" },
    { name: "mint", color: "#a7f3d0" },
  ];

  return (
    <header
      className="sticky top-0 z-50 mx-3 mt-3 rounded-2xl
      border border-line bg-card/95 shadow-lg backdrop-blur-xl
      transition-colors duration-300 sm:mx-6 md:mx-10 lg:mx-20"
    >
      <div
        className="flex min-h-14 w-full items-center
        justify-between gap-2 px-3 sm:h-16 sm:px-4"
      >
        {/* Logo and Name */}
        <a
          href="#home"
          onClick={(e) => click(e, "Home")}
          className="flex min-w-0 shrink items-center gap-2
    text-sm font-bold text-headtext sm:gap-3 sm:text-lg"
        >
          <img
            src="/logo.png"
            alt="KB Logo"
            className="h-9 w-9 shrink-0 object-contain sm:h-11 sm:w-11"
            onError={(e) => {
              e.currentTarget.style.opacity = 0;
            }}
          />

          <div
            className="flex min-w-0 flex-col sm:border-r
    sm:border-headtext/40 sm:py-1 sm:pr-4"
          >
            <span className="whitespace-nowrap leading-tight">
              <span className="text-brand2">K</span>aran Bhavsar
            </span>

            <span
              className="mt-1 text-[9px] font-normal leading-tight
      text-headtext/60 sm:text-[11px]"
            >
              karanbhavsar0001@gmail.com
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-4 text-sm
          lg:gap-6 md:flex"
        >
          {navItems.map((n) => {
            const Icon = navIcons[n];

            return (
              <a
                key={n}
                href={`#${n.toLowerCase()}`}
                onClick={(e) => click(e, n)}
                className="flex items-center gap-2 whitespace-nowrap
                  text-headtext transition-colors hover:text-brand2"
              >
                {Icon && <Icon className="text-brand2" />}
                {n}
              </a>
            );
          })}
        </nav>

        {/* Theme Selector + Mobile Menu */}
        <div
          className="flex shrink-0 items-center gap-2 sm:gap-3
          md:border-l md:border-headtext/20 md:pl-3"
        >
          <div
            className="flex items-center gap-1.5 sm:gap-2"
            role="group"
            aria-label="Choose a look"
          >
            {themes.map((t) => (
              <button
                key={t.name}
                type="button"
                onClick={() => changeTheme(t.name)}
                aria-label={`${t.name} theme`}
                aria-pressed={theme === t.name}
                className={`h-4 w-4 rounded-full border-2
                  transition-all sm:h-5 sm:w-5
                  ${
                    theme === t.name
                      ? "scale-110 border-brand2 ring-1 ring-brand2/50"
                      : "border-slate-500 hover:scale-110"
                  }`}
                style={{ backgroundColor: t.color }}
              />
            ))}
          </div>

          <button
            type="button"
            className="flex h-8 w-8 shrink-0 items-center
              justify-center rounded-lg text-headtext
              transition hover:bg-brand2/10 hover:text-brand2
              md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <nav className="border-t border-line px-3 py-3 md:hidden">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((n) => {
              const Icon = navIcons[n];

              return (
                <a
                  key={n}
                  href={`#${n.toLowerCase()}`}
                  onClick={(e) => click(e, n)}
                  className="flex items-center gap-3 rounded-xl
                    px-3 py-3 text-sm text-headtext
                    transition hover:bg-brand2/10 hover:text-brand2"
                >
                  {Icon && <Icon className="shrink-0 text-brand2" />}
                  {n}
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className={`${container} grid items-center gap-10 py-16 md:grid-cols-2 md:py-24`}
    >
      <div>
        <span className="inline-block rounded-full border border-[var(--headtext)] bg-brand/10 px-3 py-1 text-xs text-brand2">
          M.Sc. Computer Science Graduate
        </span>
        <h1 className="mt-5 text-4xl font-extrabold text-headtext sm:text-5xl">
          Hi, I'm <br />
          <span className="text-brand2">Karan Bhavsar</span>
        </h1>
        <p className="mt-4 text-lg text-headtext">
          React Developer | Frontend Developer | MERN Developer
        </p>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-headtext">
          I build modern web applications with clean code and great user
          experiences. Passionate about learning new technologies and creating
          solutions that make an impact.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-headtext transition hover:bg-brand2"
          >
            View My Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm transition hover:border-brand"
          >
            <FaDownload /> Download Resume
          </a>
        </div>
        <div className="mt-6 flex gap-4 text-xl text-headtext">
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand2"
          >
            <FaGithub />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand2"
          >
            <FaLinkedin />
          </a>
          <a href={`mailto:${links.email}`} className="hover:text-brand2">
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-sm">
        <div className="absolute inset-0 -rotate-6 rounded-[40%_60%_55%_45%] bg-gradient-to-br from-brand to-indigo-800 opacity-80" />
        <img
          src="/Profile_1.png"
          alt="Karan Bhavsar"
          className="relative z-10  w-8/12 pl-10 rounded-3xl object-cover "
          onError={(e) => (e.currentTarget.style.opacity = 0)}
        />
        <p className="absolute -bottom-4 right-0 z-20 -rotate-6 text-sm italic text-headtext">
          Let's build something great!
        </p>
      </div>
    </section>
  );
}

function About() {
  const info = [
    [FaMapMarkerAlt, "Location", "Mumbai/Pune, India"],
    [FaEnvelope, "Email", links.email],
    [FaPhoneAlt, "Phone", links.phone],
  ];
  return (
    <section id="about" className="border-t border-line">
      <div
        className={`${container} grid items-center gap-10 py-16 md:grid-cols-[280px_1fr]`}
      >
        <div className="rounded-2xl border border-line bg-card p-4">
          <img
            src="/Profile.png"
            alt="Karan"
            className="aspect-[4/5] w-full rounded-xl object-cover"
            onError={(e) => (e.currentTarget.style.opacity = 0)}
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-headtext">About Me</h2>
          <p className="mt-4 text-headtext">
            I'm a Computer Science graduate with a passion for web development
            and problem solving. I enjoy building responsive, user-friendly
            applications and exploring new technologies.
          </p>
          <p className="mt-4 text-headtext">
            I have experience with modern frontend frameworks like React,
            backend technologies like Node.js and databases like MongoDB. I'm
            always eager to learn, improve and take on new challenges.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {info.map(([Icon, label, val]) => (
              <div key={label} className="flex items-start gap-3">
                <Icon className="mt-1 text-brand2" />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-headtext">{label}</p>
                  <p className="break-words text-xs text-headtext">{val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-t border-line">
      <div className={`${container} py-16`}>
        <h2 className="text-2xl font-bold text-headtext">Technical Skills</h2>
        <p className="mt-1 text-sm text-headtext">
          Technologies and tools I work with
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => {
            const Icon = skillIcons[i];
            return (
              <div
                key={s.title}
                className="flex gap-4 rounded-xl border border-line bg-card p-5"
              >
                <IconBox>
                  <Icon />
                </IconBox>
                <div>
                  <h3 className="font-semibold text-headtext">{s.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-headtext">
                    {s.items.map((it) => (
                      <span key={it}>{it}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectImg({ id, className = "" }) {
  return (
    <div
      className={`overflow-hidden rounded-lg bg-gradient-to-br from-brand/30 to-bg ${className}`}
    >
      <img
        src={`/projects/${id}.png`}
        alt={id}
        className="h-full w-full object-cover"
        onError={(e) => (e.currentTarget.style.display = "none")}
      />
    </div>
  );
}

function Projects({ onOpen }) {
  const [filter, setFilter] = useState("All");
  const list = projects.filter(
    (p) => filter === "All" || p.cats.includes(filter),
  );
  return (
    <section id="projects" className="border-t border-line">
      <div className={`${container} py-16`}>
        <h2 className="text-2xl font-bold text-headtext">My Projects</h2>
        <p className="mt-1 text-sm text-headtext w-full">
          Here are some of the projects I've built. Each project helped me learn
          something new and improve my skills.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded px-4 py-1.5 text-xs transition ${filter === f ? "bg-brand text-headtext" : "border border-line bg-card text-headtext hover:border-brand"}`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => onOpen(p)}
              className="group w-full rounded-xl border border-line bg-card p-4 text-left
                 transition-all duration-300
                 hover:-translate-y-1 hover:border-brand/60 hover:shadow-lg
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand2"
            >
              <ProjectImg id={p.id} className="h-40" />

              <h3 className="mt-4 font-semibold text-[var(--ink)] transition-colors group-hover:text-brand2">
                {p.name}{" "}
                {p.planned && (
                  <span className="text-xs font-normal text-headtext">
                    (Planned)
                  </span>
                )}
              </h3>

              <p className="text-xs text-headtext">{p.subtitle}</p>

              <div className="mt-3 flex flex-wrap gap-1.5 text-headtext">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectDetail({ p, onBack }) {
  return (
    <section className={`${container} py-12`}>
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-xs text-brand2"
      >
        <FaArrowLeft /> Back to Projects
      </button>
      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-headtext">{p.name}</h2>
          <p className="text-headtext">{p.subtitle}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-headtext">
            {p.allTags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-headtext">{p.desc}</p>
          <ul className="mt-5 space-y-2 text-sm text-headtext">
            {p.features.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <FaCheckCircle className="text-brand2" /> {f}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex gap-3">
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm text-headtext hover:bg-brand2"
            >
              Live Demo <FaExternalLinkAlt className="text-xs" />
            </a>
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm hover:border-brand"
            >
              GitHub <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
        </div>
        <ProjectImg id={p.id} className="h-72 border border-line" />
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="border-t border-line">
      <div className={`${container} py-16`}>
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-2xl font-bold text-headtext">Work Experience</h2>
          <span className="text-xs text-headtext">{experience.period}</span>
        </div>
        <div className="relative mt-8 border-l-2 border-brand pl-6">
          <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-brand" />
          <h3 className="font-semibold text-headtext">
            {experience.role}{" "}
            <span className="font-normal text-slate-300">
              — {experience.company}
            </span>
          </h3>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-headtext">
            {experience.points.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="border-t border-line">
      <div className={`${container} py-16`}>
        <h2 className="text-2xl font-bold text-headtext">Education</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {education.map((e) => (
            <div
              key={e.degree}
              className="flex gap-4 rounded-xl border border-line bg-card p-5"
            >
              <IconBox>
                <FaGraduationCap />
              </IconBox>
              <div>
                <h3 className="font-semibold text-headtext">{e.degree}</h3>
                <p className="text-sm text-brand2">{e.field}</p>
                <p className="text-sm text-headtext">{e.uni}</p>
                <p className="mt-3 text-xs text-headtext">{e.years}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  // Simple mailto submit. Swap for EmailJS / Formspree later if you want.

  const input =
    "w-full rounded-lg border border-line bg-bg px-3 py-2.5 text-sm text-headtext outline-none focus:border-brand";

  const rows = [
    [FaEnvelope, "Email", links.email, `mailto:${links.email}`],
    [FaPhoneAlt, "Phone", links.phone, `tel:${links.phone}`],
    [FaMapMarkerAlt, "Location", "Mumbai/Pune, India", null],
    [
      FaLinkedin,
      "LinkedIn",
      "linkedin.com/in/karan-bhavsar-805160279",
      "https://www.linkedin.com/in/karan-bhavsar-805160279/",
    ],
    [
      FaGithub,
      "GitHub",
      "github.com/KaranBhavsar-1",
      "https://github.com/KaranBhavsar-1",
    ],
  ];

  return (
    <section id="contact" className="border-t border-line">
      <div className={`${container} py-16`}>
        <h2 className="text-2xl font-bold text-headtext">Get In Touch</h2>
        <p className="mt-1 text-sm text-headtext">
          I'm always open to new opportunities, collaborations or just a
          friendly chat. Feel free to reach out!
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <form
            action="https://formspree.io/f/mnpjgraz"
            method="POST"
            className="space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-xs">
                Name
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={change}
                  placeholder="Your name"
                  className={`${input} mt-1`}
                />
              </label>
              <label className="text-xs">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={change}
                  placeholder="your@email.com"
                  className={`${input} mt-1`}
                />
              </label>
            </div>
            <label className="block text-xs">
              Message
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={change}
                placeholder="Your message..."
                className={`${input} mt-1`}
              />
            </label>
            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand py-3 text-sm font-medium text-headtext hover:bg-brand2">
              <FaPaperPlane /> Send Message
            </button>
          </form>

          <div className="space-y-4 rounded-xl border border-line bg-card p-5">
            {rows.map(([Icon, label, val, href]) => (
              <div key={label} className="flex items-center gap-3">
                <IconBox>
                  <Icon />
                </IconBox>

                <div className="min-w-0">
                  <p className="text-xs text-headtext">{label}</p>

                  {href ? (
                    <a
                      href={href}
                      target={
                        label === "LinkedIn" || label === "GitHub"
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        label === "LinkedIn" || label === "GitHub"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="break-words text-sm text-headtext underline decoration-transparent hover:text-brand hover:decoration-current"
                    >
                      {val}
                    </a>
                  ) : (
                    <p className="break-words text-sm text-headtext">{val}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line">
      <div
        className={`${container} flex flex-col items-center justify-between gap-4 py-8 text-xs text-headtext md:flex-row`}
      >
        <div>
          <p className="text-base font-bold text-headtext">
            <span className="text-brand2">K</span>aran Bhavsar
          </p>
          <p>M.Sc. Computer Science Graduate</p>
        </div>
        <div className="flex gap-4 text-lg text-headtext">
          <a href={links.github} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
        <p>© 2025 Karan Bhavsar. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function App() {
  const [selected, setSelected] = useState(null);

  const goHome = (id) => {
    setSelected(null);
    setTimeout(
      () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }),
      0,
    );
  };
  const open = (p) => {
    setSelected(p);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="min-h-screen">
      <Navbar goHome={goHome} />
      {selected ? (
        <ProjectDetail p={selected} onBack={() => goHome("projects")} />
      ) : (
        <>
          <Hero />
          <About />
          <Skills />
          <Projects onOpen={open} />
          <Experience />
          <Education />
        </>
      )}
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}
