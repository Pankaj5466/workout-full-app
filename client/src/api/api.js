import backendServer from "./axios-setup";

const dummyWorkoutList  = [
  {id:1, name:'chest', description:'push-up', exercises:[1,3,4,5]},
  {id:2, name:'arms', description:'pull-up', exercises:[1,3,4,5]},
  {id:3, name:'stomatch', description:'squat', exercises:[1,3,4,5]},
  {id:4, name:'legs', description:'deadlift', exercises:[1,3,4,5]},
];

export async function getWorkoutDetail(id){
  //TO-DO: handle page crash issue when id does not exist
  return backendServer.get(`/workout/${id}`);
}

export async function getWorkoutList(){
  return backendServer.get("/workout/list");
}

export async function saveWorkout(data) {
}


export async function getExerciseDetails(id){

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