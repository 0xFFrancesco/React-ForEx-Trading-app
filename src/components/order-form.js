import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {Field, reduxForm, Select} from 'redux-form';
import moment from 'moment';

class OrderForm extends Component {
	
	render(){
		return (<div className='order-form-wrapper'>
			<h2>Place order:</h2>
			<form className='order-form' onSubmit={this.props.handleSubmit(this.onSubmit)}>
				<div>
					<label htmlFor="currencies">Currencies:</label>
					<Field name="currencies" id='currencies' component="select" required>
						<option></option>
						{this.props.state.supported.map(( item, index ) => <option key={index} value={index}>{item.cc1} - {item.cc2}</option>)}
					</Field>
				</div>
				<div>
					<label htmlFor="limit">Limit:</label>
					<Field name="limit" id='limit' component="input" type="number" required />
				</div>
				<div>
					<label htmlFor="buy">Buy:</label>
					<Field name="buy" id='buy' component="input" type="checkbox" />
				</div>
				<div>
					<label htmlFor="validity">Validity:</label>
					<Field name="validity" id='validity' component="select" required>
						<option></option>
						<option value={1}>One month</option>
						<option value={2}>Two months</option>
						<option value={3}>Three months</option>
					</Field>
				</div>
				<button type="submit">Order</button>
			</form>
		</div>);
	}
	
	onSubmit = values =>{
		
		const curr = this.props.state.supported[ values.currencies ];
		
		let order = {
			"counterCcy"    : curr.cc1,
			"investmentCcy" : curr.cc2,
			"buy"           : !!values.buy,
			"limit"         : values.limit,
			"validUntil"    : moment().add(values.validity, 'months')
		};
		
		this.props.placeOrder(order);
		
	};
	
	componentWillMount(){
		this.props.getSupportedCurrencyPairs();
	}
	
}

export default connect(state =>{
	return {state : state.data};
}, actions)(reduxForm({form : 'create'})(OrderForm));