package com.exercise.app.exerciseappserver.workout_session;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/workout-session")
public class WorkoutSessionController {
    @Autowired
    private WorkoutSessionService workoutSessionService;

    @PostMapping("/update")
    public boolean updateWorkoutSession(@RequestBody WorkoutSessionDto workoutSessionDto) {

        try {
            workoutSessionService.saveWorkoutSession(workoutSessionDto);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
           throw e;
        }


    }
}
