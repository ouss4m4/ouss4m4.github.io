import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TattooRemovalComponent } from './pages/tattoo-removal/tattoo-removal.component';
import { CommonModule } from '@angular/common';
import { EzbatteryComponent } from './pages/ezbattery/ezbattery.component';
import { ProvenComponent } from './pages/proven/proven.component';
import { DofastComponent } from './pages/dofast/dofast.component';
import { BrainDogComponent } from './pages/braindog/braindog.component';
import { ManifestationComponent } from './pages/manifestation/manifestation.component';
import { HeaderComponent } from './pages/shared/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    HomeComponent,
    TattooRemovalComponent,
    EzbatteryComponent,
    ProvenComponent,
    DofastComponent,
    BrainDogComponent,
    ManifestationComponent,
  ],
  imports: [BrowserModule, CommonModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
