CREATE TABLE items 
(
    id	INT NOT NULL AUTO_INCREMENT,
    itemname	varchar(100) not null,
    essentiel	BOOL NOT NULL,
    temperature VARCHAR(10) NOT NULL,
    meteo	VARCHAR(10) NOT NULL,
    montagneux	BOOL NOT NULL,
    plage	BOOL NOT NULL,
    desert	BOOL NOT NULL,
    urbainourural	VARCHAR(10) NOT NULL,
    backpackouchill	VARCHAR(10) NOT NULL,
    univers	VARCHAR(10) NOT NULL,
    image	varchar(100) NULL,
    commentaire	varchar(100) NULL,
    PRIMARY KEY ('id')
);


INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Brosse à dents', '1', 'both', 'both', '1', '1', '1', 'both', 'both', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Dentifrice', '1', 'both', 'both', '1', '1', '1', 'both', 'both', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Déodorant', '1', 'both', 'both', '1', '1', '1', 'both', 'both', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Savon', '1', 'both', 'both', '1', '1', '1', 'both', 'both', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Shampoing', '1', 'both', 'both', '1', '1', '1', 'both', 'both', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Maillot de bains', '0', 'hot', 'soleil', '0', '1', '0', 'both', 'both', 'ete', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('K-way', '0', 'both', 'pluie', '1', '0', '0', 'both', 'both', 'hiver', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Sous vêtements', '1', 'both', 'both', '1', '1', '1', 'both', 'both', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('T-shirt', '1', 'both', 'both', '1', '1', '1', 'both', 'both', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Pantalon', '1', 'both', 'both', '1', '0', '1', 'both', 'both', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Short', '0', 'hot', 'soleil', '0', '1', '1', 'both', 'both', 'ete', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Pull', '0', 'cold', 'both', '1', '0', '0', 'both', 'both', 'hiver', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Polaire', '0', 'cold', 'both', '1', '0', '0', 'both', 'both', 'hiver', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Serviette de plage', '0', 'hot', 'soleil', '0', '1', '0', 'rural', 'chill', 'ete', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Serviette de bain', '1', 'both', 'both', '1', '1', '1', 'both', 'both', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Chaussures de ville', '0', 'both', 'both', '1', '1', '1', 'urbain', 'chill', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Baskets', '0', 'both', 'both', '1', '1', '1', 'both', 'backpack', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Tongs', '0', 'hot', 'soleil', '0', '1', '0', 'rural', 'chill', 'ete', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Chaussures de randonnée', '0', 'both', 'both', '1', '0', '1', 'rural', 'both', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Chaussette chaude', '0', 'cold', 'both', '1', '0', '0', 'both', 'both', 'hiver', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Chaussette classique', '1', 'hot', 'both', '0', '1', '1', 'both', 'both', 'ete', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Gants', '0', 'cold', 'both', '1', '0', '0', 'both', 'both', 'hiver', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Lunette de soleil', '0', 'both', 'soleil', '1', '1', '1', 'both', 'both', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Bonnet', '0', 'cold', 'both', '1', '0', '0', 'both', 'both', 'hiver', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Echarpe', '0', 'cold', 'both', '1', '0', '0', 'both', 'both', 'hiver', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Couvre chef', '1', 'hot', 'soleil', '1', '1', '1', 'both', 'both', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Manteaux chaud', '0', 'cold', 'both', '1', '0', '0', 'both', 'both', 'hiver', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Chargeur de téléphone', '1', 'both', 'both', '1', '1', '1', 'both', 'both', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Coupe vent', '0', 'cold', 'both', '1', '0', '0', 'both', 'both', 'hiver', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Couteau suisse', '0', 'both', 'both', '1', '1', '1', 'rural', 'backpack', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Allume feu / briquet', '0', 'both', 'both', '1', '1', '1', 'rural', 'backpack', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Lampe frontale', '0', 'both', 'both', '1', '1', '1', 'rural', 'backpack', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Mousqueton', '0', 'both', 'both', '1', '1', '1', 'rural', 'backpack', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Pyjama', '0', 'both', 'both', '1', '1', '1', 'both', 'chill', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Gourde', '0', 'both', 'both', '1', '1', '1', 'both', 'backpack', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Pochettes en plastique à zip', '0', 'both', 'both', '1', '1', '1', 'both', 'backpack', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Mini kit de couture', '0', 'both', 'both', '1', '1', '1', 'both', 'backpack', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Un sac isotherme léger', '0', 'both', 'both', '1', '1', '1', 'both', 'backpack', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Tente', '0', 'both', 'both', '1', '1', '1', 'both', 'backpack', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Sac de couchage', '0', 'both', 'both', '1', '1', '1', 'both', 'backpack', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Tapis de sol', '0', 'both', 'both', '1', '1', '1', 'both', 'backpack', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Drap de sac', '0', 'both', 'both', '1', '1', '1', 'both', 'backpack', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Matériel de cuisine léger et compact', '0', 'both', 'both', '1', '1', '1', 'both', 'backpack', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Bento / Gamelle / Couverts', '0', 'both', 'both', '1', '1', '1', 'both', 'backpack', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Torchons / Liquide vaisselle', '0', 'both', 'both', '1', '1', '1', 'both', 'backpack', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Corde pour étendre le linge', '0', 'both', 'both', '1', '1', '1', 'both', 'backpack', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Sac pour laver le linge', '0', 'both', 'both', '1', '1', '1', 'both', 'backpack', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Lessive en feuilles', '0', 'both', 'both', '1', '1', '1', 'both', 'backpack', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Tenue de soirée', '0', 'both', 'both', '0', '1', '0', 'urbain', 'chill', '', 'reel', '', '');
INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire) VALUES ('Cosmétiques', '0', 'both', 'both', '0', '1', '0', 'urbain', 'chill', '', 'reel', '', '');

