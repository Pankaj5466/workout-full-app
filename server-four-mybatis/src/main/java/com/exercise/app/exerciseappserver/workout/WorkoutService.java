package com.exercise.app.exerciseappserver.workout;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;


@Service
@Transactional
public class WorkoutService {

    @Autowired
    private WorkoutMapper workoutMapper;

    public int saveWorkout(WorkoutDao workoutDao) {

        workoutMapper.insertWorkout(workoutDao);
        Long workoutId = workoutDao.id; //id will be updated by mybatis

        for (Long exerciseId : workoutDao.exerciseList) {
//            Map<String, Long> mMap = new HashMap<>();
//            mMap.put("workoutId", workoutId);
//            mMap.put("exerciseId", exerciseId);

            workoutMapper.insertWorkoutExercise(new WorkoutExerciseDto(workoutId,exerciseId));
        }

        return 0;

    }

    public WorkoutDao getWorkout(Long id) {

        return workoutMapper.getWorkout(id);
    }
}
