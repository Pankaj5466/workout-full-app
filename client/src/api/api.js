import backendServer from "./axios-setup";
const testSetup  = true;

const dummyWorkoutList  = [
  {id:1, name:'chest', description:'push-up', exercises:[1,3,4,5]},
  {id:2, name:'arms', description:'pull-up', exercises:[1,3,4,5]},
  {id:3, name:'stomatch', description:'squat', exercises:[1,3,4,5]},
  {id:4, name:'legs', description:'deadlift', exercises:[1,3,4,5]},
];

export async function getWorkoutDetail(id){
  //TO-DO: handle page crash issue when id does not exist
  if(testSetup)
    return dummyWorkoutList.find(item => item.id == id); //IMP: use == so that, 1 =="1" can be evaluated as true

  return backendServer.get(`/workout/${id}`);
}

export async function getWorkoutList(){
  if(testSetup)
    return dummyWorkoutList;

  return backendServer.get("/workout/list");
}

export async function saveWorkout(data) {
}


export async function getExerciseDetails(id){
  if(testSetup)
    // return dummyWorkoutList.find(item => item.id == id); //IMP: use == so that, 1 =="1" can be evaluated as true
    return {
      id:1,
      name:'push-up',
      description:'push-up',
      sets:3,
      reps:10,
      weight:0,
      duration:0,
      rest:0,
      video:'https://www.youtube.com/watch?v=IODxDxX7oi4',
      image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com'
    }

  return backendServer.get(`/exercise/${id}`);
}
/*
export async function savePost(data) {
  const post = {
    title: data.get('title'),
    body: data.get('post-text'),
  };

  if (post.title.trim().length < 5 || post.body.trim().length < 10) {
    return { isError: true, message: 'Invalid input data provided.' };
  }

  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw response;
  }
  
}
*/