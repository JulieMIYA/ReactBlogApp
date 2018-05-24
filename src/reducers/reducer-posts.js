import { FETCH_POSTS, FETCH_POST } from '../actions/index';
import _ from 'lodash';

export default (state = {}, action)=>{
    switch(action.type){
        case FETCH_POST  : 
            // var newState = {...state}; // state ?? 
            // newState[action.payload.data.id] = action.payload.data;
            // return newState;
            return {...state, [action.payload.data.id]: action.payload.data }
        // add fetched data into state
        case FETCH_POSTS : 
            return _.mapKeys(action.payload.data, 'id');
        default : return state;
    }
}