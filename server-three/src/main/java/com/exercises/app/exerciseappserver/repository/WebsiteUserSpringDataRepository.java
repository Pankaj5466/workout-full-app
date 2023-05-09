package com.exercises.app.exerciseappserver.repository;

import com.exercises.app.exerciseappserver.entity.WebsiteUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WebsiteUserSpringDataRepository extends JpaRepository<WebsiteUser,Long> {
}
