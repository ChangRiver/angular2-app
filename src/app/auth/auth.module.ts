/**
 * Created by suboat on 16-11-9.
 */
import { NgModule, ModuleWithProviders } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

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
])

@NgModule({
  imports: [
    FormsModule,
    RouterModule,
    authRouting,
    CommonModule
  ],
  declarations: [ AuthComponent ]
})

export class AuthModule {

}
