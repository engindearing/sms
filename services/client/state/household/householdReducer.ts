const INITIAL_STATE = {
  household: {},
  members: [],
};

const householdReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "SET_HOUSEHOLD":
      return { ...state, household: action.payload };

    default:
      return state;
  }
};

export default householdReducer;
