import { Request, Response } from 'express';
import query from '../../shared/knex/knex';
import { IProduto } from './interfaces/produto.interface';

class ListProdutos {
  async execute(request: Request, response: Response) {
    const { fornecedor_id } = request.params;

    const produtos: IProduto[] = await query('produtos').where({
      fornecedor_id
    });

    return response.status(200).json(produtos);
  }
}

export { ListProdutos };
