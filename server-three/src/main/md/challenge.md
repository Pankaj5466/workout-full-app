
- What is the differance between @PathVariable, @RequestParam and @RequestBody?
```
@RequestParam
        use: is used mainly for filtering purposes
        ex:GET localhost:8080/books?author=georgemartin

@PathVariable:
        use: is used mainly for getting individual objects or piece of data
        ex: GET localhost:8080/books/1 

@RequestBody:
        use: is used mainly for saving object(s)(or piece of data)
        ex:POST localhost:8080/books/ With request body having following attributes:

                {
                  "author":"George Martin",
                  "Book":"Game of thrones"
                  ...
                  ...
                } 
```

- REST API convention.
``` 
Note: never use verb naming for endpoint, instead, use plural nouns. 
ex: So books/ is ideal instead of getbooks/.```
```

- do JackSon uses getter to serialize and setter to deserialize?
Can it work when there is not getter and setter for a field, but that field is public?


```
Yes, jackson uses getter to serialize and setter to deserialize when the filed is private.
If the field is private + there is no getter and setter, then jackson will not be able to serialize/deserialize that field.
What it means that, the field will not be part of the **json response/request.**
```

- Can we define check constrain in Entity? If yes, where should we define it, in Entity or in Table creation schema?
```
    yes, we can defin check constrain in Entity as follow.  
    ` @Column(columnDefinition = "char(1) check(gender in ('F','M'))")
    private char gender; `
    
    When a constraint is defined in the entity definition, it becomes part of the entity's metadata and is stored in the system catalog. 
    This can cause problems when modifying the constraint, as it may require changing the entity's metadata,
    
    For this reason, it is recommened to define the constraint in the table creation schema.
    

```

- Discuss WebsiterUser.gender , WebsiteUser.userLevel attribute. 
Why you have written your own getter,setter & constructor for userLevel that accept string instead of UserLevel class?
```
Its because i want to keep controller clean & keep using it as if userLevel is string.
```