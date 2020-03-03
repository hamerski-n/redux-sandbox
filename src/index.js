import {bindActionCreators, createStore} from 'redux';
import reducer from "./reducer";
import {dec, inc, rnd} from "./actions";

const store = createStore(reducer);
const {dispatch} = store;

// const bindActionCreators = (action, dispatch) => (...args) => {
//     dispatch(creator(...args));
// };

const incDispatch = () => dispatch(inc());
const decDispatch = () => dispatch(dec());
const rndDispatch = (payload) => dispatch(rnd(payload));

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

