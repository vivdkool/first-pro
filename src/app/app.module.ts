import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';

import { AppComponent } from './app.component';
import {appRouting} from "./app.routing";
import {CoreModule} from "./core/core.module";


import {LoginModule} from "./login/login.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, appRouting, LoginModule, CoreModule
  ],
  //entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
