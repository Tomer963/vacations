import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Components/HomePage/HomePage';
import LoginPage from './Components/LoginPage/LoginPage';
import NavBar from './Components/Navbar/NavBar';
import './GlobalStyles.css';
import { myContext } from './Context';

function App() {
  const userObject = useContext(myContext);
  console.log(userObject);
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Homepage} />
        {userObject ? <h1>tomer the king</h1> : <Route path='/login' component={LoginPage} />}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
