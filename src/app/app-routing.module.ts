import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';
import { UserskeletonComponent } from '@layout/userskeleton/userskeleton.component';

const routes: Routes = [
  {
    path:'usuario',
    component:UserskeletonComponent,
    loadChildren:()=>
    import ('@modules/user/user.module').then((m)=>m.UserModule)

  },
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
