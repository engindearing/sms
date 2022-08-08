export const restrictTo =
  (...roles: any) =>
  (req: any, res: any, next: any) => {
    const { role } = req.user;

    if (!roles.includes(role)) {
      res
        .status(401)
        .json({ message: "You are unauthorized to perform this action" });
    }
    next();
  };
