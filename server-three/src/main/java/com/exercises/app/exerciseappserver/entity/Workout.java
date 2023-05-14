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
public class Workout {
    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String description; // TO-DO: change to text

    @ManyToMany(mappedBy = "workoutList")
    @JsonIgnore
    private List<WorkoutPlan> planList = new ArrayList<>();

    /*  As the join table has additional attribute, we cannot use this shortnotation to create table now.
    so we created seperate table WorkoutExercise.java to define the join table.

    @ManyToMany
    @JoinTable(name = "WORKOUT_EXERCISE",
            joinColumns = @JoinColumn(name = "WORKOUT_ID"),
            inverseJoinColumns = @JoinColumn(name = "EXERCISE_ID")
    )
    private List<Exercise> exerciseList = new ArrayList<>();*/

    @Transient
    private List<Long> exerciseIds = new ArrayList<>();


    public List<Long> getExerciseIds() {
        return exerciseIds;
    }

    @OneToMany(mappedBy = "workout", cascade = CascadeType.ALL)
    private List<WorkoutExercise> workoutExercise = new ArrayList<>();

    public Long getId() {
        return id;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<WorkoutPlan> getPlanList() {
        return planList;
    }

    public void setPlanList(List<WorkoutPlan> planList) {
        this.planList = planList;
    }

    public Workout() {

    }

    public void addWorkoutExercise(WorkoutExercise workoutExercise) {
        this.workoutExercise.add(workoutExercise);
    }

    public List<WorkoutExercise> getWorkoutExercise() {
        return workoutExercise;
    }

    public void setWorkoutExercise(List<WorkoutExercise> workoutExercise) {
        this.workoutExercise = workoutExercise;
    }

}
