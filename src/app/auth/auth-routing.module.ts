import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LostpassComponent } from './pages/lostpass/lostpass.component';

const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"found_pass", component: LostpassComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
