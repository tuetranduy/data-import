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
                    <TextField id="standard-basic" label="Standard" variant="standard" />
                    <Button variant="raised" component="span">
                        Upload
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}