import React from "react";
import {
    Route,
    Switch,
    BrowserRouter as Router,
    Redirect,
} from "react-router-dom";
import "react-perfect-scrollbar/dist/css/styles.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Scrollbar from "react-perfect-scrollbar";
import { Theme } from "./theme";
import GlobalCss from "./styles/jss/GlobalCss";
import Demo from "./home/Demo";
import Landing10 from "./home/Landing10";

function App() {
    return (
        <MuiThemeProvider theme={Theme}>
            <GlobalCss>
                <Scrollbar
                    className="h-full-screen scrollable-content"
                    option={{ suppressScrollX: true }}
                >
                    <Router basename="/">
                        <Switch>
                            <Route path="/demos" component={Demo} exact />
                            <Route path="/landing10" component={Landing10} />
                            <Redirect path="/" exact to="demos" />
                            {/* <Route component={Error} /> */}
                        </Switch>
                    </Router>
                </Scrollbar>
            </GlobalCss>
        </MuiThemeProvider>
    );
}

export default App;
