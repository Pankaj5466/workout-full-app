CREATE TABLE USER_TABLE (
    ID INT ,
    NAME VARCHAR(255) ,
    EMAIL VARCHAR(255) ,
    PRIMARY KEY (ID)
);

CREATE TABLE workout (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(1000)
);