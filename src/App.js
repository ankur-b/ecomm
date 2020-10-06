import React from 'react';
import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shoppage/shoppage.component'
import Header from './components/header/header'
import './App.css'

const HatsPage = () =>(
  <div>
    <h1>Hats Page</h1>
  </div>
)
function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={HatsPage} />
        <Route path='/shop' component={ShopPage} />
      </Switch> 
    </div>
  );
}

export default App;
