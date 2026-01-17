import useScrollReveal from '../hooks/useScrollReveal.js'

function About() {
    const revealRef = useScrollReveal()

    return (
        <section className="about section scroll-reveal" id="sobre-mi" ref={revealRef}>
            <div className="section-divider">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="var(--color-navy)">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>
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
                <div className="section-divider bottom">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="var(--color-navy)">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" transform="rotate(180 600 60)"></path>
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default About
