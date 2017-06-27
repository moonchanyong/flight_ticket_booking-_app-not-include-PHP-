
import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

import { Http } from '@angular/http';



@Component({
  selector: 'page-mypage',
  templateUrl: 'mypage.html'

})
export class mypage {

id : string = 'id기본';
name : string = '이름기본' ; 
address : string = '주소기본'; 
phone : string = '번호기본';
mileage : string = '마일리지기본';
 usernam:any =""; 
 passwor: any="" ;
 data :any ;
  data2 :any ;
  xmlItems: any;
  constructor(public navCtrl: NavController,private http: Http ,private navParams: NavParams,public storage: Storage ) {

storage.get('username').then((val) => {
   this.usernam = val;
console.log("username 실행" );
  storage.get('password').then((val) => {
this.passwor = val

console.log(this.usernam);
   this.data = JSON.stringify({ username : this.usernam,
             password :    this.passwor}); 
console.log(this.data);

    http.post("login.php",
    this.data).map(res =>res.json()).subscribe(data => {
    
    console.log(data);
        
  this.id = this.usernam;
this.name = data.PASSENGER_INFO["0"].P_NAME ; 
this.address = data.PASSENGER_INFO["0"].ADDRESS; 
this.phone  = data.PASSENGER_INFO["0"].PHONE;
this.mileage  = data.PASSENGER_INFO["0"].MILEAGE;

  });
  
  
     this.data2 = JSON.stringify({p_id : this.usernam});
      console.log("예약조회" +this.usernam);
    console.log(this.data2);
      http.post(" confirm_reservation.php",
    this.data2).map(res =>
    res.json()).subscribe(data  =>{
    
    
    
    
        if(data .RESERVATION_INFO.length >= 1){
    var gg = data.RESERVATION_INFO;
    var arr= [];
for(var k in gg){
    
    console.log(k);
    console.log(gg[k]);
    
    arr.push({
    ARRIVE_TIME : gg[k].ARRIVE_TIME,
    DEPARTURE_TIME : gg[k].DEPARTURE_TIME,
    ROUTE_ID : gg[k].ROUTE_ID,
    SCHEDULE_ID : gg[k].SCHEDULE_ID });
    
    
      
      
      
        }
      
       this.xmlItems=arr;
      
      
      }
    
    
    
  
  });








        

  });

    
    
    });
      
      
  
      
      
      
      }












}



  
  
  





