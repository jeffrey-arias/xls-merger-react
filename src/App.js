import './styles/app.css';
import { Link, HashRouter as Router, Switch, Route } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';
import DateRangeSeletor from './components/daterangeselector/daterangeselector.component';
import Dashboard from './components/dashboard/dashboard.component';
import Home from './components/home/home.component';
import SideBar from './components/sidebar.component';
import {reducer} from './components/datastore/datareducer'

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';


const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>

  <Router basename={process.env.PUBLIC_URL}>
    <div style={{display:"flex", flexDirection: "row"}}>
    <SideBar />
    <Switch>
      <Route path ="/" exact component={Home}/>
       <Route path ="/dashboard" component={Dashboard}/>
       <Route path ="/admin" component={DateRangeSeletor}/>
       </Switch>
       </div>

    </Router>
    </Provider>
  );
}

export default App;
