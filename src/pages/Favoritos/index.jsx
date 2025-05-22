import './style.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Favoritos() {
    const [filmes, setFilmes] = useState([])

    useEffect(()=>{
        const minhalista = localStorage.getItem('@primeflix')
        setFilmes(JSON.parse(minhalista) || [])
    }, [])

    function excluirFilme(id, title){
        const newList = filmes.filter((item) => {
            return(item.id !== id)
        })

        setFilmes(newList)
        localStorage.setItem('@primeflix', JSON.stringify(newList))
        toast.success(`${title} - foi removido da lista`)
    }

    return(
        <div className='favoritos-container'>
            <h1>Meu filmes</h1>
            <div className="lista-filmesfav">
                {filmes.length === 0 && <span className='aviso'>Você não possui filmes salvos :)</span>}

                <ul>
                    {filmes.map((filme) => {
                        return(
                            <li key={filme.id}>
                                <span>{filme.title}</span>
                                <div className="botoes">
                                    <Link to={`/Filmes/${filme.id}`} className="detalhes">Ver detalhes</Link>
                                    <button className='btn' onClick={()=> excluirFilme(filme.id, filme.title)}>Excluir</button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                
            </div>
        </div>
    )
}

export default Favoritos;   