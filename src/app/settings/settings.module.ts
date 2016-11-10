
import { NgModule, ModuleWithProviders } from '@angular/core';
import { SettingsComponent } from './settings.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const settingsRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'settings',
    component: SettingsComponent
  }
]);

@NgModule({
  imports: [ 
    SharedModule,
    settingsRouting
  ],
  declarations: [ SettingsComponent ]
})

export class SettingsModule {
  
}
