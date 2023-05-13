package com.exercises.app.exerciseappserver.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class WorkoutPlan {
    @Id
    @GeneratedValue
    private Long id;


    private String name;
    private String description; // TO-DO: change to text

    /* IMP: defining foreign key here */
    /* when trying to save this entity, you just pass user object. Hibernate wil take care of user.id extraction & saving it in this table*/
    @ManyToOne
    private WebsiteUser user; //Only the user.id will be stored in actual table, but here in Hibernate we will have the whole user object.

    @ManyToMany
    @JoinTable(name = "PLAN_WORKOUT",
            joinColumns = @JoinColumn(name = "PLAN_ID"),
            inverseJoinColumns = @JoinColumn(name = "WORKOUT_ID")
    )
    @JsonIgnore
    private List<Workout> workoutList = new ArrayList<>();
    public List<Workout> getWorkoutList() {
        return workoutList;
    }

    public void setWorkoutList(List<Workout> workoutList) {
        this.workoutList = workoutList;
    }

    @Transient
    private List<Long> workoutIds = new ArrayList<>();

    public List<Long> getWorkoutIds() {
        return workoutIds;
    }

    public void setWorkoutIds(List<Long> workoutIds) {
        this.workoutIds = workoutIds;
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

    public WorkoutPlan(String name, String description, WebsiteUser user) {
        this.name = name;
        this.description = description;
        this.user = user;
    }

    public void setWebsiteUser(WebsiteUser user) {
        this.user = user;
    }

    public void addWorkout(Workout workout) {
        this.workoutList.add(workout);
    }

    public Long getId() {
        return id;
    }
}
