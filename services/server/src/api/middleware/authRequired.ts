export const authRequired = (req: any, res: any) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token)
    return res.status(401).json({ message: "Access token is required." });

  res.send("Access token " + token);
};
