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
import Learnmore from './Userspage/Learnmore';

function App() {
  return (
    <div className="App">
      
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
        </Route>

        <Route path="/update/:id">
          <Protected Cmp={Updateproduct}/>
        </Route>

        <Route path="/allschools">
          <Protected Cmp={Allschools}/>
        </Route>

        <Route path="/learnmore/:id">
            <Learnmore/>
        </Route>

        <Route path="/">
          <Userspage/>
        </Route>

        </Switch>
      </BrowserRouter>



      {/* } */}
    </div>
  );
}

export default App;
