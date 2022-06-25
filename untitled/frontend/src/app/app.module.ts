import { NgModule } from '@angular/core';


import { UserModule } from './feature/user/user.module';
import { CoreModule } from './core/core.module';


import { App } from './app';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    App


  ],
  imports: [

    AppRoutingModule,
    // FontAwesomeModule,
    // ReactiveFormsModule,
    // HttpClientModule,

    UserModule, CoreModule, BrowserModule
  ],
  providers: [

  ],
  bootstrap: [App],
})
export class AppModule {}
