package com.exercises.app.exerciseappserver.entity;

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
@Getter
@Setter
public class Exercise {

    @Id
    private Long id;

    private String title;
    private String subtitle;
    private String guide;
    private String url;

    @OneToMany(mappedBy = "exercise")
    private List<WorkoutExercise> workoutExercise = new ArrayList<>();
}
