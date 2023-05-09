package com.exercises.app.exerciseappserver.controller;

import com.exercises.app.exerciseappserver.entity.WebsiteUser;
import com.exercises.app.exerciseappserver.repository.WebsiteUserSpringDataRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    private WebsiteUserSpringDataRepository repository;

    @RequestMapping(value="get",method= RequestMethod.GET)
    public String getuser() {
        return "Hello World";
    }

    @RequestMapping(value="create",method = RequestMethod.POST)
    public String createUser(HttpServletRequest request){

        System.out.println(request);

        String firstName = request.getParameter("firstName");
        String lastName = request.getParameter("lastName");
        repository.save(new WebsiteUser(firstName,lastName));

        return "success";
    }
}
