import styles from './Sobre.module.css'

function Sobre() {

    return (
    <section id="sobre" className={styles.about}>
            <h1 className={styles.subtitle}>SOBRE MIM</h1>
            <div className={styles.line_subtitle}></div>
                        <div className={styles.about_me}>
                            <div className={styles.porfile}>
                                <img src="../../assets/foto.jpg" alt="foto-camila" />
                            </div>
                            <div className={styles.apresentation_cv}>
                                <h1 className={styles.me}>
                                     <p>Meu nome é Camila Pinheiro, sou formada em Química, e resido em Vinhedo, SP. </p>
                                     <p>Minha jornada na programação, começou com a paixão por descobrir como a tecnologia molda nosso mundo. Ao mergulhar nesse universo,
                                     percebi uma nova perspectiva que integra minha sólida formação em química com as inovações tecnológicas. </p>
                                     Atualmente, estou imersa no estudo de Desenvolvimento Front-end, buscando ampliar meu conhecimento e habilidades no JavaScript, HTML e CSS, React e pretentendo me aprofundar no Node Js.
                                     </h1>
                                    <a  href="./downloads/currículo.pdf" target="_blank" download>
                                    <div className={styles.download_cv}>
                                        <h1 >Download CV</h1>
                                    </div>
                                </a>
                            </div>
            
                        </div>
        </section>
    )

}

export default Sobre