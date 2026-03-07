import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiMail, FiDownload, FiChevronDown } from 'react-icons/fi'
import profileImg from '../assets/profile.jpeg'
import styles from './Hero.module.css'

function ParticleCanvas() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animId
        const particles = []

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        window.addEventListener('resize', resize)
        resize()

        for (let i = 0; i < 70; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 1.5 + 0.3,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                alpha: Math.random() * 0.5 + 0.1,
            })
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            for (const p of particles) {
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(59,130,246,${p.alpha})`
                ctx.fill()
                p.x += p.vx
                p.y += p.vy
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1
            }
            // Draw lines between close particles
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x
                    const dy = particles[i].y - particles[j].y
                    const dist = Math.sqrt(dx * dx + dy * dy)
                    if (dist < 120) {
                        ctx.beginPath()
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.strokeStyle = `rgba(59,130,246,${0.08 * (1 - dist / 120)})`
                        ctx.lineWidth = 0.5
                        ctx.stroke()
                    }
                }
            }
            animId = requestAnimationFrame(draw)
        }

        draw()
        return () => {
            cancelAnimationFrame(animId)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return <canvas ref={canvasRef} className={styles.particles} />
}

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] } }),
}

export default function Hero() {
    return (
        <section id="hero" className={styles.hero}>
            <ParticleCanvas />

            {/* Gradient orbs */}
            <div className={styles.orb1} />
            <div className={styles.orb2} />

            <div className={`container ${styles.content}`}>
                {/* Photo */}
                <motion.div
                    className={styles.photoWrap}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                >
                    <div className={styles.ringOuter}>
                        <div className={styles.ringInner}>
                            <img src={profileImg} alt="Carlos Daniel Ciriaco Juan" className={styles.photo} />
                        </div>
                    </div>
                    <div className={styles.statusBadge}>
                        <span className={styles.statusDot} />
                        Disponible
                    </div>
                </motion.div>

                {/* Text */}
                <div className={styles.text}>
                    <motion.p
                        className={styles.greeting}
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={0.1}
                    >
                        Hola, soy
                    </motion.p>

                    <motion.h1
                        className={styles.name}
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={0.25}
                    >
                        Carlos <span className="gradient-text">Daniel</span>
                        <br />Ciriaco Juan
                    </motion.h1>

                    <motion.div
                        className={styles.roleWrap}
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={0.4}
                    >
                        <span className={styles.rolePrefix}>{'>'}_</span>
                        <TypeAnimation
                            sequence={[
                                'Full Stack Developer', 2000,
                                'Backend Engineer', 2000,
                                'IoT & Cloud Builder', 2000,
                                'PHP & Laravel Expert', 2000,
                                'React & Vue Developer', 2000,
                            ]}
                            wrapper="span"
                            speed={55}
                            repeat={Infinity}
                            className={styles.roleText}
                        />
                    </motion.div>

                    <motion.p
                        className={styles.bio}
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={0.55}
                    >
                        Desarrollador Full Stack con experiencia en PHP, Python, JavaScript y TypeScript.
                        Apasionado por el código limpio, la arquitectura escalable y las soluciones
                        IoT + Cloud que generan valor real.
                    </motion.p>

                    <motion.div
                        className={styles.actions}
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={0.7}
                    >
                        <a href="#projects" className="btn btn-primary">
                            Ver proyectos
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            <FiMail size={16} /> Contactar
                        </a>
                    </motion.div>

                    <motion.div
                        className={styles.socials}
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        custom={0.85}
                    >
                        <a
                            href="https://github.com/C4rlosDcJ"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.socialLink}
                            title="GitHub"
                        >
                            <FiGithub size={20} />
                        </a>
                        <a
                            href="mailto:carlosdaniel30490444@gmail.com"
                            className={styles.socialLink}
                            title="Email"
                        >
                            <FiMail size={20} />
                        </a>
                        <a href="/cv.pdf" download className={styles.socialLink} title="Descargar CV">
                            <FiDownload size={20} />
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.a
                href="#about"
                className={styles.scrollIndicator}
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <FiChevronDown size={22} />
            </motion.a>
        </section>
    )
}
