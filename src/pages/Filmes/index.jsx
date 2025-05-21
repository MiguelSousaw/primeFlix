import "./style.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from '../../services/api'

function Filmes(){
    const {id} = useParams();
    const [filme, setFilme] = useState({});
    const [loading, setloading] = useState(true);
    const navigation = useNavigate()

    useEffect(()=>{
        async function loadFilme(){
        await api.get(`/movie/${id}`, {
            params: {
                api_key: 'd0ab25274f3e10bef8c7ccbfa8e7b41a',
            }
        })
    
        .then((response)=>{
            setFilme(response.data)
            console.log(response.data)
            setloading(false)
        })
        .catch(()=>{
            navigation("/Home", {replace: true})
            return
        })

        }

        loadFilme()

        return () =>{
            console.log("Componente foi desmontado")
        }
    }, [navigation, id])

    function salvarFilmes(){
        const minhalista = localStorage.getItem("@primeflix")
        
        let filmesSalvos = JSON.parse(minhalista) || []

        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)

        if(hasFilme){
            toast.warn("Esse filme já está na sua lista")
            return
        }

        filmesSalvos.push(filme)
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos))
        toast.success("Filme salvo com sucesso")
    }

    if(loading){
        return(
            <div className="loading">
                <h2>Carregando detalhes do filme...</h2>
            </div>
        )
    }

    return(
        <div className="conteiner_filme">
            <div key={filme.id} className="filme-info">
               <h1>{filme.title}</h1>
                <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
                <h3>Sinopse</h3>
                <span>{filme.overview}</span>
                <strong>Avaliação: {filme.vote_average}/10</strong>
                <div className="area-button">
                   <button><a onClick={salvarFilmes}>Salvar</a></button>
                   <button><a href={`https://youtube.com/results?search_query=${filme.title} Trailer`} target="blank" rel="external">Trailer</a></button>
                </div>
            </div>
        </div>
    )
}

export default Filmes;