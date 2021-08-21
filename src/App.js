import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './components/Header.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Addproduct from './components/Addproduct.js'
import Updateproduct from './components/Updateproduct.js';
import Userspage from './Userspage/Userspage.js';
import Protected from "./components/Protected.js";
import Allschools from './components/Allschools.js';

function App() {
  return (
    <div className="App">
         <Userspage/>

      <BrowserRouter>
        <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        
        <Route path="/register">
          <Register/>
        </Route>

        <Route path="/add">
          <Protected Cmp={Addproduct}/>
          {/* <Addproduct/> */}
        </Route>

        <Route path="/update">
          <Protected Cmp={Updateproduct}/>
          {/* <Updateproduct/> */}
        </Route>

        <Route path="/allschools">
          <Protected Cmp={Allschools}/>
          {/* <Updateproduct/> */}
        </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
