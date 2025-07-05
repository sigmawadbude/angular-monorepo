import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogService } from '@angular-monorepo/services';

@Component({
  selector: 'lib-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  logServ = inject(LogService);

  constructor() {
    this.logServ.consoleLog('Products component initialized');
  }
}
