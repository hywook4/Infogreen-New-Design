import './App.css';
import React from 'react';
import store from "./Store";
import { Provider } from "react-redux";
import {Home} from './container/Home';

export class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Home/>
            </Provider>
        )
        
    }
}
