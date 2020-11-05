import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore,combineReducers } from 'redux';
import registerServiceWorker from "./registerServiceWorker";
import {Provider} from  'react-redux'
import counterReducer from '../src/Store/Reducers/CounterReducer'
import resultReducer from '../src/Store/Reducers/ResultReducer'
const rootReducer = combineReducers({
    ctrReducer:counterReducer,
    rstReducer:resultReducer
})
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
registerServiceWorker();
