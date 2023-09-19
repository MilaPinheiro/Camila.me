import styles from './Habilidades.module.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { BiLogoNodejs } from 'react-icons/bi'

function Habilidades() {

    return (
   
        <section id="habilidades" className={styles.habilities}>
            <section>
                <h1 className={styles.subtitle}>HABILIDADES</h1>
                <div className={styles.line_subtitle}></div>

                <div className={styles.menu_habilities}>
                        <div className={styles.icons}>
                            <FaHtml5 className={styles.iconsItens}/>
                            <FaCss3Alt className={styles.iconsItens} />
                            <FaJs className={styles.iconsItens}/>
                        </div>
                        <div className={styles.icons}>
                            <FaReact className={styles.iconsItens}/>
                            <AiFillGithub className={styles.iconsItens}/>
                            <BiLogoNodejs  className={styles.iconsItens}/>
                        </div>
                </div>
              
            </section>
        </section>
       
    )
}


export default Habilidades