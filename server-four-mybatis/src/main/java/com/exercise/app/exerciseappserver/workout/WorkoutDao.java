package com.exercise.app.exerciseappserver.workout;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import java.util.List;

@Data
public class WorkoutDao {
    public Long id;
    public String name;
    public String description;
    public List<Long> exerciseList;

    @JsonIgnore
    public String aggExerciseList;
}

/*DAO (Data Access Object) and DTO (Data Transfer Object)
* DAO (Data Access Object) and DTO (Data Transfer Object)*/