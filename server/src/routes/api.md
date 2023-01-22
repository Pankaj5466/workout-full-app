# exercise_table API
-  '/exercise/get-exercise' -> exerciseObject
-

# workout (single day workout)
 TABLE: workout_table(wID,content:[eID array], name,description,difficulty)
- POST '/workout/save-workout' -> {createdObject}
- GET '/workout/get-workout' -> {workoutObject}
- PATCH '/workout/edit-workout' -> {editedWorkoutObject}

# workout-plan
TABLE: workout_plan_table(pID,content:[wID array],name,description, goal:['lose-weight','gain-muscle','be-fit'])

- 'workout-plan/get-plan'(pID) -> {}
- 'workout-plan/save-plan' -> {}
- 'workout-plan/edit-plan' -> {}

# workout/workout-plan/exercise Tracking creator 
TABLE creator_table(uID,type{eID,wID,pID},iD, private?) 
// (a) who has created this iD(wID/eID/pID) 
// (b) is is private created?

# user API
TABLE user_table(uID,firstName,lastName,email,dob,address(optional),
        weight,height,targetWeight,
        signedInDeviceList:[], hashedPassword:bcrypt
        )
API(s):
- user/sign-up(details) -> uID
- user/sign-in(email,password) -> JWT or cognito?
- user/get-workout-plan -> return list of pID object
- user/get-my-exercise (FOR STAGE 2)

# Tracking Progress
TABLE:
(a) ProgressRelationTable:  progress_relation_table(uID + pID + wID + eID -> pID)
(b) Progress Table: Record Progress of individual exercise
                    progress_table(pID,exerciseTime,userDifficulty)

API(s):
- /progress/update-exercise-progress(eID,uID,wID,pID,exerciseTime,userDifficulty) -> {true/false}