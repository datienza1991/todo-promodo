import { Component, OnInit } from '@angular/core';
import { IInputClock } from '../../model/IInputClock';
import { IProject } from '../../model/IProject';
import { ITask } from '../../model/ITask';

@Component({
  selector: 'todos-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  projects: IProject[] = [];
  tasks: ITask[] = [];
  taskStore: ITask[] = [];

  inputClocks: IInputClock[] = [
    {
      id: 1,
      nzIconTheme: 'outline',
      isSelected: false,
    },
    {
      id: 2,
      nzIconTheme: 'outline',
      isSelected: false,
    },
    {
      id: 3,
      nzIconTheme: 'outline',
      isSelected: false,
    },
    {
      id: 4,
      nzIconTheme: 'outline',
      isSelected: false,
    },
    {
      id: 5,
      nzIconTheme: 'outline',
      isSelected: false,
    },
  ];

  taskToBeCompletedCount = 0;
  taskCompletedCount = 0;
  taskClocks = [0];
  project = {} as IProject;

  ngOnInit(): void {
    console.log('init tods-home');
    this.getTaskTobeCompletedCount();
    this.getTaskCompletedCount();
  }

  onAddProject(event: any) {
    const newId = this.projects.length + 1;
    this.projects.push({
      id: newId,
      name: `${event.target.value}`,
    });
    this.selectProject(newId);
  }

  onAddTask(event: any) {
    const newId = this.tasks.length + 1;
    this.taskStore.push({
      id: newId,
      name: `${event.target.value} ${newId}`,
      isCompleted: false,
      promodoroCount: this.inputClocks.filter((x) => x.isSelected).length,
      projectId: this.project.id,
      promodoroDoneCount: 0
    });
    this.getTasks();
    this.resetInputClockSelected();
    this.getTaskTobeCompletedCount();
  }

  onProjectSelected(event: IProject) {
    this.project = { ...event };
    this.getTasks();
    console.log(this.tasks);
  }

  selectProject(id: number) {
    const index = this.projects.findIndex((_project) => {
      return _project.id === id;
    });

    if (index === -1) {
      return;
    }

    this.project = { ...this.projects[index] };
    this.getTasks();
    console.log(this.tasks);
  }

  getTasks() {
    this.tasks = [
      ...this.taskStore.filter((x) => x.projectId === this.project.id),
    ];
    this.getTaskTobeCompletedCount();
    this.getTaskCompletedCount();
  }

  getTaskTobeCompletedCount() {
    this.taskToBeCompletedCount = this.tasks.filter(
      (project) => !project.isCompleted
    ).length;
  }

  getTaskCompletedCount() {
    this.taskCompletedCount = this.tasks.filter(
      (project) => project.isCompleted
    ).length;
  }

  onUpdateTask(task: ITask) {
    const index = this.tasks.findIndex((_task) => {
      return _task.id === task.id;
    });

    if (index === -1) {
      return;
    }

    this.tasks[index].isCompleted = task.isCompleted;
    this.getTaskCompletedCount();
    this.getTaskTobeCompletedCount();
  }

  updateInputIconClockMouseOver(inputClock: IInputClock) {
    const index = this.inputClocks.findIndex((_inputClock) => {
      return _inputClock.id === inputClock.id;
    });

    this.resetInputClockToOutline();

    for (let i = 0; i <= index; i++) {
      this.inputClocks[i].nzIconTheme = 'twotone';
    }
  }

  updateInputIconClockMouseLeave() {
    for (let i = 0; i <= this.inputClocks.length; i++) {
      if (!this.inputClocks[i]) {
        return;
      }

      this.inputClocks[i].nzIconTheme = this.inputClocks[i].isSelected
        ? 'twotone'
        : 'outline';
    }
  }

  onSelectClock(inputClock: IInputClock) {
    const index = this.inputClocks.findIndex((_inputClock) => {
      return _inputClock.id === inputClock.id;
    });

    if (index === -1) {
      return;
    }

    this.resetInputClockSelected();

    for (let i = 0; i <= index; i++) {
      this.inputClocks[i].isSelected =
        index === 0 ? !this.inputClocks[i].isSelected : true;
    }
  }

  private resetInputClockToOutline() {
    for (let i = 0; i <= this.inputClocks.length; i++) {
      if (!this.inputClocks[i]) {
        return;
      }

      this.inputClocks[i].nzIconTheme = 'outline';
    }
  }

  private resetInputClockSelected() {
    const selectedCounts = this.inputClocks.filter((x) => x.isSelected);
    for (const element of this.inputClocks) {
      if (!element) {
        return;
      }

      if (selectedCounts.length > 1) {
        element.isSelected = false;
        element.nzIconTheme = 'outline';
      }
    }
  }
}
