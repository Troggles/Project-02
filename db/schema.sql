DROP DATABASE IF EXISTS myWorkouts_DB;

CREATE DATABASE myWorkouts_DB;

USE myWorkouts_DB;

CREATE TABLE users (
	id INT AUTO_INCREMENT NOT NULL,
    username VARCHAR(255) NOT NULL,
    current_weight FLOAT,
    body_fat FLOAT,
    b3_total FLOAT,
    PRIMARY KEY(id)
);

CREATE TABLE workouts (
	id INT AUTO_INCREMENT NOT NULL,
    date_logged DATE,
    bench_sets INT,
    bench_reps INT,
    bench_max_weight INT,
    squat_sets INT,
    squat_reps INT,
    squat_max_weight INT,
    deadlift_sets INT,
    deadlift_reps INT,
    deadlift_max_weight INT,
    userId INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (userId)
		REFERENCES users(id)
);

CREATE TABLE stats (
    id INT AUTO_INCREMENT NOT NULL,
    date_stats DATE,
    new_weight FLOAT,
    new_body_fat FLOAT,
    new_b3_total FLOAT,
    PRIMARY KEY(id),
    FOREIGN KEY (userId)
        REFERENCES users(id)
);