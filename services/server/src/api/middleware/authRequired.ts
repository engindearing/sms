export const authRequired = (req:any, res: any) => {
  const { accessToken } = req.body;

  res.send(accessToken)
};
