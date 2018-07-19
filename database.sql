CREATE DATABASE "book_collection";

CREATE TABLE "genres" (
	"id" SERIAL PRIMARY KEY,
	"genre_name" VARCHAR(150)
);

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

INSERT INTO "books" ("title", "author", "genre_id")
VALUES
('Jane Eyre', 'Charlotte Bronte', 1),
('Harry Potter and the Order of the Phoenix', 'J.K. Rowling', 1),
('The Boys in the Boat', 'Daniel James Brown', 3),
('The Secret Place', 'Tana French', 2);