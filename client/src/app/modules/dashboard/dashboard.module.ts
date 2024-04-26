import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainScreenComponent } from './pages/main-screen/main-screen.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [MainScreenComponent, SettingsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
