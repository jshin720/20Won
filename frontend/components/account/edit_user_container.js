import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';
import { editUser } from '../../actions/user_actions';
import { fetchUser} from '../../actions/user_actions';
import { withRouter } from 'react-router';
import EditUserForm from './edit_user';

const mapStateToProps = (state) => {
  // console.log("user-edit", state)
  return {
    user: state.entities.users[state.session.id],
    errors: state.errors.user,
    sessionId: state.session.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    updateUser: (userId) => dispatch(editUser(user)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditUserForm));