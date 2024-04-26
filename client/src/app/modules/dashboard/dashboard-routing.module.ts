import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainScreenComponent } from './pages/main-screen/main-screen.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: MainScreenComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
