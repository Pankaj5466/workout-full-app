package com.exercise.app.exerciseappserver.workout_plan;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/workout-plan")
public class WorkoutPlanController {

    @Autowired
    private WorkoutPlanService workoutPlanService;

    @PostMapping("/create")
    public WorkoutPlanDto createWorkoutPlan(@RequestBody WorkoutPlanDto workoutPlanDto){

        workoutPlanService.saveWorkoutPlan(workoutPlanDto);

        return workoutPlanDto;
    }

    @GetMapping("/get/{id}")
    public WorkoutPlanDto getWorkoutPlan(@PathVariable Long id){
        WorkoutPlanDto workoutPlanDto = new WorkoutPlanDto();

        workoutPlanDto = workoutPlanService.getWorkoutPlan(id);

        return workoutPlanDto;
    }
}
