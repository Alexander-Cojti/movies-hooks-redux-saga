
import React, { useState } from "react";
import { Container, Typography, Card, Grid, TextField, Button } from "@material-ui/core";
import { MovieIcon } from "../../icons";
import useStyles from './styles.js';
import { useParams, useNavigate } from "react-router-dom";

export default ( ) => {
    const [searchText, setSearchText] = useState('');
    const classes = useStyles();
    const handleSearchTextChange = event => { setSearchText(event.target.value); };
let navigate = useNavigate();
    const handleCleanTextClick = event => {
        setSearchText('');
    };
    const handleSearchTextClick = event => {
      history.pushState( {page:1},'results',`/results?movieName=${searchText}`);
    };
    return (
        <Container className={classes.container}>
            <Card className={classes.cardContainer}>
                <Grid container className={classes.titleGridContainer}>
                    <Grid>
                        <Typography className={classes.title}>Tus películas!</Typography>

                    </Grid>
                    <Grid>
                        <MovieIcon className={classes.movieIcon} />
                    </Grid>
                </Grid>
                <TextField value={searchText} className={classes.textFieldSearch} placeholder="Buscar..." onChange={handleSearchTextChange} />
                <Grid className={classes.buttonsContainer}>
                    <Button variant="contained" onClick={handleCleanTextClick}  size="large" >Limpiar</Button>
                    {/* <Button variant="contained" className={classes.serachButton} color="primary" size="large" onClick={()=>{navigate(`/results?movieName=${searchText}`)}}>Buscar </Button> */}
                    {/* <Button variant="contained" className={classes.serachButton} color="primary" size="large" onClick={handleSearchTextClick}>Buscar </Button> */}
                    <Button variant="contained" className={classes.serachButton} color="secondary" size="large"  onClick={()=>{navigate(`/results?movieName=${searchText}`)}}>Buscar </Button>

                </Grid>
            </Card>
        </Container>
    )
}

