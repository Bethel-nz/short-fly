import { Router } from 'express';

const router = Router();

router.get('/:url');
router.post('/shorten');

export default router;
