import {useState } from 'react'
import { Link } from 'react-router-dom';
import { Pet } from '../../api/apiPet'




export default function Cadastrar(){
    const [nome, setNome] = useState('');



async function salvarClick(){
    try {
        const r = await Pet(nome)
        alert('Pet Cadastrado com sucesso')
    } catch (err) {
        alert(err.response.data.erro);
    }
}

return(
    <main>
        <h1>Cadastre o pet</h1> 
        <input type='text' placeholder='Insira o nome do pet' value={nome} onChange={e=> setNome(e.target.value)}/>

        <div>
            <button onClick={salvarClick}>INSERIR</button>
        </div>
        <p> <Link to='/'> Voltar </Link> </p>
     </main>
      
)
}