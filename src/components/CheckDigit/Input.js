import { Input as MUInput } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    input: {
        width: '40px',
        maxWidth: 'calc(75vw / 8)',
        fontSize: '40px',

        '& input': {
            textAlign: 'center',

            '&::-webkit-inner-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0,
            },

            '& input::-webkit-outer-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0
            },
        },
    }
}));

function Input(props) {
    const classes = useStyles();
    const onChange = e => props.onChange(props.index, e);
    return (
        <MUInput className={classes.input}
                 tabIndex={props.index}
                 type='number'
                 ref={props.refObj}
                 onKeyUp={onChange}
                 onKeyDown={onChange}
                 onInput={onChange}
                 inputProps={{
                     min: '0',
                     max: '9',
                 }} />
    )
}

export default Input;