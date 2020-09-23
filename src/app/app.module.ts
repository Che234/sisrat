import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.components';
import { bodyComponent } from './components/body/body.components';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { BancosComponent } from './components/bancos/bancos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    bodyComponent,
    FooterComponent,
    LoginComponent,
    BancosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
