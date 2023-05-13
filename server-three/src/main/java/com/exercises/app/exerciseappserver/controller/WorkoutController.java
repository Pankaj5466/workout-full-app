package com.exercises.app.exerciseappserver.controller;

import com.exercises.app.exerciseappserver.entity.Workout;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("workout")
public class WorkoutController {

    @PostMapping("/create")
    public void createWorkout(@RequestBody Workout workout){

        System.out.println(workout);
    }
}
