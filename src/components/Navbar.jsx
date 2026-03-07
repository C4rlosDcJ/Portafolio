import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import styles from './Navbar.module.css'

const navLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Sobre mí', href: '#about' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Educación', href: '#education' },
    { label: 'Contacto', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState('#hero')
    const [menuOpen, setMenuOpen] = useState(false)

    // Scroll shadow
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Active section via IntersectionObserver
    useEffect(() => {
        const sectionIds = navLinks.map((l) => l.href.replace('#', ''))
        const observers = []

        sectionIds.forEach((id) => {
            const el = document.getElementById(id)
            if (!el) return
            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActive(`#${id}`)
                    }
                },
                { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
            )
            obs.observe(el)
            observers.push(obs)
        })

        return () => observers.forEach((obs) => obs.disconnect())
    }, [])

    const handleNav = (href) => {
        setActive(href)
        setMenuOpen(false)
    }

    return (
        <motion.nav
            className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
            <div className={`container ${styles.inner}`}>
                {/* Logo */}
                <a href="#hero" className={styles.logo} onClick={() => handleNav('#hero')}>
                    <span className={styles.logoBracket}>{'<'}</span>
                    <span className="gradient-text">CarlosDc</span>
                    <span className={styles.logoBracket}>{'/>'}</span>
                </a>

                {/* Desktop Links */}
                <ul className={styles.links}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`${styles.link} ${active === link.href ? styles.linkActive : ''}`}
                                onClick={() => handleNav(link.href)}
                            >
                                {link.label}
                                {active === link.href && (
                                    <motion.span
                                        className={styles.linkDot}
                                        layoutId="navDot"
                                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                    />
                                )}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <a href="/cv.pdf" download className={`btn btn-primary ${styles.ctaBtn}`}>
                    Descargar CV
                </a>

                {/* Hamburger */}
                <button
                    className={styles.hamburger}
                    onClick={() => setMenuOpen((p) => !p)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                className={`${styles.mobileLink} ${active === link.href ? styles.mobileLinkActive : ''}`}
                                onClick={() => handleNav(link.href)}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <a href="/cv.pdf" download className={`btn btn-primary ${styles.mobileCta}`}>
                            Descargar CV
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
