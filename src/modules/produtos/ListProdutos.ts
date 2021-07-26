import { Request, Response } from 'express';
import query from '../../shared/knex/knex';
import { IProduto } from './interfaces/produto.interface';

class ListProdutos {
  async execute(request: Request, response: Response) {
    const { fornecedor_id } = request.params;

    const produtos: IProduto[] = await query('produtos')
      .select([
        'id',
        'nome',
        'image_url',
        query.raw('cast(preco as decimal(10,2)) as preco')
      ])
      .where({
        fornecedor_id
      });

    return response.status(200).json(produtos);
  }
}

export { ListProdutos };
