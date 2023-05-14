package com.exercise.app.exerciseappserver.workout;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/workout")
public class WorkoutController {

    @Autowired
    private WorkoutMapper workoutMapper;

    @PostMapping("/create")
    public Long createWorkout(@RequestBody WorkoutDAO workout) {

        workoutMapper.insertWorkout(workout);
        return workout.id;
    }

    @GetMapping("/{id}")
    public WorkoutDAO getWorkout(@PathVariable int id) {
        return workoutMapper.getWorkout(id);
    }

}