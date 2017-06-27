
import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import {MyApp }from '../../app/app.component';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'

})
export class menupage {
username:any;
 password:any;
  constructor(public navCtrl: NavController ,private navParams: NavParams,public storage: Storage ) {
        
        this.username = navParams.get('username');
                this.password = navParams.get('password');
storage.set('username', this.username);
storage.set('password', this.password);


  }

  
}










