import Project from '../models/Project';

export async function deleteProjectByID(req, res) {
    try {
        const { id } = req.params;
        const deleteProject = await Project.destroy({
            where: { id }
        })
        if (deleteProject) {
            return res.json({
                message: 'Project excluded with successfully',
                count: deleteProject
            })
        }
    } catch (e) {
        res.status(500).json({
            message: 'Exclusion of project with failure',
            data: {}
        })
    }
}