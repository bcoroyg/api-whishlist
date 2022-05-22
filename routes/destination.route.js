import express from 'express';
import { 
    getDestinations, 
    postDestination 
} from '../controllers/ destination.controller.js';

const router = express.Router();

router.get('/',  getDestinations);
router.post('/',  postDestination);

export default router;