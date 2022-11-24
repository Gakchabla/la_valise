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
    saison VARCHAR(10),
    univers	VARCHAR(10) NOT NULL,
    image	varchar(100) NULL,
    commentaire	varchar(100) NULL,
    PRIMARY KEY (id)
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



CREATE TABLE destinations 
(
    Destination	varchar(50),
    Chaud 	BOOL,
    Froid	BOOL,
    Pluvieux	BOOL,
    Ensoleillé	BOOL,
    montagneux	BOOL,
    plage	BOOL,
    désert	BOOL,
    urbainRural	varchar(10),
    backpackChill	varchar(10)
);

INSERT INTO destinations (Destination, Chaud , Froid, Pluvieux, Ensoleillé, montagneux, plage, désert, urbainRural, backpackChill) VALUES ('Maldive', 'VRAI', 'FAUX', 'FAUX', 'VRAI', 'FAUX', 'VRAI', 'FAUX', 'rural', 'chill');
INSERT INTO destinations (Destination, Chaud , Froid, Pluvieux, Ensoleillé, montagneux, plage, désert, urbainRural, backpackChill) VALUES ('New York(hiver)', 'FAUX', 'VRAI', 'VRAI', 'VRAI', 'FAUX', 'FAUX', 'FAUX', 'urbain', 'chill');
INSERT INTO destinations (Destination, Chaud , Froid, Pluvieux, Ensoleillé, montagneux, plage, désert, urbainRural, backpackChill) VALUES ('New York(été)', 'VRAI', 'FAUX', 'VRAI', 'VRAI', 'FAUX', 'VRAI', 'FAUX', 'urbain', 'chill');
INSERT INTO destinations (Destination, Chaud , Froid, Pluvieux, Ensoleillé, montagneux, plage, désert, urbainRural, backpackChill) VALUES ('Himalaya', 'FAUX', 'VRAI', 'VRAI', 'VRAI', 'VRAI', 'FAUX', 'FAUX', 'rural', 'backpack');
INSERT INTO destinations (Destination, Chaud , Froid, Pluvieux, Ensoleillé, montagneux, plage, désert, urbainRural, backpackChill) VALUES ('Sahara', 'VRAI', 'FAUX', 'FAUX', 'VRAI', 'FAUX', 'FAUX', 'VRAI', 'rural', 'backpack');
INSERT INTO destinations (Destination, Chaud , Froid, Pluvieux, Ensoleillé, montagneux, plage, désert, urbainRural, backpackChill) VALUES ('Laponie', 'FAUX', 'VRAI', 'VRAI', 'VRAI', 'VRAI', 'FAUX', 'FAUX', 'rural', 'backpack');
