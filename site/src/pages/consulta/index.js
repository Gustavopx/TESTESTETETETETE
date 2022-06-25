import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


import { listarPets } from '../../api/apiPet';


export default function Consultar(){
    const [pet, setPet] = useState([]);

   async function carregarPets(){
        const resp = await listarPets();
        setPet(resp);
    }

    useEffect(()=> {
    carregarPets();
    }, [])

    return(
       <main>
        
        <table>
                 <thead>
                    <tr>
                        <th>NOME DO PET</th>
                    </tr>
                </thead>
                <tbody>

                    {pet.map(item => 

                        <tr>
                            <td>{item.nome}</td>
                        </tr>
                        )}

                </tbody>
        </table>
        
        <p> <Link to='/'> Voltar </Link> </p>
      </main>



    )
} 