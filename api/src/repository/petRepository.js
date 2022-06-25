
import {con} from './connection.js'

export async function inserirPet(pet){
    const comando =
    `INSERT INTO tb_pet (nm_pet)
        VALUES ( ? )`

    const [respostas] = await con.query(comando,[pet.nome])
    
    pet.id = respostas.insertId;
    return pet;
}

export async function listarPets(){
    const comando = 
    `SELECT id_pet  id,
            nm_pet  nome
    FROM TB_PET`;

const [linhas] = await con.query(comando);
return linhas;
}



