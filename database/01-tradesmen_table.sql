CREATE Trademan_Table(
    tradesman_id INT GENERATED ALWAYS AS IDENTITY,
    firstname VARCHAR(100) NOT NULL,
    surename VARCHAR(100) NOT NULL,
    email VARCHAR(1000) NOT NULL,
    phone_number INT NOT NULL,
    postcode VARCHAR(10) NOT NULL,
    profession VARCHAR(100) NOT NULL,
    biography VARCHAR(1000) NOT NULL,
    image_id VARCHAR(100) NOT NULL,
    services_id INT NOT NULL,
    PRIMARY KEY(tradesman_id),
    FOREIGN KEY(services_id) REFERENCES Services_Table(service_id)
);
