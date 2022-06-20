import { Organization } from '../../../../models/Organization'

export const validateOrgId = async (req: any, res: any, next: any) => {
    let { id } = req.params

    try {
        await Organization.findById(id).exec()

        return next()

    } catch (error) {
        res.status(400).json({ message: "OrgId does not exist" })
    }
}