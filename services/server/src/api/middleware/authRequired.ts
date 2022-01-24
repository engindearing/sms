export const authRequired = (req: any, res: any) => {
  const { authorization } = req.headers;

  console.log(req.headers);

  console.log(authorization);

  res.send("Access token " + authorization);
};
