package com.exercise.app.exerciseappserver.workout;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface WorkoutMapper {
    public void insertWorkout(WorkoutDAO workout);
}
