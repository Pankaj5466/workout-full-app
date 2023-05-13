package com.exercises.app.exerciseappserver.controller;

import com.exercises.app.exerciseappserver.entity.WebsiteUser;
import com.exercises.app.exerciseappserver.entity.WorkoutPlan;
import com.exercises.app.exerciseappserver.repository.WebsiteUserSpringDataRepository;
import com.exercises.app.exerciseappserver.repository.WorkoutPlanSpringDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("workout")
public class WorkoutPlanController {

    @Autowired
    WebsiteUserSpringDataRepository userRepository;
    @Autowired
    WorkoutPlanSpringDataRepository workoutPlanRepository;

    @PostMapping("/create")
    public WorkoutPlan createWorkout(@RequestBody WorkoutPlan workoutPlan){

        Long userId = 1L; //TO-DO: get id from session
        WebsiteUser user = userRepository.findById(userId).get();

        workoutPlan.setWebsiteUser(user);

        WorkoutPlan savedPlan =  workoutPlanRepository.save(workoutPlan);
        return savedPlan;
    }
}
