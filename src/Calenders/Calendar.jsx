import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../_actions/authActions";

function Calendar() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authActions.readAllUser());
    },[]);
    
    return (
        <>
            <h1>Calendar</h1>
        </>
    )
}

export {Calendar};