import { Request, Response } from 'express';
import query from '../../shared/knex/knex';
import { IFornecedor } from './interfaces/fornecedor.interface';

class ListFornecedorById {
  async execute(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const fornecedor = await query<IFornecedor>({
      f: 'fornecedores',
    })
      .select([
        'f.*',
        query.raw(
          `json_build_object('cep', cep, 'rua', rua, 'numero', numero, 'complemento', complemento) as endereco`
        ),
      ])
      .innerJoin({ e: 'enderecos' }, 'e.fornecedor_id', 'f.id')
      .where({ 'f.id': id })
      .first();

    return response.status(200).json(fornecedor);
  }
}

export { ListFornecedorById };
