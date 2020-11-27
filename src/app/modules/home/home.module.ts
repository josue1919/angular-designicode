import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeLoginComponent } from './home-login/home-login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegistroComponent } from './registro/registro.component';

//componentes de material
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    //traemos los subcomponentes creados
   
    HomeLoginComponent,
    LandingPageComponent,
    RegistroComponent
    
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    MatButtonModule,
    MatInputModule
    
  ]
})
export class HomeModule { }
