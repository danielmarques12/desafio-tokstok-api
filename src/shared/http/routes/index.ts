import { Router } from 'express';

import { fornecedoresRoutes } from './fornecedores.routes';

const router = Router();

router.use('/fornecedores', fornecedoresRoutes);

export { router };
