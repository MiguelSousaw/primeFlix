import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Filmes from "./pages/Filmes";
import Header from "./components/Header";
import Erro from "./pages/Erro";
import Favoritos from "./pages/Favoritos";
function Routeapp(){
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Filmes/:id" element={<Filmes />} />
                <Route path="/Favoritos" element={<Favoritos />} />
                <Route path="*" element={<Erro />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Routeapp;