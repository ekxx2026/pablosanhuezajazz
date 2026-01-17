import JazzQuotes from './JazzQuotes.jsx'
import useScrollReveal from '../hooks/useScrollReveal.js'

function JazzInfo() {
    const revealRef = useScrollReveal()

    return (
        <section className="jazz-info section scroll-reveal" id="sobre-jazz" ref={revealRef}>
            <div className="container">
                <h2 className="text-center">El <span className="text-gold">Jazz</span></h2>
                <p className="text-center" style={{ fontSize: '1.125rem', marginBottom: '3rem', color: '#d0d0d0' }}>
                    Descubre la esencia de este género musical único
                </p>

                <div className="jazz-content">
                    <div className="jazz-intro glass-card" style={{ marginBottom: '2rem' }}>
                        <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#d0d0d0' }}>
                            El <strong style={{ color: '#d4af37' }}>jazz</strong> es mucho más que un género musical:
                            es una forma de expresión artística que nació a principios del siglo XX en las comunidades
                            afroamericanas del sur de Estados Unidos, especialmente en Nueva Orleans.
                        </p>
                    </div>

                    <div className="jazz-grid">
                        <div className="jazz-card glass-card">
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎺</div>
                            <h3>Improvisación</h3>
                            <p>
                                El corazón del jazz. Los músicos crean melodías espontáneas sobre estructuras armónicas,
                                expresando su creatividad y emociones en tiempo real.
                            </p>
                        </div>

                        <div className="jazz-card glass-card">
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎵</div>
                            <h3>Swing</h3>
                            <p>
                                El ritmo característico que hace que el jazz "respire". Es esa sensación de groove
                                que invita al movimiento y define el pulso del género.
                            </p>
                        </div>

                        <div className="jazz-card glass-card">
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎼</div>
                            <h3>Armonía Compleja</h3>
                            <p>
                                El jazz utiliza acordes extendidos y progresiones sofisticadas que crean paisajes
                                sonoros ricos y profundos, explorando todas las posibilidades musicales.
                            </p>
                        </div>

                        <div className="jazz-card glass-card">
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎸</div>
                            <h3>Expresión Personal</h3>
                            <p>
                                Cada músico desarrolla su propia "voz" en el instrumento. El jazz celebra la
                                individualidad dentro del contexto del conjunto.
                            </p>
                        </div>
                    </div>

                    <div className="jazz-timeline glass-card" style={{ marginTop: '3rem', padding: '2rem' }}>
                        <h3 className="text-center" style={{ marginBottom: '2rem' }}>
                            Estilos del Jazz
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                            <div>
                                <h4 style={{ color: '#d4af37', marginBottom: '0.5rem' }}>🎷 Bebop</h4>
                                <p style={{ fontSize: '0.95rem' }}>Rápido, virtuoso y complejo. Charlie Parker revolucionó el jazz en los años 40.</p>
                            </div>
                            <div>
                                <h4 style={{ color: '#d4af37', marginBottom: '0.5rem' }}>😎 Cool Jazz</h4>
                                <p style={{ fontSize: '0.95rem' }}>Relajado y sofisticado. Miles Davis definió este estilo en los años 50.</p>
                            </div>
                            <div>
                                <h4 style={{ color: '#d4af37', marginBottom: '0.5rem' }}>🌍 Latin Jazz</h4>
                                <p style={{ fontSize: '0.95rem' }}>Fusión con ritmos afrocubanos y brasileños. Energía y sabor latino.</p>
                            </div>
                            <div>
                                <h4 style={{ color: '#d4af37', marginBottom: '0.5rem' }}>🎹 Fusion</h4>
                                <p style={{ fontSize: '0.95rem' }}>Mezcla de jazz con rock, funk y electrónica. Innovación constante.</p>
                            </div>
                        </div>
                    </div>


                    <JazzQuotes />

                    <div className="jazz-benefits glass-card" style={{ marginTop: '3rem', padding: '2rem' }}>
                        <h3 className="text-center" style={{ marginBottom: '1.5rem' }}>
                            Por qué estudiar Jazz
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                            <div>
                                <h4 style={{ color: '#d4af37', marginBottom: '0.5rem' }}>🧠 Desarrollo Mental</h4>
                                <p>Mejora la concentración, memoria y creatividad a través de la improvisación.</p>
                            </div>
                            <div>
                                <h4 style={{ color: '#d4af37', marginBottom: '0.5rem' }}>🎓 Comprensión Musical</h4>
                                <p>Entender el jazz te da las herramientas para comprender cualquier estilo musical.</p>
                            </div>
                            <div>
                                <h4 style={{ color: '#d4af37', marginBottom: '0.5rem' }}>🌟 Expresión Artística</h4>
                                <p>Aprende a expresar tus emociones de manera única y personal a través de la música.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JazzInfo
