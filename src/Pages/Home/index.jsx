import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import { MdEmail } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineInstagram, AiOutlineWhatsApp , AiFillGithub} from 'react-icons/ai';


function Home() {
  const [texts, setTexts] = useState([
    "Desenvolvedora Web",
    "Desenvolvedora Front-end",
    "Freelancer"
  ]);

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(prevIndex =>
        prevIndex === texts.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [texts]);

  useEffect(() => {
    setCurrentText(texts[currentTextIndex]);
  }, [currentTextIndex, texts]);

    return (

    <main id="inicio" className={styles.container_box}>
        <section className={styles.container}>
            <div className={styles.media_buttons}>
                <div class={styles.name_buttons}>
                    <div class={styles.name}>
                        <h3>Olá, meu nome é</h3>
                        <h1>Camila <span className={styles.name_span}>Pinheiro</span></h1>
                        <h2> 
                          <span className={styles.typing}>
                              {currentText}
                          </span>
                        </h2>
                    </div>
                    <div className={styles.midias}>

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
              </div>

              <button className={styles.contact}>
                <MdEmail className={styles.email}
                />
                 <a href="mailto:camilapinheiromk@hotmail.com" target="_blank">Contato</a>
              </button> 
                        
              </div> 
                    
            </div>
                
   
          
        </section>
      </main>
    )
}

export default Home