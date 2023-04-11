- use react-select for dropdown instead of select HTML element.

- Make ExceriseView & pass excercise exerciseID as dynamic id -> Query Backend for info & then show loader screen + after data show the details exercise data. 

- From ExerciseList page, clicking on any Excersie will change URL to of view & pass ID as parameter
- Utilizing data-* attribute to set something in HTML elemtn(like ID or other data) & use them on some operation (ex: onClick)

-exerciseList = exerciseList.workoutState.find(item => item.dayID === props.dayID)
                ?.exerciseList || [];


## VERY IMPORTANT DESIGN STEP:
code react page / component with empty data. (DO NOT link backend & frontend at same time, as it will make you switch betwwen frontend and backend code. And coding,understanding and expereminting in both part simulatenoulsy require a lot energy, and it will slow you down)

Hence, first code backend, verfiy the API via postman. Then code fronend in react with dummy data.
then, link both of them.

### Frontend Require:
 react, HTML, CSS, CSS in BEM style for less complexity, componey style code, store, hook , axios, table from MUI/other, site color, frontend design, dropdown effects, font-size setting, Modal , grid and flexbox layout, Route, search-params, cookie, session handling, centering content, ...extra

### Backend Require:
database-design,attribute defination, linking table, 
sql code, node-postgresql integration, table query, optimized table design
logger, api end point name, queyr table, use transaction, verify via postman, ...extra