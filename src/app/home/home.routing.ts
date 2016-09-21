/**
 * Created by vitiwary on 17/08/16.
 */
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {AuthGuardService} from "../guards/auth-guard.service";

export const routing = RouterModule.forChild([
  {path: '', component: HomeComponent,canActivate:[AuthGuardService]}
])
