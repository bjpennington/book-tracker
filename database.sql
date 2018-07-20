-- create database
CREATE DATABASE "book_collection";

-- create "genres" table
CREATE TABLE "genres" (
	"id" SERIAL PRIMARY KEY,
	"genre_name" VARCHAR(150) UNIQUE NOT NULL
);

-- create "books" table referencing "genre" table
CREATE TABLE "books" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR(250),
	"author" VARCHAR(150),
	"image_url" TEXT,
	"publication_date" INT DEFAULT 2018,
	"number_of_pages" INT DEFAULT 1,
	"favorite" BOOLEAN DEFAULT FALSE,
	"genre_id" INT REFERENCES "genres"
);

-- Dummy Data:
INSERT INTO "genres"
("genre_name")
VALUES ('fiction'), ('mystery'), ('history'), ('biography');

INSERT INTO "books" ("title", "author", "genre_id", "image_url")
VALUES
('Harry Potter and the Order of the Phoenix', 'J.K. Rowling', 1, 'https://images-na.ssl-images-amazon.com/images/I/51lFAzVQUxL._SX342_BO1,204,203,200_.jpg'),
('The Boys in the Boat', 'Daniel James Brown', 3, 'http://www.danieljamesbrown.com/images/TheBoysintheBoat.png'),
('The Secret Place', 'Tana French', 2, 'https://images.gr-assets.com/books/1396671263l/20821043.jpg');