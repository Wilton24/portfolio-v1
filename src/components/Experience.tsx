interface ExperienceItem {
    role: string
    description: string
}

function Experience() {

    const experiences: ExperienceItem[] = [
        {
            role: "Backend Developer",
            description: "Building APIs using Node.js, Express, and PostgreSQL."
        },
        {
            role: "Teacher",
            description: "Teaching programming and computer fundamentals."
        }
    ]

    return (
        <section id="experience" className="section">

            <h2>Experience</h2>

            <div className="timeline">

                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">

                        <h3>{exp.role}</h3>

                        <p>{exp.description}</p>

                    </div>
                ))}

            </div>

        </section>
    )
}

export default Experience