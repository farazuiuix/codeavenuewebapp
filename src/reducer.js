 const rootReducer = (state = {
 }, action) => {
  switch (action.type) {
    case 1:
      return {...state}
    default:
      return state;
  }
};

export default rootReducer
