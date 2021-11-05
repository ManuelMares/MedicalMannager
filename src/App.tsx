import React from 'react';
import {IniciarSesion} from './Components/IniciarSesion/IniciarSesion'
import {Dashboard} from './Components/Dashboard/Dashboard'
import {Menu} from './Components/Menu/Menu'
import {NotFoundPage} from './Components/NotFoundPage/NotFoundPage'
import {Catalogo} from './Components/Catalogo/Catalogo'
import {BrowserRouter, Switch, Route, RouteComponentProps, Redirect, withRouter } from "react-router-dom";
import {Provider} from 'react-redux'
import routes from './config/routes'; 

export const App:React.FC = () =>  {
  
  return (  
    <BrowserRouter>
      <Menu/> 
      <Switch>
          {routes.map((route, index) => {
            return(
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => (
                  <route.component
                    name = {route.name}
                    {...props}
                    {...route.props}
                  />
                )}
              />
            )
          })}
      </Switch>  
    </BrowserRouter>
  );
}

