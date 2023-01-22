# Table Creation

```sql

-- Create exercise table
CREATE TABLE exercise_table (
	eID INT PRIMARY KEY,
	title text,
	subtitle text,
	guide TEXT [],
	img_href text,
	img_alt text,
	pmusclegroup TEXT [],
	equipment text[],
	
	target_muscle_img text,
	target_muslce_alt text
)

-- Create workout_table
CREATE TABLE workout_table(
	dID SERIAL PRIMARY KEY,
	name text NOT NULL,
	description text,
	difficulty text,
	content INT []
)

INSERT INTO day_table(dID,name,description,exerciselist)
VALUES
(123,'chest-workout','NA',ARRAY[12,23,45,56])


-- Create workout_plan_table
CREATE TABLE workout_plan_table(
	pID SERIAL PRIMARY KEY,
	name text NOT NULL,
	description text,
	difficulty text,
	goal text,
	content INT []
)

-- Create progress table
CREATE TABLE progress_table(
	pID INT PRIMARY KEY,
	time timestamp,
	difficulty INT NOT NULL
)


-- Create usertable
//latest postgresql
CREATE TABLE user_table (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    age INTEGER,
    weight INTEGER,
    height INTEGER,
    gender ENUM('male', 'female', 'other'),
    goal ENUM('weight_loss', 'muscle_gain', 'maintenance'),
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now()
);

CREATE TABLE user_table (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    age INTEGER,
    weight INTEGER,
    height INTEGER,
    gender VARCHAR(255),
    goal VARCHAR(255),
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now(),
    CHECK (gender IN ('male', 'female', 'other'))
);

-- Creator Table
CREATE TABLE creator_table(
	creator_id SERIAL PRIMARY KEY,
	user_id INT,
	content_type text,
	content_id INT
)
-- Specifying FK https://stackoverflow.com/questions/28558920/postgresql-foreign-key-syntax

CREATE TABLE progress_relation_table(
	pID INTEGER REFERENCES progress_table(pID) NOT NULL,
	uID INTEGER REFERENCES user_table(uID) NOT NULL,
	eID INTEGER REFERENCES exercise_table,
	dID INTEGER REFERENCES day_table
)
```