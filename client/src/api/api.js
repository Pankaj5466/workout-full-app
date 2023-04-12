
export async function getWorkoutDetail(id){
    return {
        name:'push-up',
        description:'push-up',
        id:id,
        exercises:[1,3,4,5]
    }
  return backendServer.get(`/workout/${id}`);
}



export async function saveWorkout(data) {
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