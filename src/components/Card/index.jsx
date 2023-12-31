import styles from './Card.module.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const topicIcon = {
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    javascript: <FaJs />,
    react: <FaReact />,
  };

function Card({ name, htmlUrl, topics, homepage }) {

    const htmlUrlHomepage= homepage ? homepage : `https://milapinheiro.github.io/${name}`;

    console.log(htmlUrlHomepage)
    
    return (
        <section className={styles.card}>
        
               
                    <h3>{name}</h3>
                    <div className={styles.card_icones} >
                        <div>
                            <img src={`https://raw.githubusercontent.com/MilaPinheiro/${name}/master/.gitHub/preview.png`} 
                            width="100%" 
                            height='200px' 
                            alt="" 
                            />
                        </div>
                        <div className={styles.container_icons}>
                                <div className={styles.iconsBox}> 
                                    {topics.map((topic, index) => (
                                        <span key={index}>
                                            {topicIcon[topic]} 
                                        </span>
                                        ))}
                                </div>
                                <div  className={styles.card_button}>                  
                                    <Link to={htmlUrlHomepage} 
                                        target={'_blank'}  
                                        className={styles.card_button}
                                        >
                                        <BsArrowRight/>
                                    </Link>
                                </div>  
                         
                        </div>
                    </div>
                
            
        </section>
    )
}

export default Card