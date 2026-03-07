import { FiGithub, FiMail, FiHeart } from 'react-icons/fi'
import styles from './Footer.module.css'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.brand}>
                    <span className={styles.logo}>
                        <span className={styles.bracket}>{'<'}</span>
                        <span className="gradient-text">CarlosDC</span>
                        <span className={styles.bracket}>{'/>'}</span>
                    </span>
                    <p className={styles.tagline}>Full Stack Developer · IoT · Cloud</p>
                </div>

                <div className={styles.links}>
                    <a href="#hero">Inicio</a>
                    <a href="#skills">Habilidades</a>
                    <a href="#projects">Proyectos</a>
                    <a href="#experience">Experiencia</a>
                    <a href="#contact">Contacto</a>
                </div>

                <div className={styles.socials}>
                    <a href="https://github.com/C4rlosDcJ" target="_blank" rel="noreferrer" className={styles.socialIcon} title="GitHub">
                        <FiGithub size={18} />
                    </a>
                    <a href="mailto:carlosdaniel30490444@gmail.com" className={styles.socialIcon} title="Email">
                        <FiMail size={18} />
                    </a>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className="container">
                    <p className={styles.copyright}>
                        © {year} Carlos Daniel Ciriaco Juan · Hecho con <FiHeart size={12} className={styles.heart} /> en México
                    </p>
                </div>
            </div>
        </footer>
    )
}
