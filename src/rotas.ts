import { Router } from 'express';
import CadastraLink from './controladores/CadastroLinkControlador';
import ObterLink from './controladores/obterLinkControlador';

const rotas = Router();

rotas.post('/', new CadastraLink().controlador)
rotas.get('/identificador', new ObterLink().controlador)

export default rotas