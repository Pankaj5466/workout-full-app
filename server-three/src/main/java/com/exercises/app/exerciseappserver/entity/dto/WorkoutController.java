package com.exercises.app.exerciseappserver.entity.dto;

import com.exercises.app.exerciseappserver.controller.WorkoutDto;
import com.exercises.app.exerciseappserver.entity.Exercise;
import com.exercises.app.exerciseappserver.entity.Workout;
import com.exercises.app.exerciseappserver.entity.WorkoutExercise;
import com.exercises.app.exerciseappserver.repository.ExerciseSpringDataRepository;
import com.exercises.app.exerciseappserver.repository.WorkoutExerciseSpringDataRepository;
import com.exercises.app.exerciseappserver.repository.WorkoutSpringDataRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("workout")
@Transactional
public class WorkoutController {

    @Autowired
    private WorkoutSpringDataRepository workoutRepository;

    @Autowired
    private ExerciseSpringDataRepository exerciseRepository;

    @Autowired
    private WorkoutExerciseSpringDataRepository workoutExerciseRepository;

    @PostMapping("/create")
    public Workout createWorkout(@RequestBody Workout workout){

        /*
        (a) Retrive exercise entry from exercise_table
        (b) save it in workout variable
        (c) save workout.


         */

        Workout savedWorkout = workoutRepository.save(workout);
        for(int i=0;i<workout.getExerciseIds().size();i++){
            Long exerciseId = workout.getExerciseIds().get(i);

            Exercise exercise = exerciseRepository.findById(exerciseId).get();

            workoutExerciseRepository.save(new WorkoutExercise(savedWorkout,exercise));
        }

        return workout;
    }

    @GetMapping("/get/{id}")
    public WorkoutDto getWorkout(@PathVariable Long id){
        WorkoutDto workoutDto = new WorkoutDto();

        Workout workout =  workoutRepository.findById(id).get();

        workoutDto.exerciseIds = workout.getExerciseIds();
        workoutDto.id = workout.getId();

        return workoutDto;

    }
}
