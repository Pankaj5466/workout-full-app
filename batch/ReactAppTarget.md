# We Could also clone fitnessprogramer.com + add over feature over it!!


# Pages
- Sign-In page
- Sign-up Page
- Dashboard Page
- In-Progress Excercise Page
- CreateWorkoutPage

- Excercise Detail Page


- useHttp custom hook
- validator during sign-up (using custom hook or simple maybe)
- redux as data storage OR customHook as redux store


## URL Protection & Routing
- Error Page (when user enter some wrong url)
- Redirect to login page if user is not signed-in (test: enter valid url manually)
- Show backend message, when any issue occurred in backend operation.
(backend will send error.message or success.message on each request)


## Things to include
- proper form desing + form submit handler on form + submit button + reading form data in simpler way(from JS course)
- input validation -> {use useInput hook validation pattern}
- http Hook -> {to get backend query}
- redux vs customRedux -> {how about both?}
- routing & switch -> 
    - Nested routing (user Router > 6.0)
- dynamic routing
- dynamic soring using route parameters
- module.css use
- unit testing + coverage ??
-  (REVIEW React Tutorial File to include more things here, which we must implement)

## App Features
- User can create a workoutPlan
- CreateWorkoutPage has add button, from where user can select all default workout + with modification.
- User can Re-Arrange day workout on createWorkoutPage [ADVANCE]
- user can re-arrange sigle excercise on day workout [ADVANCE]
- Start button on Dashboard to start today workout

- Save workout progress on backend & show same detail to user on Dashboard Calender.
- User is provided option to create their own excercise
- There is default one excercise of rest.
- each excercise can have restAfter field, which is set to 0 by default.

- Backend should be able to handle multiple user data & should be desinged in scalable way.
- In workout creation each excercise has `swap enable/disable` feature. 
Enabling which, you tell the application to swap the workout. (changes will be reflected in `getTodayWorout()` API only )

- `getTodayWorkout()` also returns today's stretching.
- On In-Progress workout page, there should be a `swap option` which should return alternative workout for that workout.
- There should a DO_NOT_SHOW this workout option also, selecting which the excercise should not get populated anywhere. (ADVANCE)

## API(s)
- getAllWorkout() <- return all workout
- getAllWorkoutWithFilter(targetMuscle,Equipment,difficulty) [ADVANCE]
- getTodayWorkout(day) -> dayExcercise + dayStretching
- getAlternativeWorkout(eID) -> {excerciseObject}
- saveWorkout(wholeWorkoutObject) -> wID
//User eID will be constant , rest user may change (using eID we will do analyist or search or other task)

- delteWorkout(wID)
- createWorkout ?

- sing_up_user
- sing_in (use JWT)

- editUserProfile



```js
/*

Pages:
-  workout start
-  workout create/edit
-  user sign in
-  user sign up
-  createWorkOut?
-  homePage
-  getTodayWorkout?

Features:
- swap current workout feature
- editable recommanded list?

*/
```
