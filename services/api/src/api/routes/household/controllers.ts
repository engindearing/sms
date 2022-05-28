import { Household } from "../../../models/Household"

import { Member } from "../../../models/Member"

export const updateHousehold = async (req:any,res:any) => {

    const { id } = req.params

    try {
        let updatedHousehold = await Household.findByIdAndUpdate(id, req.body)

        res.status(200).json(updatedHousehold)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const addMembers = async (req:any,res:any) => {
    const { id } = req.params

    let membersData = req.body.map((mem:any) => ({ ...mem, household: id }))

    try {

        let members = await Member.create(membersData)

        res.json(members)
        
    } catch (error) {

        res.json(error)
        
    }
}

