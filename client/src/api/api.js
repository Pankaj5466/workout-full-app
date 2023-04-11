
export async function getWorkoutDetail(id){
    return {
        name:'push-up',
        description:'push-up',
        id:id,
        exercises:[1,3,4,5]
    }
  return backendServer.get(`/workout/${id}`);
}