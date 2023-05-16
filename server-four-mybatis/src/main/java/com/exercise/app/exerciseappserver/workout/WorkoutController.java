package com.exercise.app.exerciseappserver.workout;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/workout")
public class WorkoutController {

    @Autowired
    private WorkoutService workoutService;

    @PostMapping("/create")
    public Long saveWorkout(@RequestBody WorkoutDao workout) {

        workoutService.saveWorkout(workout);
        return workout.id;
    }

    @GetMapping("/{id}")
    public WorkoutDao getWorkout(@PathVariable Long id) {
        WorkoutDao workoutDao = new WorkoutDao();

        workoutDao = workoutService.getWorkout(id);



        workoutService.getWorkout(id);
        return workoutDao;
    }

}