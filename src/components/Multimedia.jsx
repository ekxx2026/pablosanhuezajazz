import useScrollReveal from '../hooks/useScrollReveal.js'

function Multimedia() {
    const revealRef = useScrollReveal()

    return (
        <section className="multimedia section scroll-reveal" id="multimedia" ref={revealRef}>
            <div className="container">
                <h2 className="text-center">En <span className="text-gold">Acción</span></h2>
                <p className="text-center" style={{ fontSize: '1.125rem', marginBottom: '3rem', color: '#d0d0d0' }}>
                    Mira algunas de mis presentaciones y contenido musical
                </p>

                <div className="multimedia-grid">
                    {/* Featured Performance */}
                    <div className="featured-video glass-card">
                        <h3 style={{ marginBottom: '1.5rem', color: '#d4af37' }}>
                            🎵 Eronel - Thelonious Monk
                        </h3>
                        <div className="video-container" style={{
                            position: 'relative',
                            paddingBottom: '177.78%', // 9:16 aspect ratio for Instagram Reels
                            height: 0,
                            overflow: 'hidden',
                            borderRadius: '12px',
                            background: '#000'
                        }}>
                            <iframe
                                src="https://www.instagram.com/reel/DRC6OinkVyM/embed"
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    border: 'none'
                                }}
                                allowFullScreen
                                title="Eronel - Thelonious Monk - Pablo Sanhueza"
                            />
                        </div>
                        <p style={{ marginTop: '1rem', color: '#d0d0d0', fontSize: '0.95rem', fontStyle: 'italic' }}>
                            Algunas notas sobre Eronel de Thelonious Monk en @mokasoul_
                        </p>
                    </div>

                    {/* Instagram Feed Section */}
                    <div className="instagram-feed glass-card">
                        <h3 style={{ marginBottom: '1.5rem', color: '#d4af37', textAlign: 'center' }}>
                            📷 Sígueme en Instagram
                        </h3>

                        <div className="instagram-cta" style={{
                            textAlign: 'center',
                            padding: '2rem'
                        }}>
                            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎸</div>
                            <p style={{ marginBottom: '2rem', color: '#d0d0d0', lineHeight: '1.7' }}>
                                Comparto contenido regular sobre jazz, técnicas de guitarra,
                                improvisación y mis presentaciones en vivo.
                            </p>

                            <a
                                href="https://instagram.com/pablo.guiitar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                style={{
                                    background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                @pablo.guiitar
                            </a>
                        </div>

                        {/* Instagram Highlights */}
                        <div className="instagram-highlights" style={{
                            marginTop: '2rem',
                            padding: '1.5rem',
                            background: 'rgba(255, 255, 255, 0.02)',
                            borderRadius: '8px',
                            borderTop: '1px solid rgba(212, 175, 55, 0.2)'
                        }}>
                            <h4 style={{
                                fontSize: '1rem',
                                color: '#d4af37',
                                marginBottom: '1rem',
                                textAlign: 'center'
                            }}>
                                📊 Contenido que comparto:
                            </h4>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(2, 1fr)',
                                gap: '1rem'
                            }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎬</div>
                                    <p style={{ fontSize: '0.875rem', color: '#a0a0a0' }}>Performances en vivo</p>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📚</div>
                                    <p style={{ fontSize: '0.875rem', color: '#a0a0a0' }}>Tips de técnica</p>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎼</div>
                                    <p style={{ fontSize: '0.875rem', color: '#a0a0a0' }}>Teoría musical</p>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎸</div>
                                    <p style={{ fontSize: '0.875rem', color: '#a0a0a0' }}>Improvisaciones</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="glass-card" style={{
                    marginTop: '3rem',
                    padding: '2rem',
                    textAlign: 'center'
                }}>
                    <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#d0d0d0' }}>
                        ¿Te gustaría tocar así? Inicia tu viaje musical hoy
                    </p>
                    <a
                        href="https://wa.me/56988094830?text=Hola%20Pablo,%20vi%20tu%20video%20y%20me%20interesa%20tomar%20clases%20de%20guitarra"
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Comienza tus clases ahora
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Multimedia
