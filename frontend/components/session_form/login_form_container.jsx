
import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions'
import SessionForm from './session_form';

const mSTP = (state) => ({
  user: {
    username: '',
    password: ''
  },
  formType: 'Sign In'
})

const mDTP = (dispatch) => ({
  action: user => dispatch(login(user))
})

export default connect(mSTP, mDTP)(SessionForm)