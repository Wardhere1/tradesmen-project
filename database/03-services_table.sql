CREATE TABLE Services_Table(
    service_id INT GENERATED ALWAYS AS IDENTITY,
    services VARCHAR(100) NOT NULL,
    image_url VARCHAR(100) NOT NULL,
    PRIMARY KEY(service_id) 
);
