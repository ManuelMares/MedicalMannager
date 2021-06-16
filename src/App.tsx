import React from 'react';
import {IniciarSesion} from './Components/IniciarSesion/IniciarSesion'
import {Dashboard} from './Components/Dashboard/Dashboard'
import {Menu} from './Components/Menu/Menu'
import {NotFoundPage} from './Components/NotFoundPage/NotFoundPage'
import {Catalogo} from './Components/Catalogo/Catalogo'
import {BrowserRouter, Switch, Route, Redirect, withRouter } from "react-router-dom";
import {Provider} from 'react-redux'

export const App:React.FC = () =>  {
  
  return (  
    <BrowserRouter> 
      <Menu/> 
      <Switch>
          <Route exact path="/Dashboard" component={Dashboard}  />
          <Route path="/Catalogo" component={Catalogo}  />
          <Route path="/IniciarSesion" component={IniciarSesion}  />
          <Redirect from="/" to="/Dashboard" />
          <Route path="*" component={NotFoundPage}  />
      </Switch>  
    </BrowserRouter>
  );
}

