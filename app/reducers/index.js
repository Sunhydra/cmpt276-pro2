import { combineReducers } from 'redux';
import messages from './messages';
import tokimonlist from './tokimonlist';

export default combineReducers({
  messages,
  tokimonlist
});
