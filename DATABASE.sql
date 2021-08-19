CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(225),

);

CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL CHECK(price_range >=1 AND price_range <=5)
);

CREATE TABLE reviews (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL CHECK(rating >= 1 AND rating <= 5)
);

ALTER TABLE reviews ADD FOREIGN KEY(restaurant_id) REFERENCES restaurants(id);

SELECT restaurants.name,restaurants.location,restaurants.price_range,restaurants.id,AVG(reviews.rating) FROM restaurants JOIN reviews ON restaurants.id = reviews.restaurant_id GROUP BY (restaurants.name,restaurants.location,restaurants.price_range,restaurants.id);

SELECT restaurants.name,restaurants.location,restaurants.price_range,restaurants.id,AVG(reviews.rating),COUNT(reviews.rating) FROM restaurants LEFT JOIN reviews ON restaurants.id = reviews.restaurant_id GROUP BY (restaurants.name,restaurants.location,restaurants.price_range,restaurants.id);

SELECT restaurants.id, restaurants.name,restaurants.location,restaurants.price_range , AVG(reviews.rating),sum(reviews.rating) FROM restaurants LEFT JOIN reviews ON restaurants.id = reviews.restaurant_id GROUP BY (restaurants.name,restaurants.id,restaurants.location,restaurants.price_range);










SELECT restaurants.id,restaurants.name,restaurants.location,restaurants.price_range, TRUNC(AVG(reviews.rating)), SUM(reviews.rating) FROM restaurants LEFT JOIN reviews ON (restaurants.id = reviews.restaurant_id) GROUP BY (restaurants.id,restaurants.name,restaurants.location,restaurants.price_range);




SELECT restaurants.id,restaurants.name,restaurants.location,restaurants.price_range, TRUNC(AVG(reviews.rating)) as avg_rating , COUNT(reviews.rating) FROM restaurants LEFT JOIN reviews ON (restaurants.id = reviews.restaurant_id) GROUP BY(restaurants.name,restaurants.location,restaurants.price_range,restaurants.id);