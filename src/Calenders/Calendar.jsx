import React, { useEffect } from "react";
import { Stack, Box, Paper, styled, Typography, Button } from "@mui/material";
import {KeyboardArrowLeft, KeyboardArrowRight} from '@mui/icons-material';
import { useDispatch } from "react-redux";
import { authActions } from "../_actions/authActions";

function Calendar() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authActions.readAllUser());
    },[]);

    const ItemBlank = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        padding: '2rem',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const ItemDate = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        padding: '2rem',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    
    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
                <ItemBlank></ItemBlank>
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Stack direction='row'>
                        <Typography variant='h6'><KeyboardArrowLeft /></Typography>
                        <Typography variant='h6'><KeyboardArrowRight /></Typography>
                        <Typography variant='h6'>February 2024</Typography>
                        <Button variant="outlined">Outlined</Button>
                    </Stack>
                    <Stack direction='row' justifyContent='space-between' alignItems='center'>
                        <Typography variant='h6'>Week View</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}

export {Calendar};