import { Request, Response } from 'express';
import query from '../../shared/knex/knex';

interface IProduto {
  nome: string;
  descricao: string;
  image_url: string;
  preco: number;
}

class ListProdutos {
  async execute(request: Request, response: Response) {
    const { fornecedor_id } = request.params;

    const produtos: IProduto[] = await query('produtos').where({
      fornecedor_id,
    });

    return response.status(200).json(produtos);
  }
}

export { ListProdutos };
