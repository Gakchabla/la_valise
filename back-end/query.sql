
create table essentiels 
(id INT NOT NULL auto_increment,
name varchar(100) NOT NULL,
type varchar(45) NOT NULL,
primary key (id));

show tables;
describe essentiels;

INSERT INTO essentiels (name, type) values 
('Brosse à dents', 'hygiene'),
('Dentifrice', 'hygiene'),
('Déodorant', 'hygiene'),
('Savon / Gel Douche', 'hygiene'),
('Shampoing', 'hygiene'),
('Sous vêtements', 'vetement'),
('T-shirt', 'vetement'),
('Pantalon', 'vetement'),
('Chaussettes', 'vetement'),
('Serviette de bain', 'autre'),
('Chargeur de téléphone', 'autre');

select * from essentiels;

CREATE TABLE items(id INT NOT NULL AUTO_INCREMENT, name VARCHAR(100),type VARCHAR(45),hot tinyint(1),cold tinyint(1),soleil tinyint(1),mauvais_temps tinyint(1),montagneux tinyint(1),plage tinyint(1),desert tinyint(1),urbain tinyint(1),rural tinyint(1),backpack tinyint(1),detente tinyint(1),automne_hiver tinyint(1),printemps_ete tinyint(1),image VARCHAR(100),commentaire VARCHAR(200), primary key(id));

INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Maillot de bains','vetement',1,0,1,0,0,1,0,1,1,1,1,0,1,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('K-way','vetement',1,1,0,1,1,0,0,1,1,1,1,1,0,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Short','vetement',1,0,1,0,0,1,1,1,1,1,1,0,1,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Pull','vetement',0,1,1,1,1,0,0,1,1,1,1,1,0,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Polaire','vetement',0,1,1,1,1,0,0,1,1,1,1,1,0,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Serviette de plage','autre',1,0,1,0,0,1,0,0,1,0,1,0,1,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Chaussures de ville','vetement',1,1,1,1,1,1,1,1,0,0,1,1,1,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Baskets','vetement',1,1,1,1,1,1,1,1,1,1,0,1,1,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Tongs','vetement',1,0,1,0,0,1,0,0,1,0,1,0,1,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Chaussures de randonnée','vetement',1,1,1,1,1,0,1,0,1,1,1,1,1,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Chaussette chaudes','vetement',0,1,1,1,1,0,0,1,1,1,1,1,0,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Gants','vetement',0,1,1,1,1,0,0,1,1,1,1,1,0,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Lunette de soleil','autre',1,1,1,0,1,1,1,1,1,1,1,1,1,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Bonnet','vetement',0,1,1,1,1,0,0,1,1,1,1,1,0,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Echarpe','vetement',0,1,1,1,1,0,0,1,1,1,1,1,0,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Veste Chaude','vetement',0,0,1,1,1,0,0,1,1,1,1,1,0,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Coupe vent','vetement',0,1,1,1,1,0,0,1,1,1,1,1,0,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Couteau suisse','autre',1,1,1,1,1,1,1,0,1,1,0,1,1,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Allume feu / briquet','autre',1,1,1,1,1,1,1,0,1,1,0,1,1,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Lampe frontale ','autre',1,1,1,1,1,1,1,0,1,1,0,1,1,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Mousqueton','autre',1,1,1,1,1,1,1,0,1,1,0,1,1,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Pyjama','vetement',1,1,1,1,1,1,1,1,1,0,1,1,1,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Gourde','autre',1,1,1,1,1,1,1,1,1,1,0,1,1,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Pochettes en plastique à zip','autre',1,1,1,1,1,1,1,1,1,1,0,1,1,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Mini kit de couture','autre',1,1,1,1,1,1,1,1,1,1,0,1,1,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Un sac isotherme léger','autre',1,1,1,1,1,1,1,1,1,1,0,1,1,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Tente','autre',1,1,1,1,1,1,1,1,1,1,0,1,1,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Sac de couchage','autre',1,1,1,1,1,1,1,1,1,1,0,1,1,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Tapis de sol','autre',1,1,1,1,1,1,1,1,1,1,0,1,1,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Drap de sac','autre',1,1,1,1,1,1,1,1,1,1,0,1,1,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Matériel de cuisine léger et compact','autre',1,1,1,1,1,1,1,1,1,1,0,1,1,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Bento / Gamelle / Couverts','autre',1,1,1,1,1,1,1,1,1,1,0,1,1,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Torchons / Liquide vaisselle','autre',1,1,1,1,1,1,1,1,1,1,0,1,1,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Corde pour étendre le linge','autre',1,1,1,1,1,1,1,1,1,1,0,1,1,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Sac pour laver le linge','autre',1,1,1,1,1,1,1,1,1,1,0,1,1,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Lessive en feuilles','autre',1,1,1,1,1,1,1,1,1,1,0,1,1,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Tenue de soirée','vetement',1,1,1,1,0,1,0,1,0,0,1,1,1,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Cosmétiques','hygiene',1,1,1,1,0,1,0,1,0,0,1,1,1,'','');
INSERT INTO items (name,type,hot,cold,soleil,mauvais_temps,montagneux,plage,desert,urbain,rural,backpack,detente,automne_hiver,printemps_ete,image,commentaire) VALUES ('Casquette / Bob / Chapeau','vetement',1,0,1,0,1,1,1,1,1,1,1,1,1,'','');

