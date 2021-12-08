import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../api.service';
import { Myclass, sensorId, classSensor, interfaceSensor, interfaceSensorList, interfaceEditAlert } from '../../myclass'

import { Subscription } from 'rxjs';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-manipulate-alerts',
  templateUrl: './manipulate-alerts.page.html',
  styleUrls: ['./manipulate-alerts.page.scss']

})
export class ManipulateAlertsPage implements OnInit {
  @Input() val1: any;
  @Input() val2: any;
  constructor(
    public modalController: ModalController, public toastController: ToastController
  ) { }


  ngOnInit() {

    console.log(this.val1)
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }


}
