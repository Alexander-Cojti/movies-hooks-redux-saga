import React, { useEffect } from 'react';
import { Container,CircularProgress } from '@material-ui/core';
import queryString from 'query-string'
import {searchMovie} from '../../redux/actions/search';
import { useDispatch,useSelector } from 'react-redux';
import {movieResults,isSearchLoading} from '../../redux/selectors';
import MovieResult from '../../components/MovieResult';
export default () => {
    const dispatch = useDispatch();
    const movies = useSelector(state => movieResults(state));
    const isLoading = useSelector(state => isSearchLoading(state));

    useEffect(() => {
        const { movieName } = queryString.parse(location.search);
        if(movieName && !movies){
            dispatch(searchMovie({ movieName }));
        }
    },[dispatch]);

    const renderMovies = () => {
        if (movies){

           return movies.map((value,index)=><MovieResult key={index} {...value}/>);
        }else if(isLoading){
            return <CircularProgress size={100} color='primary'/>
        }
        return <div/>;
    }
    return (
        <Container>{renderMovies()}</Container>
    )

}