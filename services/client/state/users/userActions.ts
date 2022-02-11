export const setCurrentUser = (currentUser: object) => {
  return { type: "SET_CURRENT_USER", payload: currentUser };
};
