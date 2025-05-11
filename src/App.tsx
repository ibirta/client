import { useState } from "react";
import ContactForm from './ContactForm'; // adjust the path if needed

function App() {
  const [projects] = useState([
    {
      title: "Portfolio Website",
      description: "My personal website showcasing my projects and skills.",
      link: "#",
    },
  ]);

  return (
    <div>
      {/* Landing Section */}
      <section style={{ marginBottom: "60px" }}>
        <h1 style={{ fontSize: "3rem" }}>Hi, I'm Birta 👋</h1>
        <p style={{ fontSize: "1.5rem" }}>Software Developer</p>
      </section>

      {/* About Section */}
      <section style={{ marginBottom: "60px" }}>
        <h2>About Me</h2>
        <p>
          I'm a passionate software engineer with experience in fintech developing secure and scalable financial applications using C# and .NET.
          , design and maintaining APIs and transaction processing systems. I work in a highly collaborative environment, engaging with product owners and development teams.
          I love writing clean code, learning new technologies, and solving problems creatively! 
        </p>
      </section>

      {/* Projects Section */}
      <section style={{ marginBottom: "60px" }}>
        <h2>Projects</h2>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {projects.map((project, index) => (
            <div key={index} style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "20px", width: "300px" }}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-button" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />
    </div>
  );
}

export default App;