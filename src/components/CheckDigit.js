import {useRef, useEffect} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import Input from "./CheckDigit/Input";
import Result from "./CheckDigit/Result";
import {useSelector, useDispatch} from 'react-redux';
import {setInput} from '../store/ducks/checkDigit';

const useStyles = makeStyles((theme) => ({
    form: {
        justifyContent: 'space-between'
    },

    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '32px'
    },

    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '500px',
        maxWidth: '90%',
    },
}));

function CheckDigit() {
    const classes = useStyles();
    const allInputs = useRef([]);
    const dispatch = useDispatch();
    const stateInputs = useSelector((state) => state.checkDigit)
    const inputLength = Object.keys(stateInputs).length;

    useEffect(() => {
        allInputs.current[0]?.querySelector('input').focus();
    }, [allInputs])

    const onInput = (value, index) => {
        if (!value) {
            return;
        }

        // on any number input, except for last input- move to next input
        if (index < (inputLength - 1)) {
            allInputs.current[index + 1]?.querySelector('input').focus();
        }

        dispatch(setInput(index, value))
    }

    const onKeyUp = (value, index, isBackspace) => {
        if (!isBackspace) { // we only handle backspace here
            return;
        }

        // on backspace
        if (stateInputs[index]) { // if there is a value in the field- just remove it from the state
            dispatch(setInput(index, value));
        } else { // if the user pressed backspace on an empty field- move focus back
            allInputs.current[index - 1]?.querySelector('input').focus();
        }
    }

    const onKeyDown = (target, index, isBackspace) => {
        if (isBackspace) {
            return;
        }

        const currInput = allInputs.current[index]?.querySelector('input');
        // on multiple inserts in same field- set last number inserted to input
        if (currInput.value) {
            currInput.value = ''; // remove old value
            // use setImmediate in order to have the value in `target.value`,
            // otherwise the value is not populated yet
            setImmediate(() => currInput.value = target.value % 10)
        }
    }

    const onChange = (index, e) => {
        const value = e.target.value || undefined;
        const isBackspace = e.key === 'Backspace';

        if (isNaN(value) && !isBackspace) {
            return;
        }

        switch (e.type) {
            case 'keyup':
                onKeyUp(value, index, isBackspace);
                break;
            case 'keydown':
                onKeyDown(e.target, index, isBackspace);
                break;
            case 'input':
                onInput(e.target.value, index);
                break;
            default:
                console.warn(`The event ${e.type} is not supported`)
        }
    }

    return (
        <div className={classes.wrapper}>

            <Typography className={classes.title} component="h1">Checking Digit Generator</Typography>

            <Grid className={classes.form} container>
                {[...Array(inputLength)].map((x, i) => {
                        return (
                            <Input className={classes.input}
                                   index={i}
                                   refObj={el => allInputs.current[i] = el}
                                   onChange={onChange}
                                   onInput={onInput}
                                   key={i}/>
                        )
                    }
                )}
            </Grid>

            <Result />
        </div>
    );
}

export default CheckDigit;
