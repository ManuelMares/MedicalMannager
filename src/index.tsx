import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import {
  ChakraProvider,
  ColorModeScript,
  theme as themeScript,
} from "@chakra-ui/react";
import { createStore } from "redux";
import AllReducers from "./Reducers/Index";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import theme from "./theme";

const Store = createStore(AllReducers, composeWithDevTools());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <ColorModeScript initialColorMode={themeScript.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
