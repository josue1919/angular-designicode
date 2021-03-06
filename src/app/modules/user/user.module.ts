import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserRoutingModule } from './user-routing.module';
import { RegistoRecetaComponent } from './registo-receta/registo-receta.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [UserListComponent, UserDetailComponent, RegistoRecetaComponent],
  imports: [
    // CommonModule,
    SharedModule,
    UserRoutingModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class UserModule { }
