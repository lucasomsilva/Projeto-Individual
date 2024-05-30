create database projeto_individual;
use projeto_individual;

create table usuario (
idUsuario int auto_increment,
nome      varchar(50),
sobrenome varchar(50),
email 	  varchar(100),
senha     varchar(45),
primary key (idUsuario)
);

create table personagem (
idPersonagem int auto_increment,
nome 		 varchar(45),
descricao    varchar(200),
fkUsuario    int,
primary key (idPersonagem),
constraint fk_usuario_personagem foreign key (fkUsuario) references usuario (idUsuario)
)auto_increment = 10;

create table qtdJogos (
idJogo      int auto_increment,
dataJogo	date,
tempoDejogo time,
fkUsuario   int,
primary key (idJogo),
constraint fk_qtdjogo_usuario foreign key (fkUsuario) references usuario (idUsuario)
);