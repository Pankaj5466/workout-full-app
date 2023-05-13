package com.exercises.app.exerciseappserver.entity;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Workout {
    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String description; // TO-DO: change to text

    @ManyToMany(mappedBy = "workoutList")
    private List<WorkoutPlan> planList = new ArrayList<>();

}
