import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecetasListComponent} from './recetas-list/recetas-list.component'
import {RecetasDetailComponent} from './recetas-detail/recetas-detail.component'

const routes: Routes = [
  {
    path:'recetaslist',
    component: RecetasListComponent
  },
  {
    path:'recetasdetail',
    component: RecetasDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecetasRoutingModule { }