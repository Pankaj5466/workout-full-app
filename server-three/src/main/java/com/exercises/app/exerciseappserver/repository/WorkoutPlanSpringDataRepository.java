package com.exercises.app.exerciseappserver.repository;

import com.exercises.app.exerciseappserver.entity.WorkoutPlan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkoutPlanSpringDataRepository extends JpaRepository<WorkoutPlan,Long>{
}
