package com.exercise.app.exerciseappserver.workout_session;

import lombok.Data;

import java.util.List;

@Data
public class WorkoutSessionDto {
    public Long workout_id;
    public Long user_id;

    public List<ExerciseProgressDto> exerciseProgressList;
}
