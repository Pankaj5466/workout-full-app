package com.exercise.app.exerciseappserver.workout;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
;import java.util.Arrays;
import java.util.stream.Collectors;


@Service
@Transactional
public class WorkoutService {

    @Autowired
    private WorkoutMapper workoutMapper;

    public int saveWorkout(WorkoutDao workoutDao) {

        workoutMapper.insertWorkout(workoutDao);
        Long workoutId = workoutDao.id; //id will be updated by mybatis

        for (int i=0;i<workoutDao.exerciseList.size();i++) {
            Long exerciseId  = workoutDao.exerciseList.get(i);
            workoutMapper.insertWorkoutExercise(new WorkoutExerciseDto(workoutId,exerciseId,i));
        }

        return 0;

    }

    public WorkoutDao getWorkout(Long id) {

        WorkoutDao workoutDao1 = workoutMapper.getWorkoutWithAggList(id);
        workoutDao1.exerciseList =  Arrays.stream(workoutDao1.aggExerciseList.split(","))
                .map(Long::parseLong)
                .collect(Collectors.toList());

        System.out.printf("\t::workout1: %s\n",workoutDao1);

        WorkoutDao workoutDao2 = workoutMapper.getWorkoutWithResultMap(id);
        System.out.printf("\t::workout2: %s\n",workoutDao2);

        return workoutDao2;

//        return workoutMapper.getWorkout(id);
    }
}
