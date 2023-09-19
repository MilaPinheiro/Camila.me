
import React from 'react';

import styles from './Footer.module.css'
import { BsSuitHeart, BsArrowUpCircle } from 'react-icons/bs'

import { MdEmail } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineInstagram, AiOutlineWhatsApp , AiFillGithub} from 'react-icons/ai';

function Footer() {


    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    return (


        <section className={styles.container}>

            <div className={styles.link_midias}>
                            <a href="https://www.instagram.com/_mihsp/" target="_blank" id="link-social-media">
                                <div >
                                <AiOutlineInstagram className={styles.icons_box}/>
                                </div>
                            </a>
                            <a href="https://wa.me/19996836270" target="_blank" id="link-social-media">
                                <div>
                                <AiOutlineWhatsApp className={styles.icons_box}/>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/camilapinheiro/" target="_blank" id="link-social-media">
                                <div>
                                <FaLinkedinIn className={styles.icons_box}/>
                                </div>
                            </a>
                            <a href="https://github.com/MilaPinheiro" target="_blank" id="link-social-media">
                                <div>
                                    <AiFillGithub className={styles.icons_box}/>
                                </div>
                            </a>
            </div>
        
            <div className={styles.footer_container}>
                    <h1>Feito com <BsSuitHeart className={styles.heart}/> por <span>Camila Pinheiro</span></h1>
                    <p>© Camila | 2023</p>

                
            </div>


            <div onClick={scrollToTop} className={styles.arrow} >
                    <BsArrowUpCircle className={styles.arrow_button}/>
            </div>
        
        
        </section>
          
            

    )
}

export default Footer