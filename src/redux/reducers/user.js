export const userReducer = (state = '', action) => {
  switch(action.type) {
    case 'updateUser':
      return action.payload.user;
    default:
      return state;
  }
}