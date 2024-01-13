import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { readAllUser } from "../_reducers/UserSlice";

function Calender() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readAllUser());
    },[]);
    
    return (
        <>
            <h1>Calender</h1>
        </>
    )
}

export {Calender};