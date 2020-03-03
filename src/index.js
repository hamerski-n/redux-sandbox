import {bindActionCreators, createStore} from 'redux';
import reducer from "./reducer";
import {dec, inc, rnd} from "./actions";

const store = createStore(reducer);
const {dispatch} = store;

const bindActionCreator = (action, dispatch) => (...args) => {
    dispatch(creator(...args));
};

const incDispatch = bindActionCreator(inc, dispatch);
const decDispatch = bindActionCreator(dec, dispatch);
const rndDispatch = bindActionCreator(rnd, dispatch);

document
    .getElementById('dec')
    .addEventListener('click', decDispatch);

document
    .getElementById('inc')
    .addEventListener('click', incDispatch);

document
    .getElementById('rnd')
    .addEventListener('click', () => {
        const payload = Math.floor(Math.random() * 10);
        rndDispatch(payload)
    });

const update = () => {
    document
        .getElementById('counter')
        .innerHTML = store.getState();
};

store.subscribe(update);

