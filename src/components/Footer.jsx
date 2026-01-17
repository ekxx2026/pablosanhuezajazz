import { SITE_CONFIG } from '../config.js'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col bio">
                        <h4 className="footer-logo">🎸 Pablo Sanhueza</h4>
                        <p>
                            Guitarrista de Jazz profesional dedicado a la enseñanza y difusión de este noble arte.
                            Creando experiencias musicales únicas en Santiago.
                        </p>
                    </div>
                    <div className="footer-col links">
                        <h4>Enlaces</h4>
                        <ul>
                            <li><a href="#inicio">Inicio</a></li>
                            <li><a href="#sobre-mi">Sobre Mí</a></li>
                            <li><a href="#clases">Clases</a></li>
                            <li><a href="#contacto">Contacto</a></li>
                        </ul>
                    </div>
                    <div className="footer-col contact">
                        <h4>Contacto</h4>
                        <p>{SITE_CONFIG.phone}</p>
                        <p>{SITE_CONFIG.email}</p>
                        <div className="footer-social">
                            <a href={SITE_CONFIG.instagram.url} target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Pablo Sanhueza. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
