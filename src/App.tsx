import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import Home from './pages/Home';

function App() {
    return (
        <BrowserRouter>
            <Grid container justify={'center'}>
                <Switch>
                    <Route exact={true} path={'/'} component={Home}/>
                </Switch>
            </Grid>
        </BrowserRouter>
    );
}

export default App;
