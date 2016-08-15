import { RECEIVE_USER_INFO } from './actions'

const initialState = {
    finder: {
        value: ""
    },
    data: {
        cover: {
            source:""
        },
        first_name: "",
        last_name: ""
    }
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case RECEIVE_USER_INFO:
            const test = Object.assign({}, state, {data: action.data});
            return test;
        default:
            return state;
    }
};

export default rootReducer;
