import React from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import {createStructuredSelector} from 'reselect';

import Checkout from './pages/checkout/Checkout';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {setCurrentUser} from './redux/user/userActions'
import {selectCurrentUser} from './redux/user/userSelector'
class App extends React.Component{
  unsubscribeFromAuth = null
  componentDidMount(){
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
       if (userAuth){
         const userRef = await createUserProfileDocument(userAuth)
         userRef.onSnapshot(snapShot =>{
            this.props.setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
            })
           console.log(this.state)
         })
       }
        this.props.setCurrentUser(userAuth)
      })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render(){
    return (
      <div>
        <Header  />
        <Switch>
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={()=>this.props.currentUser?(<Redirect to="/"/>):(<SignInAndSignUpPage/>)} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
})
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(
    setCurrentUser(user)
  )
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
