import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
}
