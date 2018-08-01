import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavigationComponent, FooterComponent, NotificationComponent],
  exports: [NavigationComponent, FooterComponent, NotificationComponent]
})
export class CoreModule { }
