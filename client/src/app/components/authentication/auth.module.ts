import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule
    ],
    declarations: [LoginFormComponent]
})
export class AuthModule { }
