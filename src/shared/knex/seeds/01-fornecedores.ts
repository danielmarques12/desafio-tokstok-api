import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('fornecedores').insert([
    {
      nome: 'Casa do sofá',
      razao_social: 'casa dos sofas ltda',
      cnpj: '12.345.678/0001-00',
      segmento: 'móveis',
      telefone: '(11) 91234-5678',
      email: 'comercial@casadosofa.com.br'
    },
    {
      nome: 'Mundo da Cozinha',
      razao_social: 'mundo cozinha ltda',
      cnpj: '12.345.678/0001-01',
      segmento: 'decoração',
      telefone: '(11) 91234-1234',
      email: 'comercial@mundodacozinha.com.br'
    },
    {
      nome: 'Planeta espelhos',
      razao_social: 'planeta espelhos ltda',
      cnpj: '12.345.678/0001-02',
      segmento: 'decoração e utensílios',
      telefone: '(11) 91234-3453',
      email: 'contato@planetaespelhos.com.br'
    },
    {
      nome: 'Cortinas Center',
      razao_social: 'cortinas center ltda',
      cnpj: '12.345.678/0001-03',
      segmento: 'decoração e utensílios',
      telefone: '(11) 91234-7852',
      email: 'contato@cortinascenter.com.br'
    },
    {
      nome: 'Salão do vidro',
      razao_social: 'salao vidro ltda',
      cnpj: '12.345.678/0001-04',
      segmento: 'utensílios',
      telefone: '(11) 91234-6745',
      email: 'vendas@salaodovidro.com.br'
    },
    {
      nome: 'Point do escritório',
      razao_social: 'point escritorio ltda',
      cnpj: '12.345.678/0001-05',
      segmento: 'materiais de escritório',
      telefone: '(11) 91234-9301',
      email: 'pointdoescritorio@gmail.com'
    }
  ]);
}
