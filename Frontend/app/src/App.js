import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import * as ROUTES from "./constants/routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Dashboard from "./components/Dashboard";
import SellScreen from "./components/SellScreen";
import Profile from './components/Profile'

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />}>
          </Route>
          <Route path={ROUTES.SIGN_IN} element={<SignIn />}></Route>
          <Route path={ROUTES.SIGN_UP} element={<SignUp />}></Route>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />}></Route>
          <Route path={ROUTES.PROFILE} element={<Profile />}/>
          <Route path={ROUTES.SELL} element={<SellScreen />}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
