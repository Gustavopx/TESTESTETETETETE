import 'dotenv/config'

import petController from './controller/petController.js';

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());;


//configuração dos endpoints
server.use(petController);



server.listen(process.env.PORT, () => console.log(`API conectada na porta ${process.env.PORT}`));