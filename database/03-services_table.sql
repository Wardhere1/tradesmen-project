CREATE Services_Table(
    id INT GENERATED ALWAYS AS IDENTITY,
    services VARCHAR(100) NOT NULL,
    image_id VARCHAR(100) NOT NULL,
    PRIMARY KEY(id) 
);
