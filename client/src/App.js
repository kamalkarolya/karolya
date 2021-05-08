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
import Example from './components/Example';
import Logout from './components/Logout';
import { createContext, useContext, useReducer } from 'react';
import {initialState, reducer} from './reducer/reducer';


export const UserContext = createContext();
const Routing=()=>{
  return(
    <>
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
        <Route exact path="/signin" > 
        <Login />
        </Route>
        <Route exact path="/signout" > 
        <Logout />
        </Route>
        <Route exact path="/example" > 
        <Example />
        </Route>
        <Route > 
        <Error />
        </Route>

      </Switch>
    </>
  )
}
const App=()=> {
  const  [state, dispatch] = useReducer(reducer,initialState);
  return (
    <>
    <UserContext.Provider  value={{state,dispatch}} >
    <Router>
       <Navbar />
        <Routing />
    </Router>
    </UserContext.Provider>
    </>
  );
}

export default App;
