import { Component, Input, OnInit } from '@angular/core';
import { ICardReceta } from './icard-receta.metadata';

@Component({
  selector: 'app-card-receta',
  templateUrl: './card-receta.component.html',
  styleUrls: ['./card-receta.component.scss']
})
export class CardRecetaComponent implements OnInit {
  @Input() data:ICardReceta | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
