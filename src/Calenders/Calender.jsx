import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../_actions/authActions";

function Calender() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authActions.readAllUser());
    },[]);
    
    return (
        <>
            <h1>Calender</h1>
        </>
    )
}

export {Calender};