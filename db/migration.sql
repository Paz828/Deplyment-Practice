DROP TABLE IF EXISTS wishlist;

CREATE TABLE wishlist(
    wl_id SERIAL PRIMARY KEY,
    wl_name VARCHAR (255),
    wl_price NUMERIC (4, 2)
);

INSERT INTO wishlist
    (wl_name, wl_price)
VALUES
    ('Starfall Chronicles', 29.99),
    ('Eternal Quest', 19.99),
    ('Legends of Valor', 39.99),
    ('Mystic Realms', 24.99),
    ('Shadowborn Saga', 49.99);