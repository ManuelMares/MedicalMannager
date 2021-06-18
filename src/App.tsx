import React from 'react';
import {IniciarSesion} from './Components/IniciarSesion/IniciarSesion'
import {Dashboard} from './Components/Dashboard/Dashboard'
import {Menu} from './Components/Menu/Menu'
import {NotFoundPage} from './Components/NotFoundPage/NotFoundPage'
import {Catalogo} from './Components/Catalogo/Catalogo'
import {NuevoPaciente} from './Components/NuevoPaciente/NuevoPaciente'
import {BrowserRouter, Switch, Route, Redirect, withRouter } from "react-router-dom";
import {Provider} from 'react-redux'
import {Flex } from "@chakra-ui/react"

export const App:React.FC = () =>  {
  
  return (  
    <BrowserRouter>       
    <Menu/> 
    <Flex marginLeft={{base:"3.2rem", md:"2.2rem"}}>
      <Switch>
          <Route exact path="/Dashboard" component={Dashboard}  />
          <Route path="/Catalogo" component={Catalogo}  />
          <Route path="/IniciarSesion" component={IniciarSesion}  />
          <Route path="/NuevoPaciente" component={NuevoPaciente}  />
          <Route path="*" component={NotFoundPage}  />
      </Switch>            
    </Flex>
    </BrowserRouter>
  );
}

