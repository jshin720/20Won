import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { updateUser, fetchUser } from '../../actions/user_actions';
import { withRouter } from 'react-router';
import EditUserForm from './edit_user';

const mapStateToProps = (state) => {
  console.log("user-edit", state)
  return {
    user: state.entities.users[state.session.id],
    errors: state.errors.users,
    sessionId: state.session.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    updateUser: (user) => dispatch(updateUser(user)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditUserForm));