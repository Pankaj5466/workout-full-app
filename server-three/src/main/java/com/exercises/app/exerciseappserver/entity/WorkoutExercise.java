package com.exercises.app.exerciseappserver.entity;

import jakarta.persistence.*;
import com.exercises.app.exerciseappserver.entity.Exercise;
import com.exercises.app.exerciseappserver.entity.Workout;

@Entity
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

    public WorkoutExercise(){}

    public Long getId() {
        return id;
    }

    public Workout getWorkout() {
        return workout;
    }

    public void setWorkout(Workout workout) {
        this.workout = workout;
    }

    public Exercise getExercise() {
        return exercise;
    }

    public void setExercise(Exercise exercise) {
        this.exercise = exercise;
    }

    public int getSequenceNo() {
        return sequenceNo;
    }

    public void setSequenceNo(int sequenceNo) {
        this.sequenceNo = sequenceNo;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }
// constructors, getters and setters
}