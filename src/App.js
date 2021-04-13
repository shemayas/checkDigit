import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";

function App() {
  return (
      <ThemeProvider theme={theme}>
          <div>
              Hi
          </div>
      </ThemeProvider>
  );
}

export default App;
