package com.exercises.app.exerciseappserver.repository;

import com.exercises.app.exerciseappserver.entity.Workout;
import com.exercises.app.exerciseappserver.entity.WorkoutExercise;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkoutExerciseSpringDataRepository extends JpaRepository<WorkoutExercise,Long>{


}
