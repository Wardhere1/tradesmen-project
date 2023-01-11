CREATE Customer_Table(
    id INT GENERATED ALWAYS AS IDENTITY,
    firstname VARCHAR(100) NOT NULL,
    surename VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone_number INT NOT NULL,
    postcode VARCHAR(10) NOT NULL,
    services VARCHAR(100) NOT NULL,
    PRIMARY KEY(id) 
);
