import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { eventTypeActions } from "../../_actions/eventTypeActions";
import { Stack, Accordion, AccordionSummary, AccordionDetails, Typography, Button, TableContainer, Table, Box, TableBody, TableRow, TableCell, TextField, styled  } from "@mui/material";
import { ExpandMore, Edit, DeleteForever } from "@mui/icons-material";
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

    useEffect(() => {
        dispatch(eventTypeActions.getEventTypes());
    },[]);
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
                                                                <TableCell align="center" width='10%'><Edit /></TableCell>
                                                                <TableCell align="center" width='10%'><DeleteForever /></TableCell>
                                                            </TableRow>
                                                        ))}
                                                        <TableRow>
                                                            <TableCell colSpan={2}>
                                                                <TextField 
                                                                    label="Title" 
                                                                    variant="outlined" 
                                                                    required
                                                                    color="time"
                                                                    size="small"
                                                                    // value={event}
                                                                    // onChange={(e) => setEvent(e.target.value)}
                                                                    slotProps={{ textField: { size: 'small' } }}
                                                                />
                                                            </TableCell>
                                                            <TableCell>
                                                                <ColorPicker />
                                                            </TableCell>
                                                            <TableCell align="center" colSpan={2}>
                                                                <CustomContainedButton variant="contained">Add</CustomContainedButton>
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