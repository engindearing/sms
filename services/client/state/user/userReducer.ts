const INITIAL_STATE = {
    currentUser: {
      id: null,
      firstName: "",
      lastName: "",
      email: "",
      role: "",
    },
  };
  
  const userReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
      case "SET_CURRENT_USER":
        return { ...state, currentUser: action.payload, isLoggedIn: true };
      case 'SIGN_OUT':
        return {...state, currentUser: {}, isLoggedIn: false}
      default:
        return state;
    }
  };
  
  export default userReducer;