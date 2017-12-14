import * as types from '../actions/types';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const initialState = {
	rates     : [],
	supported : [],
	orders    : [],
};

function dataReducer( state = initialState, action ){
	
	switch ( action.type ) {
		case types.GETRATES:
			return {
				...state,
				rates : action.payload
			};
		case types.GETORDERS:
			return {
				...state,
				orders : action.payload
			};
		case types.GETSUPPORTED:
			return {
				...state,
				supported : action.payload
			};
		default:
			return state;
	}
	
}


export default combineReducers({
								   data : dataReducer,
								   form : formReducer
							   });
