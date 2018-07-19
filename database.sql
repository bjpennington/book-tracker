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