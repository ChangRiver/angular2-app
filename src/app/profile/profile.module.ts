/**
 * Created by opop on 2016/11/11.
 */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { ProfileResolver }  from './profile-resolver.service';

import { ProfileArticlesComponent } from './profile-articles.component';
import { ProfileFavoritesComponent } from './profile-favorites.component';

const profileRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'profile/:username',
    component: ProfileComponent,
    resolve: {
      profile: ProfileResolver
    },
    children: [
      {
        path: '',
        component: ProfileArticlesComponent
      },
      {
        path: 'favorites',
        component: ProfileFavoritesComponent
      }
    ]
  }
]);

@NgModule({
  imports: [
    SharedModule,
    profileRouting
  ],
  declarations: [
    ProfileComponent,
    ProfileArticlesComponent,
    ProfileFavoritesComponent
  ],
  providers: [ProfileResolver]
})

export class ProfileModule { }
