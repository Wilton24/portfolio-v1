interface Project {
    title: string
    description: string
}

function Projects() {

    const projects: Project[] = [
        {
            title: "NPC Ranking System",
            description: "Ranking system for pickleball players."
        },
        {
            title: "Authentication API",
            description: "JWT authentication with Node.js and PostgreSQL."
        },
        {
            title: "Player Registration App",
            description: "React app with image uploads and database storage."
        }
    ]

    return (
        <section id="projects" className="section">

            <h2>Projects</h2>

            <div className="projects-grid">

                {projects.map((project, index) => (
                    <div className="project-card" key={index}>

                        <h3>{project.title}</h3>

                        <p>{project.description}</p>

                    </div>
                ))}

            </div>

        </section>
    )
}

export default Projects