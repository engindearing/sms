import { Household } from "../../../models/Household"

export const updateHousehold = async (req:any,res:any) => {

    const { id } = req.params

    try {
        let updatedHousehold = await Household.findByIdAndUpdate(id, req.body)

        res.status(200).json(updatedHousehold)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const addMember = (req:any,res:any) => {
    res.send('household member added')
}

