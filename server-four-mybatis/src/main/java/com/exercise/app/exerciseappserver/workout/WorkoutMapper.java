package com.exercise.app.exerciseappserver.workout;
import org.apache.ibatis.annotations.Mapper;

import java.util.Map;

@Mapper
public interface WorkoutMapper {
    public void insertWorkout(WorkoutDao workout);
    public WorkoutDao getWorkout(Long id);

    public Long insertWorkoutExercise(WorkoutExerciseDto workoutExerciseDto);
}
