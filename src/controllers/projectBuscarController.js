import Project from '../models/Project';

export async function getProjects(req, res) {
    try {
        const projects = await Project.findAll()
        if (projects) {
            return res.json({
                message: 'Projects found with successfully',
                data: projects
            })
        }
    } catch (e) {
        res.status(500).json({
            message: 'Search in projects failed',
            data: {}
        })
    }
}