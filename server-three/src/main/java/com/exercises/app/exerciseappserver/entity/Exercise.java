package com.exercises.app.exerciseappserver.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Exercise {

    @Id
    private Long id;

    private String title;
    private String subtitle;
    private String guide;
    private String url;
}
