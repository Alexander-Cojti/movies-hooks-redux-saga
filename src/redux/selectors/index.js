import {get} from 'lodash';

export const isSearchLoading=state =>get(state,'search.isloading');
export  const movieResults=state =>get(state,'search.movieResults.Search');