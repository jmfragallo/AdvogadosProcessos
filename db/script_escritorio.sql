CREATE SCHEMA IF NOT EXISTS escritorio;
USE escritorio

CREATE TABLE IF NOT EXISTS escritorio.pessoas (
	id INT PRIMARY KEY AUTO_INCREMENT,  
	nome VARCHAR (128) NOT NULL,
	cliente BOOL NOT NULL,
	cpf_cnpj varchar(20),
	endereço VARCHAR (128),
	email VARCHAR (128)
)

CREATE TABLE IF NOT EXISTS escritorio.processos (
	id INT PRIMARY KEY AUTO_INCREMENT,
	advogado_id INT NOT NULL REFERENCES pessoas(id),
	cliente_id INT NOT NULL REFERENCES pessoas (id),
	numero_processo VARCHAR(35) NOT NULL,
	proximo_prazo DATETIME NOT NULL,
	arquivo BOOL NOT NULL
)
