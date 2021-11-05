## Ultra Teste - Node js
Este repositório representa um teste sobre os conceitos básicos de Node Js.

## O Exercício

O exercício consiste em consumir dados de uma API (https://randomuser.me/) que disponibilizada informações aleatórias sobre utilizadores, e armazenar os mesmos no seguinte formato:

**User Entity:**
```
{
    "name": "Nome do User",
    "email": "Email do User",
    "birthday": "Data de Nascimento do User",
    "address": "Endereço do User"
}
```

Devem ser armazenados 50 registos em uma Base de Dados _**(SQL or NoSQL)**_ a escolha do candidato.


Em seguida, o candidato deve criar uma pequena API com 3 endpoints que permitam as seguintes operações:
  1. Busca um determinado **User** com base no seu nome
  2. Remover um **User** dado o seu email
  3. Actualizar os dados de um **User**
