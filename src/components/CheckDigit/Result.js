import {Typography} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import {useCheckDigitResult} from './hooks'

const useStyles = makeStyles((theme) => ({
    result: {
        textAlign: 'center',
        margin: '20px 0 0',
        fontSize: '28px',
        fontWeight: 'bold',
    }
}));

function Result() {
    const classes = useStyles();
    const checkDigitResult = useCheckDigitResult();

    return (
        <Typography className={classes.result} component="p">{checkDigitResult}</Typography>
    );
}

export default Result;
