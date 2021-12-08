import { Component } from '@angular/core';

import { ApiService } from '../api.service';
import { Subscription } from 'rxjs';
import { ModalController,ToastController  } from '@ionic/angular';
import { Router } from '@angular/router';
import { DbService } from './../services/db.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers:[ApiService]
})
export class HomePage {

  constructor(private db: DbService,private router: Router) { }
  buttonVal1:any;
  usersList:any=[];
  ngOnInit() {
    // console.log('form')
    // this.db.dbState().subscribe((res) => {
    //   if(res){
    //       this.db.fetchUsers().subscribe(response => this.usersList = response);
    //       console.log(this.usersList)
      
    //     }
    //   });
  }

  navPage(){


  }

  
  
}
