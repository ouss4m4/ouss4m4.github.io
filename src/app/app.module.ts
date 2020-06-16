import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TattooRemovalComponent } from './pages/tattoo-removal/tattoo-removal.component';
import { CommonModule } from '@angular/common';
import { EzbatteryComponent } from './pages/ezbattery/ezbattery.component';
import { ProvenComponent } from './pages/proven/proven.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, TattooRemovalComponent, EzbatteryComponent, ProvenComponent],
  imports: [BrowserModule, CommonModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
