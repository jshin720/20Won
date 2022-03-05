import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_api_util'
import { Route, Switch, Redirect } from 'react-router-dom'
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import Home from "./homepage/home"
import Splash from "./splash"
import AccountShowContainer from "./account/account_show_container";
import FurnitureShowContainer from "./furnitures/furniture_show_container";
import FurnitureIndexContainer from "./furnitures/furniture_index_container";
// import NavBar from './navbar';
import Navbar from './nav/navbar'
import OrderShowContainer from './order/order_show_container';
import Modal from './account/modal';
import SearchBarContainer from './search_bar/search_bar_container';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  // the routes need to imported for lines 18. 19 
  // the route for protectedRoute need to directed to a specific page. 

  render() {
    return (
      
      <div className="app">
        {/* <Router>
        </Router> */}
        <Navbar/>
        <Modal/>
        {/* <Header />
        <Cart /> */}
        <Switch>
          <Route path='/search/:keyword'component={FurnitureIndexContainer}/>
          <Route path='/furnitures/sofa' component={FurnitureIndexContainer}/>
          <Route path='/furnitures/sectional' component={FurnitureIndexContainer}/>
          <Route path='/furnitures/chair' component={FurnitureIndexContainer}/>
          <Route path='/furnitures/table' component={FurnitureIndexContainer}/>
          <Route path='/furnitures/shopall' component={FurnitureIndexContainer}/>
          <Route path="/furnitures/:furnitureId" component={FurnitureShowContainer}/>
          <Route path="/furnitures" component={FurnitureIndexContainer} />
          <Route path="/cart" component={OrderShowContainer}/>
          <AuthRoute path="/login" component={LogInFormContainer}/>
          <AuthRoute path="/signup" component={SignUpFormContainer}/>
          <ProtectedRoute path='/account' component={AccountShowContainer}/>
          <ProtectedRoute path="/homepage" component={Home}/> 
          <Route exact path='/' component={Splash}/>        
        </Switch>
      </div>
    )
  }
}

export default App;