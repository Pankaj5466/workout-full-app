package com.exercises.app.exerciseappserver.entity;

import jakarta.persistence.*;
import org.apache.catalina.User;
import org.hibernate.annotations.Check;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.Target;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
public class WebsiteUser {

    @Id
    @GeneratedValue
    private int id;

    private String firstName;
    private String lastName;
    private String email;
    private LocalDate dob;
    private double weight; //TO-DO: change to double in db.md
    private double height;

    /* Defining constrain in Entity. (this is not best practice hence we will define it in table creation schema)
    @Column(columnDefinition = "char(1) check(gender in ('F','M'))")
    private char gender;
    */

    private char gender;

    @Enumerated(EnumType.STRING)
    private UserLevel userLevel;

/* IMP: we will provide our own getter,setter & constructor for @Enumerated attribute.
    Why? : So that we can continue writing controller code as if there this attribute is just a string.
     If we do not do it, then we need to pass Enum type to constructor & cast the post also to this before save,*/
    public void setUserLevel(String level) {
        this.userLevel = UserLevel.valueOf(level);
    }
    public UserLevel getUserLeve(){
        return this.userLevel;
    }

    @CreationTimestamp
    private LocalDateTime createdDate;
    @UpdateTimestamp
    private LocalDateTime updatedDate;

    public int getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public char getGender() {
        return gender;
    }

    public void setGender(char gender) {
        this.gender = gender;
    }

    public LocalDateTime getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(LocalDateTime createdDate) {
        this.createdDate = createdDate;
    }

    public LocalDateTime getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(LocalDateTime updatedDate) {
        this.updatedDate = updatedDate;
    }

    protected WebsiteUser() {

    }

    public WebsiteUser(String firstName, String lastName, String email, LocalDate dob, double weight, double height,char gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dob = dob;
        this.weight = weight;
        this.height = height;
        this.gender = gender;
    }

    public WebsiteUser(String firstName, String lastName, String email, LocalDate dob, double weight, double height, char gender, String userLevel) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dob = dob;
        this.weight = weight;
        this.height = height;
        this.gender = gender;
        this.userLevel = UserLevel.valueOf(userLevel);
    }
}
