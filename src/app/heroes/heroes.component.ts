import { Component } from '@angular/core';
import { Horse } from '../horse';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  horse: Horse = {
    name: 'Роса',
    id: 1
  };
}
