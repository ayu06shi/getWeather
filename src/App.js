import { ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import theme from "./customTheme";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Home />
    </div>
    </ThemeProvider>
  );
}

export default App;
