import { HighlightOff, Cancel, CheckCircleOutline, CheckCircle } from '@mui/icons-material';
import { Fade, Popper, Stack, TextField, Paper, styled, FormControl, InputLabel,Select, MenuItem,FormControlLabel, FormGroup, Checkbox, IconButton } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { eventActions } from '../_actions/eventsActions';

    const theme = createTheme({
        palette: {
            time: {
                main: '#474747',
            },
        },
    });

    const PopperPaper = styled(Paper)(({ theme }) => ({
        backgroundColor: '#eae9e9',
        padding: '1rem',
    }));


function AddNewPoper(props) {

    const dispatch = useDispatch();
    
    const [addNewHover, setAddNewHover] = useState(false);
    const [closeHover, setCloseHover] = useState(false);
    const [event, setEvent] = useState('');
    const [type, setType] = useState('');
    const [duration, setDuration] = useState(dayjs('00:00', 'HH:mm'));
    const [mandatory, setMandatory] = useState(true);
    const [happy, setHappy] = useState('');
    const [meaning, setMeaning] = useState('');

    const saveIsDone = useSelector(state => state.createEvent.isDone);

    useEffect(() => {
        if (saveIsDone) {
            closePoper();
        }
    }, [saveIsDone]);

    const closePoper = () => {
        setCloseHover(false);
        setEvent('');
        setType('');
        setDuration(dayjs('00:00', 'HH:mm'));
        setMandatory(true);
        setHappy('');
        setMeaning('');
        props.setAnchorEl(null);
    }
    
    const happyChangeHandler = (value) => {
        const regex = /^-?\d*$/;
        if (!regex.test(value)) {
            return;
        }
        if (value > 10) {
            setHappy(10);
        } else if (value < -10) {
            setHappy(-10);
        } else {
            setHappy(value);
        }
    }

    const meaningChangeHandler = (value) => {
        const regex = /^-?\d*$/;
        if (!regex.test(value)) {
            return;
        }
        if (value > 10) {
            setMeaning(10);
        } else if (value < -10) {
            setMeaning(-10);
        } else {
            setMeaning(value);
        }
    }

    const addNewHandler = () => {
        let data = new FormData();
        data.append('title', event);
        data.append('event_type_id', 1);
        data.append('duration', duration.format('HH:mm'));
        data.append('mondatory', mandatory ? 1 : 0);
        data.append('happy', happy);
        data.append('meaning', meaning);
        data.append('date', dayjs().format('YYYY-MM-DD'));
        dispatch(eventActions.createEvent(data));
    }

    return (
        <ThemeProvider theme={theme}>
            <Popper
                open={Boolean(props.anchorEl)}
                anchorEl={props.anchorEl}
                placement={'bottom'}
                transition
            >
                {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                    <PopperPaper>
                        <Stack direction='row' spacing={2} alignItems='center'>
                            <TextField
                                required
                                id="outlined-required"
                                label="Event"
                                color="time"
                                size="small"
                                value={event}
                                onChange={(e) => setEvent(e.target.value)}
                                slotProps={{ textField: { size: 'small' } }}
                            />
                            <FormControl sx={{ mt: 1, minWidth: 120 }} size="small">
                                <InputLabel id="demo-select-small-label" color='time'>Type</InputLabel>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    label="Age"
                                    color='time'
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                >
                                    <MenuItem value="">
                                    <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <Stack direction='row' justifyContent='end' alignItems='center'>
                                <IconButton aria-label="add" size="large" onMouseOver={() => setAddNewHover(true)} onMouseOut={() => setAddNewHover(false)} onClick={addNewHandler}>
                                    {addNewHover ? <CheckCircle color='time'/> : <CheckCircleOutline color='time'/>}
                                </IconButton>
                                <IconButton aria-label="add" size="large" onMouseOver={() => setCloseHover(true)} onMouseOut={() => setCloseHover(false)} onClick={closePoper}>
                                    {closeHover ? <Cancel color='time'/> : <HighlightOff color='time'/>}
                                </IconButton>
                            </Stack>
                        </Stack>
                        <Stack direction='row' spacing={2} alignItems='center' mt={2}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['TimePicker', 'TimePicker']}>
                            <TimeField
                                label="Duration"
                                defaultValue={dayjs()}
                                format="HH:mm"
                                size='small'
                                value={duration}
                                onChange={(newValue) => setDuration(newValue)}
                            />
                            </DemoContainer>
                            </LocalizationProvider>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox checked={mandatory} onChange={e => setMandatory(e.target.checked)} />} label="Mondatory" slotProps={{typography: {fontSize: '0.7rem'}}} labelPlacement="bottom"/>
                            </FormGroup>
                        </Stack>
                        <Stack direction='row' spacing={2} alignItems='baseline' mt={2}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Happy (-10 ~ 10)"
                                color="time"
                                size="small"
                                value={happy}
                                onChange={(e) => happyChangeHandler(e.target.value)}
                                slotProps={{ textField: { size: 'small' } }}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Meaning (-10 ~ 10)"
                                color="time"
                                size="small"
                                value={meaning}
                                onChange={(e) => meaningChangeHandler(e.target.value)}
                                slotProps={{ textField: { size: 'small' } }}
                            />
                        </Stack>
                    </PopperPaper>
                </Fade>
                )}
            </Popper>
        </ThemeProvider>
    )
}

export {AddNewPoper}