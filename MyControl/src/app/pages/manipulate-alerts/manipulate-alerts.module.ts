import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManipulateAlertsPageRoutingModule } from './manipulate-alerts-routing.module';

import { ManipulateAlertsPage } from './manipulate-alerts.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManipulateAlertsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ManipulateAlertsPage]
})
export class ManipulateAlertsPageModule {}
