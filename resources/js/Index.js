import React, { Component }  from 'react';

import ReactDOM from 'react-dom';
import App from './components/App';
import {store} from './redux/CreateStore';
import {Provider} from 'react-redux';

const loader = document.querySelector('.loader');

const showLoader = () => loader.classList.remove('loader--hide');

const hideLoader = () => loader.classList.add('loader--hide');

export default class Index extends Component {

	constructor(props) {
            super(props);
      }

	
	componentDidMount() {
	    this.props.hideLoader();
  	}

	render() {

		return (
	    		<div>
		          
	            </div>

	    );
	}
    
}


setTimeout(() => 
  ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Index hideLoader={hideLoader} showLoader={showLoader} />
			<App/>
		</Provider>
	</React.StrictMode>,document.getElementById('app')
)
, 5000);