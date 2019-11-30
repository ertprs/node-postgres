import Project from '../models/Project';

export async function atualizarProjectByID(req, res) {
    try {
        const { id } = req.params;
        const { name, priority, description, deliverydate } = req.body;

        const projects = await Project.findAll({
            attributes: ['id', 'name', 'priority', 'description', 'deliverydate'],
            where: { id }
        });

        if (projects.length > 0) {
            projects.forEach(async project => {
                await project.update({
                    name,
                    priority,
                    description,
                    deliverydate
                });
            })
            return res.json({
                message: 'Project updated with successfully',
                data: projects
            })
        }

        res.status(404).json({
            message: 'Project not found',
        })
    } catch (e) {
        res.status(500).json({
            message: 'Update of project failed',
            data: {}
        })
    }
}