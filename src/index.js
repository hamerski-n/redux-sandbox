import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators, createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from "./reducer";
import App from './components/app';
//import * as actions from "./actions";

const store = createStore(reducer);
//const {dispatch} = store;
//const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

//const update = () => {
    ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
//};

//update();
//store.subscribe(update);