ALTER TABLE items
add categorie varchar(100) null;

ALTER TABLE items
add sexe VARCHAR(100);

INSERT INTO items (itemname, essentiel, temperature, meteo, montagneux, plage, desert, urbainourural, backpackouchill, saison, univers, image, commentaire, categorie, sexe) VALUES ('Crème Solaire', '0', 'both', 'soleil', '1', '1', '1', 'both', 'both', '', 'reel', '', '','hygiene')





UPDATE items SET categorie = 'hygiene' WHERE id = 1;
UPDATE items SET categorie = 'hygiene' WHERE id = 2;
UPDATE items SET categorie = 'hygiene' WHERE id = 3;
UPDATE items SET categorie = 'hygiene' WHERE id = 4;
UPDATE items SET categorie = 'hygiene' WHERE id = 5;
UPDATE items SET categorie = 'hygiene' WHERE id = 50;
UPDATE items SET categorie = 'hygiene' WHERE id = 48;
UPDATE items SET categorie = 'hygiene' WHERE id = 45;

UPDATE items SET categorie = 'vetement' WHERE id = 6;
UPDATE items SET categorie = 'vetement' WHERE id = 7;
UPDATE items SET categorie = 'vetement' WHERE id = 8;
UPDATE items SET categorie = 'vetement' WHERE id = 9;
UPDATE items SET categorie = 'vetement' WHERE id = 10;
UPDATE items SET categorie = 'vetement' WHERE id = 11;
UPDATE items SET categorie = 'vetement' WHERE id = 12;
UPDATE items SET categorie = 'vetement' WHERE id = 13;
UPDATE items SET categorie = 'vetement' WHERE id = 14;
UPDATE items SET categorie = 'vetement' WHERE id = 15;
UPDATE items SET categorie = 'vetement' WHERE id = 16;
UPDATE items SET categorie = 'vetement' WHERE id = 17;
UPDATE items SET categorie = 'vetement' WHERE id = 18;
UPDATE items SET categorie = 'vetement' WHERE id = 19;
UPDATE items SET categorie = 'vetement' WHERE id = 20;
UPDATE items SET categorie = 'vetement' WHERE id = 21;
UPDATE items SET categorie = 'vetement' WHERE id = 22;
UPDATE items SET categorie = 'vetement' WHERE id = 23;
UPDATE items SET categorie = 'vetement' WHERE id = 24;
UPDATE items SET categorie = 'vetement' WHERE id = 25;
UPDATE items SET categorie = 'vetement' WHERE id = 26;
UPDATE items SET categorie = 'vetement' WHERE id = 27;
UPDATE items SET categorie = 'vetement' WHERE id = 28;
UPDATE items SET categorie = 'vetement' WHERE id = 29;
UPDATE items SET categorie = 'vetement' WHERE id = 34;
UPDATE items SET categorie = 'vetement' WHERE id = 49;


