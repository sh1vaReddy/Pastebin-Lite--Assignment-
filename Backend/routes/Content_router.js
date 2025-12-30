import express from 'express';
const router = express.Router();
import { CreatePaste,GetContent,Checkhealth} from '../Controller/Content_Controller.js'

router.get("/healthz",Checkhealth);
router.post('/pastes',CreatePaste)
router.get('/p/:id',GetContent);

export default router;