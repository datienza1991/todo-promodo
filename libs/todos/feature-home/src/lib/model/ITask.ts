export interface ITask {
  id: number;
  name: string;
  isCompleted: boolean;
  promodoroCount: number;
  promodoroDoneCount: number;

  projectId: number;
}

export interface IModifiedTask extends Partial<ITask>{
  promodoroNotDoneCount: number;
}
