import { useEffect } from "react";
import { useFetcher } from "react-router-dom";

const ExerciseRow = ({ eID }) => {

    const fetcher = useFetcher();

    useEffect(()=>{

        fetcher.submit(eID);

        fetcher.submit(
            // better: use fetcher.Form instead
            { eID: eID },
            { method: 'get', action: '/getExerciseDetails' }
          );


    },[fetcher])


    return (<p>Exercise ID: + ${exercise}</p>);
}