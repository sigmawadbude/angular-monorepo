import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogService } from '@angular-monorepo/services';

@Component({
  selector: 'app-welcome',
  imports: [CommonModule],
  template: `<div class="card">
  <div class="card-header">
    {{pageTitle}}
  </div>
  <div class="card-body">
    <div class="container-fluid">

      <div class="text-center">Developed by:</div>
      <div class="text-center">
        <h3>Sigma Wadbude</h3>
      </div>
    </div>
  </div>
</div>`
})
export class Welcome {
  protected pageTitle = 'Welcome';

  logServ = inject(LogService);

  constructor() {
    this.logServ.consoleLog(`${this.pageTitle} component initialized`);
  }
}
