import express from 'express';
import { getDestinations } from '../controllers/ destination.controller.js';
const router = express.Router();

router.get('/',  getDestinations);

export default router;