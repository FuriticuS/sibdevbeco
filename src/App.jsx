import React from 'react';
import Menu from "./Components/Menu/Menu";
import Main from "./Components/Main/Main";
import {Route, Switch} from "react-router";
import OtherPages from "./Components/OtherPages/OtherPages";

import './App.css';

function App() {
    return (
        <div className='app container-fluid'>

            <div className='row'>

                <div className='p-0 col-lg-2 col-md-2'>
                    <Menu/>
                </div>

                <div className='p-0 col-lg-10 col-md-10'>
                    <Switch>
                        <Route path='/' exact render={()=> <Main text='Каталог'/>}/>
                        <Route path='/health' render={()=> <OtherPages text='Здоровье'/>}/>
                        <Route path='/beauty' render={()=> <OtherPages text='Красота'/>}/>
                        <Route path='/entertainment' render={()=> <OtherPages text='Развлечение'/>}/>
                        <Route path='/auto' render={()=> <OtherPages text='Авто'/>}/>
                    </Switch>
                </div>

            </div>

        </div>
    );
}

export default App;
