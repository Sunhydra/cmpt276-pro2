const initialState = {
  tokimonlist: []
};

export default function storelist(state = initialState, action) {
  if (!state.hydrated) {
    state = Object.assign({}, initialState, state, { hydrated: true });
  }
  switch (action.type) {
    case 'GET_TOKIMON_ALL_SUCCESS':
      console.log(action.tokimonlist);
      return Object.assign({}, state, {
        tokimonlist: action.tokimonlist
      });
    case 'GET_TOKIMON_ONE_SUCCESS':
    return Object.assign({}, state, {
      tokimonlist: action.tokimonlist
    });
    default:
      return state;
  }
}
