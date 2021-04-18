import './styles/app.css';
import { Link, HashRouter as Router, Switch, Route } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';

import Dashboard from './components/dashboard.component';
import Home from './components/home.component';
import SideBar from './components/sidebar.component'
import DateRangeSeletor from './components/daterangeselector.component';


const handleCollapsedChange = () => {
      
}

function App() {
  return (
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
  );
}



export default App;
