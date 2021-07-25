import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('enderecos').insert([
    {
      id: 1,
      fornecedor_id: 1,
      cep: '64014-050',
      rua: 'Rua Governador Tibério Nunes',
      numero: '56',
      complemento: 'A'
    },
    {
      id: 2,
      fornecedor_id: 2,
      cep: '64016-700',
      rua: 'Rua Doutor Area Leão',
      numero: '61',
      complemento: '4B'
    },
    {
      id: 3,
      fornecedor_id: 3,
      cep: '03511-060',
      rua: 'Praça Dom Duarte Leopoldo',
      numero: 'SQS 215'
    },
    {
      id: 4,
      fornecedor_id: 4,
      cep: '03511-060',
      rua: 'Praça Octacílio Pereira',
      numero: '68'
    },
    {
      id: 5,
      fornecedor_id: 5,
      cep: '03514-060',
      rua: 'Praça Largo do Peixe',
      numero: '89'
    },
    {
      id: 6,
      fornecedor_id: 6,
      cep: '03511-060',
      rua: 'Praça Rui Corá',
      numero: '23'
    }
  ]);
}
