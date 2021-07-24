import { Router } from 'express';

import { CreateFornecedor } from '../../../modules/fornecedores/CreateFornecedor';
import { ListFornecedores } from '../../../modules/fornecedores/ListAllFornecedores';

const fornecedoresRoutes = Router();

const createFornecedor = new CreateFornecedor();
const listFornecedores = new ListFornecedores();

fornecedoresRoutes.post('/create', createFornecedor.execute);
fornecedoresRoutes.get('/list', listFornecedores.execute);

export { fornecedoresRoutes };
