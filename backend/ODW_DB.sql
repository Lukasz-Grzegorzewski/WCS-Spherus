-- Active: 1675682828381@@127.0.0.1@3306@spherus
-- MySQL Script generated by MySQL Workbench
-- Wed Dec 14 15:57:59 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema spherus
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema spherus
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `spherus` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `spherus` ;

-- -----------------------------------------------------
-- Table `spherus`.`category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `spherus`.`category` ;

CREATE TABLE IF NOT EXISTS `spherus`.`category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO
  `spherus`.`category` (name)
VALUES
  ( 'astro' ),
  ( 'sf' ),
  (  'sfx' );

-- -----------------------------------------------------
-- Table `spherus`.`home`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `spherus`.`home` ;

CREATE TABLE IF NOT EXISTS `spherus`.`home` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `position` INT NOT NULL,
  `type` INT NOT NULL,
  `idLink` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO
  `spherus`.`home` (position, type, idLink )
VALUES
  ( '1', '1', '1' ),
  ( '3', '1', '3' ),
  ( '2', '2', '1' );

-- -----------------------------------------------------
-- Table `spherus`.`video_carousel`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `spherus`.`video_carousel` ;

CREATE TABLE IF NOT EXISTS `spherus`.`video_carousel` (
  `video_carousel_id` INT NULL DEFAULT NULL,
  `home_id` INT NULL DEFAULT NULL,
  INDEX `fk_home_id_idx` (`home_id` ASC) VISIBLE,
  INDEX `fk_video_carousel_id_idx` (`video_carousel_id` ASC) VISIBLE,
  CONSTRAINT `fk_home_id`
    FOREIGN KEY (`home_id`)
    REFERENCES `spherus`.`home` (`id`),
  CONSTRAINT `fk_video_carousel_id`
    FOREIGN KEY (`video_carousel_id`)
    REFERENCES `spherus`.`video` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO
  `spherus`.`video_carousel` (video_carousel_id, home_id )
VALUES
  ( '1', '1' ),
  ( '6', '1' ),
  ( '5', '1' ),
  ( '2', '1' ),
  ( '4', '1' ),
  ( '3', '1' ),
  ( '13', '2' ),
  ( '14', '2' ),
  ( '18', '2' ),
  ( '15', '2' ),
  ( '17', '2' ),
  ( '16', '2' );

-- -----------------------------------------------------
-- Table `spherus`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `spherus`.`user` ;

CREATE TABLE IF NOT EXISTS `spherus`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(255) NULL DEFAULT NULL,
  `firstname` VARCHAR(80) NOT NULL,
  `lastname` VARCHAR(80) NOT NULL,
  `nickname` VARCHAR(80) NOT NULL,
  `birthday` DATE NULL DEFAULT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `is_admin` TINYINT NOT NULL,
  `token` VARCHAR(256) NULL DEFAULT NULL,
  `token_start` DATE NULL DEFAULT NULL,
  `code_tmp` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO
  `spherus`.`user` (url, firstname, lastname, nickname, birthday, email, password, is_admin, token, token_start)
VALUES
  (
    'assets/images/avatars/1.jpg',
    'Lukasz',
    'Grzegorzewski',
    'Lukas',
    '1985-07-23',
    'luk@luk.com',
    '$argon2id$v=19$m=65536,t=5,p=1$uW0X1qEJWD7M48wIXnTKkA$knaEsBupxN1oCyoyM3SEwCoaHc2D3Bwj6ySQPH72wo4',
    1,
    'token_1',
    '2022-12-01'
  ),
  (
    'assets/images/avatars/2.jpg',
    'Nicolas',
    'Michel',
    'Nico',
    '1998-10-17',
    'nico@nico.com',
    '$argon2id$v=19$m=65536,t=5,p=1$uuWDP0e7/RVOYaLDFyB/6Q$ir0+Zby5A1SdWhXzWzCz4/+YiL21q/Jp7rrLS6eo9oA',
    1,
    'token_2',
    '2022-12-01'
  ),
  (
    'assets/images/avatars/3.jpg',
    'Edouard',
    'C',
    'Ed',
    '1983-05-12',
    'ed@ed.com',
    '$argon2id$v=19$m=65536,t=5,p=1$Rdguaav98Ua0ue28FKTVrQ$C5uLywCLmuXp4Ni5OonN3duJI6pVKeTDW2SD314vgFU',
    1,
    'token_3',
    '2022-12-01'
  ),
  (
    'assets/images/avatars/4.jpg',
    'D',
    'G',
    'Dani',
    '1988-01-01',
    'dani@dani.com',
    '$argon2id$v=19$m=65536,t=5,p=1$fN0iQfw2aYoFOrSXMU8A6Q$aX21q7guyYbk/drjbSCTd4paYussIKchl7tJS27V2fA',
    1,
    'token_4',
    '2022-12-01'
  ),
  (
    'assets/images/avatars/5.jpg',
    'Jonathan',
    'Scattolini',
    'Megakrash',
    '1980-02-02',
    'jscattolini@gmail.com',
    '$argon2id$v=19$m=65536,t=5,p=1$vN99MwcsPZrazM1lAen+0g$mI4VIGHa/kT/4ShiAyCp0OZF853+N+bTUAdHDN86mic',
    1,
    'token_5',
    '2022-12-01'
  );

-- -----------------------------------------------------
-- Table `spherus`.`video`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `spherus`.`video` ;

CREATE TABLE IF NOT EXISTS `spherus`.`video` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(255) NOT NULL,
  `description` VARCHAR(500) NOT NULL,
  `display` TINYINT NOT NULL,
  `title` VARCHAR(90) NOT NULL,
  `date` DATE NOT NULL,
  `playbackRangeStart` INT NOT NULL DEFAULT 0,
  `playbackRangeEnd` INT NOT NULL DEFAULT 6,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO
  `spherus`.`video` (url, description, display, title, date)
VALUES
  (
    '/assets/videos/astro/astro_earth_rotation.mp4',
    'Earth rotation with aurora borealis',
    1,
    'Earth Rotation 1',
    '1999-01-01'
  ),
  (
    '/assets/videos/astro/astro_earth_rotation_2.mp4',
    'Earth rotation 2',
    1,
    'Earth Rotation 2',
    '2005-01-01'
  ),
  (
    '/assets/videos/astro/astro_galaxy.mp4',
    'Turning galaxy',
    0,
    'Turning galaxy',
    '1993-01-01'
  ),
  (
    '/assets/videos/astro/astro_milkyway.mp4',
    'Milkyway from earth',
    0,
    'Milkyway',
    '2010-01-01'
  ),
  (
    '/assets/videos/astro/astro_nebula.mp4',
    'Nebula',
    1,
    'Nebula',
    '2015-01-01'
  ),
  (
    '/assets/videos/astro/astro_solarsytem_planets.mp4',
    'Solar system planets',
    0,
    'Solar System',
    '2020-01-01'
  ),
  (
    '/assets/videos/sf/sf_astronaut.mp4',
    'Astronaut',
    0,
    'Astronaut',
    '2022-01-01'
  ),
  (
    '/assets/videos/sf/sf_DNA.mp4',
    'DNA turning',
    1,
    'DNA',
    '2022-01-01'
  ),
  (
    '/assets/videos/sf/sf_futur_earth.mp4',
    'futur earth',
    0,
    'Futur Earth',
    '2012-01-01'
  ),
  (
    '/assets/videos/sf/sf_numbers.mp4',
    'numbers',
    1,
    'Numbers',
    '2011-01-01'
  ),
  (
    '/assets/videos/sf/sf_tunnel.mp4',
    'tunnel',
    0,
    'Tunnel',
    '2009-01-01'
  ),
  (
    '/assets/videos/sf/sf_ultimate_arm.mp4',
    'ultimate arm',
    1,
    'Ultimate Arm',
    '2017-01-01'
  ),
  (
    '/assets/videos/sfx/sfx_dot_effect.mp4',
    'dots effect',
    1,
    'Dot Effect',
    '2018-01-01'
  ),
  (
    '/assets/videos/sfx/sfx_ink_effect.mp4',
    'ink effect',
    0,
    'Ink Effect',
    '2011-01-01'
  ),
  (
    '/assets/videos/sfx/sfx_ink2_effect.mp4',
    'ink effect 2',
    0,
    'Ink Effect 2',
    '2014-01-01'
  ),
  (
    '/assets/videos/sfx/sfx_smoke_effect.mp4',
    'smoke effect',
    1,
    'Smoke effect',
    '2011-01-01'
  ),
  (
    '/assets/videos/sfx/sfx_sparke.mp4',
    'sparke',
    0,
    'Sparke',
    '2011-01-01'
  ),
  (
    '/assets/videos/sfx/sfx_waterdrop.mp4',
    'waterdrop',
    1,
    'Waterdrop',
    '2011-01-01'
  ),
  (
    '/assets/videos/Ambiance_chutedeau.mp4',
    'A nice Tropical waterfall',
    0,
    'tropical waterfall',
    '2023-01-01'
  ),
  (
    '/assets/videos/Ambiance_montagne.mp4',
    'A nice Mountain view',
    1,
    'Mountain view',
    '2023-01-01'
  ),
  (
    '/assets/videos/Ambiance_plage.mp4',
    'A nice Beach view',
    1,
    'Beach view',
    '2023-01-01'
  ),
  (
    '/assets/videos/Ambiance_playasunset.mp4',
    ' A nice Playa sunset',
    1,
    'Playa sunset',
    '2023-01-01'
  );

-- -----------------------------------------------------
-- Table `spherus`.`favorites`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `spherus`.`favorites` ;

CREATE TABLE IF NOT EXISTS `spherus`.`favorites` (
  `user_id` INT NOT NULL,
  `video_fav_id` INT NOT NULL,
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  INDEX `video_fav_id_idx` (`video_fav_id` ASC) VISIBLE,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `spherus`.`user` (`id`),
  CONSTRAINT `video_fav_id`
    FOREIGN KEY (`video_fav_id`)
    REFERENCES `spherus`.`video` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Table `spherus`.`display_fixtures`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `spherus`.`display_fixtures` ;

CREATE TABLE IF NOT EXISTS `spherus`.`display_fixtures` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `display` TINYINT DEFAULT FALSE NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO
  `spherus`.`display_fixtures` (name)
VALUES
  ( 'Popular videos' );

-- -----------------------------------------------------
-- Table `spherus`.`fixtures`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `spherus`.`fixtures` ;

CREATE TABLE IF NOT EXISTS `spherus`.`fixtures` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fk_fix_video_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  CONSTRAINT FK_videoID
    FOREIGN KEY (`fk_fix_video_id`)
    REFERENCES `spherus`.`video` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO
  `spherus`.`fixtures` (fk_fix_video_id)
VALUES
  ( '2' ),
  ( '18' ),
  ( '8' ),
  ( '4' );

-- -----------------------------------------------------
-- Table `spherus`.`hero_slider`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `spherus`.`hero_slider` ;

CREATE TABLE IF NOT EXISTS `spherus`.`hero_slider` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fk_video` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_vid`
    FOREIGN KEY (`id`)
    REFERENCES `spherus`.`video` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO
  `spherus`.`hero_slider` (fk_video)
VALUES
('16'),
('14'),
('6');
  
-- -----------------------------------------------------
-- Table `spherus`.`publicity`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `spherus`.`publicity` ;

CREATE TABLE IF NOT EXISTS `spherus`.`publicity` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `url_image` VARCHAR(255) NOT NULL,
  `description` VARCHAR(500) NULL DEFAULT NULL,
  `url_link` VARCHAR(255) NOT NULL,
  `name` VARCHAR(155) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO
  `spherus`.`publicity` (url_image, description, url_link, name)
VALUES
  (
    '/assets/images/Pub11672837806144.jpg',
    'Ceci est la pub numéro un',
    'https://free.fr',
    'Pub1'
  ),
  (
    '/assets/images/Pub21672837847590.jpg',
    'Ceci est la pub numéro deux',
    'https://grosbill.com',
    'Pub2'
  );

-- -----------------------------------------------------
-- Table `spherus`.`video_category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `spherus`.`video_category` ;

CREATE TABLE IF NOT EXISTS `spherus`.`video_category` (
  `video_id` INT NULL DEFAULT NULL,
  `category_id` INT NULL DEFAULT NULL,
  INDEX `fk_category_id_idx` (`category_id` ASC) VISIBLE,
  INDEX `fk_video_id_idx` (`video_id` ASC) VISIBLE,
  CONSTRAINT `fk_category_id`
    FOREIGN KEY (`category_id`)
    REFERENCES `spherus`.`category` (`id`),
  CONSTRAINT `fk_video_id`
    FOREIGN KEY (`video_id`)
    REFERENCES `spherus`.`video` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO
  `spherus`.`video_category` (video_id, category_id)
VALUES
  ( 1, 1 ),
  ( 1, 2 ),
  ( 1, 3 ),
  ( 2, 1 ),
  ( 3, 1 ),
  ( 4, 1 ),
  ( 5, 1 ),
  ( 6, 1 ),
  ( 7, 2 ),
  ( 8, 2 ),
  ( 9, 2 ),
  ( 10, 2 ),
  ( 11, 2 ),
  ( 12, 2 ),
  ( 13, 3 ),
  ( 14, 3 ),
  ( 15, 3 ),
  ( 16, 3 ),
  ( 17, 3 ),
  ( 18, 3 );

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
