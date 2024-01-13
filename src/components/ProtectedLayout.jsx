import { Outlet, useNavigation } from "react-router-dom";
import MainNavBar from "./MainNavBar";

function ProtectedLayout () {
    const navigation = useNavigation();
    return (
        <>
            <MainNavBar />
            {navigation.state === 'loading' && <p className="text-center">Loading...</p>}
            <Outlet />
        </>
    )
};

export default ProtectedLayout;