const { verifyIdToken } = require("../../utils/firebase");

export const authRequired = async (req: any, res: any) => {
  // Parse access token from header

  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token)
    return res.status(401).json({ message: "Access token is required." });

  try {
    let result = await verifyIdToken(token);

    if (!result)
      return res.status(401).json({ message: "Invalid Access Token" });

    

  } catch (error) {
    res.status(500).json({ message: "Unable to verify user" })
  }
};
