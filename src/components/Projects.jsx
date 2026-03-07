import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Tilt from 'react-parallax-tilt'
import { FiGithub, FiCpu } from 'react-icons/fi'
import styles from './Projects.module.css'

const projects = [
    {
        id: 1,
        title: 'SysTeck',
        subtitle: 'Sistema de Gestión de Reparaciones',
        description: 'Plataforma web para talleres de reparación de celulares y dispositivos electrónicos. Portal del cliente, panel administrativo, seguimiento de reparaciones en tiempo real y diseño responsivo premium.',
        tags: ['React', 'Laravel', 'PHP', 'MySQL', 'REST API'],
        color: 'blue',
        github: 'https://github.com/C4rlosDcJ/SysTeck',
        category: 'Web App',
    },
    {
        id: 2,
        title: 'DeliveryApp — Móvil',
        subtitle: 'Aplicación Móvil de Delivery',
        description: 'App móvil multiplataforma (iOS/Android) para servicio de delivery. Exploración de restaurantes, carrito de compras, checkout, rastreo en tiempo real de pedidos y panel de repartidor.',
        tags: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'Maps'],
        color: 'cyan',
        github: 'https://github.com/C4rlosDcJ/Deliv',
        category: 'Móvil',
        aiTag: false,
    },
    {
        id: 3,
        title: 'API Delivery + ML',
        subtitle: 'Backend REST con Machine Learning',
        description: 'API REST backend del sistema de delivery. Autenticación JWT, gestión de usuarios, restaurantes, pedidos y repartidores. Integración de Scikit-learn y NumPy para predicción de demanda y recomendaciones inteligentes de platillos.',
        tags: ['Python', 'Flask', 'MongoDB', 'JWT', 'Scikit-learn', 'NumPy'],
        color: 'gold',
        github: 'https://github.com/C4rlosDcJ/api-delivery',
        category: 'ML/AI',
        aiTag: true,
    },
    {
        id: 4,
        title: 'Hospital IoT',
        subtitle: 'Sistema de Gestión Hospitalaria',
        description: 'Sistema hospitalario con integración de hardware IoT. API RESTful para controlar un brazo robótico de inyecciones y un oxímetro. Monitoreo en tiempo real de ritmo cardíaco y temperatura corporal.',
        tags: ['Laravel', 'Python', 'Flask', 'Arduino', 'React Native', 'MySQL', 'AWS'],
        color: 'purple',
        github: 'https://github.com/C4rlosDcJ/Hospital',
        category: 'IoT + Cloud',
        aiTag: false,
    },
    {
        id: 5,
        title: 'Citas Médicas',
        subtitle: 'Gestión de Citas para Clínicas',
        description: 'Aplicación web para gestionar citas médicas: pacientes, médicos, especialidades y reservas. Base sólida para clínicas y consultorios que necesitan administración de agenda y citas en línea.',
        tags: ['Laravel', 'Tailwind', 'PHP', 'MySQL'],
        color: 'green',
        github: 'https://github.com/C4rlosDcJ/Citas-Medicas',
        category: 'Web App',
        aiTag: false,
    },
    {
        id: 6,
        title: 'API Hospital CERM',
        subtitle: 'REST API para Hospital',
        description: 'API RESTful robusta para la gestión hospitalaria. Endpoints para control de pacientes, médicos, citas y dispositivos IoT del sistema CERM.',
        tags: ['Python', 'Flask', 'MySQL', 'REST API', 'AWS EC2'],
        color: 'cyan',
        github: 'https://github.com/C4rlosDcJ/API-Hospital-CERM',
        category: 'API',
        aiTag: false,
    },
]

const categories = ['Todos', 'Web App', 'Móvil', 'E-commerce', 'IoT + Cloud', 'API', 'ML/AI']

const colorMap = {
    blue: { bg: 'rgba(59,130,246,0.07)', tag: 'tag-blue', glow: 'rgba(59,130,246,0.15)' },
    cyan: { bg: 'rgba(6,182,212,0.07)', tag: 'tag-cyan', glow: 'rgba(6,182,212,0.15)' },
    gold: { bg: 'rgba(245,158,11,0.07)', tag: 'tag-gold', glow: 'rgba(245,158,11,0.15)' },
    green: { bg: 'rgba(16,185,129,0.07)', tag: 'tag-green', glow: 'rgba(16,185,129,0.15)' },
    purple: { bg: 'rgba(139,92,246,0.07)', tag: 'tag-blue', glow: 'rgba(139,92,246,0.15)' },
}

export default function Projects() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })
    const [active, setActive] = useState('Todos')

    const filtered = active === 'Todos'
        ? projects
        : projects.filter((p) => p.category === active)

    return (
        <section id="projects" className={`section ${styles.projectsSection}`} ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-label">Proyectos destacados</p>
                    <h2 className="section-title">Lo que he <span>construido</span></h2>
                </motion.div>

                {/* Filter tabs */}
                <motion.div
                    className={styles.filters}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`${styles.filterBtn} ${active === cat ? styles.filterActive : ''} ${cat === 'ML/AI' ? styles.filterAI : ''}`}
                            onClick={() => setActive(cat)}
                        >
                            {cat === 'ML/AI' && <FiCpu size={13} />}
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Projects grid */}
                <div className={styles.grid}>
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project, i) => {
                            const c = colorMap[project.color]
                            return (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: i * 0.06 }}
                                >
                                    <Tilt
                                        tiltMaxAngleX={8}
                                        tiltMaxAngleY={8}
                                        glareEnable={true}
                                        glareMaxOpacity={0.04}
                                        glareColor="#3b82f6"
                                        glarePosition="all"
                                        scale={1.02}
                                        transitionSpeed={400}
                                    >
                                        <div
                                            className={`glass-card ${styles.card}`}
                                            style={{ '--card-glow': c.glow }}
                                        >
                                            {/* Header */}
                                            <div className={styles.cardHeader} style={{ background: c.bg }}>
                                                <div className={styles.cardDots}>
                                                    <span /><span /><span />
                                                </div>
                                                <div className={styles.headerRight}>
                                                    {project.aiTag && (
                                                        <span className={`tag tag-gold ${styles.aiTag}`}>
                                                            <FiCpu size={10} /> ML/AI
                                                        </span>
                                                    )}
                                                    <span className={`tag tag-blue ${styles.catTag}`}>{project.category}</span>
                                                </div>
                                            </div>

                                            {/* Body */}
                                            <div className={styles.cardBody}>
                                                <h3 className={styles.cardTitle}>{project.title}</h3>
                                                <p className={styles.cardSubtitle}>{project.subtitle}</p>
                                                <p className={styles.cardDesc}>{project.description}</p>

                                                {/* Tags */}
                                                <div className={styles.tags}>
                                                    {project.tags.map((t) => (
                                                        <span key={t} className={`tag ${c.tag}`}>{t}</span>
                                                    ))}
                                                </div>

                                                {/* Actions */}
                                                <div className={styles.cardActions}>
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="btn btn-ghost"
                                                    >
                                                        <FiGithub size={15} /> Ver código
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </Tilt>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
