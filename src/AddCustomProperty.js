import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from "@mui/material/Grid";
import {FormControl, MenuItem, Select} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    boxShadow: 5,
    p: 5
};

export default function AddCustomProperty(props) {

    let {open, handleClose} = props;
    const [propertyType, setPropertyType] = React.useState('');

    const handlePropertyChange = (event) => {
        setPropertyType(event.target.value);
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6">
                        Add Custom Property
                    </Typography>

                    <Grid container spacing={2} columns={16} mt={1} alignItems="center">

                        <Grid item xs={4} flex>
                            <Box display="flex" justifyContent="flex-start">
                                <Typography fontWeight="bold">
                                    Property Name
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} flex>
                            <Box display="flex" justifyContent="flex-start">
                                <TextField
                                    id="file-name"
                                    variant="standard"
                                    sx={{display: "contents"}}
                                    fullWidth
                                />
                            </Box>
                        </Grid>


                        <Grid item xs={4} flex>
                            <Box display="flex" justifyContent="flex-start">
                                <Typography fontWeight="bold">
                                    Property Type
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} flex>
                            <Box display="flex" justifyContent="flex-start">
                                <FormControl size="small" fullWidth>
                                    <Select
                                        id="header-row"
                                        value={propertyType}
                                        onChange={handlePropertyChange}
                                    >
                                        <MenuItem value="text">Text</MenuItem>
                                        <MenuItem value="integer">Integer</MenuItem>
                                        <MenuItem value="float">Float</MenuItem>
                                        <MenuItem value="date">Date</MenuItem>
                                        <MenuItem value="datetime">Datetime</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>

                        <Grid item xs={3} flex>
                            <Box display="flex" justifyContent="flex-start">
                                <Button variant="outlined" sx={{marginLeft: "5px"}} fullWidth>Add</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}
