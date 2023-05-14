package com.exercise.app.exerciseappserver.workout;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/workout")
public class WorkoutController {

    @Autowired
    private WorkoutMapper workoutMapper;

    @PostMapping("/create")
    public Long createWorkout(WorkoutDAO workout) {

        workoutMapper.insertWorkout(workout);
        return workout.id;
    }
}
