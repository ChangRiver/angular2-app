/**
 * Created by suboat on 16-11-9.
 */
import { NgModule, ModuleWithProviders } from '@angular/core';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { AuthComponent } from './auth.component';

const authRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'register',
    component: AuthComponent
  }
]);

@NgModule({
  imports: [
    SharedModule,
    authRouting
  ],
  declarations: [ AuthComponent ]
})

export class AuthModule {

}
