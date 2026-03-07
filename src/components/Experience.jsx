import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiBriefcase } from 'react-icons/fi'
import styles from './Experience.module.css'

const items = [
    {
        role: 'Desarrollador Full Stack',
        company: 'Clever Cloud — Clever Internship',
        location: 'Ciudad de México',
        period: '2024',
        type: 'Internship',
        color: 'blue',
        achievements: [
            'Desarrollo Full Stack end-to-end: responsabilidades en Frontend (Vue.js), Backend (PHP) y gestión de base de datos relacional (MySQL).',
            'Creación, consumo y documentación de nuevos endpoints REST para la implementación de nuevas funcionalidades dentro del sistema editorial.',
            'Desarrollo de módulos para el sistema de envíos: seguimiento detallado por etapas (Surtir, Empacar, Envío, Incompletos).',
            'Integración de gráficas interactivas para análisis de datos y conexión exitosa con el sistema Microsip.',
            'Aplicación de buenas prácticas, arquitectura de software limpia y metodologías ágiles (Scrum).',
            'Diseño de interfaces amigables e implementación de lógicas de negocio complejas.',
        ],
        techs: ['PHP', 'Vue.js', 'MySQL', 'APIs REST', 'Scrum'],
    },
]

const fadeRight = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
}

export default function Experience() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section id="experience" className={`section ${styles.section}`} ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-label">Experiencia profesional</p>
                    <h2 className="section-title">Mi <span>trayectoria</span></h2>
                </motion.div>

                <div className={styles.timeline}>
                    <div className={styles.timelineLine} />

                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            className={styles.item}
                            variants={fadeRight}
                            initial="hidden"
                            animate={inView ? 'show' : 'hidden'}
                            transition={{ delay: i * 0.15 }}
                        >
                            {/* Dot */}
                            <div className={styles.dot}>
                                <FiBriefcase size={14} />
                            </div>

                            <div className={`glass-card ${styles.card}`}>
                                {/* Top */}
                                <div className={styles.cardTop}>
                                    <div>
                                        <h3 className={styles.role}>{item.role}</h3>
                                        <p className={styles.company}>{item.company}</p>
                                        <p className={styles.meta}>
                                            <span>{item.location}</span>
                                            <span className={styles.dot2} />
                                            <span>{item.period}</span>
                                        </p>
                                    </div>
                                    <span className={`tag tag-blue ${styles.typeBadge}`}>{item.type}</span>
                                </div>

                                {/* Achievements */}
                                <ul className={styles.achievements}>
                                    {item.achievements.map((a, ai) => (
                                        <motion.li
                                            key={ai}
                                            initial={{ opacity: 0, x: -15 }}
                                            animate={inView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: 0.3 + ai * 0.07 }}
                                        >
                                            {a}
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Techs */}
                                <div className={styles.techs}>
                                    {item.techs.map((t) => (
                                        <span key={t} className="tag tag-blue">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
