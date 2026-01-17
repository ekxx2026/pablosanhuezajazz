import { useState, useEffect } from 'react'

function JazzQuotes() {
    const quotes = [
        {
            text: "El jazz es la única música en la que la misma nota puede ser tocada noche tras noche pero de manera diferente cada vez.",
            author: "Ornette Coleman"
        },
        {
            text: "La vida es como el jazz... es mejor cuando improvisas.",
            author: "George Gershwin"
        },
        {
            text: "El jazz no se trata de notas, se trata de lo que está entre las notas.",
            author: "Miles Davis"
        },
        {
            text: "Tocar 'bop' es como jugar al scrabble con todas las vocales faltantes.",
            author: "Duke Ellington"
        },
        {
            text: "No hay errores en el jazz, solo oportunidades.",
            author: "Miles Davis"
        },
        {
            text: "El jazz es libertad. Piensas en algo y luego lo tocas.",
            author: "Charlie Parker"
        },
        {
            text: "La música es tu propia experiencia, tus pensamientos, tu sabiduría. Si no la vives, nunca saldrá de tu instrumento.",
            author: "Charlie Parker"
        },
        {
            text: "El jazz viene de las raíces del blues, y el blues es sobre la experiencia humana.",
            author: "Herbie Hancock"
        },
        {
            text: "Sin música, la vida sería un error.",
            author: "Louis Armstrong"
        },
        {
            text: "El verdadero lenguaje del jazz no está en las notas que tocas, sino en las que decides no tocar.",
            author: "Thelonious Monk"
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    // Auto-rotate quotes every 6 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextQuote()
        }, 6000)

        return () => clearInterval(interval)
    }, [currentIndex])

    const nextQuote = () => {
        setIsAnimating(true)
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % quotes.length)
            setIsAnimating(false)
        }, 300)
    }

    const prevQuote = () => {
        setIsAnimating(true)
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length)
            setIsAnimating(false)
        }, 300)
    }

    const goToQuote = (index) => {
        if (index !== currentIndex) {
            setIsAnimating(true)
            setTimeout(() => {
                setCurrentIndex(index)
                setIsAnimating(false)
            }, 300)
        }
    }

    return (
        <div className="jazz-quotes-container" style={{ marginTop: '3rem' }}>
            <div
                className="jazz-quote glass-card"
                style={{
                    padding: '2.5rem',
                    textAlign: 'center',
                    borderLeft: '4px solid #d4af37',
                    position: 'relative',
                    minHeight: '250px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}
            >
                <div
                    style={{
                        opacity: isAnimating ? 0 : 1,
                        transform: isAnimating ? 'translateY(20px)' : 'translateY(0)',
                        transition: 'all 0.3s ease'
                    }}
                >
                    <p style={{
                        fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                        fontStyle: 'italic',
                        color: '#d4af37',
                        marginBottom: '1.5rem',
                        fontFamily: 'Playfair Display, serif',
                        lineHeight: '1.6'
                    }}>
                        "{quotes[currentIndex].text}"
                    </p>
                    <p style={{ color: '#a0a0a0', fontSize: '1.125rem', fontWeight: '500' }}>
                        — {quotes[currentIndex].author}
                    </p>
                </div>

                {/* Navigation Buttons */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    marginTop: '2rem'
                }}>
                    <button
                        onClick={prevQuote}
                        className="quote-nav-btn"
                        aria-label="Cita anterior"
                        style={{
                            background: 'rgba(212, 175, 55, 0.2)',
                            border: '1px solid #d4af37',
                            color: '#d4af37',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.25rem',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        ←
                    </button>

                    {/* Dots Indicator */}
                    <div style={{
                        display: 'flex',
                        gap: '0.5rem',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        maxWidth: '300px'
                    }}>
                        {quotes.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToQuote(index)}
                                aria-label={`Ir a cita ${index + 1}`}
                                style={{
                                    width: index === currentIndex ? '24px' : '8px',
                                    height: '8px',
                                    borderRadius: '4px',
                                    background: index === currentIndex ? '#d4af37' : 'rgba(212, 175, 55, 0.3)',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextQuote}
                        className="quote-nav-btn"
                        aria-label="Siguiente cita"
                        style={{
                            background: 'rgba(212, 175, 55, 0.2)',
                            border: '1px solid #d4af37',
                            color: '#d4af37',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.25rem',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        →
                    </button>
                </div>

                {/* Quote Counter */}
                <p style={{
                    marginTop: '1rem',
                    color: '#a0a0a0',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                }}>
                    {currentIndex + 1} / {quotes.length}
                </p>
            </div>
        </div>
    )
}

export default JazzQuotes
