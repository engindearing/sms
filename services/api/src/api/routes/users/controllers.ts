export const getCurrentUser = (req: any, res: any) => {
  const user = req.user;

  console.log(user)

  res.status(200).json({ user });
};
