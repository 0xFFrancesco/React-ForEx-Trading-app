import React, {Component} from 'react';
import RatesList from './rates-list';
import OrdersList from './orders-list';
import OrderForm from './order-form';

export default class App extends Component {
	render(){
		return (<div>
			
			<h1>React ForEx Trading App <span>💵</span></h1>
			
			<div className="row">
				<div className="col-xs-12 col-sm-5 col-lg-4">
					<RatesList />
				</div>
				<div className="col-xs-12 col-sm-7 col-lg-4">
					<OrdersList />
				</div>
				<div className="col-xs-12 col-lg-4">
					<OrderForm />
				</div>
			</div>
			
		</div>);
	}
}
