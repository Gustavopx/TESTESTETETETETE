import { inserirPet, listarPets } from '../repository/petRepository.js';

import { Router }  from 'express'
const server = Router();

server.post('/pet', async (req,resp) => {
   try {
    const novoPet = req.body;

         if(!novoPet.nome)
            throw new error('Nome do pet é obrigatório!')

            const petInserido = await inserirPet(novoPet);

            resp.send(petInserido);


   } catch (err) {
      resp.status(400).send({
         erro: err.message 
      })
   }
})

server.get('/pet', async (req,resp) => {
   try {
       const resposta = await listarPets();
       resp.send(resposta);

   } catch (err) {
       resp.status(400).send({
           erro: err.message
       })
   }
})

export default server;
    
      