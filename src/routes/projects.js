import { Router } from 'express';
import { auth } from '../middlewares/auth'

import { createProject } from '../controllers/projectCriarController'
import { getProjects } from '../controllers/projectBuscarController'
import { getProjectByID } from '../controllers/projectBuscarByIDController'
import { deleteProjectByID } from '../controllers/projectExcluirByIDController'
import { atualizarProjectByID } from '../controllers/projectAtualizarByIDController'

const router = Router();

const project01 = getProjects
const project02 = getProjectByID
const project03 = createProject
const project04 = deleteProjectByID
const project05 = atualizarProjectByID

router.get('/', project01)
router.get('/:id', project02)
router.post('/', project03)
router.delete('/:id', project04)
router.put('/:id', project05)

export default router;