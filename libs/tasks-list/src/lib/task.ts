import { effect, Injectable, signal } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

export interface ITask {
  id: string;
  text: string;
  done: boolean;
}


@Injectable({
  providedIn: 'root',
})
export class Task {
  newTaskText = signal('');
  tasks = signal<ITask[]>(this.loadTasks());

  constructor() {
    // Auto-save tasks to localStorage on change
    effect(() => {
      localStorage.setItem('tasks', JSON.stringify(this.tasks()));
    });
  }
  
  addTask() {
    const text  = this.newTaskText().trim();
    if (!text ) return;

    const newTask: ITask = {
      id: uuidv4(),
      text,
      done: false,
    };

    this.tasks.update((tasks) => [...tasks, newTask]);
    this.newTaskText.set('');
  }

  removeTask(id: string) {
    this.tasks.update((tasks) => tasks.filter(task => task.id !== id));
  }

  toggleDone(id: string) {
    this.tasks.update(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  private loadTasks() {
    const raw = localStorage.getItem('tasks');
    try {
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }
}
