import { Organization } from '../../../models/Organization'

export const createOrg = async (req: any, res: any) => {
    try {
        let newOrg = await Organization.create(req.body)

        res.status(200).json({
            org: newOrg
        })

    } catch (error) {
        res.json({ error })
    }
}


export const getAllOrgs = async ({ }, res: any) => {
    try {
        let organizations = await Organization.find({}).populate({ path: 'shelters' })

        res.status(200).json({ organizations })

    } catch (error) {
        res.status(400).json({ error })
    }
}