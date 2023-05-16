package com.exercise.app.exerciseappserver.workout;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class WorkoutExerciseDto {
    public Long workoutId;
    public Long exerciseId;
    public int sequenceNo;

}
