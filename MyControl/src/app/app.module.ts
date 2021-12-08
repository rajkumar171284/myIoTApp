import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ManipulateAlertsPageModule} from './pages/manipulate-alerts/manipulate-alerts.module'


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,CommonModule, IonicModule.forRoot(),
     AppRoutingModule,FormsModule,HttpClientModule,ReactiveFormsModule,
     BrowserAnimationsModule,ManipulateAlertsPageModule
    ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
