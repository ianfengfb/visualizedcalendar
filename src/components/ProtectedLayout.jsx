import { Outlet, useNavigation } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./NavBar";

function ProtectedLayout () {
    const navigation = useNavigation();
    return (
        <Box sx={{ width: '100vw', height: '100vh',display: 'flex', flexDirection: 'column'}}>
            <Navbar />
            {navigation.state === 'loading' && <p className="text-center">Loading...</p>}
            <Outlet />
        </Box>
    )
};

export default ProtectedLayout;