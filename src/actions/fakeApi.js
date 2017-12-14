import moment from 'moment';

export default function API( endpoint, data ){
	
	switch ( endpoint ) {
		case '/rates':
			return delay(getRates());
			break;
		case '/pairs':
			return delay(getPairs());
			break;
		case '/getOrders':
			return delay(state.orders);
			break;
		case '/deleteOrder':
			return delay(deleteOrder(data));
			break;
		case '/createOrder':
			return delay(createOrder(data));
			break;
	}
	
}

let state = {
	orders     : [ {
		id            : 1,
		investmentCcy : "EUR",
		counterCcy    : "CHF",
		buy           : true,
		limit         : getRate(),
		validUntil    : moment().add(1, 'months')
	}, {
		id            : 3,
		investmentCcy : "EUR",
		counterCcy    : "USD",
		buy           : false,
		limit         : getRate(),
		validUntil    : moment().add(1, 'months')
	} , {
		id            : 4,
		investmentCcy : "GBP",
		counterCcy    : "USD",
		buy           : false,
		limit         : getRate(),
		validUntil    : moment().add(1, 'months')
	} ],
	currencies : [ 'EUR', 'USD', 'GBP', 'CHF' ],
	lastId     : 4
};

function getRate(){
	
	return (Math.random() * 0.4 + 0.8).toFixed(4);
	
}

function getRates(){
	
	let res = [];
	
	for ( let i = 0; i < state.currencies.length; i++ ) {
		for ( let k = 0; k < state.currencies.length; k++ ) {
			if ( state.currencies[ i ] !== state.currencies[ k ] ) {
				res.push({
							 cc1 : state.currencies[ i ],
							 cc2 : state.currencies[ k ],
							 ask : getRate(),
							 bid : getRate(),
						 });
			}
		}
	}
	
	return res;
	
}

function getPairs(){
	
	let res = [];
	
	for ( let i = 0; i < state.currencies.length; i++ ) {
		for ( let k = 0; k < state.currencies.length; k++ ) {
			if ( state.currencies[ i ] !== state.currencies[ k ] ) {
				res.push({
							 cc1 : state.currencies[ i ],
							 cc2 : state.currencies[ k ],
						 });
			}
		}
	}
	
	return res;
	
}

function delay( val ){
	
	return new Promise(( res, rej ) =>{
		setTimeout(function(){
			res(val);
		}, 200 + Math.random() * 300);
	});
	
}

function deleteOrder( id ){
	
	let res = [];
	
	for ( let i = 0; i < state.orders.length; i++ ) {
		
		if ( state.orders[ i ].id != id ) {
			res.push(state.orders[ i ]);
		}
		
	}
	
	state.orders = res;
	
}

function createOrder( data ){
	
	++state.lastId;
	data.id = state.lastId;
	state.orders.push(data);
	
}