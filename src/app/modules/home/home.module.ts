import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeLoginComponent } from './home-login/home-login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';



@NgModule({
  declarations: [
    //traemos los subcomponentes creados
   
    HomeLoginComponent,
    LandingPageComponent
    
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
