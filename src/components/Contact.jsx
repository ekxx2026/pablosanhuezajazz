import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal.js'

function Contact() {
    const revealRef = useScrollReveal()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        level: '',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const whatsappMessage = `Hola Pablo, soy ${formData.name}. Me interesa información sobre las clases de guitarra. Nivel: ${formData.level}. Email: ${formData.email}. Tel: ${formData.phone}. Mensaje: ${formData.message}`
        window.open(`https://wa.me/56988094830?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <section className="contact section scroll-reveal" id="contacto" ref={revealRef}>
            <div className="container">
                <h2 className="text-center">Contacto</h2>
                <p className="text-center" style={{ fontSize: '1.125rem', marginBottom: '3rem', color: '#d0d0d0' }}>
                    ¿Listo para comenzar tu viaje musical? Contáctame hoy
                </p>

                <div className="contact-grid">
                    <div className="contact-form">
                        <h3 style={{ marginBottom: '1.5rem' }}>Envía un mensaje</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Nombre completo</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Teléfono</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="level">Nivel</label>
                                <select
                                    id="level"
                                    name="level"
                                    value={formData.level}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Selecciona tu nivel</option>
                                    <option value="Principiante">Principiante (sin experiencia)</option>
                                    <option value="Básico">Básico</option>
                                    <option value="Medio">Medio</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Mensaje (opcional)</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                Enviar por WhatsApp
                            </button>
                        </form>
                    </div>

                    <div className="contact-info">
                        <h3 style={{ marginBottom: '1.5rem' }}>Información de contacto</h3>

                        <div className="contact-item">
                            <span className="contact-icon">📱</span>
                            <div>
                                <strong style={{ color: '#d4af37' }}>WhatsApp</strong>
                                <br />
                                <a href="https://wa.me/56988094830" target="_blank" rel="noopener noreferrer">
                                    +56 9 8809 4830
                                </a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <span className="contact-icon">📧</span>
                            <div>
                                <strong style={{ color: '#d4af37' }}>Email</strong>
                                <br />
                                <a href="mailto:psanhueza.guitar@gmail.com">
                                    psanhueza.guitar@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <span className="contact-icon">📷</span>
                            <div>
                                <strong style={{ color: '#d4af37' }}>Instagram</strong>
                                <br />
                                <a href="https://instagram.com/pablo.guiitar" target="_blank" rel="noopener noreferrer">
                                    @pablo.guiitar
                                </a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <span className="contact-icon">📍</span>
                            <div>
                                <strong style={{ color: '#d4af37' }}>Modalidad</strong>
                                <br />
                                <span style={{ color: '#d0d0d0' }}>A domicilio • Online</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
