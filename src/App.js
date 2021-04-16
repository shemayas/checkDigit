import {ThemeProvider, makeStyles} from '@material-ui/core/styles';
import {Container, CssBaseline} from '@material-ui/core';
import theme from "./theme";
import CheckDigit from "./components/CheckDigit";

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
}));

function App() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Container className={classes.mainContainer} component='main'>
                    <CheckDigit />
                </Container>
            </CssBaseline>
        </ThemeProvider>
    );
}

export default App;
