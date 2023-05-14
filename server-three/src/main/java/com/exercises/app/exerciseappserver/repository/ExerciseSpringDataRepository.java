package com.exercises.app.exerciseappserver.repository;

import com.exercises.app.exerciseappserver.entity.Exercise;
import com.exercises.app.exerciseappserver.entity.WorkoutExercise;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExerciseSpringDataRepository extends JpaRepository<Exercise,Long> {
}
