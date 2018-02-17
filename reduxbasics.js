const redux=require('redux');
const createStore=redux.createStore;
//createStore function dont call yet

const initialState = {
counter:0
}

const myReducer=(state=initialState, action) => {
    return state;
};

const store=createStore(myReducer);
console.log(store.getState());
//state action
//reducer
//store
//subscription
