import React, {useState} from 'react';
import {
    Route,
    Switch,
    BrowserRouter as Router
} from "react-router-dom";

import Header from "../Header";
import Trending from "../../pages/Trending";

import './App.css';
import { Context } from '../../context';

function App() {

    const [pageCursor, setPageCursor] = useState<number>(1);

    return (
        <Router>
            <Context.Provider value={{
                pageCursor,
                setPageCursor: (val: number): void => setPageCursor(val)
            }}>
                <div className="app">
                    <Header/>

                    <Switch>
                        <Route
                            exact
                            path={"/"}
                            component={Trending}
                        />
                    </Switch>

                </div>
            </Context.Provider>
        </Router>
    );
}

export default App;
