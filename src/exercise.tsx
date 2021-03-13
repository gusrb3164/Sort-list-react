import { createStore } from "redux";

const initialState: { counter: number; text: string; list: any[] } = {
    counter: 0,
    text: "",
    list: []
};

const INCREASE: string = "INCREASE";
const DECREASE: string = "DECREASE";
const CHANGE_TEXT: string = "CHANGE_TEXT";
const ADD_TO_LIST: string = "ADD_TO_LIST";

const increase = (): object => ({
    type: INCREASE
});
const decrease = (): object => ({
    type: DECREASE
});
const changeText = (text: string): object => ({
    type: CHANGE_TEXT,
    text
});
const addToList = (item: any): object => ({
    type: ADD_TO_LIST,
    item
});

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            };

        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            };
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item)
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

console.log(store.getState());
const listener = () => {
    const state = store.getState();
    console.log(state);
};

const unsubscribe = store.subscribe(listener);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("안녕하세요"));
store.dispatch(addToList({ id: 1, text: "와우" }));
