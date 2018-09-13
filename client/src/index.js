import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Upload from './components/Upload';
import Show from './components/Show';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    // <App/>,
    <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/upload' component={Upload} />
            <Route path='/show/:id' component= {Show}/>
        </div>

    </Router>, 
    document.getElementById('root'));
registerServiceWorker();
