export const setCurrentUser = (currentUser: object) => {
  return { type: "SET_CURRENT_USER", payload: currentUser };
};

export const signOut = () => {
  return { type: "LOG_OUT" };
};
