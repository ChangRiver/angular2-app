import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import {
  HeaderComponent,
  FooterComponent,
  UserService,
  ApiService,
  JwtService,
  ProfileService
} from './shared';

import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { SettingsModule } from './settings/settings.module';
import { ProfileModule } from './profile/profile.module';


const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    rootRouting,
    SharedModule,
    AuthModule,
    HomeModule,
    SettingsModule,
    ProfileModule
  ],
  providers: [
    UserService,
    ApiService,
    JwtService,
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
