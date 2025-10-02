-- Insert dos países

-- Américas
insert into paises(nome_oficial, continente, populacao, idioma_principal) values
('Brazil', 'Américas', 212000000, 'Português'),
('Porto Rico', 'Américas', 124000000, 'Espanhol'),
('Chile', 'Américas', 20000000, 'Espanhol'),
('México', 'Américas', 131000000, 'Espanhol'),
('Canadá', 'Américas', 41300000, 'Inglês');

-- Europa
insert into paises(nome_oficial, continente, populacao, idioma_principal) values
('Alemanha', 'Europa', 83510000, 'Alemão'),
('França', 'Europa', 68000000, 'Francês'),
('Espanha', 'Europa', 48000000, 'Espanhol'),
('Itália', 'Europa', 59000000, 'Italiano'),
('Reino Unido', 'Europa', 68000000, 'Inglês');

-- África
insert into paises(nome_oficial, continente, populacao, idioma_principal) values
('Nigéria', 'África', 223000000, 'Inglês'),
('Egito', 'África', 112000000, 'Árabe'),
('África do Sul', 'África', 61000000, 'Inglês'),
('Etiópia', 'África', 126000000, 'Amárico'),
('Marrocos', 'África', 37000000, 'Árabe');

-- Ásia
insert into paises(nome_oficial, continente, populacao, idioma_principal) values
('China', 'Ásia', 1412000000, 'Mandarim'),
('Índia', 'Ásia', 1426000000, 'Hindi'),
('Japão', 'Ásia', 124000000, 'Japonês'),
('Coreia do Sul', 'Ásia', 52000000, 'Coreano'),
('Arábia Saudita', 'Ásia', 37000000, 'Árabe');

-- Oceania
insert into paises(nome_oficial, continente, populacao, idioma_principal) values
('Austrália', 'Oceania', 26000000, 'Inglês'),
('Nova Zelândia', 'Oceania', 5200000, 'Inglês'),
('Fiji', 'Oceania', 930000, 'Inglês'),
('Papua-Nova Guiné', 'Oceania', 9300000, 'Inglês'),
('Samoa', 'Oceania', 225000, 'Samoano');


-- Insert das cidades


-- Américas
insert into cidades(nome, populacao, id_pais) values
('São Paulo', 12300000, (select id from paises where nome_oficial = 'Brazil')),
('Rio de Janeiro', 6700000, (select id from paises where nome_oficial = 'Brazil')),
('Brasília', 3100000, (select id from paises where nome_oficial = 'Brazil')),
('Salvador', 2900000, (select id from paises where nome_oficial = 'Brazil')),
('Fortaleza', 2700000, (select id from paises where nome_oficial = 'Brazil'));

insert into cidades(nome, populacao, id_pais) values
('San Juan', 340000, (select id from paises where nome_oficial = 'Porto Rico')),
('Ponce', 140000, (select id from paises where nome_oficial = 'Porto Rico')),
('Bayamón', 180000, (select id from paises where nome_oficial = 'Porto Rico')),
('Carolina', 170000, (select id from paises where nome_oficial = 'Porto Rico')),
('Caguas', 130000, (select id from paises where nome_oficial = 'Porto Rico'));

insert into cidades(nome, populacao, id_pais) values
('Santiago', 6200000, (select id from paises where nome_oficial = 'Chile')),
('Valparaíso', 300000, (select id from paises where nome_oficial = 'Chile')),
('Concepción', 220000, (select id from paises where nome_oficial = 'Chile')),
('La Serena', 200000, (select id from paises where nome_oficial = 'Chile')),
('Antofagasta', 360000, (select id from paises where nome_oficial = 'Chile'));

insert into cidades(nome, populacao, id_pais) values
('Cidade do México', 9200000, (select id from paises where nome_oficial = 'México')),
('Guadalajara', 1500000, (select id from paises where nome_oficial = 'México')),
('Monterrey', 1100000, (select id from paises where nome_oficial = 'México')),
('Puebla', 1500000, (select id from paises where nome_oficial = 'México')),
('Tijuana', 1900000, (select id from paises where nome_oficial = 'México'));

insert into cidades(nome, populacao, id_pais) values
('Toronto', 2800000, (select id from paises where nome_oficial = 'Canadá')),
('Vancouver', 670000, (select id from paises where nome_oficial = 'Canadá')),
('Montreal', 1700000, (select id from paises where nome_oficial = 'Canadá')),
('Ottawa', 1000000, (select id from paises where nome_oficial = 'Canadá')),
('Calgary', 1200000, (select id from paises where nome_oficial = 'Canadá'));

