import {Organization} from '../../../models/Organization'

export const createOrg = async (req:any, res: any) => {
    try {
        let newOrg = await Organization.create(req.body)

        res.status(200).json({
            org: newOrg
        })

    } catch (error) {
        res.json({ error })
    }
}