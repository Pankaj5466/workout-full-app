package com.exercise.app.exerciseappserver.workout;

import lombok.Data;

import java.util.List;

@Data
public class WorkoutDAO {
    public Long id;
    public String name;
    public String description;
    public List<Long> exerciseList;
}

/*DAO (Data Access Object) and DTO (Data Transfer Object)
* DAO (Data Access Object) and DTO (Data Transfer Object)*/