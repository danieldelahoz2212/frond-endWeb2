import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextProvider } from "./contexts/ContextProvider.js";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./contexts/reducers";
import { loadState, saveState } from "./utils/localStorage";

if (typeof window !== "undefined") {
  const initialState = loadState() || {
    page: 0,
    rowsPerPage: 10,
    drawer: false,
    expanded: true,
    selected: "panel1",
  };

  let composeEnhacers;
  if (process.env.NODE_ENV === "production") composeEnhacers = compose;
  else composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducer,
    initialState,
    composeEnhacers(applyMiddleware(thunk))
  );

  store.subscribe(() => {
    saveState(store.getState());
  });

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Provider store={store}>
        <ContextProvider>
          <App />
        </ContextProvider>
      </Provider>
    </React.StrictMode>
  );
}