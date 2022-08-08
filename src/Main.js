import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Checkbox, FormControl, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, Select} from '@mui/material';
import {DataGrid} from "@mui/x-data-grid";
import AddCustomProperty from "./AddCustomProperty";


export default function Main() {

    const [configuration, setConfiguration] = React.useState('');
    const [worksheet, setWorksheet] = React.useState('');
    const [headerRow, setHeaderRow] = React.useState('');

    const handleConfigurationChange = (event) => {
        setConfiguration(event.target.value);
    };

    const handleWorksheetChange = (event) => {
        setWorksheet(event.target.value);
    }

    const handleHeaderRowChange = (event) => {
        setHeaderRow(event.target.value);
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const columns = [
        {
            field: 'destination',
            headerName: 'Destination Property',
            width: '700',
            editable: false,
        },
        {
            field: 'source',
            headerName: 'Source Column',
            width: '400',
            editable: false,
        }
    ];

    const rows = [
        {id: 1, destination: 'Snow', source: 'Jon'},
        {id: 2, destination: 'Lannister', source: 'Cersei'},
        {id: 3, destination: 'Lannister', source: 'Jaime'},
    ];

    return (
        <Box
            component="main"
            sx={{flexGrow: 1, bgcolor: 'background.default', p: 3}}
        >

            <Toolbar>
                <Box>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">
                            MUI
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            href="#"
                        >
                            Core
                        </Link>
                        <Typography color="text.primary">Breadcrumbs</Typography>
                    </Breadcrumbs>
                </Box>
            </Toolbar>

            <Box display="flex" justifyContent="flex-start" mb={3} mt={2}>
                <Typography variant="h6" color={"green"}>
                    IMPORT TEST DATA
                </Typography>
            </Box>

            <Grid container spacing={2} columns={16} alignItems="center">
                <Grid item xs={2} flex>
                    <Box display="flex" justifyContent="flex-start">
                        <Typography>
                            Choose file (* .xlsx)
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={14}>
                    <Box display="flex" justifyContent="flex-start">
                        <TextField
                            id="upload-data"
                            variant="standard"
                            sx={{display: "contents"}}
                            fullWidth
                            inputProps={
                                {readOnly: true}
                            }
                        />
                        <Button variant="outlined" component="label" sx={{marginLeft: "5px"}}>
                            ADD
                            <input hidden accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                   multiple type="file"/>
                        </Button>
                    </Box>
                </Grid>

                <Grid item xs={2}>
                    <Box display="flex" justifyContent="flex-start">
                        <Typography>
                            Apply Configuration
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={14}>
                    <Box display="flex" justifyContent="flex-start">
                        <FormControl size="small" fullWidth>
                            <Select
                                id="apply-configuration"
                                value={configuration}
                                onChange={handleConfigurationChange}
                            >
                                <MenuItem value={10}>1</MenuItem>
                                <MenuItem value={20}>2</MenuItem>
                                <MenuItem value={30}>3</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                </Grid>

                <Grid item xs={2}>
                    <Box display="flex" justifyContent="flex-start">
                        <Typography>
                            Choose Worksheet
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={14}>
                    <Box display="flex" justifyContent="flex-start">
                        <FormControl size="small" fullWidth>
                            <Select
                                id="choose-worksheet"
                                value={worksheet}
                                onChange={handleWorksheetChange}
                            >
                                <MenuItem value={10}>1</MenuItem>
                                <MenuItem value={20}>2</MenuItem>
                                <MenuItem value={30}>3</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>

                <Grid item xs={2}>
                    <Box display="flex" justifyContent="flex-start">
                        <Typography>
                            Choose header row
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={14}>
                    <Box display="flex" justifyContent="flex-start">
                        <FormControl size="small" fullWidth>
                            <Select
                                id="header-row"
                                value={headerRow}
                                onChange={handleHeaderRowChange}
                            >
                                <MenuItem value={10}>1</MenuItem>
                                <MenuItem value={20}>2</MenuItem>
                                <MenuItem value={30}>3</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                </Grid>

                <Grid item xs={2}>
                    <Box display="flex" justifyContent="flex-start">
                        <Typography>
                            Select columns
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={14}>
                    <Box sx={{height: 400, width: '100%'}} display="flex" justifyContent="flex-start">
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            disableSelectionOnClick
                        />
                    </Box>
                    <Box display="flex" justifyContent="flex-start" mt={2}>
                        <Button
                            variant="outlined"
                            onClick={handleOpen}>
                            Add custom property
                        </Button>
                    </Box>

                    <AddCustomProperty
                        open={open}
                        handleClose={handleClose}
                    />
                </Grid>

                <Grid item xs={2}>
                    <Box display="flex" justifyContent="flex-start">
                        <Typography>
                            Import mode
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={14}>
                    <Box display="flex" justifyContent="flex-start">
                        <FormControl>
                            <RadioGroup
                                row
                                name="import-mode"
                            >
                                <FormControlLabel value="replace" control={<Radio checked/>}
                                                  label="Replace data (if exists)"/>
                                <FormControlLabel value="update" control={<Radio/>} label="Update data"/>
                            </RadioGroup>

                            <div>
                                <FormControlLabel control={<Checkbox/>} label="Remove duplicates"/>
                                <FormControlLabel control={<Checkbox/>} label="Ignore rows with blank"/>
                            </div>
                        </FormControl>
                    </Box>
                </Grid>

                <Grid item xs={2} flex>
                    <Box display="flex" justifyContent="flex-start" textAlign="left">
                        <Typography>
                            Save configuration under name
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={14}>
                    <Box display="flex" justifyContent="flex-start">
                        <TextField
                            id="file-name"
                            variant="standard"
                            sx={{display: "contents"}}
                            fullWidth
                        />
                        <Button variant="outlined" sx={{marginLeft: "5px"}}>Save</Button>
                    </Box>
                </Grid>

                <Grid item xs={4} flex>
                    <Box display="flex" justifyContent="flex-start" textAlign="left">
                        <Button variant="outlined" fullWidth>IMPORT</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}