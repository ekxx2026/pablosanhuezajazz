import useScrollReveal from '../hooks/useScrollReveal.js'

function About() {
    const revealRef = useScrollReveal()

    return (
        <section className="about section scroll-reveal" id="sobre-mi" ref={revealRef}>
            <div className="container">
                <h2 className="text-center">Sobre <span className="text-gold">Mí</span></h2>
                <div className="about-content">
                    <div className="about-image-container">
                        <img src="/portrait.png" alt="Pablo Sanhueza" />
                    </div>
                    <div className="about-text">
                        <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#d0d0d0' }}>
                            Soy <strong style={{ color: '#d4af37' }}>Pablo Sanhueza</strong>, guitarrista de jazz profesional
                            con años de experiencia en la escena musical. Mi pasión por la música me ha llevado a desarrollar
                            un método de enseñanza integral que combina técnica sólida, teoría musical profunda y expresión artística.
                        </p>
                        <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#d0d0d0' }}>
                            Como instructor, mi objetivo es entregar a cada estudiante las herramientas necesarias para
                            desarrollar su máximo potencial musical, ya sea que estén comenzando desde cero o preparándose
                            para una carrera profesional en la música.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
