function About() {

    const skills: string[] = [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Express",
        "React",
        "PostgreSQL",
        "Docker"
    ]

    return (
        <section id="about" className="section">

            <h2>About Me</h2>

            <p>
                I'm a web developer specializing in backend development
                using Node.js and SQL databases. I enjoy building APIs,
                authentication systems, and scalable architectures.
            </p>

            <div className="skills">

                {skills.map((skill, index) => (
                    <span key={index} className="skill">
                        {skill}
                    </span>
                ))}

            </div>

        </section>
    )
}

export default About