import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/index';
import _ from 'lodash';

export default (state = {}, action)=>{
    switch(action.type){
        case FETCH_POST  : 
            // var newState = {...state}; // state ?? 
            // newState[action.payload.data.id] = action.payload.data;
            // return newState;
            return {...state, [action.payload.data.id]: action.payload.data } // overwrite value with key 
        // add fetched data into state
        case FETCH_POSTS : 
            return _.mapKeys(action.payload.data, 'id');
        case DELETE_POST : 
            console.log(action.payload );
            return _.omit(state, action.payload);    
        default : 
            return state;
    }
}