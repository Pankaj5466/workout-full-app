package com.exercises.app.exerciseappserver.entity.dto;

import java.util.ArrayList;
import java.util.List;

public class WorkoutDto {
    public Long id;
    public String name;
    public String description;
    public List<Long> exerciseIds = new ArrayList<>();
}
