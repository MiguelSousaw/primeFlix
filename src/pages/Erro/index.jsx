import { Link } from "react-router-dom";
import './style.css'
function Erro(){
    return(
        <div>
            <div className="erro-container">
                <h1>404</h1>
                <p>Página não encontrada!</p>
                <Link to={'/Home'}>Veja todos os filmes</Link>
            </div>
        </div>
    )
}

export default Erro;