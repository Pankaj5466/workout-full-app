package com.exercises.app.exerciseappserver.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor

public class Exercise {

    @Id
    private Long id;

    private String title;
    private String subtitle;
    private String guide;
    private String url;

    @OneToMany(mappedBy = "exercise", cascade = CascadeType.ALL)
    private List<WorkoutExercise> workoutExercise = new ArrayList<>();

    public void addWorkoutExercise(WorkoutExercise workoutExercise) {
        this.workoutExercise.add(workoutExercise);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSubtitle() {
        return subtitle;
    }

    public void setSubtitle(String subtitle) {
        this.subtitle = subtitle;
    }

    public String getGuide() {
        return guide;
    }

    public void setGuide(String guide) {
        this.guide = guide;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public List<WorkoutExercise> getWorkoutExercise() {
        return workoutExercise;
    }

    public void removeWorkoutExercise(WorkoutExercise workoutExercise) {
        this.workoutExercise.remove(workoutExercise);
    }
}
