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
fkUsuario    int,
primary key (idPersonagem),
constraint fk_usuario_personagem foreign key (fkUsuario) references usuario (idUsuario),
constraint uk_usuario_personagem unique key (fkUsuario)
)auto_increment = 10;

create table qtdJogos (
idJogo      int auto_increment,
dataJogo	date,
tempoDejogo time,
qtdMissoes  int,
fkUsuario   int,
primary key (idJogo),
constraint fk_qtdjogo_usuario foreign key (fkUsuario) references usuario (idUsuario)
);
	
select * from usuario;
select * from qtdJogos;
select * from personagem;

-- SELECT PARA MOSTRAR O MÊS MAIS JOGAOD
select month(dataJogo) as mes,
	   count(*) as quantidade
from qtdJogos where fkUsuario = 5 group by month(dataJogo)
order by quantidade desc limit 1;

-- SELECT PARA MOSTRAR O MÊS MENOS JOGADO
select month(dataJogo) as mes
from qtdJogos where fkUsuario = 5 group by month(dataJogo)
order by count(*)  asc limit 1;

-- SELECT PARA PEGAR O PERSONAGEM MAIS ESOLHIDO POR TODOS OS USUÁRIOS (KPI)
SELECT nome, 
	   COUNT(*) AS quantidade
FROM personagem GROUP BY nome
ORDER BY quantidade DESC LIMIT 1;

-- SELECT PARA PEGAR O PERSONAGEM PREFERIDO DO USUÁRIO
select nome from personagem where fkUsuario = 1;

-- SELECT PARA VER OS 4 PERSONAGENS MAIS ESCOLHIDOS (GRÁFICO)
SELECT nome, 
	   COUNT(*) AS quantidade
FROM personagem GROUP BY nome
ORDER BY quantidade DESC LIMIT 4;

-- SELECT PARA VER A QUANTIDADE DE VEZES JOGADAS POR MÊS
SELECT COUNT(idJogo) AS qtd, MONTH(dataJogo) AS mes FROM qtdJogos WHERE fkUsuario = 5
AND dataJogo BETWEEN '2024-01-01' AND '2024-12-31' GROUP BY mes order by month(dataJogo);

-- SELECT PARA VER O MÊS MAIS JOGADO
SELECT MONTH(dataJogo) AS mes FROM qtdJogos WHERE fkUsuario = 5 
AND dataJogo BETWEEN '2024-01-01' AND '2024-12-31' GROUP BY mes order by COUNT(idJogo) desc limit 1;

-- SELECT PARA VER O MÊS MENOS JOGADO
SELECT MONTH(dataJogo) AS mes FROM qtdJogos WHERE fkUsuario = 5 
AND dataJogo BETWEEN '2024-01-01' AND '2024-12-31' GROUP BY mes order by COUNT(idJogo) asc limit 1;

-- SELECT PARA VER A QUANTIDADE DE VEZES QUE JOGOU NO ANO NO TOTAL (PARA AS MÉTRICAS)
select count(idJogo) as quantidade 
from qtdJogos 
inner join usuario on fkUsuario = idUsuario where idUsuario = 5;

-- SELECT PARA MOSTRAR A MÉDIA DE MISSÕES FEITAS PELO USUÁRIO
select round(avg(qtdMissoes), 0) as media
from qtdJogos WHERE fkUsuario = 1;

-- SELECT PARA VER O USUÁRIO E O PERSONAGEM PREFERIDO
select per.nome Personagem,
	   usu.nome Usuario
from personagem per
right join usuario usu on per.fkUsuario = usu.idUsuario;
