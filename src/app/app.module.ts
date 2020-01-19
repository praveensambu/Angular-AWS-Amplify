import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { MDBBootstrapModule } from 'angular-bootstrap-md'; 
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { AppsyncService } from './appsync.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ProfileComponent,
    TodoComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule,
    FormsModule
  ],
  providers: [AmplifyService,AppsyncService],
  bootstrap: [AppComponent]
})
export class AppModule { }
