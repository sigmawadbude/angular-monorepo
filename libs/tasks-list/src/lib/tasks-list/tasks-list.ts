import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../task';

@Component({
  selector: 'lib-tasks-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css',
})
export class TasksList {
  readonly taskService = inject(Task);
  protected taskInput = this.taskService.newTaskText;
  protected tasks = this.taskService.tasks;

  addTask() {
    this.taskService.addTask();
  }

  removeTask(id: string) {
    this.taskService.removeTask(id);
  }

  toggleDone(id: string) {
    this.taskService.toggleDone(id);
  }
}
