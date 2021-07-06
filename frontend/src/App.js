import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
// import ReactDOM from 'react-dom';

import login from './pages/Login/Login';
import RouterLayout from './layout/RouteLayout';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <Redirect to="login"/>
        </Route>
        <Route exact path="/login" component={login}/>
        <RouterLayout exact path="/admin" component={ login } />

      </Switch>
    </Router>
  );
}

export default App;
