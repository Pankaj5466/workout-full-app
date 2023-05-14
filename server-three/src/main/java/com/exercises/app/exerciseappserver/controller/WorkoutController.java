package com.exercises.app.exerciseappserver.controller;

import com.exercises.app.exerciseappserver.entity.dto.WorkoutDto;
import com.exercises.app.exerciseappserver.entity.Exercise;
import com.exercises.app.exerciseappserver.entity.Workout;
import com.exercises.app.exerciseappserver.entity.WorkoutExercise;
import com.exercises.app.exerciseappserver.repository.ExerciseSpringDataRepository;
import com.exercises.app.exerciseappserver.repository.WorkoutExerciseSpringDataRepository;
import com.exercises.app.exerciseappserver.repository.WorkoutSpringDataRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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
    public Long createWorkout(@RequestBody WorkoutDto workoutDto){

        //(a)save multiple entry of workoutExercise
        // (b)add reverse side of relationship in workout,exercise table

        Workout workout = new Workout();
        workout.setName(workoutDto.name);
        workout.setDescription(workoutDto.description);



        for(int i=0;i<workoutDto.exerciseIds.size();i++){
            Long exerciseId = workoutDto.exerciseIds.get(i);

            WorkoutExercise workoutExercise = new WorkoutExercise();

            Exercise exercise = exerciseRepository.findById(exerciseId).get();
            //(a)
            workoutExercise.setExercise(exercise); //add exercise reference to workoutExecise table
            workoutExercise.setWorkout(workout); //add workout reference to workoutExecise table

            //(b)
            exercise.addWorkoutExercise(workoutExercise); //update the reverse relationship also
            workout.addWorkoutExercise(workoutExercise); //update the reverse relationship also

            workoutExerciseRepository.save(workoutExercise);
            //(mark1)
        }

        Workout savedWorkout = workoutRepository.save(workout);

        return savedWorkout.getId();
    }

    /*
        SELECT w.name, w.id, e.title, e.id FROM workout w
        INNER JOIN workout_exercise we ON we.workout_id = w.id
        INNER JOIN exercise e ON e.id = we.exercise_id
        WHERE w.id = 3
     */
    @GetMapping("/get/{id}")
    public WorkoutDto getWorkout(@PathVariable Long id){
        WorkoutDto workoutDto = new WorkoutDto();

        Workout workout =  workoutRepository.findById(id).get();

        workoutDto.exerciseIds = workout.getWorkoutExercise()
                .stream().map(e -> e.getExercise().getId())
                .collect(Collectors.toList());

        workoutDto.id = workout.getId();
        workoutDto.name = workout.getName();
        workoutDto.description = workout.getDescription();

        return workoutDto;

    }

    /*
        DELETE FROM workout_exercise we
        WHERE id IN(x,y,z,.)
     */
    @PostMapping("/update")
    public Long updateWorkout(@RequestBody WorkoutDto workoutDto){

        //delete from reverse side of relationship
        // delete from owner side of relationship
        //insert the updated value.

        Workout workout = workoutRepository.findById(workoutDto.id).get();

        //delete all the workoutExercise for this workout
        workoutExerciseRepository.deleteAll(workout.getWorkoutExercise());
//        workout.resetWorkoutExercise();


        //add new workoutExercise for this workout
        for(int i=0;i<workoutDto.exerciseIds.size();i++){
            Long exerciseId = workoutDto.exerciseIds.get(i);

            WorkoutExercise workoutExercise = new WorkoutExercise();

            Exercise exercise = exerciseRepository.findById(exerciseId).get();
            //(a)
            workoutExercise.setExercise(exercise); //add exercise reference to workoutExecise table
            workoutExercise.setWorkout(workout); //add workout reference to workoutExecise table

            //(b)
            exercise.addWorkoutExercise(workoutExercise); //update the reverse relationship also
            workout.addWorkoutExercise(workoutExercise); //update the reverse relationship also

            workoutExerciseRepository.save(workoutExercise);
            //(mark1)
        }

        //(marrk2: no need of below line, as workout object is already managed by JPA)
        //Workout savedWorkout = workoutRepository.save(workout);

        return workout.getId();
    }

    @PostMapping("/update-two/")
    public WorkoutDto updateWorkoutTwo(@RequestBody WorkoutDto workoutDto) {
        Workout workout = workoutRepository.findById(workoutDto.id).get();
        workout.setName(workoutDto.name);
        workout.setDescription(workoutDto.description);

        //delete old entry
        List<WorkoutExercise> oldWorkoutExercises = workout.getWorkoutExercise();
        List<Exercise> oldExercises = oldWorkoutExercises.stream()
                .map(we -> we.getExercise())
                .collect(Collectors.toList());

        List<Long> oldExerciseIds = oldExercises.stream()
                .map(e -> e.getId())
                .collect(Collectors.toList());
        System.out.println("oldExerciseIds: " + oldExerciseIds); //just for debug logs

        //go to individual exercise and remove the entry of workoutExercise from exercise.workoutExercise
        for (Exercise exercise : oldExercises) {
            exercise.removeWorkoutExercise(oldWorkoutExercises);
        }

        List<Exercise> exercises = exerciseRepository.findAllById(workoutDto.exerciseIds); //list of all exercise which this workout has
        List<WorkoutExercise> workoutExercises = new ArrayList<>();

        for (Exercise exercise : exercises) {
            //remove the entry of workoutExercise from exercise.workoutExercise
//            exercise.removeWorkoutExercise(workoutExercises);

            WorkoutExercise workoutExercise = new WorkoutExercise();

            workoutExercise.setWorkout(workout);
            workoutExercise.setExercise(exercise);

            workoutExercises.add(workoutExercise);
        }

        workout.setWorkoutExercise(workoutExercises);
        
        WorkoutDto retworkoutDto = new WorkoutDto();
        retworkoutDto.id = workout.getId();
        retworkoutDto.name = workout.getName();
        retworkoutDto.description = workout.getDescription();
        

        return retworkoutDto;
    }

}



/*
mark1: do i need to call exerciseRepository.update(exercise) at this point?

    Ans:No, you don't need to call exerciseRepository.update(exercise) inside the for loop because the exercise object
        is being retrieved from the database using exerciseRepository.findById(exerciseId).get().
        This means that any changes you make to exercise object will be automatically managed by JPA, and the changes will be persisted to the database when the transaction is committed at the end of the createWorkout method.
 */
