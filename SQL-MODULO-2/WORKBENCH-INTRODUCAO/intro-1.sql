USE sucos;
CREATE TABLE tbCliente
(CPF VARCHAR(11) PRIMARY KEY, 
NOME VARCHAR(11),
ENDERECO1 VARCHAR(11),
ENDERECO2 VARCHAR(11),
CEP VARCHAR(8),
IDADE SMALLINT,
SEXO VARCHAR(1),
LIMITE_CREDITO FLOAT,
VOLUME_COMPRA FLOAT,
PRIMERIRA_COMPRA BIT(1)
);

CREATE TABLE TABELA_DE_VENDEDORES (
    MATRICULA VARCHAR(5) PRIMARY KEY, 
    NOME varchar(100), 
    PERCENTUAL_COMISSAO float
);

CREATE TABLE tbProdutos (
    PRODUTO varchar(20) PRIMARY KEY, 
    NOME varchar(150) NULL, 
    EMBALAGEM varchar(50) NULL, 
    TAMANHO varchar(50) NULL, 
    SABOR varchar(50) NULL, 
    PRECO float
);

INSERT INTO TABELA_DE_VENDEDORES
(MATRICULA, NOME, PERCENTUAL_COMISSAO)
VALUES
('00233', 'João Geraldo da Fonseca', 0.10);


INSERT INTO TABELA_DE_VENDEDORES
(MATRICULA, NOME, PERCENTUAL_COMISSAO)
VALUES
('02533', 'Vinicius Almeida de Souza', 0.40);

UPDATE TABELA_DE_VENDEDORES 
SET `PERCENTUAL_COMISSAO` = '0.35'
WHERE `MATRICULA` = '00233';

INSERT INTO tbproduto (
PRODUTO,  NOME, EMBALAGEM, TAMANHO, SABOR,
PRECO) VALUES (
'1037797', 'Clean - 2 Litros - Laranja',
'PET', '2 Litros', 'Laranja', 16.01);

INSERT INTO tbproduto (
PRODUTO,  NOME, EMBALAGEM, TAMANHO, SABOR,
PRECO) VALUES (
'1000889', 'Sabor da Montanha - 700 ml - Uva',
'Garrafa', '700 ml', 'Uva', 6.31);

INSERT INTO tbproduto (
PRODUTO,  NOME, EMBALAGEM, TAMANHO, SABOR,
PRECO) VALUES (
'1004327', 'Videira do Campo - 1,5 Litros - Melância',
'PET', '1,5 Litros', 'Melância', 19.51);

SELECT * FROM tbproduto;

INSERT INTO tbproduto (
PRODUTO,  NOME, EMBALAGEM, TAMANHO, SABOR,
PRECO) VALUES
('544931', 'Frescor do Verão - 350 ml - Limão', 'PET', '350 ml','Limão',3.20);

INSERT INTO tbproduto (
PRODUTO,  NOME, EMBALAGEM, TAMANHO, SABOR,
PRECO) VALUES
('1078680', 'Frescor do Verão - 470 ml - Manga', 'Lata', '470 ml','Manga',5.18);

INSERT INTO tbcliente (
CPF, NOME, ENDERECO1, ENDERECO2, CEP, IDADE, SEXO, 
LIMITE_CREDITO, VOLUME_COMPRA, PRIMEIRA_COMPRA, DATA_NASCIMENTO)
VALUES ('00388934505','João da Silva','Rua projetada A número 10','','2222222',30,'M', 10000.00, 2000,
0, '1989-10-05');

ALTER TABLE tbcliente CHANGE `asdadasd` `PRIMEIRA_COMPRA` BIT(1);

ALTER TABLE tbproduto CHANGE `PRECO` `PRECO_LISTA` FLOAT;


