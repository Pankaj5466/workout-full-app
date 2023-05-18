package com.exercise.app.exerciseappserver.workout_session;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Transactional
public class WorkoutSessionService {
    @Autowired
    private WorkoutSessionMapper workoutSessionMapper;

    public boolean saveWorkoutSession(WorkoutSessionDto workoutSessionDto) {

        List<WorkoutSessionDao> workoutSessionDaoList = new ArrayList<>();

        try {
            //Retrive workout_exercise_id

            for (int i = 0; i < workoutSessionDto.exerciseProgressList.size(); i++) {

                WorkoutSessionDao workoutSessionDao = new WorkoutSessionDao();

                Map<String, Long> mMap = new HashMap<>();

                Long exerciseId = workoutSessionDto.exerciseProgressList.get(i).exercise_id;
                int sequenceNo = workoutSessionDto.exerciseProgressList.get(i).sequence_no;

                workoutSessionDao.workout_exercise_id = workoutSessionMapper.getWorkoutExerciseId(workoutSessionDto.workout_id, exerciseId, sequenceNo);

                workoutSessionDao.user_id = 1L;
                workoutSessionDao.time_taken = workoutSessionDto.exerciseProgressList.get(i).time_taken;


                workoutSessionDaoList.add(workoutSessionDao);
            }

            workoutSessionMapper.insertWorkoutSessionList(workoutSessionDaoList);


            return true;
        } catch (Exception e) {
            e.printStackTrace();
            throw e;

        }
    }
}
