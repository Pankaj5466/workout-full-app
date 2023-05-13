package com.exercises.app.exerciseappserver.controller;

import com.exercises.app.exerciseappserver.entity.WebsiteUser;
import com.exercises.app.exerciseappserver.repository.WebsiteUserSpringDataRepository;
import com.fasterxml.jackson.databind.util.JSONPObject;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("user")
public class UserController {


    @Autowired
    private WebsiteUserSpringDataRepository repository;

    //Class Functions Below
    @RequestMapping(value="get",method= RequestMethod.GET)
    public String getuser() {
        return "Hello Wohhh890rld";
    }

    //TO-DO: Change return type to int , instead of whole user object
//   @RequestMapping(value="create",method = RequestMethod.POST)
    @PostMapping("create")
    public WebsiteUser createUser(@RequestBody WebsiteUser user){


//        System.out.println(request);

        String firstName = user.getFirstName();
        String lastName = user.getLastName();

        WebsiteUser savedUser =  repository.save(new WebsiteUser(firstName,lastName));
        return savedUser; //TO-DO: return id instead of whole user object
    }

    //user/1
    @RequestMapping("{id}")
    public WebsiteUser getUserById(@PathVariable String id){
        return repository.findById(Long.parseLong(id)).get();
    }

    //user/search?name=Pankaj&age=19
    @GetMapping("search")
    public String searchUser(@RequestParam(name = "name", defaultValue = "Guest") String userName, @RequestParam int age){

        return userName + " " + age;
    }

    @RequestMapping(value="test",method = RequestMethod.GET)
    public Map<String,String> test(){

        return Map.of("test","test",
                "test2","test2",
                "test3","test393",
//                "test4","test4",
                "id","78");
    }

    @RequestMapping("list")
    public List<WebsiteUser> listUsers(){
        return repository.findAll();

    }
}
