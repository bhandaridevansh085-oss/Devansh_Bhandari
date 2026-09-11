import { useRef } from "react";
import {
  Phone,
  MapPin,
  ArrowUpRight,
  Download,
  Code2,
  ExternalLink,
  GraduationCap,
  Award,
} from "lucide-react";

/* =========================
   BRAND ICONS
========================= */

const GithubIcon = ({ size = 20 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.13c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.35.78 1.05.78 2.12v3.14c0 .3.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45h3.56V8.98H3.54v11.47ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44c.98 0 1.78-.8 1.78-1.78V1.78C24 .8 23.2 0 22.22 0Z" />
  </svg>
);

const GmailIcon = ({ size = 20 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    aria-hidden="true"
  >
    <path
      fill="#EA4335"
      d="M2 5.5A3.5 3.5 0 0 1 5.5 2h13A3.5 3.5 0 0 1 22 5.5v13a3.5 3.5 0 0 1-3.5 3.5H5.5A3.5 3.5 0 0 1 2 18.5v-13Z"
    />
    <path
      fill="white"
      d="M5 7.1 12 12l7-4.9V17a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.1Zm1.4-.6L12 10.3l5.6-3.8H6.4Z"
    />
  </svg>
);

/* =========================
   TECH ICONS
========================= */

const TechIcon = ({ name }) => {
  const logos = {
    C: <span className="tech-logo c-logo">C</span>,

    "C++": (
      <span className="tech-logo cpp-logo">
        C++
      </span>
    ),

    Java: (
      <span className="tech-logo java-logo">
        ☕
      </span>
    ),

    Python: (
      <span className="tech-logo python-logo">
        Py
      </span>
    ),

    React: (
      <span className="tech-logo react-logo">
        ⚛
      </span>
    ),

    HTML: (
      <span className="tech-logo html-logo">
        5
      </span>
    ),

    CSS: (
      <span className="tech-logo css-logo">
        3
      </span>
    ),

    "Tailwind CSS": (
      <span className="tech-logo tailwind-logo">
        ≋
      </span>
    ),

    "Node.js": (
      <span className="tech-logo node-logo">
        JS
      </span>
    ),

    Express: (
      <span className="tech-logo express-logo">
        E
      </span>
    ),

    MongoDB: (
      <span className="tech-logo mongo-logo">
        M
      </span>
    ),

    Git: (
      <span className="tech-logo git-logo">
        ◆
      </span>
    ),

    "Linux / Unix": (
      <span className="tech-logo linux-logo">
        ⌁
      </span>
    ),
  };

  return logos[name] || null;
};

/* =========================
   NAVIGATION
========================= */

const sections = [
  ["home", "Home"],
  ["academics", "Academics"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["certifications", "Certifications"],
  ["contact", "Contact"],
];

/* =========================
   SKILLS
========================= */

const skillGroups = [
  {
    category: "Languages",
    items: ["C", "C++", "Java", "Python"],
  },
  {
    category: "Frontend",
    items: ["React", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB"],
  },
  {
    category: "Systems & Tools",
    items: ["Linux / Unix", "Git"],
  },
  {
    category: "Core CS",
    items: ["DSA", "OOP", "REST APIs"],
  },
];

/* =========================
   PROJECTS
========================= */

const projects = [
  {
    number: "01",
    title: "WatchNow",
    type: "Movie Catalog & AI Recommendation System",
    description:
      "A full-stack movie platform for browsing, searching and filtering movies by genre, rating and release year. It also includes Abyss, a recommendation model designed to generate personalized movie recommendations based on viewing preferences and behavior.",
    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Java",
    ],
    link: "https://watchnow-theta.vercel.app/",
    status: "Almost Completed",
  },

  {
    number: "02",
    title: "StudyNotion",
    type: "Peer-to-Peer Study Platform",
    description:
      "A peer-to-peer learning platform connecting seniors and juniors for knowledge sharing, tutoring and paid learning opportunities.",
    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    link: "#",
    status: "Completed · Group Project",
  },
];

/* =========================
   CERTIFICATIONS
========================= */

const certifications = [
  {
    title: "MERN Certification",
  },

  {
    title: "Infosys Springboard",
    subtitle: "Full-Stack Development & Computer Science",
  },

  {
    title: "Fundamentals of Linux",
    subtitle: "January 2025",
  },

  {
    title: "Elements of AI",
    subtitle: "University of Helsinki · November 2024",
  },
];

/* =========================
   APP
========================= */

function App() {
  /* =========================
     SECRET AUDIO
  ========================= */

  const secretAudio = useRef(null);

  const playSecretSound = () => {
    if (!secretAudio.current) return;

    // 2 minutes 15 seconds = 135 seconds
    secretAudio.current.currentTime = 135;

    secretAudio.current
      .play()
      .catch((error) => {
        console.log("Audio could not play:", error);
      });
  };

  return (
    <div className="app">

      {/* SECRET AUDIO FILE */}

      <audio
        ref={secretAudio}
        src="/secret.mp3"
        preload="auto"
      />

      {/* =========================
          SIDEBAR
      ========================= */}

      <aside className="side-nav">

        {/* Hidden Easter egg trigger */}
        <button
          className="side-logo secret-trigger"
          onClick={playSecretSound}
          aria-label="Secret"
          type="button"
        >
          DB
        </button>

        <nav className="side-links">

          {sections.map(([id, name], index) => (
            <a
              href={`#${id}`}
              key={id}
            >
              <span>
                0{index + 1}
              </span>

              {name}
            </a>
          ))}

        </nav>

        <div className="side-bottom">

          <a
            href="https://github.com/bhandaridevansh085-oss"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/devansh-bhandari-a17939395"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon />
            LinkedIn
          </a>

        </div>

      </aside>

      {/* =========================
          MAIN
      ========================= */}

      <main className="main">

        {/* TOP BAR */}

        <header className="topbar">

          <span>
            DEVANSH BHANDARI
          </span>

          <a
            href="/Devansh_Bhandari_Resume.pdf"
            download
          >
            Resume
            <Download size={14} />
          </a>

        </header>

        {/* =========================
            HOME
        ========================= */}

        <section
          id="home"
          className="page-section hero-section"
        >

          <div className="hero-copy">

            <p className="eyebrow">
              Computer Science Student · Full-Stack Developer
            </p>

            <h1>
              Devansh
              <br />
              <span>Bhandari</span>
            </h1>

            <p className="hero-text">
              I build full-stack web applications and enjoy
              solving problems with software, data structures
              and modern web technologies.
            </p>

            <div className="hero-links">

              <a href="#projects">
                View projects
                <ArrowUpRight size={15} />
              </a>

              <a href="#contact">
                Contact me
                <ArrowUpRight size={15} />
              </a>

            </div>

          </div>

          {/* PHOTO */}

          <div className="hero-photo-wrap">

            <img
              src="/profile.jpg"
              alt="Devansh Bhandari"
              className="hero-photo"
            />

            <div className="photo-caption">

              <span>
                Ludhiana, Punjab
              </span>

              <span>
                India
              </span>

            </div>

          </div>

        </section>

        {/* =========================
            ACADEMICS
        ========================= */}

        <section
          id="academics"
          className="page-section"
        >

          <div className="section-number">
            01
          </div>

          <div className="section-content">

            <div className="section-title">

              <span>
                ACADEMICS
              </span>

              <h2>
                Education
              </h2>

            </div>

            <div className="academic-list">

              <article className="academic-item">

                <div className="academic-icon">
                  <GraduationCap size={20} />
                </div>

                <div className="academic-main">

                  <div className="academic-date">
                    2024 — 2028
                  </div>

                  <h3>
                    Bachelor of Engineering
                    <br />
                    Computer Science
                  </h3>

                  <p>
                    Chitkara University
                  </p>

                </div>

                <div className="academic-result">

                  <strong>
                    8.8
                  </strong>

                  <span>
                    CGPA
                  </span>

                </div>

              </article>

              <article className="academic-item">

                <div className="academic-icon">
                  <GraduationCap size={20} />
                </div>

                <div className="academic-main">

                  <div className="academic-date">
                    2023 — 2024
                  </div>

                  <h3>
                    Class XII
                  </h3>

                  <p>
                    G.M.T International School
                  </p>

                </div>

              </article>

            </div>

          </div>

        </section>

        {/* =========================
            SKILLS
        ========================= */}

        <section
          id="skills"
          className="page-section"
        >

          <div className="section-number">
            02
          </div>

          <div className="section-content">

            <div className="section-title">

              <span>
                SKILLS
              </span>

              <h2>
                What I work with
              </h2>

            </div>

            <div className="skills-list">

              {skillGroups.map(
                ({ category, items }) => (

                  <div
                    className="skill-row"
                    key={category}
                  >

                    <div className="skill-category">

                      <Code2 size={17} />

                      {category}

                    </div>

                    <div className="skill-items">

                      {items.map((skill) => {

                        const textOnly =
                          skill === "DSA" ||
                          skill === "OOP" ||
                          skill === "REST APIs";

                        return (
                          <div
                            className={`skill-item ${
                              textOnly
                                ? "text-skill"
                                : ""
                            }`}
                            key={skill}
                          >

                            {!textOnly && (
                              <TechIcon name={skill} />
                            )}

                            <span>
                              {skill}
                            </span>

                          </div>
                        );
                      })}

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </section>

        {/* =========================
            PROJECTS
        ========================= */}

        <section
          id="projects"
          className="page-section"
        >

          <div className="section-number">
            03
          </div>

          <div className="section-content">

            <div className="section-title">

              <span>
                PROJECTS
              </span>

              <h2>
                Selected work
              </h2>

            </div>

            <div className="project-list">

              {projects.map((project) => (

                <article
                  className="project-item"
                  key={project.number}
                >

                  <div className="project-top">

                    <span className="project-number">
                      {project.number}
                    </span>

                    <span className="project-status">
                      {project.status}
                    </span>

                  </div>

                  <div className="project-body">

                    <div>

                      <span className="project-type">
                        {project.type}
                      </span>

                      <h3>
                        {project.title}
                      </h3>

                    </div>

                    <div className="project-description">

                      <p>
                        {project.description}
                      </p>

                      <div className="project-tech">

                        {project.tech.map((tech) => (
                          <span key={tech}>
                            {tech}
                          </span>
                        ))}

                      </div>

                      {project.link !== "#" && (

                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="project-live"
                        >
                          Live project
                          <ExternalLink size={14} />
                        </a>

                      )}

                    </div>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>

        {/* =========================
            CERTIFICATIONS
        ========================= */}

        <section
          id="certifications"
          className="page-section"
        >

          <div className="section-number">
            04
          </div>

          <div className="section-content">

            <div className="section-title">

              <span>
                CERTIFICATIONS
              </span>

              <h2>
                Certifications
              </h2>

            </div>

            <div className="certification-list">

              {certifications.map(
                (certificate, index) => (

                  <div
                    className="certification-item"
                    key={certificate.title}
                  >

                    <div className="certificate-index">
                      0{index + 1}
                    </div>

                    <Award size={18} />

                    <div>

                      <h3>
                        {certificate.title}
                      </h3>

                      {certificate.subtitle && (
                        <p>
                          {certificate.subtitle}
                        </p>
                      )}

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </section>

        {/* =========================
            CONTACT
        ========================= */}

        <section
          id="contact"
          className="page-section contact-section"
        >

          <div className="section-number">
            05
          </div>

          <div className="section-content">

            <div className="section-title">

              <span>
                CONTACT
              </span>

              <h2>
                Let's connect
              </h2>

            </div>

            <div className="contact-grid">

              <div className="contact-message">

                <p>
                  Interested in working together,
                  discussing a project, or simply
                  talking about software and technology?
                </p>

                <a
                  href="mailto:bhandaridevansh085@gmail.com"
                  className="email-link"
                >
                  bhandaridevans085@gmail.com
                  <ArrowUpRight size={16} />
                </a>

              </div>

              <div className="contact-details">

                <a
                  href="mailto:bhandaridevans085@gmail.com"
                  className="contact-detail"
                >
                  <GmailIcon />
                  <span>
                    Gmail
                  </span>
                </a>

                <a
                  href="https://github.com/bhandaridevansh085-oss"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-detail"
                >
                  <GithubIcon />
                  <span>
                    GitHub
                  </span>
                </a>

                <a
                  href="https://linkedin.com/in/devansh-bhandari-a17939395"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-detail"
                >
                  <LinkedinIcon />
                  <span>
                    LinkedIn
                  </span>
                </a>

                <a
                  href="tel:+917986067089"
                  className="contact-detail"
                >
                  <Phone size={17} />
                  <span>
                    +91 79860 67089
                  </span>
                </a>

                <a
                  href="tel:+919464916714"
                  className="contact-detail"
                >
                  <Phone size={17} />
                  <span>
                    +91 94649 16714
                  </span>
                </a>

                <div className="contact-detail">

                  <MapPin size={17} />

                  <span>
                    Ludhiana, Punjab, India
                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* FOOTER */}

        <footer>

          <span>
            © {new Date().getFullYear()} Devansh Bhandari
          </span>

          <span>
            Built with React
          </span>

        </footer>

      </main>

    </div>
  );
}

export default App;