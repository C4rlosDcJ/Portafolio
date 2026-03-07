import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiPhone, FiGithub, FiMapPin } from 'react-icons/fi'
import styles from './About.module.css'

const stats = [
    { value: '3+', label: 'Años de experiencia' },
    { value: '10+', label: 'Proyectos completados' },
    { value: '5+', label: 'Tecnologías dominadas' },
    { value: 'AWS', label: 'Cloud certificado' },
]

const contacts = [
    { icon: <FiMail />, label: 'carlosdaniel30490444@gmail.com', href: 'mailto:carlosdaniel30490444@gmail.com' },
    { icon: <FiPhone />, label: '7228520642', href: 'tel:7228520642' },
    { icon: <FiGithub />, label: 'C4rlosDcJ', href: 'https://github.com/C4rlosDcJ', target: '_blank' },
    { icon: <FiMapPin />, label: 'Valle de Toluca, México', href: null },
]

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
}

const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
}

export default function About() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

    return (
        <section id="about" className="section" ref={ref}>
            <div className="container">
                <motion.div
                    initial="hidden"
                    animate={inView ? 'show' : 'hidden'}
                    variants={stagger}
                >
                    {/* Header */}
                    <motion.div variants={fadeUp}>
                        <p className="section-label">Sobre mí</p>
                        <h2 className="section-title">
                            Desarrollador apasionado por <span>soluciones reales</span>
                        </h2>
                    </motion.div>

                    {/* Main grid */}
                    <div className={styles.grid}>
                        {/* Profile text */}
                        <motion.div className={styles.profileCol} variants={fadeUp}>
                            <p className={styles.profileText}>
                                Soy un Desarrollador Full Stack con experiencia comprobada en el desarrollo de
                                soluciones web, móviles e IoT. Tengo una sólida capacidad para aprender e
                                implementar rápidamente nuevas herramientas, lenguajes y arquitecturas modernas.
                            </p>
                            <p className={styles.profileText}>
                                Me especializo en el desarrollo ágil empleando tecnologías como <strong>PHP (Laravel)</strong>,{' '}
                                <strong>Python (Flask)</strong>, <strong>JavaScript / TypeScript</strong>, <strong>React</strong>{' '}
                                y <strong>Vue.js</strong>, con integración en la nube mediante <strong>AWS</strong>.
                            </p>
                            <p className={styles.profileText}>
                                Apasionado por el código limpio y la resolución eficiente de problemas, busco
                                aportar soluciones innovadoras que generen valor real a los usuarios e impulsen
                                los objetivos del negocio.
                            </p>

                            {/* Contact list */}
                            <div className={styles.contactList}>
                                {contacts.map((c, i) => (
                                    <div key={i} className={styles.contactItem}>
                                        <span className={styles.contactIcon}>{c.icon}</span>
                                        {c.href ? (
                                            <a href={c.href} target={c.target} rel={c.target ? 'noreferrer' : undefined} className={styles.contactLink}>
                                                {c.label}
                                            </a>
                                        ) : (
                                            <span className={styles.contactLabel}>{c.label}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Stats */}
                        <motion.div className={styles.statsCol} variants={stagger}>
                            {stats.map((s, i) => (
                                <motion.div key={i} className={`glass-card ${styles.statCard}`} variants={fadeUp}>
                                    <span className={`${styles.statValue} gradient-text`}>{s.value}</span>
                                    <span className={styles.statLabel}>{s.label}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
