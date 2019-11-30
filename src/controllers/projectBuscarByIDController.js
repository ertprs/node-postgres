import Project from '../models/Project';

export async function getProjectByID(req, res) {
    try {
        const { id } = req.params;
        const project = await Project.findOne({
            where: { id }
        })
        if (project) {
            return res.json({
                message: 'Project found with successfully',
                data: project
            })
        }
    } catch (e) {
        res.status(500).json({
            message: 'Search in project failed',
            data: {}
        })
    }
}