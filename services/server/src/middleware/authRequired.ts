import { verifyIdToken } from "../utils/firebase";

import { User } from "../models/user.model";

export const authRequired = async (req: any, res: any, next: any) => {
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

    // @ts-ignore
    let currentUser = await User.findUserByEmailOrCreate(result.email);

    req.user = currentUser;

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to verify user" });
  }
};