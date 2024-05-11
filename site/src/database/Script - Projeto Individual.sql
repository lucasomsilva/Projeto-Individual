create database projeto_individual;

use projeto_individual;

create table personagem (
idPersonagem int auto_increment,
nome 		 varchar(45),
descricao    varchar(200),
primary key (idPersonagem) 
)auto_increment = 10;

create table usuario (
idUsuario int auto_increment,
nome      varchar(50),
sobrenome varchar(50),
email 	  varchar(100),
senha     varchar(45),
primary key (idUsuario)
);

