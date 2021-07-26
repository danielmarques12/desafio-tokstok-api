<h1 align="center">
  <img alt="Mesavip" title="Mesavip" src="https://tokstoksponsorio.vtexassets.com/assets/vtex/assets-builder/tokstoksponsorio.store-theme/0.68.0/icons/store-logo-icon___ee0b8ba758e3c21e076108ec6b13ab11.svg" width="300px" />
</h1>

<h3 align="center"> Desafio Tokstok </h3>

<br>
<p align="center">
 
  <a href="https://desafio-tokstok.netlify.app/" target="_blank" style="text-decoration:none" color="red">
    <img src="https://img.shields.io/badge/site do desafio-009845?style=for-the-badge&logo=netlify">
  </a>
  
  <a href="https://github.com/danielmarques12/desafio-tokstok-web" target="_blank">
    <img src="https://img.shields.io/badge/repositório do frontend em react-009845?style=for-the-badge&logo=react">
  </a>
  
</p>

### Guia de instalação/execução

```bash
# Crie um banco de dados PostgreSQL e coloque as credenciais no arquivo .env

# Você pode encontrar o modelo do banco do dados e a coleção de requisições do Insomnia dentro da pasta .github

# Para instalar as dependências
$ yarn

# Para criar as tabelas no banco de dados
$ yarn knex migrate:latest

# Para criar as seeds no banco de dados
$ yarn knex seed:run

# Para startar a API
$ yarn dev
```
