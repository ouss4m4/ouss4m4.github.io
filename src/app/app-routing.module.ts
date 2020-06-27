import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TattooRemovalComponent } from './pages/tattoo-removal/tattoo-removal.component';
import { EzbatteryComponent } from './pages/ezbattery/ezbattery.component';
import { OkowatComponent } from './pages/okowat/okowat.component';
import { DofastComponent } from './pages/dofast/dofast.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'tattoo-removal',
    component: TattooRemovalComponent,
  },
  {
    path: 'ezbattery',
    component: EzbatteryComponent,
  },
  {
    path: 'energy-saving',
    component: OkowatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
