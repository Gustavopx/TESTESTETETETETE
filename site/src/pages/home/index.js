import { Link } from "react-router-dom";

export default function Home() {
    return (
        <main>
            <h1> Home </h1>

            <ul>
                <li> <Link to='/cadastro'> Cadastre um pet </Link> </li>
                <li> <Link to='/consulta'> Consulte os cadastros </Link> </li>
            </ul>
        </main>
    )
}