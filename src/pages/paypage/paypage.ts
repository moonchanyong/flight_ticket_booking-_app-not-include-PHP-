
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {mypage} from '../mypage/mypage';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';



@Component({
  selector: 'page-paypage',
  templateUrl: 'paypage.html'

})
export class paypage {
 public tap: number = 0;
 data : any ;
 
  constructor(public navCtrl: NavController,private navParams: NavParams,public storage: Storage,private http: Http ) {



  }
  
  
    tapEvent(e) {
     
    this.tap++
    if(this.tap ==2)
        this.moveto();
  }
  
  moveto(){
  
  console.log(this.navParams.data);
 this.storage.get('username').then(val =>{
 
 
   this.data = JSON.stringify({ schedule_id :this.navParams.data,
             p_id : val     }); 
 console.log(this.data);
 
 
 
 
 
 });
 
 

  
 
  
      this.http.post("reservation1.php",
    this.data).subscribe(data => {
    
    console.log(data);
    
    
     
     this.navCtrl.setRoot(mypage);    

    
      
      
      
      
      });
  
  
  
  
  
  
  
  
  
    
  }
  
}



