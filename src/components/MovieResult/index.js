import React from "react";
import { Card, Grid, Typography, Button } from '@material-ui/core';
import style from './style'
import { useParams, useNavigate } from "react-router-dom";


export default function MovieResult ({ Title, Year, Type, imdbID, Poster })  {

    const classes = style();
    let navigate = useNavigate();
    const handleSeeMovieClick = () => {
        // history.pushState( null,null,`/movie/${imdbID}`);
        // `/movie/${imdbID}`
    }
    return (
        <Card className={classes.cardContainer}>
            <Grid container >
                <Grid item >
                    <img src={Poster} alt={Title} className={classes.poster} />
                </Grid>
                <Grid item className={classes.titlesContainer}>
                    <Typography>{Title}</Typography>
                    <Typography>{Year}</Typography>
                    <Typography>{Type}</Typography>
                    <Button color="secondary" variant="contained" onClick={()=>{navigate(`/movie/${imdbID}`)}}> Ver mas</Button>
                </Grid>
            </Grid>
        </Card>
    );
};

