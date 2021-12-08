import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DbService } from '../../services/db.service';
import { ToastController } from '@ionic/angular';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signUpForm = this.formBuilder.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
  })
  usersList: any = [];

  constructor(private db: DbService,
    public formBuilder: FormBuilder,
    private toast: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    // this.initFn()
  }
  // initFn(){
  //   this.db.dbState().subscribe((res) => {
  //     if (res) {
  //       console.log(res)
  //       this.getUserList()

  //     }
  //   });
  // }
  // getUserList() {
  //   this.db.fetchUsers().subscribe(response => this.usersList = response);
  //   console.log(this.usersList)

  // }
  // submitUser() {
  //   console.log(this.signUpForm)

  //   if (!this.signUpForm.valid) {
  //     console.log(this.signUpForm)
  //     this.presentToast('All inputs are mandatory..')
      
  //   } else {

  //     let params:any={}
  //     params.name=this.signUpForm.get('name').value,
  //     params.username=this.signUpForm.get('username').value,
  //     params.password=this.signUpForm.get('password').value,
  //     params.email=this.signUpForm.get('email').value
  //     this.db.addUser(params).then(result => {
  //       console.log(result)
  //       this.initFn()

  //     })
  //   }

  // }

  // async presentToast(msg) {
  //   let str;
  //   if (msg) {
  //     str = msg
  //   } else {
  //     str = 'Your settings have been saved.';
  //   }
  //   const toast = await this.toast.create({
  //     message: str,
  //     duration: 2000
  //   });
  //   toast.present();
  // }

}
