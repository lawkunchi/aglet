import {BrowserRouter} from 'react-router-dom';
import Routes from "../Routes";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes/>
            </div>
        </BrowserRouter>
    );
}

export default App;


// import React from 'react';
// import ReactDOM from 'react-dom';
// import  Landing from './pages/Landing.js'

// function App() {
//     return (
//         <div className="main">
//             <Landing/>
//         </div>
//     );
// }

// export default App;

// if (document.getElementById('app')) {
//     ReactDOM.render(<App />, document.getElementById('app'));
// }