UPDATE items SET categorie = 'autre' WHERE id = 30;
UPDATE items SET categorie = 'autre' WHERE id = 31;
UPDATE items SET categorie = 'autre' WHERE id = 32;
UPDATE items SET categorie = 'autre' WHERE id = 33;
UPDATE items SET categorie = 'autre' WHERE id = 34;
UPDATE items SET categorie = 'autre' WHERE id = 35;
UPDATE items SET categorie = 'autre' WHERE id = 36;
UPDATE items SET categorie = 'autre' WHERE id = 37;
UPDATE items SET categorie = 'autre' WHERE id = 38;
UPDATE items SET categorie = 'autre' WHERE id = 39;
UPDATE items SET categorie = 'autre' WHERE id = 40;
UPDATE items SET categorie = 'autre' WHERE id = 41;
UPDATE items SET categorie = 'autre' WHERE id = 42;
UPDATE items SET categorie = 'autre' WHERE id = 43;
UPDATE items SET categorie = 'autre' WHERE id = 44;
UPDATE items SET categorie = 'autre' WHERE id = 45;
UPDATE items SET categorie = 'autre' WHERE id = 46;
UPDATE items SET categorie = 'autre' WHERE id = 47;

CREATE TABLE destinations 
(
    id INT NOT NULL AUTO_INCREMENT,
    city    varchar(50),
    Chaud     TINYINT(1),
    Froid    TINYINT(1),
    Pluvieux    TINYINT(1),
    Ensoleillé    TINYINT(1),
    montagneux    TINYINT(1),
    plage    TINYINT(1),
    désert    TINYINT(1),
    urbainRural    varchar(10),
    backpackChill    varchar(10),
    PRIMARY KEY (id)
);

INSERT INTO destinations (Destination, Chaud , Froid, Pluvieux, Ensoleillé, montagneux, plage, désert, urbainRural, backpackChill) VALUES ('Maldive', 1, 0, 0, 1, 0, 1, 0, 'rural', 'chill');
INSERT INTO destinations (Destination, Chaud , Froid, Pluvieux, Ensoleillé, montagneux, plage, désert, urbainRural, backpackChill) VALUES ('New York(hiver)', 0, 1, 1, 1, 0, 0, 0, 'urbain', 'chill');
INSERT INTO destinations (Destination, Chaud , Froid, Pluvieux, Ensoleillé, montagneux, plage, désert, urbainRural, backpackChill) VALUES ('New York(été)', 1, 0, 1, 1, 0, 1, 0, 'urbain', 'chill');
INSERT INTO destinations (Destination, Chaud , Froid, Pluvieux, Ensoleillé, montagneux, plage, désert, urbainRural, backpackChill) VALUES ('Himalaya', 0, 1, 1, 1, 1, 0, 0, 'rural', 'backpack');
INSERT INTO destinations (Destination, Chaud , Froid, Pluvieux, Ensoleillé, montagneux, plage, désert, urbainRural, backpackChill) VALUES ('Sahara', 1, 0, 0, 1, 0, 0, 1, 'rural', 'backpack');
INSERT INTO destinations (Destination, Chaud , Froid, Pluvieux, Ensoleillé, montagneux, plage, désert, urbainRural, backpackChill) VALUES ('Laponie', 0, 1, 1, 1, 1, 0, 0, 'rural', 'backpack');