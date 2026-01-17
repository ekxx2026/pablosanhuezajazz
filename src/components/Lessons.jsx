import useScrollReveal from '../hooks/useScrollReveal.js'

function Lessons() {
    const revealRef = useScrollReveal()

    const topics = [
        { icon: '🎵', title: 'Técnica', description: 'Desarrollo de técnica instrumental sólida y eficiente' },
        { icon: '📖', title: 'Lectura', description: 'Lectura musical y comprensión de partituras' },
        { icon: '🎹', title: 'Armonía', description: 'Teoría armónica aplicada al instrumento' },
        { icon: '🎸', title: 'Improvisación', description: 'Desarrollo del lenguaje improvisatorio' },
        { icon: '🎼', title: 'Repertorio', description: 'Estudio de obras y estilos musicales' },
    ]

    return (
        <section className="lessons section scroll-reveal" id="clases" ref={revealRef}>
            <div className="container">
                <h2 className="text-center">Clases de <span className="text-gold">Guitarra</span></h2>
                <p className="text-center" style={{ fontSize: '1.25rem', marginBottom: '3rem', color: '#d0d0d0' }}>
                    Nivel básico y medio • A domicilio • Online
                </p>

                <div className="lessons-grid">
                    {topics.map((topic, index) => (
                        <div key={index} className="lesson-card">
                            <div className="lesson-icon">{topic.icon}</div>
                            <h3>{topic.title}</h3>
                            <p>{topic.description}</p>
                        </div>
                    ))}
                </div>

                <div className="glass-card" style={{ marginTop: '3rem', padding: '2rem' }}>
                    <h3 className="text-center" style={{ marginBottom: '1.5rem' }}>
                        ¿Para quién son estas clases?
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                        <div>
                            <h4 style={{ color: '#d4af37', marginBottom: '0.5rem' }}>👶 Niños</h4>
                            <p>Introducción lúdica y progresiva al mundo de la música</p>
                        </div>
                        <div>
                            <h4 style={{ color: '#d4af37', marginBottom: '0.5rem' }}>🎓 Jóvenes</h4>
                            <p>Preparación sólida para estudios musicales profesionales</p>
                        </div>
                        <div>
                            <h4 style={{ color: '#d4af37', marginBottom: '0.5rem' }}>👨‍💼 Adultos</h4>
                            <p>Cumple tu sueño de tocar y entender la música</p>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <span className="badge">⏰ Cupos Limitados</span>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <a
                        href="https://wa.me/56988094830?text=Hola%20Pablo,%20me%20interesa%20información%20sobre%20las%20clases%20de%20guitarra"
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Reserva tu Cupo
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Lessons
