import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { eventTypeActions } from "../../_actions/eventTypeActions";

function EventTypesPage() {

    const dispatch = useDispatch();

    const isFetching = useSelector(state => state.getEventTypes.isFetching);
    const eventTypeData = useSelector(state => state.getEventTypes.eventTypes && state.getEventTypes.eventTypes.data ? state.getEventTypes.eventTypes.data : []);

    useEffect(() => {
        dispatch(eventTypeActions.getEventTypes());
    },[]);
    return (
        <>
            {isFetching && <p className="text-center mt-5">Loading...</p>}
            {!isFetching &&
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Event Types</h1>
                        <div className="event-types-container">
                            <ul>
                                {eventTypeData.map((eventType, index) => {
                                    return (
                                        <li key={eventType.id} style={{backgroundColor: eventType.color}}>{eventType.name}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export {EventTypesPage};