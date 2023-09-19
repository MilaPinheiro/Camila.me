import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { CgMenuRightAlt } from 'react-icons/cg'
import { IoIosSend, IoMdNutrition } from 'react-icons/io'

function Header() {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    }

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }



    return (
        <header className={styles.header}>
            <section >
            <span>CP</span>
            <a className={styles.button_nav} onClick={toggleMenu}>
                {menuOpen ? (
                    <AiOutlineClose className={styles.close}/>
                ) : (
                    <CgMenuRightAlt className={styles.sandwich}/>
                )}
            </a>
            <nav className={`${styles.header_nav} ${menuOpen ? styles.menuOpen: ''}`} >
                    <ul>
                        <li>
                            <a onClick={() => scrollToSection('inicio')}>
                                <h1>INÍCIO</h1>
                            </a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection('sobre')}>
                                <h1>SOBRE</h1>
                            </a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection('habilidades')}>
                                <h1>HABILIDADES</h1>
                            </a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection('projetos')}>
                                <h1>PROJETOS</h1>
                            </a>
                        </li>
                    </ul>
                </nav>
                <a href="#contact" className={styles.contact_button}>
                    <div className={styles.contact_nav_bar}>
                        <IoIosSend className={styles.icon}/>
                        <a href="mailto:camilapinheiromk@hotmail.com" target="_blank">Entrar em Contato</a>
                    </div>
                </a>
            </section>
        </header>
    )
}

export default Header