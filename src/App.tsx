import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@material-ui/core";
import "./App.css";
import Routes from "./routing/Routes";

function App() {
  return (
    <>
      <CssBaseline />
      <Routes />
    </>
  );
}

export default App;
