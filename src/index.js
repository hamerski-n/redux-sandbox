import {createStore} from 'redux';
import reducer from "./reducer";
import {dec, inc, rnd} from "./actions";

const store = createStore(reducer);

document
    .getElementById('dec')
    .addEventListener('click', () => {
        store.dispatch(dec());
    });

document
    .getElementById('inc')
    .addEventListener('click', () => {
        store.dispatch(inc());
    });

document
    .getElementById('rnd')
    .addEventListener('click', () => {
        const payload = Math.floor(Math.random() * 10);
        store.dispatch(rnd(payload));
    });

const update = () => {
    document
        .getElementById('counter')
        .innerHTML = store.getState();
};

store.subscribe(update);

