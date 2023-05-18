package com.exercise.app.exerciseappserver.workout_session;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface WorkoutSessionMapper {
    void insertWorkoutSessionList(List<WorkoutSessionDao> workoutSessionDaoList);

    Long getWorkoutExerciseId(@Param("workoutId") Long workoutId, @Param("exerciseId") Long exerciseId, @Param("sequenceNo") int sequenceNo);
}
