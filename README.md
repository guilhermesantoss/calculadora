<h1 align="center">Calculadora</h1>

<p align="center">
  <img src="https://img.shields.io/github/repo-size/guilhermesantoss/calculadora?style=for-the-badge&color=darkblue" alt="Repository Size" />
  <img src="https://img.shields.io/github/last-commit/guilhermesantoss/calculadora?style=for-the-badge&color=darkblue" alt="Last Commit" />
  <img src="https://img.shields.io/github/languages/count/guilhermesantoss/calculadora?style=for-the-badge&color=darkblue" alt="Languages Used" />
  <img src="https://img.shields.io/github/license/guilhermesantoss/calculadora?style=for-the-badge&color=darkblue" alt="License" />
</p>


## Sobre o projeto

Calculadora criada no curso [React + Redux](https://www.udemy.com/course/react-redux-pt/) da plataforma Udemy.

## Executando o projeto

Entre na pasta "calculadora/" e instale as dependências do projeto utilizando o comando:
```bash
npm install
```

Agora que as dependências estão devidamente instaladas, execute o projeto utilizando o comando:
```bash
npm start
```
## Buildando imagem docker
```bash
docker build -f Dockerfile -t guilhermesantoss/calculadora:latest .
```

## Executando a imagem
```bash
docker run -d -p 8080:3000 --name calculadora guilhermesantoss/calculadora:latest
```

## Acessando a aplicação rodando em um container docker
**http://localhost:8080/**
## Tecnologias utilizadas

* [React](https://reactjs.org/)

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
