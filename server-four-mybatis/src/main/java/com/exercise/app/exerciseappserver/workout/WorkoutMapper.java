package com.exercise.app.exerciseappserver.workout;
import org.apache.ibatis.annotations.Mapper;

import java.util.Map;

@Mapper
public interface WorkoutMapper {
    public Long insertWorkout(WorkoutDao workout);
    public WorkoutDao getWorkout(int id);

    public Long insertWorkoutExercise(WorkoutExerciseDto workoutExerciseDto);
}
