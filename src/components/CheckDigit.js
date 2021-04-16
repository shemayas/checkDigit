import React, {useRef, useEffect} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import Input from "./CheckDigit/Input";

const useStyles = makeStyles((theme) => ({
    form: {
        justifyContent: 'space-between'
    },

    title: {
        textAlign: 'center',
        fontWeight: 'bold'
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
    const inputLength = 8;

    useEffect(() => {
        allInputs.current[0]?.querySelector('input').focus();
    }, [allInputs])

    const onChange = (index, e) => {
        // on any number input, except for last input- move to next input
        if (index < (inputLength - 1)) {
            allInputs.current[index + 1]?.querySelector('input').focus();
        }
        console.log(e.key, e.target)
        // on backspace
        if (e.key === 'Backspace' && !e.target.value) {
            allInputs.current[index - 1]?.querySelector('input').focus();
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
                                   key={i}/>
                        )
                    }
                )}
            </Grid>
        </div>
    );
}

export default CheckDigit;
