import { useState, useEffect } from 'react'
import Card from '../../components/Card'
import styles from './Projetos.module.css'


function Projetos() {

const [repositories, setRepositories] = useState([])
const [loading, setLoading] = useState(false)

useEffect(() => {
    const fetchRepositories = async() => {
        const response = await fetch('https://api.github.com/users/MilaPinheiro/repos')
        const data = await response.json()

        if (data.length >= 17) {
            const topics = data[0].topics;
            console.log(topics);

            const repos = data.slice(0, 7).concat(data[13])
            setRepositories(repos);
        } else {
            console.error("O array 'data' não tem pelo menos 12 elementos.")
        }
    }

    fetchRepositories();
}, [])


    console.log(repositories)


    
    return (
        <section id="projetos" className={styles.project}>
            <h2>PROJETOS</h2>
            <div className={styles.subtitle}></div>
            {
                repositories?.length > 0 ? (
                    <section className={styles.list}>
                        {
                            repositories.map((repos, index) => (
                                <Card 
                                    key={repos.name}
                                    name={repos.name}
                                    html_url={repos.htmlUrl}
                                    topics={repos.topics}
                                    homepage={repos.homepage}
                                
                                />
                            ))
                        }
                    </section>
                ) : (
                    <p>Carregando repositórios...</p>
                )
            }
        </section>
       
    )
}

export default Projetos
