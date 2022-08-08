import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';



export default function Main() {

    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
            <Toolbar>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        MUI
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        Core
                    </Link>
                    <Typography color="text.primary">Breadcrumbs</Typography>
                </Breadcrumbs>
            </Toolbar>


            <Typography variant="h5" display="flex" marginLeft={3}>
                Import test data
            </Typography>

            <Grid container spacing={2} columns={16} mt={3} ml={0}>
                <Grid item xs={2}>
                    <Typography>
                        Import test data
                    </Typography>
                </Grid>
                <Grid item xs={14}>
                    <TextField id="upload-data" variant="standard" sx={{ display: "contents" }} />
                    <Button variant="outlined" component="label" sx={{ marginLeft: "5px" }}>
                        ADD
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>
                </Grid>

                <Grid item xs={2}>
                    <Typography>
                        Apply Configuration
                    </Typography>
                </Grid>
                <Grid item xs={14}>
                    <TextField id="upload-data" variant="standard" sx={{ display: "contents" }} />
                    <Button variant="outlined" component="label" sx={{ marginLeft: "5px" }}>
                        ADD
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>
                </Grid>

                <Grid item xs={2}>
                    <Typography>
                        Choose Worksheet
                    </Typography>
                </Grid>
                <Grid item xs={14}>
                    <TextField id="upload-data" variant="standard" sx={{ display: "contents" }} />
                    <Button variant="outlined" component="label" sx={{ marginLeft: "5px" }}>
                        ADD
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>
                </Grid>

                <Grid item xs={2}>
                    <Typography>
                        Choose header row
                    </Typography>
                </Grid>
                <Grid item xs={14}>
                    <TextField id="upload-data" variant="standard" sx={{ display: "contents" }} />
                    <Button variant="outlined" component="label" sx={{ marginLeft: "5px" }}>
                        ADD
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>
                </Grid>

                <Grid item xs={2}>
                    <Typography>
                        Select columns
                    </Typography>
                </Grid>
                <Grid item xs={14}>
                    <TextField id="upload-data" variant="standard" sx={{ display: "contents" }} />
                    <Button variant="outlined" component="label" sx={{ marginLeft: "5px" }}>
                        ADD
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}