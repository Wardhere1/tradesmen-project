CREATE TABLE Customer_Table(
    customer_id INT GENERATED ALWAYS AS IDENTITY,
    firstname VARCHAR(100) NOT NULL,
    surname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    mobile_number INT NOT NULL,
    postcode VARCHAR(10) NOT NULL,
    brief_description VARCHAR(500) NOT NULL,
    additional_comments VARCHAR(500) NOT NULL,
    customer_service VARCHAR(500) NOT NULL,
    PRIMARY KEY(customer_id)
);
