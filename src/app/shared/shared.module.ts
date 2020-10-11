import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { UserLoginComponent } from './user-login/user-login.component';
// import { UserLoginComponent } from '@shared/user-login/user-login.component';
import { COMPONENTS } from './';


@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule
  ],
  // show the other module, then we have to export the component
  exports:[COMPONENTS]
})

export class SharedModule { }
