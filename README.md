# Lets.Events

## Para rodar precisamos:

1. Instalar as dependências

```
$ npm install
```

2. Feito isso, podemos rodar a aplicação no browser de duas maneiras, rodando o servidor de desenvolvimento ou subindo um servidor estático.

   - Para rodar através do servidor de desenvolvimento, rode o comando abaixo e acesse a url http://localhost:8080 no browser.

   ```
   $ npm start
   ```

   - Para rodar através um servidor estático nós devemos compilar a aplicação, instalar o servidor e então rodar esse servidor. Faça isso executando os comandos.

   ```
   $ npm run build
   $ npm install -g serve
   $ serve -s dist
   ```

## Análise da solução

- Potenciais problemas de escalabilidade
  O bundle final poder ser mais otimizando usando algumas estratégias de cache

- Potenciais dificuldade de mantenabilidade
  Acho que a solução final ficou pouco genérica para a venda de produtos que não sejam ingressos.

- Potenciais melhorias
  Como dito acima, aplicar alguma estrategias de compressao no bundle como gzip e modulariação de algumas do Cart. Geralmente passo essas funções para um arquivo chamado utils.js

- Características positivas da solução proposta
  Acho que o resultado foi satisfatorio levando em consideração a minha primeira oportunidade de usar Graphql :D
