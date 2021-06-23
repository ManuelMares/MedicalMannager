import React from 'react';
import IniciarSesion from './Components/IniciarSesion/IniciarSesion'
import Dashboard from './Components/Dashboard/Dashboard'
import Menu from './Components/Menu/Menu'
import NotFoundPage from './Components/NotFoundPage/NotFoundPage'
import Catalogo from './Components/Catalogo/Catalogo'
import NuevoPaciente from './Components/NuevoPaciente/NuevoPaciente'
import {BrowserRouter, Switch, Route, Redirect, withRouter, RouteComponentProps } from "react-router-dom";
import {Provider} from 'react-redux'
import {Flex } from "@chakra-ui/react"
import routes from './Configuracion/Routes'

const  App:React.FC = () =>  {
  
  return (  
    <BrowserRouter>       
      <Menu/> 
      <Flex marginLeft={{base:"3.2rem", md:"2.2rem"}}>
        <Switch>
          {routes.map((route, index) =>{
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) =>(
                  <route.component
                  name={route.name}
                  {...props}			
                  {...route.props}
                  />              
                )}
              />
            );
          })}
        </Switch>            
      </Flex>
    </BrowserRouter>
  );
}

export default App
