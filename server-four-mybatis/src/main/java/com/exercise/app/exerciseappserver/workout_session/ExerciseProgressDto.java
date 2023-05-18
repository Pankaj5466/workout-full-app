package com.exercise.app.exerciseappserver.workout_session;

import lombok.Data;

@Data
public class ExerciseProgressDto {
    public Long exercise_id;
    public int sequence_no;

    public double time_taken;
    public double calories_burned;
    public double rest_after_time;

}
