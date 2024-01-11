export enum taskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN PROGRESS',
  DONE = 'DONE',
}

export class Task {
  id: string;
  title: string;
  description: string;
  status: taskStatus;
}
