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

Devem ser armazenados 50 registos em uma Base de Dados _**Mongo DB**_.

Em seguida, o candidato deve criar uma pequena API com 4 endpoints que permitam as seguintes operações:
  1. Listar todos os **Users** armazenados (`/api/users`) GET
  2. Busca um determinado **User** com base no seu nome (`/api/users/name={NomePesquisado}`) GET
  3. Remover um **User** dado o seu email (`/api/users`) DELETE
  4. Actualizar os dados de um **User** (`/api/users/`) PUT

### Notas:
1. O prazo para realização do exercício é de 24h.
2. Todo exercício deve ser feito neste repositório, ou seja, o candidato deve fazer o clone deste repositório e continuar
com a resolução do exercício.
3. O resultado final deve ser partilhado por email em formato zip, contendo todas as variáveis de ambiente necessárias para execução do projecto

## Deploy
A solução desenvolvida deve ser hospedada e em seguida partilhada a url para avaliação .