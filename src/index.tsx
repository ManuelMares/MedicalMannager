import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import {createStore} from 'redux';
import AllReducers from './Reducers/Index';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider} from 'react-redux'
import {connect} from 'react-redux';
import { Router } from 'react-router';

const Store =createStore(AllReducers,  composeWithDevTools());
ReactDOM.render(
  <Provider store = {Store}>
    <React.StrictMode>  
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider>      
        <App/>
      </ChakraProvider>
    </React.StrictMode>
  </Provider>,  
  document.getElementById('root')
);