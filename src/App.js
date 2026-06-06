import React from "react";
import "./App.css";
import profilePic from "./my portrait.png";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaBrain,
  FaDatabase,
  FaChartBar,
  FaCode,
  FaRobot,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

export default function Portfolio() {
  const projects = [
    {
      title: "RAG-Based Document QA Assistant",
      featured: true,
      description:
        "Built a semantic retrieval pipeline over large document collections using LangChain and LLM APIs, enabling context-aware question answering and real-time information retrieval.",
      video: "/videos/RAG_document_assistant.mp4",
      github: "https://github.com/Prathamesh-1705/rag-document-assistant",
      tech: ["LangChain", "RAG", "LLMs", "Semantic Search"],
    },
    
    { title: "AI Data Warehouse SQL Assistant",
       description: "Designed ETL pipelines and integrated Gemini AI to convert natural language into SQL queries for analytical reporting.", 
       video: "/videos/AI_Data_Warehouse_Assistant.mp4", 
       github: "https://github.com/Prathamesh-1705/ai-data-warehouse-assistant", 
       tech: ["MySQL", "Gemini", "ETL", "Streamlit"], },
    {
      title: "EV Resale Price Prediction",
      description:
        "Machine learning model for EV resale price prediction using feature engineering, preprocessing and regression techniques.",
      video: "/videos/EV Resale.mp4",
      github: "https://github.com/Prathamesh-1705/ev_resale_price_prediction",
      tech: ["Python", "Scikit-Learn", "Pandas"],
    },
    
  ];

  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <FaBrain />,
      skills: ["Python", "Scikit-Learn", "LangChain", "RAG", "Gemini AI"],
    },
    {
      title: "Data Engineering",
      icon: <FaDatabase />,
      skills: ["SQL", "ETL Pipelines", "Data Warehousing", "Data Modeling"],
    },
    {
      title: "Analytics",
      icon: <FaChartBar />,
      skills: ["Pandas", "NumPy", "Power BI", "Excel"],
    },
    {
      title: "Web Development",
      icon: <FaCode />,
      skills: ["JavaScript", "Flask", "HTML", "CSS"],
    },
  ];

  const featuredProject = projects.find((p) => p.featured);

  return (
    <div className="portfolio">
      {/* FLOATING NAVBAR */}

      <nav className="floating-nav">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* HERO */}

      <section className="hero">
        <div className="hero-content">
          <div className="hero-left">
            <p className="hero-label">AI • DATA • ENGINEERING</p>

            <h1>Prathamesh Tirmare</h1>

            <h2>
              Creating AI-Powered Applications,
              <br />
              Scalable Data Pipelines and
              <br />
              Machine Learning Solutions
            </h2>

            <p className="hero-description">
              AI Engineer • Data Engineer • Data Scientist
            </p>

            <div className="hero-buttons">
              <a href="/resume.pdf" download className="primary-btn">
                <FaDownload />
                Resume
              </a>

              <a href="#contact" className="secondary-btn">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/Prathamesh-1705/"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/prathamesh-tirmare-52961028b/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

              <a href="mailto:prathameshtirmare246@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="profile-card">
              <img src={profilePic} alt="Prathamesh Tirmare" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>

          <p className="about-text">
            AI & Data Science undergraduate with hands-on experience in
            Machine Learning, Data Analytics, ETL Pipelines, Data Warehousing
            and Generative AI applications. Passionate about building
            intelligent systems that transform data into actionable insights.
          </p>
        </div>
      </section>

      {/* STATS */}

      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>4</h3>
            <p>Projects Built</p>
          </div>

          <div className="stat-card">
            <h3>10+</h3>
            <p>Technologies</p>
          </div>

          <div className="stat-card">
            <h3>3</h3>
            <p>Certifications</p>
          </div>

          <div className="stat-card">
            <h3>7.95</h3>
            <p>CGPA</p>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT */}

      <section className="featured-section">
        <div className="container">
          <p className="featured-label">FEATURED PROJECT</p>

          <h2>{featuredProject.title}</h2>

          <p>{featuredProject.description}</p>

          <div className="tech-tags">
            {featuredProject.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <video
            src={featuredProject.video}
            controls
            className="featured-video"
          />

          <a href={"https://github.com/Prathamesh-1705/rag-document-assistant"} className="github-link">
            View Project <FaArrowRight />
          </a>
        </div>
      </section>

      {/* PROJECTS */}

      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Projects</h2>

          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.title} className="project-card">
                <div className="project-icon">
                  <FaRobot />
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <video src={project.video} controls />

                <div className="project-tech">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <a href={project.github}>
                  GitHub <FaArrowRight />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}

      <section id="skills" className="section gray-section">
        <div className="container">
          <h2 className="section-title">Skills</h2>

          <div className="skills-grid">
            {skillCategories.map((category) => (
              <div className="skill-card" key={category.title}>
                <div className="skill-icon">{category.icon}</div>

                <h3>{category.title}</h3>

                <ul>
                  {category.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}

    
<section className="section">
  <div className="container">
    <h2 className="section-title">Experience</h2>

    <div className="experience-card">

      <div className="experience-header">
        <div>
          <h3>Data Science Intern</h3>
          <h4>Softcrowd Technologies</h4>
        </div>

        <span className="experience-date">
          Dec 2024 – Jan 2025
        </span>
      </div>

      <p className="experience-summary">
        Worked on data preprocessing, exploratory analysis,
        machine learning experimentation, and analytical reporting
        using Python-based data science tools.
      </p>

      <div className="experience-skills">
        <span>Python</span>
        <span>Pandas</span>
        <span>NumPy</span>
        <span>Scikit-Learn</span>
        <span>EDA</span>
        <span>Data Visualization</span>
      </div>

      <ul className="experience-points">
        <li>
          Performed exploratory data analysis (EDA), data cleaning,
          and preprocessing on structured datasets.
        </li>

        <li>
          Assisted in feature engineering and machine learning model
          development using Scikit-Learn.
        </li>

        <li>
          Supported experimentation, model evaluation, and validation
          workflows for predictive analytics projects.
        </li>

        <li>
          Created visualizations and analytical reports to support
          data-driven business decisions.
        </li>
      </ul>

    </div>
  </div>
</section>



      {/* EDUCATION */}

      <section className="section gray-section">
        <div className="container">
          <h2 className="section-title">Education</h2>

          <div className="education-card">
            <h3>B.E. Artificial Intelligence & Data Science</h3>

            <p>
              Jawahar Education Society's Institute of Technology,
              Management & Research, Nashik
            </p>

            <p>CGPA: 7.95</p>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}

     <section className="section">
  <div className="container">
    <h2 className="section-title">Certifications</h2>

    <div className="certifications-grid">

      <div className="cert-card">
        <h3>Python Bootcamp</h3>
        <p>CodeWithHarry</p>

        <div className="cert-skills">
          <span>Python,</span>
          <span>OOP,</span>
          <span>Problem Solving</span>
        </div>
      </div>

      <div className="cert-card">
        <h3>Data Science Certification</h3>
        <p>CodeWithHarry</p>

        <div className="cert-skills">
          <span>Pandas,</span>
          <span>NumPy,</span>
          <span>EDA,</span>
          <span>Machine Learning</span>
        </div>
      </div>

      <div className="cert-card">
        <h3>Data Analytics Program</h3>
        <p>Career365</p>

        <div className="cert-skills">
          <span>Excel,</span>
          <span>Power BI,</span>
          <span>Data Visualization</span>
        </div>
      </div>

    </div>
  </div>
</section>
      {/* CONTACT */}

      <section id="contact" className="section gray-section">
        <div className="container">
          <h2 className="section-title">Contact</h2>

          <div className="contact-card">
            <p>📧 prathameshtirmare246@gmail.com</p>

            <p>📱 +91 9699246283</p>

            <div className="contact-socials">
              <a href="https://github.com/Prathamesh-1705/">
                <FaGithub />
              </a>

              <a href="https://www.linkedin.com/in/prathamesh-tirmare-52961028b/">
                <FaLinkedin />
              </a>

              <a href="mailto:prathameshtirmare246@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Prathamesh Tirmare.
          Built with React & Tailwind.
        </p>
      </footer>
    </div>
  );
}

