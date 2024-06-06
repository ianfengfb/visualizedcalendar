import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { eventTypeActions } from "../../_actions/eventTypeActions";
import { Stack, Accordion, AccordionSummary, AccordionDetails, Typography, Button, TableContainer, Table, Box, TableBody, TableRow, TableCell, TextField, styled  } from "@mui/material";
import { ExpandMore, Edit, DeleteForever, CheckCircle } from "@mui/icons-material";
import { ColorPicker } from "material-ui-color";
import { createTheme, ThemeProvider } from "@mui/material/styles";

    const CustomContainedButton = styled(Button)(({ theme }) => ({
        color: '#ffffff', 
        backgroundColor: '#474747', 
        '&:hover': {
        backgroundColor: '#eae9e9', 
        color: '#000000',
        },
    }));

    const theme = createTheme({
        palette: {
            time: {
                main: '#474747',
            },
        },
    });

function EventTypesPage() {

    const dispatch = useDispatch();

    const isFetching = useSelector(state => state.getEventTypes.isFetching);
    const eventTypeData = useSelector(state => state.getEventTypes.eventTypes && state.getEventTypes.eventTypes.data ? state.getEventTypes.eventTypes.data : []);
    const isDone = useSelector(state => state.createEventType.isDone);

    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [isEdit, setIsEdit] = useState([]);
    const [tempEventType, setTempEventType] = useState([]);

    useEffect(() => {
        dispatch(eventTypeActions.getEventTypes());
    },[]);

    useEffect(() => {
        if (isDone) {
            setName('');
            setColor('');
        }
    },[isDone]);

    useEffect(() => {
        setIsEdit(eventTypeData.map(() => false));
        setTempEventType([...eventTypeData]);
    },[eventTypeData]);

    console.log('isEdit', tempEventType);

    const editTypeHandler = (index) => {
        let temp = [...isEdit];
        temp[index] = true;
        setIsEdit(temp);
    }

    const editNameHandler = (value, index) => {
        const tmp = tempEventType.map((item, i) => {
            if (i === index) {
                return {...item, name: value};
            }
            return item;
        });
        setTempEventType(tmp);
    }

    const editColorHandler = (value, index) => {
        let temp = [...tempEventType];
        temp[index].color = '#' + value;
        setTempEventType(temp);
    }

    const addNewEventType = () => {
        let data = new FormData();
        data.append('name', name);
        data.append('color', color);
        dispatch(eventTypeActions.createEventType(data));
    }

    const updateTypeHandler = (index) => {
        let data = new FormData();
        data.append('id', tempEventType[index].id);
        data.append('name', tempEventType[index].name);
        data.append('color', tempEventType[index].color);
        dispatch(eventTypeActions.updateEventType(data));
        let temp = [...isEdit];
        temp[index] = false;
        setIsEdit(temp);
    }

    const deleteTypeHandler = (index) => {
        dispatch(eventTypeActions.deleteEventType(tempEventType[index].id));
    }
    return (
        <>
            {isFetching && <p className="text-center mt-5">Loading...</p>}
            {!isFetching &&
            <ThemeProvider theme={theme}>
                    <Stack direction='row' sx={{flexGrow: 1}}>
                        <Stack sx={{flexGrow: 1}}></Stack>
                        <Stack sx={{flexGrow: 2}}>
                        <Accordion defaultExpanded>
                            <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            sx={{backgroundColor: '#eae9e9'}}
                            >
                            <Typography>Event Types</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Stack direction='row'>
                                    <Stack sx={{flexGrow: 1}}></Stack>
                                    <Stack sx={{flexGrow: 2}}>
                                        <Stack direction='column'>
                                        <TableContainer>
                                                <Table aria-label="simple table">
                                                    <TableBody>
                                                        {eventTypeData.map((row, index) => (
                                                            <>
                                                                {!isEdit[index] &&
                                                                <TableRow
                                                                key={row.id}
                                                                sx={{ borderBottom: '1px solid #474747' }}
                                                                >
                                                                    <TableCell component="th" scope="row" align="center" width='10%'>
                                                                        {index + 1}
                                                                    </TableCell>
                                                                    <TableCell align="center" width='10%'>{row.name}</TableCell>
                                                                    <TableCell align="center" width='60%'>
                                                                        <Box 
                                                                            sx={{
                                                                            height: '1rem',
                                                                            borderRadius: '50px',
                                                                            bgcolor: row.color,
                                                                            }}
                                                                        />
                                                                    </TableCell>
                                                                    <TableCell align="center" width='10%' ><Edit  sx={{cursor: 'pointer'}} onClick={() => editTypeHandler(index)}/></TableCell>
                                                                    <TableCell align="center" width='10%'><DeleteForever  sx={{cursor: 'pointer'}} onClick={() => deleteTypeHandler(index)}/></TableCell>
                                                                </TableRow>}
                                                                {isEdit[index] &&
                                                                <TableRow
                                                                key={row.id}
                                                                sx={{ borderBottom: '1px solid #474747' }}
                                                                >
                                                                    <TableCell component="th" scope="row" align="center" width='10%'>
                                                                        {index + 1}
                                                                    </TableCell>
                                                                    <TableCell align="center" width='10%'>
                                                                        <TextField 
                                                                            label="Title" 
                                                                            variant="outlined" 
                                                                            required
                                                                            color="time"
                                                                            size="small"
                                                                            value={tempEventType[index].name}
                                                                            onChange={(e) => editNameHandler(e.target.value, index)}
                                                                            slotProps={{ textField: { size: 'small' } }}
                                                                        />    
                                                                    </TableCell>
                                                                    <TableCell align="center" width='60%'>
                                                                        <ColorPicker value={tempEventType[index].color} onChange={(e) => editColorHandler(e.hex, index)}/>
                                                                    </TableCell>
                                                                    <TableCell align="center" width='10%' sx={{cursor: 'pointer'}} colSpan={2}><CheckCircle color='time' sx={{cursor: 'pointer'}} onClick={() => updateTypeHandler(index)}/></TableCell>
                                                                </TableRow>}                                                                
                                                            </>
                                                        ))}
                                                        <TableRow>
                                                            <TableCell colSpan={2}>
                                                                <TextField 
                                                                    label="Title" 
                                                                    variant="outlined" 
                                                                    required
                                                                    color="time"
                                                                    size="small"
                                                                    value={name}
                                                                    onChange={(e) => setName(e.target.value)}
                                                                    slotProps={{ textField: { size: 'small' } }}
                                                                />
                                                            </TableCell>
                                                            <TableCell>
                                                                <ColorPicker value={color} onChange={(e) => setColor('#'+e.hex)}/>
                                                            </TableCell>
                                                            <TableCell align="center" colSpan={2}>
                                                                <CustomContainedButton variant="contained" onClick={addNewEventType}>Add</CustomContainedButton>
                                                            </TableCell>
                                                        </TableRow>
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </Stack>
                                    </Stack>
                                    <Stack sx={{flexGrow: 1}}></Stack>
                                </Stack>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                            sx={{backgroundColor: '#eae9e9'}}
                            >
                            <Typography>Theme</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        </Stack>
                        <Stack sx={{flexGrow: 1}}></Stack>
                    </Stack>
            </ThemeProvider>
            }
        </>
    )
}

export {EventTypesPage};