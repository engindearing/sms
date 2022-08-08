import { Guest } from "../models/guest.model";

export const deleteGuest = async (req: any, res: any) => {
  let { memberId } = req.params;

  try {
    await Guest.findByIdAndDelete(memberId);

    res.status(200).json({ message: "Deleted members" });
  } catch (error) {
    res.status(400).json(error);
  }
};
