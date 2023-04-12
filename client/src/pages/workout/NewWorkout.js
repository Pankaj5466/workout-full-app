
const NewWorkout = ()=>{
    return <>
        <p>This is new workout section</p>
        </>
}

export default NewWorkout;

export async function action({ request }) {
    const data = await request.formData();
  
    const validationError = await savePost(data);
    if (validationError) {
      return validationError;
    }
    return redirect('/workout');
  }