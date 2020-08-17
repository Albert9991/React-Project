import React from 'react';
import Header from './Components/Common/Header/header';
import List from './Components/List/list';
import Detail from './Components/Detail/detail.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Route path='/' exact component={List} />
                <Route path='/currency/:id' component={Detail} />
            </BrowserRouter>
        </>
    )
};

export default App;