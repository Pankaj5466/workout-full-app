package com.exercises.app.exerciseappserver.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @RequestMapping(value="/user",method= RequestMethod.GET)
    public String getuser() {
        return "Hello World";
    }
}
