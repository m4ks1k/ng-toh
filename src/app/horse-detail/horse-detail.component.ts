import { Component, Input } from '@angular/core';
import { NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Horse } from '../horse';


@Component({
  standalone: true,
  selector: 'app-horse-detail',
  templateUrl: './horse-detail.component.html',
  styleUrl: './horse-detail.component.css',
  imports: [
    FormsModule,
    NgIf,
    UpperCasePipe,
  ],
})
export class HorseDetailComponent {
  @Input() horse?: Horse

}
