import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Error from './components/Error';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login';
const App=()=> {
  return (
    <>

    <Router>
       <Navbar />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/aboutme" >
          <About />
        </Route>
        <Route exact path="/contact" >
        <Contact /> 
        </Route>
        <Route exact path="/registration" > 
        <Signup />
        </Route>
        <Route exact path="/login" > 
        <Login />
        </Route>
        <Route > 
        <Error />
        </Route>

      </Switch>
    </Router>
    </>
  );
}

export default App;
