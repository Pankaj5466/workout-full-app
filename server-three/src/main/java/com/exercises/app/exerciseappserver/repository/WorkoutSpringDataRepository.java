package com.exercises.app.exerciseappserver.repository;

import com.exercises.app.exerciseappserver.entity.Workout;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkoutSpringDataRepository extends JpaRepository<Workout,Long> {
}