import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <>
            <h1>Landing Page</h1>
            <p>
                Go to <Link to='/calendar'>the calendar</Link>
            </p>
        </>
    )
}

export {LandingPage};