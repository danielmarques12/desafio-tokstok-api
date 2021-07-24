import { Router } from 'express';

import { CreateFornecedor } from '../../../modules/fornecedores/CreateFornecedor';
import { ListAllFornecedores } from '../../../modules/fornecedores/ListAllFornecedores';
import { ListFornecedorById } from '../../../modules/fornecedores/ListFornecedorById';

const fornecedoresRoutes = Router();

const createFornecedor = new CreateFornecedor();
const listAllFornecedores = new ListAllFornecedores();
const listFornecedorById = new ListFornecedorById();

fornecedoresRoutes.post('/create', createFornecedor.execute);
fornecedoresRoutes.get('/list', listAllFornecedores.execute);
fornecedoresRoutes.get('/list/:id', listFornecedorById.execute);

export { fornecedoresRoutes };
