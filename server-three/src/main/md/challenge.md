
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

```