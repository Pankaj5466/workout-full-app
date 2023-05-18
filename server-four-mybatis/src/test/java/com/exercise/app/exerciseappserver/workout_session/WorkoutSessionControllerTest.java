package com.exercise.app.exerciseappserver.workout_session;
import com.exercise.app.exerciseappserver.workout.WorkoutService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.exercise.app.exerciseappserver.workout.WorkoutController;
import com.exercise.app.exerciseappserver.workout.WorkoutDao;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.Arrays;

@ExtendWith(MockitoExtension.class)
//@RunWith(SpringRunner.class)
public class WorkoutSessionControllerTest {

    @InjectMocks
    private WorkoutSessionController workoutSessionController;
    @InjectMocks
    private WorkoutController workoutController;

    @Mock
    private WorkoutSessionService workoutSessionService;
    @Mock
    private WorkoutService workoutService;


    private MockMvc mockMvc;

    @BeforeEach
    public void setup() {
        mockMvc = MockMvcBuilders.standaloneSetup(workoutSessionController,workoutController).build();
    }

    @Test
    public void testUpdateWorkoutSession() throws Exception {

        ObjectMapper objectMapper = new ObjectMapper();

        //Create workout
        WorkoutDao workoutDao = new WorkoutDao();
        workoutDao.name = "Leg Workout";
        workoutDao.description = "Leg Workout desc";
        workoutDao.exerciseList = new ArrayList<>();
        workoutDao.exerciseList.addAll(Arrays.asList(1L, 2L, 3L));

        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.post("/workout/create")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(workoutDao)))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andReturn();

        String responseBody = result.getResponse().getContentAsString();
        JsonNode responseJson = objectMapper.readTree(responseBody);
        Long generatedId = responseJson.get("id").asLong();

        // Perform the PUT request to update the workout session
/*
        mockMvc.perform(MockMvcRequestBuilders.put("/workout-sessions/{sessionId}", sessionId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(sessionDto)))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id", Matchers.is(sessionId.intValue())))
                .andExpect(MockMvcResultMatchers.jsonPath("$.name", Matchers.is("Updated Session")))
                .andExpect(MockMvcResultMatchers

*/
        // Add more test methods for other controller methods...

    }
}
