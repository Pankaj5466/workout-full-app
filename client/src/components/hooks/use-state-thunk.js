import { useState } from "react";


const useStateThunk = (initialState) => {
    const [state, dispatch] = useState(initialState);

    const dispatchThunk = (action) => {
        if (typeof action === 'function') {
            action(dispatch);
        } else {
            dispatch(action);
        }
    };
    return [state, dispatchThunk];
}

export default useStateThunk;