/**
 * Created by suboat on 16-11-9.
 */
import { NgModule, ModuleWithProviders } from '@angular/core';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { AuthComponent } from './auth.component';
import { NoAuthGuard } from './no-auth-guard.service';

const authRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'login',
    component: AuthComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'register',
    component: AuthComponent,
    canActivate: [NoAuthGuard]
  }
]);

@NgModule({
  imports: [
    SharedModule,
    authRouting
  ],
  declarations: [ AuthComponent ],
  providers: [NoAuthGuard]
})

export class AuthModule {

}
