package com.exercises.app.exerciseappserver.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class WorkoutExercise {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "workout_id")
    private Workout workout;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "exercise_id")
    private Exercise exercise;

    private int sequenceNo;

    private Integer duration;

    public WorkoutExercise(Workout savedWorkout, Exercise exercise) {
        this.workout = savedWorkout;
        this.exercise = exercise;
    }

    // constructors, getters and setters
}