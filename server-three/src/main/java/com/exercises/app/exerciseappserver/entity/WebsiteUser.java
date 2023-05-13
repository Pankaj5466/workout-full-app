package com.exercises.app.exerciseappserver.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
public class WebsiteUser {

    public int getId() {
        return id;
    }

    @Id
    @GeneratedValue
    private int id;

    public String getFirstName() {
        return firstName;
    }

    private String firstName;

    public String getLastName() {
        return lastName;
    }

    private String lastName;

    public LocalDateTime getCreatedDate() {
        return createdDate;
    }

    @CreationTimestamp
    private LocalDateTime createdDate;

    protected WebsiteUser() {

    }

    @Override
    public String toString() {
        return "WebsiteUser{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", createdDate=" + createdDate +
                '}';
    }

    public WebsiteUser(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
