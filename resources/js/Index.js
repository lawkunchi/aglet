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
	    localStorage.clear();
  	}

  	handleCallback = (childData) => {
            this.setState({price: childData});
      }


	render() {

		const {price} = this.state;
		return (
	    		<div>
		            <div className="container-fluid">
                <Header />
                
		            <Product parentCallBack = {this.handleCallback} />
		            </div>
		            <Footer totalPrice ={this.state.price} />
	            </div>

	    );
	}
    
}




setTimeout(() => 
  ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App hideLoader={hideLoader} showLoader={showLoader} />
		</Provider>
	</React.StrictMode>,document.getElementById('app')
)
, 5000);