/**
 * Created by vitiwary on 17/08/16.
 */
import {Routes,RouterModule} from '@angular/router';

export const appRoutes: Routes= [
  {path:'', redirectTo: 'login', pathMatch:'full'},
  {path:'login', redirectTo: 'login', pathMatch:'full'},
  //{path:'home', loadChildren:()=> HomeModule }
  {path:'home', loadChildren:'app/home/home.module#HomeModule'}
];

export const appRouting=RouterModule.forRoot(appRoutes);
