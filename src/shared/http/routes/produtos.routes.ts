import { Router } from 'express';

import { ListProdutos } from '../../../modules/produtos/ListProdutos';

const produtosRoutes = Router();

const listProdutos = new ListProdutos();

produtosRoutes.get('/list/:fornecedor_id', listProdutos.execute);

export { produtosRoutes };
