import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "./Pages/main";
import Pais from "./Pages/pais";


const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route path="/paises/:Country" component={Pais}></Route>
        </Switch>
    </BrowserRouter>

)

export default Routes;