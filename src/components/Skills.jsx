import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
    SiPhp, SiLaravel, SiPython, SiFlask, SiJavascript, SiTypescript,
    SiReact, SiVuedotjs, SiMysql, SiMongodb, SiAmazon, SiLinux,
    SiGit, SiDocker, SiSpringboot, SiArduino,
} from 'react-icons/si'
import { FaJava, FaNodeJs } from 'react-icons/fa'
import styles from './Skills.module.css'

const categories = [
    {
        label: 'Backend',
        color: 'blue',
        techs: [
            { icon: <SiPhp />, name: 'PHP' },
            { icon: <SiLaravel />, name: 'Laravel' },
            { icon: <SiPython />, name: 'Python' },
            { icon: <SiFlask />, name: 'Flask' },
            { icon: <FaJava />, name: 'Java' },
            { icon: <SiSpringboot />, name: 'Spring Boot' },
        ],
    },
    {
        label: 'Frontend',
        color: 'cyan',
        techs: [
            { icon: <SiJavascript />, name: 'JavaScript' },
            { icon: <SiTypescript />, name: 'TypeScript' },
            { icon: <SiReact />, name: 'React' },
            { icon: <SiReact />, name: 'React Native' },
            { icon: <SiVuedotjs />, name: 'Vue.js' },
            { icon: <FaNodeJs />, name: 'Node.js' },
        ],
    },
    {
        label: 'Bases de Datos',
        color: 'gold',
        techs: [
            { icon: <SiMysql />, name: 'MySQL' },
            { icon: <SiMongodb />, name: 'MongoDB' },
        ],
    },
    {
        label: 'Cloud & Herramientas',
        color: 'green',
        techs: [
            { icon: <SiAmazon />, name: 'AWS' },
            { icon: <SiLinux />, name: 'Linux' },
            { icon: <SiGit />, name: 'Git' },
            { icon: <SiDocker />, name: 'Docker' },
            { icon: <SiArduino />, name: 'Arduino' },
        ],
    },
]

const colorMap = {
    blue: { bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)', icon: 'var(--accent-light)', label: 'rgba(59,130,246,0.15)', labelText: 'var(--accent)' },
    cyan: { bg: 'rgba(6,182,212,0.08)', border: 'rgba(6,182,212,0.2)', icon: 'var(--cyan)', label: 'rgba(6,182,212,0.15)', labelText: 'var(--cyan)' },
    gold: { bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)', icon: 'var(--gold-light)', label: 'rgba(245,158,11,0.15)', labelText: 'var(--gold)' },
    green: { bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.2)', icon: 'var(--success)', label: 'rgba(16,185,129,0.15)', labelText: 'var(--success)' },
}

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
}

export default function Skills() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section id="skills" className={`section ${styles.skillsSection}`} ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-label">Habilidades técnicas</p>
                    <h2 className="section-title">Mi <span>Stack Tecnológico</span></h2>
                </motion.div>

                <div className={styles.categories}>
                    {categories.map((cat, ci) => {
                        const c = colorMap[cat.color]
                        return (
                            <motion.div
                                key={cat.label}
                                className={`glass-card ${styles.catCard}`}
                                initial="hidden"
                                animate={inView ? 'show' : 'hidden'}
                                variants={fadeUp}
                                transition={{ duration: 0.55, delay: ci * 0.1, ease: [0.4, 0, 0.2, 1] }}
                            >
                                <div
                                    className={styles.catLabel}
                                    style={{ background: c.label, color: c.labelText, borderColor: c.border }}
                                >
                                    {cat.label}
                                </div>
                                <div className={styles.techGrid}>
                                    {cat.techs.map((tech, ti) => (
                                        <motion.div
                                            key={tech.name}
                                            className={styles.techItem}
                                            style={{ background: c.bg, borderColor: c.border }}
                                            initial={{ opacity: 0, scale: 0.85 }}
                                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ duration: 0.4, delay: ci * 0.1 + ti * 0.06 }}
                                            whileHover={{ y: -4, boxShadow: `0 8px 24px ${c.bg}` }}
                                        >
                                            <span className={styles.techIcon} style={{ color: c.icon }}>
                                                {tech.icon}
                                            </span>
                                            <span className={styles.techName}>{tech.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
