export interface Elevator {
  id: number;
  currentFloor: number;
  status: 'idle' | 'moving' | 'doorOpen';
}

export let numberOfFloors: number = 0;
export let elevators: Elevator[] = [];
