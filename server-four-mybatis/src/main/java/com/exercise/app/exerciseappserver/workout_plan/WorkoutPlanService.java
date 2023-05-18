package com.exercise.app.exerciseappserver.workout_plan;

import com.exercise.app.exerciseappserver.workout.WorkoutDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@Transactional
public class WorkoutPlanService {

    @Autowired
    private WorkoutPlanMapper workoutPlanMapper;

    public WorkoutPlanDto saveWorkoutPlan(WorkoutPlanDto workoutPlanDto) {

        //validaton + save to table1 + save to table2 (if neeeded)

        workoutPlanMapper.saveWorkoutPlan(workoutPlanDto);
        Long workout_paln_id = workoutPlanDto.id;

        for (int i = 0; i < workoutPlanDto.workoutList.size(); i++) {
            Long workout_id = workoutPlanDto.workoutList.get(i);

            Map<String, Long> mMap = new HashMap<>();
            mMap.put("workout_plan_id", workout_paln_id);
            mMap.put("workout_id", workout_id);

            workoutPlanMapper.saveWorkoutPlan_Workout(mMap);


        }
        return workoutPlanDto;

    }

    public WorkoutPlanDto getWorkoutPlan(Long id) {
        WorkoutPlanDto workoutPlanDto = new WorkoutPlanDto();

        workoutPlanDto = workoutPlanMapper.getWorkoutPlan(id);
        workoutPlanDto.workoutList = Arrays.stream(workoutPlanDto.aggWorkoutList.split(","))
                .map(Long::parseLong)
                .collect(Collectors.toList());

        //get from table1 + get from table2 (if neeeded)

        return workoutPlanDto;
    }
}
