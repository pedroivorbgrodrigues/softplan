# I - APLICAÇÃO:

## Construir uma "Agenda Telefônica" que permita que somente usuários autenticados tenham acesso/mantenham contatos.

# II - STACK:

* Angular 6
* Angular Material
* NodeJs
* ExpressJs
* JWT
* MongoDB + Mongoose
* Docker + Docker Compose

# III - ESTÓRIAS DE USUARIO:

## Eu como visitante do sistema, ao acessar a home, devo visualizar uma tela de saudações simples com uma área para inserir e enviar meu código de acesso. Desta forma, poderei me autenticar para visualizar a minha agenda.

### DOD:

* Não faz parte deste escopo qualquer tela para cadastro do código de acesso. Assim, este poderá ser adicionado manualmente no banco;

* O código de acesso informado deverá ser verificado no banco e, caso exista, um token JWT deverá ser gerado para ser usado em rotas que necessitem de autenticação stateless;

* Uma vez validado o código, o usuário deverá ser redirecionado para a tela de contatos do usuário.

---

## Eu como usuário autenticado devo poder manter os contatos da minha agenda.

DADOS DO CONTATO: nome, e-mail, telefone, empresa e cargo;

### DOD:

* Somente usuários autenticados deverão poder acessar esta página;

* Visualizar cards com os dados dos contatos cadastrados;

* Pesquisar contatos por nome. Não é necessário o uso de regex ou full text search, a busca poderá ser exata);

* Cadastrar contato com os dados do contato (dialog);

* Editar dados do contato (dialog).

---

# IV - REQUISITOS NÃO FUNCIONAIS

* O banco de dados não precisa se preocupar com autenticação ou qualquer boa prática de segurança;

* A aplicação deve possuir uma API Rest para responder as requisições do frontend;

* A aplicação deverá ser stateless;

* O layout da aplicação é livre, mas deverá ser minimamente aceitável em termos de alinhamento e arquitetura da informação.

* O estilo do frontend poderá ser escrito utilizando Sass ou css3.

* Não deverá ser usado temas para o frontend;

* O único framework aceitável para a Api será o ExpressJs.

* Caso deseje, o usuário poderá trabalhar com Typescript no backend.

* O Projeto deverá ser executado utilizando o comando: docker-compose up
