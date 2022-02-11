export const getCurrentUser = (req: any, res: any) => {
  const user = req.user;

  res.status(200).json({ user });
};
