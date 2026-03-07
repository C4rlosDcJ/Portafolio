import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiPhone, FiGithub, FiDownload, FiSend } from 'react-icons/fi'
import styles from './Contact.module.css'

const contactInfo = [
    {
        icon: <FiMail />,
        label: 'Email',
        value: 'carlosdaniel30490444@gmail.com',
        href: 'mailto:carlosdaniel30490444@gmail.com',
    },
    {
        icon: <FiPhone />,
        label: 'Teléfono',
        value: '722 852 0642',
        href: 'tel:7228520642',
    },
    {
        icon: <FiGithub />,
        label: 'GitHub',
        value: '@C4rlosDcJ',
        href: 'https://github.com/C4rlosDcJ',
        target: '_blank',
    },
]

export default function Contact() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section id="contact" className={`section ${styles.section}`} ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <p className="section-label">Contacto</p>
                    <h2 className="section-title">¡<span>Hablemos</span>!</h2>
                    <p className={styles.subtitle}>
                        Disponible para nuevos proyectos, colaboraciones y oportunidades laborales.
                        No dudes en escribirme.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {/* Contact cards */}
                    <motion.div
                        className={styles.cards}
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        {contactInfo.map((c, i) => (
                            <motion.a
                                key={i}
                                href={c.href}
                                target={c.target}
                                rel={c.target ? 'noreferrer' : undefined}
                                className={`glass-card ${styles.contactCard}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.25 + i * 0.1 }}
                                whileHover={{ y: -4 }}
                            >
                                <span className={styles.contactIcon}>{c.icon}</span>
                                <div>
                                    <p className={styles.contactLabel}>{c.label}</p>
                                    <p className={styles.contactValue}>{c.value}</p>
                                </div>
                            </motion.a>
                        ))}

                        <motion.a
                            href="/cv.pdf"
                            download
                            className={`btn btn-primary ${styles.cvBtn}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.55 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <FiDownload size={18} />
                            Descargar CV
                        </motion.a>
                    </motion.div>

                    {/* CTA card */}
                    <motion.div
                        className={`glass-card ${styles.ctaCard}`}
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <div className={styles.ctaOrb} />
                        <div className={styles.ctaContent}>
                            <div className={styles.ctaIcon}>
                                <FiSend size={28} />
                            </div>
                            <h3 className={styles.ctaTitle}>¿Tienes un proyecto en mente?</h3>
                            <p className={styles.ctaDesc}>
                                Ya sea una aplicación web, una API robusta o un sistema IoT con integración cloud,
                                estoy listo para ayudarte a construirlo con las mejores prácticas del sector.
                            </p>
                            <a
                                href="mailto:carlosdaniel30490444@gmail.com"
                                className="btn btn-primary"
                            >
                                <FiMail size={16} />
                                Escribir email
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
