import React, { useEffect, useState } from "react";
import { Stack, Box, Paper, styled, Typography, Button, List, ListItem,ListItemButton,Divider } from "@mui/material";
import {KeyboardArrowLeft, KeyboardArrowRight, PreviewOutlined, Work, School, SportsBasketball, EditCalendar} from '@mui/icons-material';
import { useDispatch } from "react-redux";
import { authActions } from "../_actions/authActions";

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

    const [openDetails, setOpenDetails] = useState(false);

    useEffect(() => {
        dispatch(authActions.readAllUser());
    },[]);

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
                    {TITLE_ARR.map(item => (
                    <DailyBox key={item.date}>
                        <TitleBox>
                            <Typography sx={{color: '#474747'}}>{item.day}</Typography>
                            {!item.today && <DailyTitle >{item.date}</DailyTitle>}
                            {item.today && <DailyTitle sx={{backgroundColor: '#d2d2d2', borderRadius: '5px', padding: '0 5px'}}>{item.date}</DailyTitle>}
                        </TitleBox>
                        <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        aria-label="contacts"
                        >
                            <ListItem disablePadding>
                                <ListItemButton sx={{backgroundColor:'red'}}>
                                    <Typography><Work sx={{marginRight: '0.5rem'}}/>ssdfsf dfdf fsd fsd fsdfs fsd</Typography>
                                </ListItemButton>
                            </ListItem>
                            <Divider variant="middle" component="li" />
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => setOpenDetails(true)}>
                                    <Typography><School sx={{marginRight: '0.5rem'}}/>ssdfsf</Typography>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <Typography><SportsBasketball sx={{marginRight: '0.5rem'}}/>ssdfsf</Typography>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <Typography><EditCalendar sx={{marginRight: '0.5rem'}}/>ssdfsf</Typography>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding sx={{marginTop: '0.5rem'}}>
                                <ListItemButton>
                                    <Typography sx={{width: '100%', textAlign: 'center', color: '#8c8c8c', fontWeight: 'bold'}}>+ Record Time</Typography>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </DailyBox>))}
                </Stack>
            </Stack>
            {openDetails && 
            <Stack sx={{width: '30%'}}>

            </Stack>}

        </Stack>
    )
}

export {Calendar};