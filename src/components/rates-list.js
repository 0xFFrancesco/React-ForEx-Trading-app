import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

let refreshTimer = null;

class RatesList extends Component {
	
	render(){
		const rates = this.props.state.rates;
		return (<div className='rates-list'>
			<h2>Current rates:</h2>
			<div className='list-container'>
				{rates.length ? rates.map(this.renderRate) : <span>loading data...</span>}
			</div>
		</div>);
	}
	
	componentWillMount(){
		this.props.getRates();
		refreshTimer = setInterval(() =>{
			this.props.getRates();
		}, 500);
	}
	
	componentWillUnmount(){
		clearInterval(refreshTimer);
	}
	
	renderRate( rate, i ){
		return (<div key={i} className="rate-overview">
			<div className="rate-overview-title">{rate.cc1} - {rate.cc2}</div>
			<div className="rate-overview-desc"><span><i>ask:</i> {rate.ask}</span><span><i>bid:</i> {rate.bid}</span></div>
		</div>);
	}
}

export default connect(state =>{
	return {state : state.data};
}, actions)(RatesList);