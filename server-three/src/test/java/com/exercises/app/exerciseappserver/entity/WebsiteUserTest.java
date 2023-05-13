package com.exercises.app.exerciseappserver.entity;

import org.junit.jupiter.api.Test;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.*;

class WebsiteUserTest {

    @Test
    public void testUserCreation(){
        WebsiteUser user = new WebsiteUser("Pankaj","Kumar","sample@gmail.com", LocalDate.parse( "1999-01-01"),70.12,170.2,'M');
    }

    @Test
    public void testUserLevelCreation() {
        WebsiteUser user = new WebsiteUser("Pankaj","Kumar","sample@gmail.com", LocalDate.parse( "1999-01-01"),70.12,170.2,'M'
                            ,"BEGINNER");

    }
}