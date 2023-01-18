import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  pendiente: number = 0;
  realizado: number = 0;
  totalRecorrido: any;
}
