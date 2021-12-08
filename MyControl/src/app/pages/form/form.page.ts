import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Subscription } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ManipulateAlertsPage } from '../manipulate-alerts/manipulate-alerts.page';
import { ToastController } from '@ionic/angular';
class BtnCtrl {
  status: boolean = false;
  control: boolean = false;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
  providers:[ApiService]
})
export class FormPage implements OnInit {
  textVal1: any;

  textVal2: any;
  loading;
  buttonVal1 = new BtnCtrl();
  constructor(public toastController: ToastController, public modalController: ModalController,
     private loadingController: LoadingController, private apiService: ApiService) { }
  buttonVal2 = new BtnCtrl();
  data: any;
  ngOnInit() {
    // console.log('form')
  }

  sendValue(val) {
    let p: any = {}
    if (val == 'text1' && this.textVal1) {
      p.text1 = this.textVal1;
    }
    else if (val == 'text2') {
      p.number1 = this.textVal2;
    }
    else if (val == 'button1') {
      this.buttonVal1.status = !this.buttonVal1.status;
      p.btn1 = this.buttonVal1.status
    } else if (val == 'button2') {
      this.buttonVal2.status = !this.buttonVal2.status;
      p.btn2 = this.buttonVal2.status;
    } else {
      this.presentToast('Please input..');
      return;
    }

    // p.label = val;
    this.loadingController.create({
      message: 'Loading...'
    }).then((response) => {
      this.loading = response;
      this.loading.present();
      this.apiService.buttonCall(p).subscribe(res => {
        console.log(res)
        if (res.btn1 === true) this.buttonVal1.control = res.btn1;
        else if (res.btn1 === false) this.buttonVal1.control = res.btn1;
        else if (res.btn2 === true) this.buttonVal2.control = res.btn2;
        else if (res.btn2 === false) this.buttonVal2.control = res.btn2;
        else this.data = res; 
        
        this.dismissLoader()
        this.presentToast('');
        // this.presentModal();
      })


    })

  }
  dismissLoader() {
    let dismiss;
    this.loadingController.dismiss().then((response) => {
      console.log('Loader closed! now', response);
      dismiss = response;
      // this.loading.dismiss()

    }).catch((err) => {
      // this.loading.dismiss()

      console.log('Error occured : ', err);
    });
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ManipulateAlertsPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'val1': this.data && this.data.Output ? this.data.Output : '',
        'val2': '',
        'middleInitial': 'N'
      }
    });
    return await modal.present();
  }

  async presentToast(msg) {
    let str;
    if (msg) {
      str = msg
    } else {
      str = 'Your settings have been saved.';
    }
    const toast = await this.toastController.create({
      message: str,
      duration: 2000
    });
    toast.present();
  }

}