-- Europa
insert into cidades(nome, populacao, id_pais) values
('Berlim', 3700000, (select id from paises where nome_oficial = 'Alemanha')),
('Hamburgo', 1800000, (select id from paises where nome_oficial = 'Alemanha')),
('Munique', 1500000, (select id from paises where nome_oficial = 'Alemanha')),
('Colônia', 1100000, (select id from paises where nome_oficial = 'Alemanha')),
('Frankfurt', 760000, (select id from paises where nome_oficial = 'Alemanha'));

insert into cidades(nome, populacao, id_pais) values
('Paris', 2100000, (select id from paises where nome_oficial = 'França')),
('Marselha', 870000, (select id from paises where nome_oficial = 'França')),
('Lyon', 520000, (select id from paises where nome_oficial = 'França')),
('Toulouse', 490000, (select id from paises where nome_oficial = 'França')),
('Nice', 340000, (select id from paises where nome_oficial = 'França'));

insert into cidades(nome, populacao, id_pais) values
('Madri', 3200000, (select id from paises where nome_oficial = 'Espanha')),
('Barcelona', 1600000, (select id from paises where nome_oficial = 'Espanha')),
('Valência', 800000, (select id from paises where nome_oficial = 'Espanha')),
('Sevilha', 690000, (select id from paises where nome_oficial = 'Espanha')),
('Bilbao', 350000, (select id from paises where nome_oficial = 'Espanha'));

insert into cidades(nome, populacao, id_pais) values
('Roma', 2800000, (select id from paises where nome_oficial = 'Itália')),
('Milão', 1400000, (select id from paises where nome_oficial = 'Itália')),
('Nápoles', 950000, (select id from paises where nome_oficial = 'Itália')),
('Turim', 870000, (select id from paises where nome_oficial = 'Itália')),
('Palermo', 650000, (select id from paises where nome_oficial = 'Itália'));

insert into cidades(nome, populacao, id_pais) values
('Londres', 8900000, (select id from paises where nome_oficial = 'Reino Unido')),
('Manchester', 550000, (select id from paises where nome_oficial = 'Reino Unido')),
('Birmingham', 1100000, (select id from paises where nome_oficial = 'Reino Unido')),
('Liverpool', 500000, (select id from paises where nome_oficial = 'Reino Unido')),
('Edimburgo', 530000, (select id from paises where nome_oficial = 'Reino Unido'));

-- África
insert into cidades(nome, populacao, id_pais) values
('Lagos', 15000000, (select id from paises where nome_oficial = 'Nigéria')),
('Abuja', 3600000, (select id from paises where nome_oficial = 'Nigéria')),
('Kano', 4200000, (select id from paises where nome_oficial = 'Nigéria')),
('Ibadan', 3500000, (select id from paises where nome_oficial = 'Nigéria')),
('Port Harcourt', 1300000, (select id from paises where nome_oficial = 'Nigéria'));

insert into cidades(nome, populacao, id_pais) values
('Cairo', 9900000, (select id from paises where nome_oficial = 'Egito')),
('Alexandria', 5200000, (select id from paises where nome_oficial = 'Egito')),
('Giza', 8700000, (select id from paises where nome_oficial = 'Egito')),
('Luxor', 500000, (select id from paises where nome_oficial = 'Egito')),
('Assuã', 320000, (select id from paises where nome_oficial = 'Egito'));

insert into cidades(nome, populacao, id_pais) values
('Joanesburgo', 5600000, (select id from paises where nome_oficial = 'África do Sul')),
('Pretória', 2400000, (select id from paises where nome_oficial = 'África do Sul')),
('Durban', 3800000, (select id from paises where nome_oficial = 'África do Sul')),
('Cidade do Cabo', 4600000, (select id from paises where nome_oficial = 'África do Sul')),
('Port Elizabeth', 1200000, (select id from paises where nome_oficial = 'África do Sul'));

insert into cidades(nome, populacao, id_pais) values
('Addis Ababa', 5000000, (select id from paises where nome_oficial = 'Etiópia')),
('Dire Dawa', 450000, (select id from paises where nome_oficial = 'Etiópia')),
('Mekelle', 310000, (select id from paises where nome_oficial = 'Etiópia')),
('Gondar', 340000, (select id from paises where nome_oficial = 'Etiópia')),
('Bahir Dar', 400000, (select id from paises where nome_oficial = 'Etiópia'));

insert into cidades(nome, populacao, id_pais) values
('Casablanca', 3400000, (select id from paises where nome_oficial = 'Marrocos')),
('Rabat', 580000, (select id from paises where nome_oficial = 'Marrocos')),
('Marrakech', 950000, (select id from paises where nome_oficial = 'Marrocos')),
('Fez', 1100000, (select id from paises where nome_oficial = 'Marrocos')),
('Tânger', 950000, (select id from paises where nome_oficial = 'Marrocos'));

-- Ásia
insert into cidades(nome, populacao, id_pais) values
('Pequim', 21500000, (select id from paises where nome_oficial = 'China')),
('Xangai', 26000000, (select id from paises where nome_oficial = 'China')),
('Cantão', 15000000, (select id from paises where nome_oficial = 'China')),
('Shenzhen', 13000000, (select id from paises where nome_oficial = 'China')),
('Chongqing', 31000000, (select id from paises where nome_oficial = 'China'));

insert into cidades(nome, populacao, id_pais) values
('Nova Délhi', 32000000, (select id from paises where nome_oficial = 'Índia')),
('Mumbai', 21000000, (select id from paises where nome_oficial = 'Índia')),
('Calcutá', 15000000, (select id from paises where nome_oficial = 'Índia')),
('Bangalore', 11000000, (select id from paises where nome_oficial = 'Índia')),
('Chennai', 11000000, (select id from paises where nome_oficial = 'Índia'));

insert into cidades(nome, populacao, id_pais) values
('Tóquio', 14000000, (select id from paises where nome_oficial = 'Japão')),
('Osaka', 2700000, (select id from paises where nome_oficial = 'Japão')),
('Quioto', 1500000, (select id from paises where nome_oficial = 'Japão')),
('Yokohama', 3700000, (select id from paises where nome_oficial = 'Japão')),
('Hiroshima', 1200000, (select id from paises where nome_oficial = 'Japão'));

insert into cidades(nome, populacao, id_pais) values
('Seul', 9700000, (select id from paises where nome_oficial = 'Coreia do Sul')),
('Busan', 3400000, (select id from paises where nome_oficial = 'Coreia do Sul')),
('Incheon', 2900000, (select id from paises where nome_oficial = 'Coreia do Sul')),
('Daegu', 2400000, (select id from paises where nome_oficial = 'Coreia do Sul')),
('Daejeon', 1500000, (select id from paises where nome_oficial = 'Coreia do Sul'));

insert into cidades(nome, populacao, id_pais) values
('Riad', 7700000, (select id from paises where nome_oficial = 'Arábia Saudita')),
('Jidá', 4300000, (select id from paises where nome_oficial = 'Arábia Saudita')),
('Meca', 2000000, (select id from paises where nome_oficial = 'Arábia Saudita')),
('Medina', 1300000, (select id from paises where nome_oficial = 'Arábia Saudita')),
('Dammam', 1200000, (select id from paises where nome_oficial = 'Arábia Saudita'));

-- Oceania
insert into cidades(nome, populacao, id_pais) values
('Sydney', 5300000, (select id from paises where nome_oficial = 'Austrália')),
('Melbourne', 5000000, (select id from paises where nome_oficial = 'Austrália')),
('Brisbane', 2500000, (select id from paises where nome_oficial = 'Austrália')),
('Perth', 2100000, (select id from paises where nome_oficial = 'Austrália')),
('Adelaide', 1400000, (select id from paises where nome_oficial = 'Austrália'));

insert into cidades(nome, populacao, id_pais) values
('Auckland', 1700000, (select id from paises where nome_oficial = 'Nova Zelândia')),
('Wellington', 220000, (select id from paises where nome_oficial = 'Nova Zelândia')),
('Christchurch', 380000, (select id from paises where nome_oficial = 'Nova Zelândia')),
('Hamilton', 180000, (select id from paises where nome_oficial = 'Nova Zelândia')),
('Dunedin', 120000, (select id from paises where nome_oficial = 'Nova Zelândia'));

insert into cidades(nome, populacao, id_pais) values
('Suva', 93000, (select id from paises where nome_oficial = 'Fiji')),
('Nadi', 42000, (select id from paises where nome_oficial = 'Fiji')),
('Lautoka', 71000, (select id from paises where nome_oficial = 'Fiji')),
('Labasa', 28000, (select id from paises where nome_oficial = 'Fiji')),
('Ba', 15000, (select id from paises where nome_oficial = 'Fiji'));

insert into cidades(nome, populacao, id_pais) values
('Port Moresby', 400000, (select id from paises where nome_oficial = 'Papua-Nova Guiné')),
('Lae', 100000, (select id from paises where nome_oficial = 'Papua-Nova Guiné')),
('Mount Hagen', 46000, (select id from paises where nome_oficial = 'Papua-Nova Guiné')),
('Madang', 30000, (select id from paises where nome_oficial = 'Papua-Nova Guiné')),
('Goroka', 25000, (select id from paises where nome_oficial = 'Papua-Nova Guiné'));

insert into cidades(nome, populacao, id_pais) values
('Apia', 40000, (select id from paises where nome_oficial = 'Samoa')),
('Vaitele', 7000, (select id from paises where nome_oficial = 'Samoa')),
('Faleula', 4000, (select id from paises where nome_oficial = 'Samoa')),
('Siusega', 3000, (select id from paises where nome_oficial = 'Samoa')),
('Malie', 2000, (select id from paises where nome_oficial = 'Samoa'));
