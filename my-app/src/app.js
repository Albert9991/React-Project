import React from 'react';
import Header from './Components/Common/Header/header';
import List from './Components/List/list';
import Detail from './Components/Detail/detail.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './Components/Not Found/notFound'


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path='/' exact component={List} />
                    <Route path='/currency/:id' component={Detail} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </>
    )
};

export default App;