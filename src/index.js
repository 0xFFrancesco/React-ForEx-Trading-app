import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import App from './components/app';
import reducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducer)}>
	<App />
</Provider>, document.querySelector('.container'));
