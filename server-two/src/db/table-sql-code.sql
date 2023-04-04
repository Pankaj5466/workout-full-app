
DROP TABLE IF EXISTS website_user CASCADE;

CREATE TABLE website_user(
	id SERIAL NOT NULL,
	first_name VARCHAR(250),
	last_name VARCHAR(250),
	email VARCHAR(250),
	dob date,
	weight INTEGER,
	height INTEGER,
	gender CHAR(1),	
	CONSTRAINT pk_userid PRIMARY KEY (id),
	CONSTRAINT gender_check check(gender in ('F','M'))
-- 	CONSTRAINT fk_planid
);

DROP TABLE IF EXISTS workout_plan CASCADE;
CREATE TABLE workout_plan(
	id SERIAL NOT NULL,
	name VARCHAR(250) NOT NULL,
	details text,
	user_id INTEGER NOT NULL,
	CONSTRAINT pk_planid PRIMARY KEY (id),
	CONSTRAINT fk_userid FOREIGN KEY(user_id)
		REFERENCES website_user(id)
);

DROP TABLE IF EXISTS workout CASCADE;
CREATE TABLE workout(
	id SERIAL NOT NULL,
	name VARCHAR(250) NOT NULL,
	details text,
	CONSTRAINT pk_workoutid PRIMARY KEY (id)
);

DROP TABLE IF EXISTS exercise CASCADE;
CREATE TABLE exercise(
	id SERIAL NOT NULL,
	title VARCHAR(250) NOT NULL,
	subtitle VARCHAR(250),
	guide text,
	src VARCHAR(250) NOT NULL,
	CONSTRAINT pk_exercise PRIMARY KEY (id)
);

DROP TABLE IF EXISTS muscle CASCADE;
CREATE TABLE muscle(
	id SERIAL NOT NULL PRIMARY KEY,
	name VARCHAR(250) NOT NULL
);

DROP TABLE IF EXISTS equipment CASCADE;
CREATE TABLE equipment(
	id SERIAL NOT NULL PRIMARY KEY,
	name VARCHAR(250) NOT NULL
);


/* Now will create relationship */

DROP TABLE IF EXISTS exercise_muscle CASCADE;
CREATE TABLE exercise_muscle(
	exercise_id INTEGER NOT NULL,
	muscle_id INTEGER NOT NULL,
	CONSTRAINT fk_exerciseid FOREIGN KEY (exercise_id) 
		REFERENCES exercise(id),
	CONSTRAINT fk_muscleid FOREIGN KEY (muscle_id)
		REFERENCES muscle(id)
);

DROP TABLE IF EXISTS exercise_equipment CASCADE;
CREATE TABLE exercise_equipment(
	exercise_id INTEGER NOT NULL,
	equipment_id INTEGER NOT NULL,
	CONSTRAINT fk_exerciseid FOREIGN KEY (exercise_id) 
		REFERENCES exercise(id),
	CONSTRAINT fk_equipmentid FOREIGN KEY (equipment_id)
		REFERENCES equipment(id)
);

DROP TABLE IF EXISTS plan_workout CASCADE;
CREATE TABLE plan_workout(
	workout_plan_id SERIAL NOT NULL,
	workout_id INTEGER NOT NULL,
	
	CONSTRAINT fk_planid FOREIGN KEY (workout_plan_id)
		REFERENCES workout_plan(id),
	CONSTRAINT fk_workoutid FOREIGN KEY (workout_id)
		REFERENCES workout(id)
);

DROP TABLE IF EXISTS workout_exercise CASCADE;
CREATE TABLE workout_exercise(
	id SERIAL NOT NULL,
	workout_id INTEGER NOT NULL,
	exercise_id INTEGER NOT NULL,
	sequence_no INTEGER NOT NULL,
	duration INTEGER,
-- 	TO-DO: Add more
	CONSTRAINT pk_workout_exerciseid PRIMARY KEY(id),
	CONSTRAINT fk_workoutid FOREIGN KEY (workout_id)
		REFERENCES workout(id),
	CONSTRAINT fk_exerciseid FOREIGN KEY(exercise_id)
		REFERENCES exercise(id)
);

DROP TABLE IF EXISTS workout_session CASCADE;
CREATE TABLE workout_session(
	workout_exercise_id INTEGER NOT NULL,
	user_id INTEGER NOT NULL,
	time_taken INTEGER,
	CONSTRAINT fk_workout_exerciseid FOREIGN KEY (workout_exercise_id)
		REFERENCES workout_exercise(id),
	CONSTRAINT fk_userid FOREIGN KEY (user_id)
		REFERENCES website_user(id)
);