/**
 * Created by opop on 2016/11/11.
 */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { ProfileResolver }  from './profile-resolver.service';

const profileRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'profile/:username',
    component: ProfileComponent,
    resolve: {
      profile: ProfileResolver
    }
  }
]);

@NgModule({
  imports: [
    SharedModule,
    profileRouting
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [ProfileResolver]
})

export class ProfileModule { }
