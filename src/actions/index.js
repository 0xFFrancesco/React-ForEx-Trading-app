import API from './fakeApi';
import * as types from '../actions/types';

export function getRates(){
	
	return ( dispatch ) =>{
		
		API('/rates').then(response =>{
			
			dispatch({
						 type    : types.GETRATES,
						 payload : response
					 });
			
		});
		
	};
	
}

export function getSupportedCurrencyPairs(){
	
	return ( dispatch ) =>{
		
		API('/pairs').then(response =>{
			
			dispatch({
						 type    : types.GETSUPPORTED,
						 payload : response
					 });
			
		});
		
	};
	
}

export function getOrders(){
	
	return ( dispatch ) =>{
		
		API('/getOrders').then(response =>{
			
			dispatch({
						 type    : types.GETORDERS,
						 payload : response
					 });
			
		});
		
	};
	
}

export function deleteOrder( id ){
	
	return ( dispatch ) =>{
		
		API('/deleteOrder', id).then(respone =>{
			
			dispatch(getOrders());
			
		});
		
	};
	
}

export function placeOrder( data ){
	
	return ( dispatch ) =>{
		
		API('/createOrder', data).then(respone =>{
			
			dispatch(getOrders());
			
		});
		
	};
	
}

