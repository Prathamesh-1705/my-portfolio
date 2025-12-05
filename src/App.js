import React from "react";
import profilePic from "./portfolio.jpg"; // your provided image (already in src)

export default function Portfolio() {
  const name = "PRATHAMESH TIRMARE";
  const tagline = "Aspiring Data Scientist and Engineer";
  const bio = `I'm a student and developer focused on data analysis and machine learning. I build data-driven projects. I enjoy turning ideas into working prototypes and clean, documented code.`;

  const skills = [
    "Data Science",
    "Python",
    "SQL",
    "HTML",
    "CSS",
    "JS",
    "JavaScript (ES6)",
  ];

  // Projects — videos should be placed in public/videos/ (see README note below)
  const projects = [
    {
      id: 1,
      title: "Simple Pdf-merger",
      desc: "Pdf merger build using python and python libraries",
      // put the file at public/videos/project1.mp4
      video: "/videos/pdf_merger.mp4",
    },
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-gray-100 text-gray-900 antialiased">
      {/* HEADER */}
      <header className="max-w-5xl mx-auto px-6 py-10">
        <nav className="flex items-center justify-between">
          <div className="text-lg font-semibold ">{name.split(" ")[0]}</div>
          <div className="space-x-4">
            <a href="#projects" className="hover:underline">
              Projects
            </a>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-20">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight ">{name}</h1>
            <p className="mt-3 text-xl text-gray-700">{tagline}</p>

            <p className="mt-6 max-w-xl leading-relaxed capitalize">{bio}</p>

            <div className="mt-6 flex gap-4">
              <a
                href="/Prathamesh resume.pdf"
                download
                className="inline-block rounded-lg px-5 py-3 bg-slate-900 text-white font-medium shadow"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm text-gray-600">
              <span>🔗</span>
              <a
                href="https://github.com/Prathamesh-1705/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
              <span className="opacity-50">•</span>
              <a
                href="https://www.linkedin.com/in/prathamesh-tirmare-52961028b/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-first md:order-last flex justify-center">
            <img
              src={profilePic}
              alt="Prathamesh Tirmare"
              className="w-80 h-90 rounded-2xl object-cover shadow-lg"
            />
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-12">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <p className="mt-2 text-gray-600">Here are some of my working project demos:</p>

          <div className="mt-6 grid md:grid-cols-2 gap-8">
            {projects.map((p) => (
              <article key={p.id} className="rounded-lg bg-white p-4 shadow">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-600 mb-3">{p.desc}</p>

                {/* Video from public/videos */}
                <div className="w-full bg-black rounded overflow-hidden">
                  <video
                    src={p.video}
                    controls
                    className="w-full h-64 object-cover bg-black"
                  />
                </div>
              </article>
            ))}
          </div>

          <p className="mt-4 text-sm text-gray-500">Tip: put your MP4 files in <code>public/videos/</code> (eg. <code>public/videos/project1.mp4</code>) and they will load with the paths used above.</p>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-8">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <p className="mt-2 text-gray-600">A selection of technologies and tools I use frequently:</p>

          <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {skills.map((s) => (
              <li
                key={s}
                className="rounded-md px-3 py-2 bg-white shadow-sm text-sm font-medium"
              >
                {s}
              </li>
            ))}
          </ul>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-8">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-gray-600">Want to collaborate or have questions? Reach out.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-lg bg-white p-6 shadow">
              <h4 className="font-semibold">Email</h4>
              <p className="mt-2 text-gray-600">prathameshtirmare246@gmail.com</p>

              <h4 className="mt-6 font-semibold">Phone</h4>
              <p className="mt-2 text-gray-600">9699246283</p>

              <h4 className="mt-6 font-semibold">Social</h4>
              <div className="mt-2 flex gap-3">
                <a
                  href="https://github.com/Prathamesh-1705/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm hover:underline"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/prathamesh-tirmare-52961028b/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Replaced Form with Message Me Button */}
            <div className="rounded-lg bg-white p-6 shadow text-center">
              <p className="text-gray-700 mb-4">
                Click the button below to open your default email app and message me directly.
              </p>
              <button
                type="button"
                onClick={() => {
                  window.location.href =
                    "mailto:prathameshtirmare246@gmail.com?subject=Portfolio%20Inquiry";
                }}
                className="w-full mt-2 inline-block rounded-lg px-4 py-3 bg-slate-900 text-white font-medium shadow"
              >
                📩 Message Me
              </button>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          Built with React + Tailwind. © {new Date().getFullYear()} {name.split(" ")[0]}.
        </footer>
      </main>
    </div>
  );
}
