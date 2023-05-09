package com.exercises.app.exerciseappserver;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class WebsiteUser {

    @Id
    @GeneratedValue
    int id;

    String firstName;

}
