/**
 * Created by suboat on 16-11-9.
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent
  }
]);

@NgModule({
  imports: [
    homeRouting
  ],
  declarations: [HomeComponent]
})

export class HomeModule { }