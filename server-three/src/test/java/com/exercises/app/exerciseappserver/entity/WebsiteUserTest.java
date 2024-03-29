package com.exercises.app.exerciseappserver.entity;

import com.exercises.app.exerciseappserver.ExerciseAppServerApplication;
import com.exercises.app.exerciseappserver.repository.WebsiteUserSpringDataRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(classes = ExerciseAppServerApplication.class)
class WebsiteUserTest {

    @Autowired
    private WebsiteUserSpringDataRepository userRepository;

    @Test
    public void testUserCreation(){
        WebsiteUser user = new WebsiteUser("Pankaj","Kumar","sample@gmail.com", LocalDate.parse( "1999-01-01"),70.12,170.2,'M');
    }

    @Test
    public void testUserLevelCreation() {
        WebsiteUser user = new WebsiteUser("Pankaj","Kumar","sample@gmail.com", LocalDate.parse( "1999-01-01"),70.12,170.2,'M'
                            ,"BEGINNER");

        userRepository.save(user);
    }
}