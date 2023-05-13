package com.exercises.app.exerciseappserver;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;

@SpringBootApplication
public class ExerciseAppServerApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(ExerciseAppServerApplication.class, args);
	}


	@Override
	public void run(String... args) throws Exception {

	}

}
