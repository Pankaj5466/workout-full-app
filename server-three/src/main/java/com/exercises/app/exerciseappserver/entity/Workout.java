package com.exercises.app.exerciseappserver.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Workout {
    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String description; // TO-DO: change to text

    @ManyToMany(mappedBy = "workoutList")
    private List<WorkoutPlan> planList = new ArrayList<>();

    /*  As the join table has additional attribute, we cannot use this shortnotation to create table now.
    so we created seperate table WorkoutExercise.java to define the join table.

    @ManyToMany
    @JoinTable(name = "WORKOUT_EXERCISE",
            joinColumns = @JoinColumn(name = "WORKOUT_ID"),
            inverseJoinColumns = @JoinColumn(name = "EXERCISE_ID")
    )
    private List<Exercise> exerciseList = new ArrayList<>();*/

    @JsonIgnore
    List<Id> exerciseIds = new ArrayList<>();

}
