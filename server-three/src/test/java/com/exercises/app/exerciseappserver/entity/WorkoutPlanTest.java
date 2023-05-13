package com.exercises.app.exerciseappserver.entity;

import com.exercises.app.exerciseappserver.ExerciseAppServerApplication;
import com.exercises.app.exerciseappserver.repository.WebsiteUserSpringDataRepository;
import com.exercises.app.exerciseappserver.repository.WorkoutPlanSpringDataRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;

@SpringBootTest(classes = ExerciseAppServerApplication.class)
class WorkoutPlanTest {

    @Autowired
    private WebsiteUserSpringDataRepository userRepository;

    @Autowired
    private WorkoutPlanSpringDataRepository workoutPlanRepository;

    @Test
    public void testWorkoutPlanCreation(){

        WebsiteUser user = new WebsiteUser("Pankaj","Kumar","sample@gmail.com", LocalDate.parse( "1999-01-01"),70.12,170.2,'M'
                ,"BEGINNER");

        WebsiteUser savedUser = userRepository.save(user);

        WorkoutPlan workoutPlan = new WorkoutPlan("Workout Plan 1","This is a sample workout plan",savedUser);

        workoutPlanRepository.save(workoutPlan);
    }
}