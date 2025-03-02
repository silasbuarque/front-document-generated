// src/app/app.component.ts
import { Component } from '@angular/core';
import { DocumentGeneratorComponent } from './components/document-generator/document-generator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DocumentGeneratorComponent],
  template: `
    <div class="container">
      <app-document-generator></app-document-generator>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background-color: #1e1e1e;
    }
  `]
})
export class AppComponent {}