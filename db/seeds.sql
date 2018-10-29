USE myWorkouts_DB;

INSERT INTO Users
	(id, current_weight, body_fat, b3_total)
VALUES
	("Jeff", 180, 15, 585),
	("Mike", 215, 22, 810);

INSERT INTO Workouts
	(bench_sets, bench_reps, bench_max_weight,
	squat_sets, squat_reps, squat_max_weight,
	deadlift_sets, deadlift_reps, deadlift_max_weight,
	user_id);
VALUES
	(3, 8, 150, 5, 4, 200, 3, 5, 235, "Jeff"),
	(4, 8, 160, 5, 5, 210, 4, 5, 245, "Jeff"),
	(5, 5, 185, 3, 5, 230, 5, 5, 250, "Jeff"),
	(3, 8, 190, 5, 5, 235, 3, 6, 275, "Jeff"),
	(4, 8, 190, 4, 8, 240, 4, 8, 285, "Jeff"),
	(4, 8, 200, 5, 5, 275, 3, 5, 335, "Jeff"),

	(4, 8, 200, 4, 5, 275, 4, 5, 335, "Mike"),
	(3, 12, 205, 5, 5, 280, 5, 5, 340, "Mike"),
	(4, 9, 215, 3, 8, 290, 3, 5, 345, "Mike"),
	(4, 5, 215, 5, 5, 295, 3, 8, 345, "Mike"),
	(4, 8, 225, 4, 8, 300, 3, 5, 350, "Mike"),
	(4, 8, 235, 3, 5, 310, 5, 5, 360, "Mike");

INSERT INTO Stats 
	(new_weight, new_body_fat, new_b3_total, user_id);

VALUES
	(180, 15, 585 "Jeff"),
	(185, 16, 625 "Jeff"),
	(190, 16, 680, "Jeff"),
	(195, 17, 710, "Jeff"),
	(200, 18, 760, "Jeff"),
	(200, 16, 810, "Jeff"),

	(215, 22, 810, "Mike"),
	(220, 22, 820, "Mike"),
	(230, 23, 835, "Mike"),
	(235, 24, 870, "Mike"),
	(235, 23, 890, "Mike"),
	(230, 22, 905, "Mike");

	

