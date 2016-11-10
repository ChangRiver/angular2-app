import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import {
  HeaderComponent,
  FooterComponent,
  UserService,
  ApiService,
  JwtService
} from './shared';

import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';


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
    HomeModule
  ],
  providers: [
    UserService,
    ApiService,
    JwtService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
