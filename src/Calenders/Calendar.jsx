import { EditCalendar, KeyboardArrowLeft, KeyboardArrowRight, PreviewOutlined, School, SportsBasketball, Work, HighlightOff, Cancel, CheckCircleOutline, CheckCircle } from '@mui/icons-material';
import { Box, Button, Divider, Fade, List, ListItem, ListItemButton, Paper, Popper, Stack, TextField, Typography, styled, FormControl, InputLabel,Select, MenuItem,FormControlLabel, FormGroup, Checkbox, IconButton } from "@mui/material";


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../_actions/authActions";
import { AddNewPoper } from './AddNewPoper';
import { eventActions } from '../_actions/eventsActions';


    

    const DailyBox = styled(Stack)(({ theme }) => ({
        backgroundColor: '#fff',
        borderRight: '1px solid #d2d2d2',
        borderTop: '1px solid #d2d2d2',
        width: '14.3%',
    }));

    const ItemDate = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        padding: '1rem 3rem 1rem 3rem',
        textAlign: 'center',
        color: '#474747',
    }));

    const CustomOutlineButton = styled(Button)(({ theme }) => ({
        color: '#474747', 
        borderColor: '#474747', 
        '&:hover': {
        borderColor: '#000000', 
        color: '#000000',
        },
    }));

    const TitleBox = styled(Box)(({ theme }) => ({
        backgroundColor: '#eae9e9',
        padding: '1rem',
    }));

    const DailyTitle = styled(Typography)(({ theme }) => ({
        color: '#474747',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        width: 'fit-content',
    }));

function Calendar() {
    const TITLE_ARR = [
        {
            day: 'Mon',
            date: 12,
            today: false
        },
        {
            day: 'Tue',
            date: 13,
            today: false
        },
        {
            day: 'Wed',
            date: 14,
            today: true
        },
        {
            day: 'Thu',
            date: 15,
            today: false
        },
        {
            day: 'Fri',
            date: 16,
            today: false
        },
        {
            day: 'Sat',
            date: 17,
            today: false
        },
        {
            day: 'Sun',
            date: 18,
            today: false
        }
    ];

    const dispatch = useDispatch();

    const isFetching = useSelector(state => state.getEvents.isFetching);
    const events = useSelector(state => state.getEvents.events && state.getEvents.events.data ? state.getEvents.events.data : []);

    const [openDetails, setOpenDetails] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);


    useEffect(() => {
        dispatch(eventActions.getEvents());
    },[]);

    const handleClick = (event) => {
        if(anchorEl === null){
            setAnchorEl(event.currentTarget);
        }
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    
    return (
        <Stack direction='row' sx={{flexGrow: 1}}>
            <Stack sx={{width: openDetails ? '70%' : '100%'}}>
                {/* <ItemBlank></ItemBlank> */}
                <ItemDate>        
                    <Stack direction='row' justifyContent='space-between' alignItems='center'>
                        <Stack direction='row' justifyContent='space-between' alignItems='center'>
                            <Typography  sx={{cursor: 'pointer'}}><KeyboardArrowLeft /></Typography>
                            <Typography  sx={{cursor: 'pointer'}}><KeyboardArrowRight /></Typography>
                            <Typography ml={2} mr={2}>February 2024</Typography>
                            <CustomOutlineButton variant="outlined">Today</CustomOutlineButton>
                        </Stack>
                        <Stack direction='row' justifyContent='space-between' alignItems='center'>
                            <Typography sx={{cursor: 'pointer',color: '#474747'}}><PreviewOutlined />Week View</Typography>
                        </Stack>
                    </Stack>
                </ItemDate>
                <Stack direction='row' style={{ flexGrow: 1}}>
                    {TITLE_ARR.map((item, index) => 
                    {  
                        if (!isFetching) {
                        return (
                            <DailyBox key={index}>
                                <TitleBox>
                                    <Typography sx={{color: '#474747'}}>{item.day}</Typography>
                                    {!item.today && <DailyTitle >{item.date}</DailyTitle>}
                                    {item.today && <DailyTitle sx={{backgroundColor: '#d2d2d2', borderRadius: '5px', padding: '0 5px'}}>{item.date}</DailyTitle>}
                                </TitleBox>
                                <List
                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                aria-label="contacts"
                                >
                                    {events.map((event, ind) => {
                                        return (
                                            <>
                                                <ListItem disablePadding key={index + 'event' + ind}>
                                                    <ListItemButton onClick={() => setOpenDetails(true)}>
                                                        <Typography><Work sx={{marginRight: '0.5rem'}}/>{event.title}</Typography>
                                                    </ListItemButton>
                                                </ListItem>
                                                <Divider variant="middle" component="li" />
                                            </>
                                        )
                                    })}
                                    <ListItem disablePadding sx={{marginTop: '0.5rem'}}>
                                        <ListItemButton aria-describedby={'simple-'+index} onClick={(e) => handleClick(e)}>
                                            <Typography sx={{width: '100%', textAlign: 'center', color: '#8c8c8c', fontWeight: 'bold'}}>+ Record Time</Typography>
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </DailyBox>)} else {
                                return (
                                    <p>Loading...</p>
                                )
                            }
                        }
                )}
                </Stack>
                <AddNewPoper anchorEl={anchorEl} setAnchorEl={setAnchorEl}/>
            </Stack>
            {openDetails && 
            <Stack sx={{width: '30%'}}>

            </Stack>}

        </Stack>
    )
}

export { Calendar };
