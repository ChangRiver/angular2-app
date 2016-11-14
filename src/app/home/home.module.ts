/**
 * Created by suboat on 16-11-9.
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";
import { SharedModule } from '../shared/shared.module';
import { HomeAuthResolver } from './home-auth-resolver.service';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent
  }
]);

@NgModule({
  imports: [
    homeRouting,
    SharedModule
  ],
  declarations: [HomeComponent],
  providers: [HomeAuthResolver]
})

export class HomeModule {}
