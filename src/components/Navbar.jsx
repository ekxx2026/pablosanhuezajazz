import { useState, useEffect } from 'react'

function Navbar() {
    const [isVisible, setIsVisible] = useState(false)
    const [activeSection, setActiveSection] = useState('inicio')
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show navbar after scrolling down 100px
            setIsVisible(window.scrollY > 100)

            // Detect active section
            const sections = ['inicio', 'sobre-mi', 'sobre-jazz', 'clases', 'multimedia', 'contacto']
            const current = sections.find(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })
            if (current) setActiveSection(current)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { id: 'inicio', label: 'Inicio' },
        { id: 'sobre-mi', label: 'Sobre Mí' },
        { id: 'sobre-jazz', label: 'Jazz' },
        { id: 'clases', label: 'Clases' },
        { id: 'multimedia', label: 'Multimedia' },
        { id: 'contacto', label: 'Contacto' }
    ]

    return (
        <nav className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'} ${isMenuOpen ? 'navbar-menu-open' : ''}`}>
            <div className="navbar-container container">
                <a href="#inicio" className="navbar-logo">
                    🎸 Pablo Sanhueza
                </a>

                <button
                    className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Abrir menú"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                    {navItems.map(item => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                className={`navbar-link ${activeSection === item.id ? 'active' : ''}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
