package com.exercises.app.exerciseappserver.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
public class WebsiteUser {

    @Id
    @GeneratedValue
    private int id;

    private String firstName;
    private String lastName;

    @CreationTimestamp
    private LocalDateTime createdDate;

    protected WebsiteUser() {

    }

    public WebsiteUser(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
