Projeto Flow.in
Projeto de criação de leilão da Flow.in

- Aplicação construída utilizando o MySQL Workbench para criação de tabelas. 
- Uso do Typescript como linguagem de desenvolvimento.

-Métodos : 

- Criado método POST para criação de leilão e lance.
    - postAuction.ts
    - postBid.ts

- Criado método GET para visualização das informações de leilão e lance.
    - getAllAuction.ts
    - getBid.ts
    - getOneAuction.ts

- Criado método DELETE para deletar a criação de leilão e lance.
    - deleteAllAuction.ts
    - deleteBid.ts

- No arquivo INDEX, segue o caminho da URL para visualização das informações.

- Para visualizar todas as tabelas geradas pela aplicação, utilize o MySQL com as tabelas abaixo:

-Tabela de criação de leilões

CREATE TABLE auction (
id INT NOT NULL PRIMARY KEY,
title VARCHAR (255) NOT NULL,
initial INT NOT NULL,
expiration DATE NOT NULL
);

- Tabela de criação de lances

CREATE TABLE bid (
id INT NOT NULL PRIMARY KEY,
bid INT NOT NULL,
dates DATE NOT NULL,
auction_id INT NOT NULL,
FOREIGN KEY (auction_id) REFERENCES auction(id)
);