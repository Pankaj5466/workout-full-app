package com.exercise.app.exerciseappserver.workout_plan;

import org.apache.ibatis.annotations.Mapper;

import java.util.Map;

@Mapper
public interface WorkoutPlanMapper {
    public Long saveWorkoutPlan(WorkoutPlanDto workoutPlanDto);

    void saveWorkoutPlan_Workout(Map<String, Long> mMap);

    WorkoutPlanDto getWorkoutPlan(Long id);
}
