Projeto Flow.in
Projeto de criação de leilão da Flow.in

- Aplicação construída utilizando o MySQL Workbench para criação de tabelas. 
- Uso do Dactilografado como linguagem de desenvolvimento.

- Para visualizar todas as tabelas geradas pela aplicação, utilize o MySQL com as tabelas abaixo:

-Tabela de criação de leilões

CREATE TABLE leilão (
id INT, NÃO NULO, CHAVE PRIMÁRIA,
título VARCHAR (255) NÃO NULO,
INT NÃO NULO inicial,
lances INT NOT NULL,
expiração DATA NÃO NULA
);

- Tabela de criação de lanças

CRIAR Lance TABELA (
id INT, NÃO NULO, CHAVE PRIMÁRIA,
lance INT NOT NULL,
datas DATA NÃO NULO,
leilão_id INT NOT NULL,
CHAVE ESTRANGEIRA (leilão_id) REFERÊNCIAS leilão (id)
);