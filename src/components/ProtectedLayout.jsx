import { Outlet, useNavigation } from "react-router-dom";
import MainNavBar from "./MainNavBar";
import Navbar from "./NavBar";

function ProtectedLayout () {
    const navigation = useNavigation();
    return (
        <>
            <Navbar />
            {navigation.state === 'loading' && <p className="text-center">Loading...</p>}
            <Outlet />
        </>
    )
};

export default ProtectedLayout;