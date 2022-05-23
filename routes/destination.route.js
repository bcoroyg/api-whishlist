import express from 'express';
import { 
    getDestinations, 
    postDestination, 
    searchDestination,
    getTranslation
} from '../controllers/ destination.controller.js';

const router = express.Router();

router.get('/', getDestinations);
router.get('/search', searchDestination);
router.post('/', postDestination);
router.get('/translation', getTranslation);

export default router;