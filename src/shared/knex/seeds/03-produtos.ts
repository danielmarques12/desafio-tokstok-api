import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('produtos').insert([
    {
      fornecedor_id: 1,
      nome: 'EN BLOCK SOFA-CAMA 3 LUGARES',
      image_url:
        'https://tokstok.vtexassets.com/arquivos/ids/2217685-553-553/block-sofa-cama-3-lugares-noriker-deserto-en-block_st0.jpg?v=637243060113970000',
      preco: 3299.0
    },
    {
      fornecedor_id: 1,
      nome: 'SIDE SOFA-CAMA 3 LUGARES',
      image_url:
        'https://tokstok.vtexassets.com/arquivos/ids/1791150-553-553/Sofa-cama-3-Lugares-Lowvel-Caqui-Side.jpg?v=637009021660470000',
      preco: 3399.0
    },
    {
      fornecedor_id: 1,
      nome: 'CLAP SOFA-CAMA 3 LUGARES',
      image_url:
        'https://tokstok.vtexassets.com/arquivos/ids/2218023-553-553/sofa-cama-3-lugares-plain-cinza-clap_st3.jpg?v=637243072175770000',
      preco: 2799.0
    },
    {
      fornecedor_id: 2,
      nome: 'BAMBOO KIT UTENSILIOS 4 PCS',
      image_url:
        'https://tokstok.vtexassets.com/arquivos/ids/1746008-553-553/Kit-Utensilios-4-Pcs-Natural-Bamboo.jpg?v=637000984879870000',
      preco: 35.9
    },
    {
      fornecedor_id: 2,
      nome: 'BAMBOO TABUA 36 CM X 26 CM',
      image_url:
        'https://tokstok.vtexassets.com/arquivos/ids/1746012-553-553/Tabua-36-Cm-X-26-Cm-Natural-Bamboo.jpg?v=637000984882070000',
      preco: 95.9
    },
    {
      fornecedor_id: 2,
      nome: 'CHILLI FRIGIDEIRA 24 CM',
      image_url:
        'https://tokstok.vtexassets.com/arquivos/ids/2327612-553-553/frigideira-24-cm-prata-chilli_st2.jpg?v=637361011237330000',
      preco: 69.9
    },
    {
      fornecedor_id: 3,
      nome: 'BRASAO ESPELHO 36 CM X 25 CM',
      image_url:
        'https://tokstok.vtexassets.com/arquivos/ids/1875664-553-553/espelho-36-cm-x-25-cm-castanho-bras-o_st0.jpg?v=637044659725730000',
      preco: 169.9
    },
    {
      fornecedor_id: 3,
      nome: 'YOU ME ESPELHO DECORATIVO 39 CM X 25 CM',
      image_url:
        'https://tokstok.vtexassets.com/arquivos/ids/1860399-553-553/Espelho-Decorativo-39-Cm-X-25-Cm-Prata-You-me.jpg?v=637020914421770000',
      preco: 189.9
    },
    {
      fornecedor_id: 3,
      nome: 'PELICANO ESPELHO REDONDO 60 CM',
      image_url:
        'https://tokstok.vtexassets.com/arquivos/ids/2222751-553-553/espelho-red-60-cm-whisky-preto-pelicano_st0.jpg?v=637256466863900000',
      preco: 539.0
    },
    {
      fornecedor_id: 4,
      nome: 'VERTUS CORTINA 2 PC 1,40 M X 2,30 M',
      image_url:
        'https://tokstok.vtexassets.com/arquivos/ids/2487923-553-553/cortina-2-pc-140-m-x-230-m-natural-vertus_st0.jpg?v=637534897333930000',
      preco: 89.9
    },
    {
      fornecedor_id: 4,
      nome: 'TIE CORTINA 2PCS 1,50 M X 2,20 M',
      image_url:
        'https://tokstok.vtexassets.com/arquivos/ids/2452383-553-553/CORTINA-2PCS-150-M-X-220-M_189317_amb.jpg?v=637465560075570000',
      preco: 97.9
    },
    {
      fornecedor_id: 4,
      nome: 'VESTIGE CORTINA 2PCS 1,40 M X 2,50 M',
      image_url:
        'https://tokstok.vtexassets.com/arquivos/ids/2452612-553-553/CORTINA-2PCS-140-M-X-250-M_189382_amb.jpg?v=637465584445970000',
      preco: 259.9
    },
    {
      fornecedor_id: 5,
      nome: 'BLAYET TACA BORDEAUX 630 ML',
      image_url:
        'https://tokstok.vtexassets.com/arquivos/ids/2314931-553-553/taca-bordeaux-630-ml-incolor-blayet_st0.jpg?v=637348935409670000',
      preco: 9.9
    },
    {
      fornecedor_id: 5,
      nome: 'JUJU BALEIRO MED.',
      image_url:
        'https://tokstok.vtexassets.com/arquivos/ids/1816541-553-553/Baleiro-Med-Verde-aluminio-Juju.jpg?v=637013203647270000',
      preco: 222.9
    },
    {
      fornecedor_id: 5,
      nome: 'FLUTUANTES VASO 39 CM',
      image_url:
        'https://tokstok.vtexassets.com/arquivos/ids/1853417-553-553/Vaso-39-Cm-Verde-Flutuantes.jpg?v=637019369716270000',
      preco: 169.9
    },
    {
      fornecedor_id: 6,
      nome: 'SET PUFF',
      image_url:
        'https://tokstok.vtexassets.com/arquivos/ids/1857462-553-553/Pufe-Corsin-Preto-Set.jpg?v=637020162238000000',
      preco: 99.99
    },
    {
      fornecedor_id: 6,
      nome: 'TALK CADEIRA',
      image_url:
        'https://tokstok.vtexassets.com/arquivos/ids/2193112-553-553/cadeira-preto-preto-talk_st0.jpg?v=637214996426600000',
      preco: 139.99
    },
    {
      fornecedor_id: 6,
      nome: 'LINO GAVETEIRO 3 GAVETAS',
      image_url:
        'https://tokstok.vtexassets.com/arquivos/ids/1858044-553-553/Gaveteiro-3gv-Preto-branco-Lino.jpg?v=637020197055800000',
      preco: 459.99
    }
  ]);
}
