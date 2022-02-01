import { makeStyles } from '@material-ui/styles';

const centerStyleObj = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

const useStyles = makeStyles({
    container: {
        height: '100vh',
        flexDirection: 'column',
        ...centerStyleObj
    },
    cardContainer: {
    flexDirection: 'column',
    width: 400,
    height: 200,
    padding: '2rem', 
        ...centerStyleObj
},
    title: {
    fontSize: '4rem'
},
titleGridContainer: {
    ...centerStyleObj
},
textFieldSearch:{
width:'90%'
},
searchButton:{
    marginLeft:'.5rem'
},
buttonContainer:{
    marginTop:'.5rem'
},
movieIcon:{
    fontSize:'4rem'
}
});

export default useStyles;