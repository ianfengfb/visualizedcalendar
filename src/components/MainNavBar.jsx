import { NavLink } from "react-router-dom";

function MainNavBar () {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to='/' end>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to='/calendar'>Calendar</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Event Types
                        </a>
                        <ul className="dropdown-menu">
                            <li><NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to='/event-types'>Event Types List</NavLink></li>
                            <li><NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to='/event-types/create'>Create New Event Type</NavLink></li>
                        </ul>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    );
}

export default MainNavBar;