import { Component, OnInit } from '@angular/core';
import { ICardReceta } from '@shared/components/cards/card-receta/icard-receta.metadata';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public receta:ICardReceta={
    comida:'https://i.blogs.es/8e3e94/tacos-suadero-la-vicenta-1/1366_2000.jpg',
    name:'tacos',
    time:'1 hora',




  }
  constructor() { }

  ngOnInit(): void {
  }

}
