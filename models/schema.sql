
CREATE DATABASE myWorkouts_DB;

USE myWorkouts_DB;

CREATE TABLE workouts (

	id INT AUTO_INCREMENT PRIMARY KEY,

    workout_name VARCHAR(255) NOT NULL,

    date_logged DATE,

    sets INT,

    reps INT,

    max_weight INT,

    userId INT,

    FOREIGN KEY (userId)

		REFERENCES users(id)

);

CREATE TABLE users (

	id INT AUTO_INCREMENT PRIMARY KEY,

    username VARCHAR(255) NOT NULL,

    current_weight FLOAT,

    body_fat FLOAT

);