import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import * as actions from '../actions';

class OrdersList extends Component {
	
	render(){
		const orders = this.props.state.orders;
		return (<div className='rates-list'>
			<h2>Orders ({orders.length}):</h2>
			<div className='list-container'>
				{orders.length ? orders.map(this.renderOrder) : <span>loading data...</span>}
			</div>
		</div>);
	}
	
	componentWillMount(){
		this.props.getOrders();
	}
	
	renderOrder = ( order, i ) =>{
		return (<div key={i} className="order-overview">
			<div className="order-overview-title">#{order.id.toString().padStart(4,0)} | {order.counterCcy} - {order.investmentCcy}</div>
			<div className="order-overview-desc"><span><i>limit:</i> {order.limit}</span><span><i>valid until:</i> {moment(order.validUntil).format('DD/MM/YYYY')}</span></div>
			<button className="order-overview-delete" onClick={this.props.deleteOrder.bind(this, order.id)}>delete</button>
		</div>);
	};
}

export default connect(state =>{
	return {state: state.data};
}, actions)(OrdersList);