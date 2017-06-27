import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import {menupage} from '../menu/menu';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { signuppage } from '../signuppage/signuppage';
import {MyApp} from '../../app/app.component';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {
 username:string ="";
    password:string ="";
    data : any ;
    header : any =   'Content-type: application/json';
    
  constructor(public navCtrl: NavController ,private http: Http) {

  }


moveto(){
console.log( this.username);
console.log(this.password);
   
   
   if(this.username != "" && this.password!="")
   {
   this.data = JSON.stringify({ username :this.username,
             password :    this.password}); 
   
   
   
   
    console.log(this.data);
    
   
     
    
    
    
    this.http.post("login.php",
    this.data).map(res =>res.json()).subscribe(data => {
    
    console.log(data);
    
    if(data .PASSENGER_INFO.length == 1){
    // username 과 password를 app에 보내자 

    
    
  
     this.navCtrl.setRoot(menupage,{
     username : this.username,
     password : this.password
     
    
    });}
      
      
      
      
      });
    
    
}}

signup(){
    this.navCtrl.push(signuppage);

}


}



