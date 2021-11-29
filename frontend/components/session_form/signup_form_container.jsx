import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { removeSessionErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    user: {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    },
    errors: state.errors.session,
    formHeader: "Create An Account",
    formEvent: 'Sign Up'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: (user) => dispatch(signup(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
