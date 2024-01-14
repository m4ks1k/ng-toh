import { Component } from '@angular/core';
import { HORSES } from '../mock-horses';

@Component({
  selector: 'app-horses',
  templateUrl: './horses.component.html',
  styleUrl: './horses.component.css',
})
export class HorsesComponent {
  horses = HORSES;
}
