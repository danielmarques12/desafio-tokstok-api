import { Request, Response } from 'express';

import query from '../../shared/knex/knex';
import { IFornecedor } from './interfaces/fornecedor.interface';

class CreateFornecedor {
  async execute(request: Request, response: Response): Promise<Response> {
    const {
      nome,
      razao_social,
      cnpj,
      segmento,
      telefone,
      email,
      endereco
    }: IFornecedor = request.body;

    const fornecedor = await query('fornecedores')
      .where({ email })
      .orWhere({ cnpj })
      .first();

    if (fornecedor) {
      return response
        .status(409)
        .json({ error: 'Email ou CNPJ já cadastrado' });
    }

    const [fornecedor_id] = await query('fornecedores')
      .insert({
        nome,
        razao_social,
        cnpj,
        segmento,
        telefone,
        email
      })
      .returning('id');

    await query('enderecos').insert({
      cep: endereco.cep,
      rua: endereco.rua,
      numero: endereco.numero,
      complemento: endereco.complemento,
      fornecedor_id
    });

    return response.status(201).json('Fornecedor cadastrado com sucesso');
  }
}

export { CreateFornecedor };
