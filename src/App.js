import logo from './logo.svg';
import './App.css';
import Login from './compunents/login/login'
import Signup from './compunents/signup/signup'
import Dashboard from './compunents/dashboard/dashboard'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">


      {/* <Login />
      <Signup />
      <Dashboard /> */}



      <Router>

        <nav>
          <ul>
            <li>
              <Link to="/">login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>


        <Switch>


          <Route exact={true} path="/">
            <Login />
          </Route>


          <Route path="/dashboard">
            <Dashboard />
          </Route>


          <Route path="/signup">
            <Signup />
          </Route>




        </Switch>

      </Router>



    </div>
  );
}

export default App;