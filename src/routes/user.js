import { Router } from 'express';
import { login, validateToken, signup } from '../middlewares/authService'

const router = Router();

router.post('/login', login)
router.post('/validateToken', validateToken)
router.post('/signup', signup)

export default router;