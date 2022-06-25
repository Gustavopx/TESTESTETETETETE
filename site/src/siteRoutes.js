import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/home";
import Cadastrar from "./pages/cadastro";
import Consultar from "./pages/consulta";

export default function SiteRoutes(){
   return (

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cadastro" element={<Cadastrar/>} />
        <Route path="/consulta" element={<Consultar/>} />
    </Routes>
    </BrowserRouter>


   ) 
} 