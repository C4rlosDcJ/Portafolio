import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBook } from 'react-icons/fi'
import styles from './Education.module.css'

const eduItems = [
    {
        degree: 'Ingeniería en Desarrollo de Software',
        institution: 'Universidad Tecnológica del Valle de Toluca (UTVT)',
        period: 'En curso',
        status: 'En curso',
        statusColor: 'cyan',
        description: 'Continuación de estudios superiores en Ingeniería de Software, profundizando en arquitectura de sistemas, algoritmia y metodologías de desarrollo modernas.',
    },
    {
        degree: 'T.S.U. Desarrollo de Software Multiplataforma',
        institution: 'Universidad Tecnológica del Valle de Toluca (UTVT)',
        period: '2022 – 2024',
        status: 'Graduado',
        statusColor: 'green',
        description: 'Formación en desarrollo de aplicaciones multiplataforma: web, móvil y escritorio. Proyecto final: Sistema de gestión hospitalaria con IoT.',
    },
    {
        degree: 'Técnico en Informática',
        institution: 'Preparatoria CBT N.3 Otzolotepec',
        period: '2019 – 2022',
        status: 'Titulado',
        statusColor: 'gold',
        description: 'Fundamentos de redes, programación, hardware y bases de datos relacionales. Base técnica sólida para la carrera en ingeniería de software.',
    },
]

const statusClass = {
    cyan: 'tag-cyan',
    green: 'tag-green',
    gold: 'tag-gold',
}

export default function Education() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section id="education" className={`section ${styles.section}`} ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-label">Formación académica</p>
                    <h2 className="section-title">Mi <span>educación</span></h2>
                </motion.div>

                <div className={styles.timeline}>
                    <div className={styles.line} />
                    {eduItems.map((edu, i) => (
                        <motion.div
                            key={i}
                            className={styles.item}
                            initial={{ opacity: 0, x: -30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.55, delay: i * 0.15 }}
                        >
                            <div className={styles.dot}>
                                <FiBook size={14} />
                            </div>
                            <div className={`glass-card ${styles.card}`}>
                                <div className={styles.cardTop}>
                                    <div>
                                        <h3 className={styles.degree}>{edu.degree}</h3>
                                        <p className={styles.institution}>{edu.institution}</p>
                                        <p className={styles.period}>{edu.period}</p>
                                    </div>
                                    <span className={`tag ${statusClass[edu.statusColor]}`}>{edu.status}</span>
                                </div>
                                <p className={styles.desc}>{edu.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
