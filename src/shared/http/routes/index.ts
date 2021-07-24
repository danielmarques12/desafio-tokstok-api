import { Router } from 'express';

import { fornecedoresRoutes } from './fornecedores.routes';
import { produtosRoutes } from './produtos.routes';

const router = Router();

router.use('/fornecedores', fornecedoresRoutes);
router.use('/produtos', produtosRoutes);

export { router };
