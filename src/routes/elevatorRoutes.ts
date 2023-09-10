import express from 'express';
import { initializeElevatorSystem, requestElevator, getElevatorStatus, getDefault } from '../controllers/elevatorControllers.js'; // Import controllers

const router = express.Router();

router.post('/initialize', initializeElevatorSystem);
router.post('/request-elevator', requestElevator);
router.get('/elevator-status', getElevatorStatus);
router.get('/', getDefault);

export { router as elevatorRoutes };
