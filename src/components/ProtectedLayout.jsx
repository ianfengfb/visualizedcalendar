import { Outlet, useNavigation } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./NavBar";

function ProtectedLayout () {
    const navigation = useNavigation();
    return (
        <Box sx={{ width: '100%' }}>
            <Navbar />
            {navigation.state === 'loading' && <p className="text-center">Loading...</p>}
            <Outlet />
        </Box>
    )
};

export default ProtectedLayout;