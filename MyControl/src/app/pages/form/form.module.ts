import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPageRoutingModule } from './form-routing.module';

import { FormPage } from './form.page';

import { ReactiveFormsModule } from '@angular/forms';

import {ManipulateAlertsPageModule} from '../manipulate-alerts/manipulate-alerts.module'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPageRoutingModule,ReactiveFormsModule,
  ],
  declarations: [FormPage]
})
export class FormPageModule {}
