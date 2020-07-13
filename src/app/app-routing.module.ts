import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TattooRemovalComponent } from './pages/tattoo-removal/tattoo-removal.component';
import { EzbatteryComponent } from './pages/ezbattery/ezbattery.component';
import { BrainDogComponent } from './pages/braindog/braindog.component';
import { ManifestationComponent } from './pages/manifestation/manifestation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/manifestation',
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
    path: 'brainy-dogs',
    component: BrainDogComponent,
  },
  {
    path: 'manifestation',
    component: ManifestationComponent,
  },

  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
