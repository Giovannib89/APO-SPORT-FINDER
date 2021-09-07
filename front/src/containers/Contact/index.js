import { connect } from 'react-redux';
import Contact from 'src/components/Contact';
import {
  createContactSetInputValueAction,
  createContactAction,
  changeSelectAction,
  submitContactForm,
  closeMessageSuccess,
} from 'src/actions/contact';

import {
  clickOnButtonCloseSettings,
} from 'src/actions/user';

import {
  clickOnNewSearch,
} from 'src/actions/search';

const mapStateToProps = (state) => ({
  lastname: state.contact.lastname,
  firstname: state.contact.firstname,
  email: state.contact.email,
  subject: state.contact.subject,
  content: state.contact.content,
  openLogIn: state.user.openLogIn,
  openLogUp: state.user.openLogUp,
  submitMessage: state.contact.submitMessage,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(createContactSetInputValueAction(newValue, name));
  },
  handleContact: () => {
    dispatch(createContactAction());
  },
  handleSelectCivility: (newValue) => {
    dispatch(changeSelectAction(newValue));
  },
  onClickSubmit: () => {
    dispatch(submitContactForm());
  },
  onClickMessageSuccess: () => {
    dispatch(closeMessageSuccess());
  },
  onClickCloseSettings: () => {
    // console.log('container');
    const action = clickOnButtonCloseSettings();
    dispatch(action);
  },
  onClickNewSearch: () => {
    dispatch(clickOnNewSearch());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);