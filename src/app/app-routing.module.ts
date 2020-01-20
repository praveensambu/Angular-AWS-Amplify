import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthComponent } from './auth/auth.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [{
  path: 'profile',
  component: ProfileComponent
},
{
  path: 'todo',
  component: TodoComponent
},
{
  path: 'login',
  component: AuthComponent
},
{
  path: '**',
  redirectTo: 'todo',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
