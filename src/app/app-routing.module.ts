import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';

const routes: Routes = [
  {
    path:'',
    component:SkeletonComponent,
    children:[
      {
        //inyectamos de rutas los componetes
        path:'',
        loadChildren:()=>
        import ('@modules/home/home.module').then((m)=>m.HomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
