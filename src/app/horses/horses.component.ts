import { Component } from '@angular/core';
import {
  NgFor, 
  NgIf,
  UpperCasePipe, 
} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Horse } from '../horse';
import { HORSES } from '../mock-horses';
import { HorseDetailComponent } from '../horse-detail/horse-detail.component';

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
    HorseDetailComponent, 
  ],
})
export class HorsesComponent {
  horses = HORSES;
  selectedHorse?: Horse;

  onSelect(horse: Horse): void {
    this.selectedHorse = horse;
  }
}
