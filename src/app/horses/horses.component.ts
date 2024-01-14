import { Component } from '@angular/core';
import {
  NgFor, 
  NgIf,
  UpperCasePipe, 
} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Horse } from '../horse';
import { HORSES } from '../mock-horses';

@Component({
  standalone: true,
  selector: 'app-horses',
  templateUrl: './horses.component.html',
  styleUrl: './horses.component.css',
  imports: [
    FormsModule,
    NgFor,
    NgIf,
    UpperCasePipe,
  ],
})
export class HorsesComponent {
  horses = HORSES;
  selectedHorse?: Horse;

  onSelect(horse: Horse): void {
    this.selectedHorse = horse;
  }
}
