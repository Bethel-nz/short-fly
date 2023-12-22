import { Router } from 'express';
import { shortenUrl } from '../controllers/shorten-url.controller';

const router = Router();

router.get('/:url');
router.post('/shorten-url', shortenUrl);

export default router;
