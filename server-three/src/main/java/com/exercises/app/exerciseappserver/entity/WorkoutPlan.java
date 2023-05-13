package com.exercises.app.exerciseappserver.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

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
}
