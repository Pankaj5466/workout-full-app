```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    age INTEGER NOT NULL,
    weight DECIMAL(5, 2) NOT NULL,
    height DECIMAL(5, 2) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    goal VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- workout-plan-table
--related to user table with "user created" relationship
CREATE TABLE workout_plan (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

-- workout table

--OPTION1 (creating a seperate relationship table)
/*
CREATE TABLE workout (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    difficulty VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE workout_plan_has_workout (
    workout_plan_id INTEGER REFERENCES workout_plan(id) ON DELETE CASCADE,
    workout_id INTEGER REFERENCES workout(id) ON DELETE CASCADE,
    PRIMARY KEY(workout_plan_id, workout_id)
);
*/

--OPTION2 (SELETECTEd) (storing the key in plan_id into workout itself)
CREATE TABLE workout (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    difficulty VARCHAR(255),
    workout_plan_id INTEGER REFERENCES workout_plan(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

--Exercise table
CREATE TABLE exercises (
    id INTEGER PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    subtitle VARCHAR(255) NOT NULL,
    guide TEXT NOT NULL,
    img VARCHAR(255),
    primary_muscle_group VARCHAR(255) NOT NULL,
    equipment VARCHAR(255) NOT NULL,
    target_muscle VARCHAR(255) NOT NULL,
    target_muscle_img VARCHAR(255),
    difficulty_level VARCHAR(255) NOT NULL,
    video VARCHAR(255),
    source VARCHAR(255),
    user_rating INT,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL
);

-- user exercise table
CREATE TABLE user_exercise (
  id SERIAL PRIMARY KEY,
  exercise_id INTEGER REFERENCES exercises(id),
  reps INTEGER,
  sets INTEGER,
  weight INTEGER,
  set_complete_time TIMESTAMP,
  set_gap_time TIMESTAMP,
  difficulty VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP
);



--Relationship table between workout & exercise 
CREATE TABLE workout_has_exercises (
    id SERIAL PRIMARY KEY,
    workout_id INTEGER REFERENCES workout(id) ON DELETE CASCADE,
    user_exercise_id INTEGER REFERENCES user_exercise(id) ON DELETE CASCADE
);

-- Record Each WorkoutSession
CREATE TABLE workout_session (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    workout_id INTEGER NOT NULL,
    workout_plan_id INTEGER NOT NULL,
    workout_time TIMESTAMP NOT NULL,
    user_feedback TEXT   
);
-- user_complete table
CREATE TABLE user_exercise_record (
    session_id INTEGER REFERENCES workout_session(id),
    exercise_id INTEGER REFERENCES exercises(id),
    date DATE,
    user_difficulty INTEGER,
    calorie INTEGER,
    weight FLOAT,
    rating INTEGER,
    duration INTEGER,
    PRIMARY KEY (session_id, exercise_id)
);

```

## Do we really need the 'workout_plan_has_workout' table?
>> Answer: 
If the workout_plan table will only contain a list of workouts and the information about the workout will be stored in the workout table, then you may not need a separate workout_plan_has_workout table. However, if you need to store additional information or attributes about the relationship between the workout_plan and workout tables, then it would be useful to have a separate table to store this information.

In our desing, we will add it, as we will test join also, and for design flexibility.

## should user_id not cascade delete, of table user_complete?
>> Answer:
If the progress data should be retained even if the user is deleted, then the foreign key should not have a cascade delete constraint.

## IMP: above sql code is generated with ChatGPT
Tell your requirement & attribute, and relations and entity to GPT and it will generate the PostGreSQL code for you.

## Code to insert/update/delete etc

```sql
-- user table

--insertion
INSERT INTO users(email,password,name,age,weight,height,gender,goal)
VALUES('pankaj.54666@gmail.com','Pankaj.9204', 'Pankaj Kumar', 27,73,170,'male','be fit')


--insertion into workout_plan
INSERT INTO workout_plan(name,description,user_id)
VALUES('jan-workout','test workoutout plan', 1)

```