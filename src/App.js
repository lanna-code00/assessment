import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './components/Header.js';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Addproduct from './components/Addproduct.js'
import Updateproduct from './components/Updateproduct.js';

function App() {
  return (
    <div className="App">
         {/* <Userspage/> */}

      <BrowserRouter>
          <Header/>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/add">
          <Addproduct/>
        </Route>
        <Route path="/update">
          <Updateproduct/>
        </Route>

      </BrowserRouter>
    </div>
  );
}

export default App;
