function Hero() {
    return (
        <section className="hero" id="inicio">
            <div className="hero-content container">
                <p className="hero-subtitle">Guitarrista de Jazz Profesional</p>
                <h1 className="hero-title">Pablo Sanhueza</h1>
                <p className="hero-description">
                    Músico profesional especializado en jazz. Ofrezco clases de guitarra personalizadas
                    para todos los niveles, con enfoque en técnica, armonía, improvisación y repertorio.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a
                        href="https://wa.me/56988094830?text=Hola%20Pablo,%20me%20interesa%20información%20sobre%20las%20clases%20de%20guitarra"
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Inscríbete Ahora
                    </a>
                    <a href="#sobre-jazz" className="btn btn-secondary">
                        Conoce el Jazz
                    </a>
                </div>
                <div className="scroll-indicator">
                    <span></span>
                </div>
            </div>
        </section>
    )
}

export default Hero
