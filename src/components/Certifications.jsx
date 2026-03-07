import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiAward, FiGlobe } from 'react-icons/fi'
import { SiCisco, SiUdemy } from 'react-icons/si'
import styles from './Certifications.module.css'

const certs = [
    {
        icon: <SiCisco size={28} />,
        name: 'CCNAv7: Switching, Routing & Wireless Essentials',
        issuer: 'Cisco Network Academy',
        color: 'blue',
        link: null,
        description: 'Certificación oficial en conmutación, enrutamiento y redes inalámbricas fundamentales.',
    },
    {
        icon: <SiUdemy size={28} />,
        name: 'React & Spring Boot',
        issuer: 'Udemy',
        color: 'cyan',
        link: 'https://www.udemy.com/certificate/UC-5248120e-a2f3-4f13-8545-bee746ed667f/',
        description: 'Certificación oficial en desarrollo Full Stack con React y Spring Boot.',
    },
    {
        icon: <FiAward size={28} />,
        name: 'Alura Latam',
        issuer: 'Alura Latam',
        color: 'gold',
        link: 'https://app.aluracursos.com/user/carlosdaniel30490444/fullCertificate/b964ba83d68845b8a1d0bdef970fd9f9',
        description: 'Certificación oficial de la plataforma Alura Latam en desarrollo de software.',
    },
    {
        icon: <FiGlobe size={28} />,
        name: 'TOEFL ITP - Nivel A2',
        issuer: 'TOEFL / ETS',
        color: 'purple',
        link: null,
        description: 'Certificación oficial que acredita el nivel fundamental en la comprensión y dominio del idioma inglés.',
    },
]

const colorMap = {
    blue: { icon: 'var(--accent-light)', bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)' },
    cyan: { icon: 'var(--cyan)', bg: 'rgba(6,182,212,0.08)', border: 'rgba(6,182,212,0.2)' },
    gold: { icon: 'var(--gold-light)', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)' },
    purple: { icon: '#c084fc', bg: 'rgba(192,132,252,0.08)', border: 'rgba(192,132,252,0.2)' },
}

export default function Certifications() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section id="certifications" className={`section ${styles.section}`} ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-label">Certificaciones</p>
                    <h2 className="section-title">Credenciales <span>oficiales</span></h2>
                </motion.div>

                <div className={`grid-2 ${styles.grid}`}>
                    {certs.map((cert, i) => {
                        const c = colorMap[cert.color]
                        return (
                            <motion.div
                                key={i}
                                className={`glass-card ${styles.card}`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.12 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className={styles.cardIcon} style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.icon }}>
                                    {cert.icon}
                                </div>
                                <h3 className={styles.certName}>{cert.name}</h3>
                                <p className={styles.certIssuer}>{cert.issuer}</p>
                                <p className={styles.certDesc}>{cert.description}</p>
                                {cert.link && (
                                    <a href={cert.link} target="_blank" rel="noreferrer" className={`btn btn-ghost ${styles.certBtn}`}>
                                        <FiExternalLink size={14} /> Ver credencial
                                    </a>
                                )}
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
