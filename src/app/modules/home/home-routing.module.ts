import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLoginComponent } from './home-login/home-login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
    //asignando las rutas de los subcomponentes que creamos
    {
        path:'',
        component:LandingPageComponent
    },
    {
        path:'login',
        component:HomeLoginComponent
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
