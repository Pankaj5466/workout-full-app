package com.exercises.app.exerciseappserver.controller;

import com.exercises.app.exerciseappserver.entity.Exercise;
import com.exercises.app.exerciseappserver.entity.Workout;
import com.exercises.app.exerciseappserver.entity.WorkoutExercise;
import com.exercises.app.exerciseappserver.repository.ExerciseSpringDataRepository;
import com.exercises.app.exerciseappserver.repository.WorkoutExerciseSpringDataRepository;
import com.exercises.app.exerciseappserver.repository.WorkoutSpringDataRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
