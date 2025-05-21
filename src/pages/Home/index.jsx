import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from '../../services/api'
import './style.css'
function Home(){
    const [filmes, setFilmes] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get('/movie/now_playing', {
                params: {
                    api_key: 'd0ab25274f3e10bef8c7ccbfa8e7b41a',
                    language: 'pt-BR',
                    page: 1
                }
            })

            setFilmes(response.data.results.slice(0,10))
            setloading(false)
        }

        loadFilmes()
    }, [])

    if(loading){
        return(
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map(filme => {
                    return(
                        <article key={filme.id} className="filme">
                            <h1>{filme.title}</h1>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/Filmes/${filme.id}`}>Acessar
                            </Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;