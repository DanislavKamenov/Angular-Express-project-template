import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class AuthService {

  constructor() { 
      console.log('new userService instance');
  }
  
}
