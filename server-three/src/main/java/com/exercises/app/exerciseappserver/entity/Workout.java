package com.exercises.app.exerciseappserver.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Workout {
    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String description; // TO-DO: change to text
}
