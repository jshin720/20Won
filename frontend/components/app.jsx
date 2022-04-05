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
import * as MdIcon from "react-icons/md"
import * as VscIcon from "react-icons/vsc"
import * as BsIcon from "react-icons/bs"
import * as SiIcon from "react-icons/si"

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
        <Navbar />
        <Modal />
        {/* <Header />
        <Cart /> */}
        <Switch>
          <Route path='/search/:keyword' component={FurnitureIndexContainer} />
          <Route path='/furnitures/sofa' component={FurnitureIndexContainer} />
          <Route path='/furnitures/sectional' component={FurnitureIndexContainer} />
          <Route path='/furnitures/chair' component={FurnitureIndexContainer} />
          <Route path='/furnitures/table' component={FurnitureIndexContainer} />
          <Route path='/furnitures/shopall' component={FurnitureIndexContainer} />
          <Route path="/furnitures/:furnitureId" component={FurnitureShowContainer} />
          <Route path="/furnitures" component={FurnitureIndexContainer} />
          <Route path="/cart" component={OrderShowContainer} />
          <AuthRoute path="/login" component={LogInFormContainer} />
          <AuthRoute path="/signup" component={SignUpFormContainer} />
          <ProtectedRoute path='/account' component={AccountShowContainer} />
          <ProtectedRoute path="/homepage" component={Home} />
          <Route exact path='/' component={Splash} />
        </Switch>

        <footer>
          <div className="footer-container">

            <div className="header-footer">
              <a href="mailto:Jeffshin720@gmail.com">
                <MdIcon.MdEmail className='email-icon' />
                <span className='email-contact'  >Contact Jeffrey Shin</span>
              </a>
            </div>

            <div className="footer-info-container">

              <div className="left-info">
                <div className="technology-container">
                  <h1>Technology Used</h1>
                  <li> JavaScript</li>
                  <li> React </li>
                  <li> Redux </li>
                  <li> Rudy </li>
                  <li> Rails </li>
                  <li> CSS</li>
                  <li> HTML</li>
                  <li> AWS</li>
                </div>

              </div>
              <div className="center-container">
                <h2>What is TwentyWon</h2>
                <p>TwentyWon is a clone of The SixPenny furnitures website. With the purpose of comfort, quality and home in mind. All of furnitures shown on this site is sold on the SixPenny website  </p>
              </div>
              <div className="right-info">

                <div class='social-links'>
                  <div class='social-btn flex-center' id="angel-list">
                    <a href="https://angel.co/u/jeffrey-shin-720">
                      <SiIcon.SiAngellist className='angel-img' />
                      {/* <span>/jeffrey-shin-720</span> */}
                    </a>
                  </div>

                  <div class='social-btn flex-center' id="linkedin">
                    <a href="https://www.linkedin.com/in/jeffrey-shin-901752228/">
                      <BsIcon.BsLinkedin className='linkedin-img' />
                      {/* <span>in/jeffrey-shin/</span> */}
                    </a>
                  </div>

                  <div class='social-btn flex-center' id="github">
                    <a href="github.com/jshin720"></a>
                    <VscIcon.VscGithub className='gitbhub-img' />
                    {/* <span>@/jshin720</span> */}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </footer>

      </div>
    )
  }
}

export default App;