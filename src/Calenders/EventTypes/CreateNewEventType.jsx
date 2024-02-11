import React, { useState } from "react";
import './../CSS/style.css';
import { useDispatch } from "react-redux";
import { eventTypeActions } from "../../_actions/eventTypeActions";

function CreateNewEventType() {

    const dispatch = useDispatch();

    const [eventTypeName, setEventTypeName] = useState('');
    const [eventTypeColor, setEventTypeColor] = useState('#dc3545');


    const submitHander = () => {
        let data = new FormData();
        data.append('name', eventTypeName);
        data.append('color', eventTypeColor);
        dispatch(eventTypeActions.createEventType(data));
    }
    return (
        <>
            <div className="create-new-event-type-container">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 offset-md-3 create-new-event-type-form">
                            <h1>Create New Event Type</h1>
                            <div className="mb-3">
                                <label htmlFor="eventTypeName" className="form-label">Event Type Name</label>
                                <div className="name-container">
                                    <input type="text" value={eventTypeName} onChange={(e) => setEventTypeName(e.target.value)}/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="eventTypeDescription" className="form-label">Event Type Color</label>
                                <div className="color-container">
                                    <input type="color" value={eventTypeColor} onChange={(e) => setEventTypeColor(e.target.value)}/>
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary" onClick={submitHander}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export {CreateNewEventType};