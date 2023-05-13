package com.exercises.app.exerciseappserver.repository;

import com.exercises.app.exerciseappserver.entity.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExerciseSpringDataRepository extends JpaRepository<Exercise,Long> {
}
