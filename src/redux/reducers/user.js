export const userReducer = (state = 'Tom', action) => {
  switch(action.type) {
    case 'updateUser':
      return action.payload;
    default:
      return state;
  }
}
