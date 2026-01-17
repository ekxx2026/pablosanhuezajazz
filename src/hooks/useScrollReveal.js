import { useEffect, useRef } from 'react'

function useScrollReveal() {
    const ref = useRef(null)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.classList.add('scroll-reveal-visible')
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            }
        )

        observer.observe(element)

        return () => observer.disconnect()
    }, [])

    return ref
}

export default useScrollReveal
