
const WorkoutDetailPage = () =>{

}

export default WorkoutDetailPage;


// export const loader = ({ params }) => {
//     const postId = params.id;
  
//     return getPost(postId);
//   }


export function loader({ params }) {
    const postId = params.id;
  
    return getPost(postId);
  }