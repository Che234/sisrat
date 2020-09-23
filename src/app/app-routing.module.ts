import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { bodyComponent } from './components/body/body.components';
import { BancosComponent } from './components/bancos/bancos.component';

const routes: Routes = [

	{path: 'Inicio', component: bodyComponent},
	{path: 'Login', component: LoginComponent},
	{path: 'Bancos', component: BancosComponent}

];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }