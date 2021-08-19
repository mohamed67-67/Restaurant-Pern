-- CREATE DATABASE trial;

CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL CHECK(price_range >=1 AND price_range <=5)
);



CREATE TABLE reviews (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL CHECK(rating >= 1 AND rating <= 5),
    restaurant_id INT NOT NULL,
    FOREIGN KEY(restaurant_id) REFERENCES restaurants(id)
);






