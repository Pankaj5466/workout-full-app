package com.exercise.app.exerciseappserver.workout_plan;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import java.util.List;

@Data
public class WorkoutPlanDto {
//    @JsonIgnore
    public Long id;

    public String name;
    public String description;
    public List<Long> workoutList;

    @JsonIgnore
    public String aggWorkoutList;
}
