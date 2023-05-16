DELETE FROM workout_exercise;
DELETE FROM workout;
DELETE FROM USER_TABLE;
DELETE FROM EXERCISE;

DROP TABLE IF EXISTS workout_exercise;
DROP TABLE IF EXISTS workout;
DROP TABLE IF EXISTS USER_TABLE;
DROP TABLE IF EXISTS EXERCISE;

CREATE TABLE USER_TABLE (
    ID SERIAL,
    NAME VARCHAR(255),
    EMAIL VARCHAR(255),
    PRIMARY KEY (ID)
);

CREATE TABLE EXERCISE (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(1000)
);

INSERT INTO EXERCISE (name, description)
VALUES
    ('running', 'running-description'),
    ('walking', 'walking-description'),
    ('pull-up', 'description'),
    ('push-up', 'description'),
    ('anulom vilom', 'description'),
    ('jumping jack', 'description'),
    ('punching', 'description');

CREATE TABLE workout (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(1000)
);

CREATE TABLE workout_exercise (
    workout_id INT NOT NULL,
    exercise_id INT NOT NULL,
    PRIMARY KEY (workout_id, exercise_id),
    FOREIGN KEY (workout_id) REFERENCES workout(id),
    FOREIGN KEY (exercise_id) REFERENCES exercise(id)
);
