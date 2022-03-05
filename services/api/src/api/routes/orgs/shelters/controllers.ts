import { Shelter } from '../../../../models/Shelter'

export const createShelter = async (req: any, res: any) => {
    let { id } = req.params

    try {
        req.body.organization = id

        let newShelter = await Shelter.create(req.body)
        
        res.status(200).json({ shelter: newShelter })

    } catch (error) {
        res.status(400).json({ error })
    }
}
