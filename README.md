# Boas vindas ao repositório Desafio-Coleta!


Este repositório tem como objetivo criar um aplicação Full-stack, onde sera criado um form com 4 perguntas, e depois de preenchido,
sera enviado para uma API que verifica-ra os dados e te retornara os detalhes de todos os dados.

<p>&nbsp</p>

# Sumário
- [Instruções](#instruções)
- [Tecnologias](#tecnologias)
- [Executando o projeto](#executando-o-projeto)
- [Proximos passos](#proximos-passos)
- [Principal Desafio](#desafio-principal)
- [Testes](#testes)

<p>&nbsp</p>

# Instruções:

Inicie clonando o repositorio para sua máquina local 
~~~
git clone git@github.com:Thales-Daniel/desafio-coleta.git
~~~
Inicialmente entre na pasta do repositorio
~~~
cd desafio-coleta
~~~
Logo em seguida, entre na pasta do front-end e instale as dependecias
~~~
cd front-end/
~~~
~~~
npm install
~~~
Faça a mesma coisa para pasta de back-end, caso esteja na pasta desafio-coleta, digite: 
~~~
cd back-end/
~~~
~~~
npm install
~~~
É necessario também renomear o arquivo .envExample para .env
~~~
Caso não queira renomear, é so criar um novo arquivo na pasta raiz com o nome de .env e
copiar o que tem dentro do exemplo para ele.
~~~
E para finalizar é necessario entrar novamente na pasta do back-end e do front-end e iniciar o projeto,

Entre primeiramente na pasta do beck-end  e incie o projeto com o comando marcado abaixo inserindo-o no terminal.

Mantenha-o rodando e em outro terminal, entre na pasta do front-end e também rode o comando marcado abaixo
~~~
npm start
~~~

<p>&nbsp</p>

# Tecnologias

O front-end do projeto foi desenvolvido em React.js com o gerenciador de estado Context-api, foram utilizadas
5 bibliotecas para auxiliar o desenvolvimento do projeto.


  - `Axios`
  - `eslint`
  - `React-router-dom`
  - `React-testing-library`
  - `Jest`

<div align="center">
  <img alt="router-dom" height="60" width="100" src="https://miro.medium.com/max/1400/0*8BlvIy8wNLlz6icM" />
  <img alt="eslint" height="60" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" />
  <img alt="axios" height="60" width="80" src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Axios_logo_%282020%29.svg" />
  <img alt="router-dom" height="90" width="100" src="https://testing-library.com/img/octopus-128x128.png" />
  <img alt="jest" height="60" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
  <br />
  <br />
</div>
  <br />
  <br />
  
  O back-end do projeto foi desenvolvido em Node.js com Express, alem disso, foi
  utilizado o Nodemon para o auxilio do desenvolvimento.


  - `Node.js`
  - `Express`
  - `Nodemon`

<div align="center">
  <img alt="Node" height="60" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
  <img alt="express" height="60" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
  <img alt="Nodemon" height="60" width="100" src="https://blog.intelligentbee.com/wp-content/uploads/2017/06/nodemon3-1.png" />
  <br />
  <br />
</div>
  <br />
  <br />

<p>&nbsp</p>

# Executando o projeto

  Front-end
Proximos passos
![NavegandoFront-end](https://user-images.githubusercontent.com/82240828/166749735-bcfabdf5-0b0e-4afd-958b-62a8bd3405a6.gif)


  Back-end
  
  Postando perguntas

  ![Captura de tela de 2022-05-04 15-11-55](https://user-images.githubusercontent.com/82240828/166795954-b1c68f9c-ef56-4ae2-8be0-52a1d04369b6.png)

  Pegando detalhes de todas as perguntas
  
  ![Captura de tela de 2022-05-04 15-13-40](https://user-images.githubusercontent.com/82240828/166798504-551c8e13-fb15-4536-a683-b7a765670d1e.png)


<p>&nbsp</p>

# Testes

  <strong>Front-end</strong>
  
Foram desenvolvidos testes para o fron-end com o react-testing-library e jest, a cobertura total ficou em um pouco mais de 80%

![Captura de tela de 2022-05-04 15-15-36](https://user-images.githubusercontent.com/82240828/166800011-6d2a8ba3-2113-41db-929a-8f98af5a349c.png)


   <strong>Back-end</strong>

<strong>Os testes do back-end se encontram em desenvolvimento</strong>


# Desafio Principal
  
O principal desafio do projeto foi organizar por onde seria iniciado a produção, alem disso, houveram problemas na hora da estilização, que
causou um atraso grande.

<p>&nbsp</p>


# Proximos passos

O proximo passo seria dar prosseguimento aos testes do back-end e alem disso
criar novas rotas para dar novas features ao projeto.
