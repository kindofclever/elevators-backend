import { Request, Response } from 'express';
import { numberOfFloors, elevators, Elevator } from '../models/elevatorModels.js';

export const initializeElevatorSystem = (req: Request, res: Response) => {
  // Logic for initializing
  // ...
};

export const requestElevator = (req: Request, res: Response) => {
  // Logic for requesting elevator
  // ...
};

export const getElevatorStatus = (req: Request, res: Response) => {
  // Logic for getting elevator status
  // ...
};

export const getDefault = (req: Request, res: Response) => {
  res.send('Hello from Express and TypeScript!');
};
