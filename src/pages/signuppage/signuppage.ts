
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from '../home/home';
import { Http } from '@angular/http';




@Component({
  selector: 'page-signuppage',
  templateUrl: 'signuppage.html'

})
export class signuppage {
 //public tap: number = 0;
 
 username : string ;
 password : string ;
name : string ; 
address : string ; 
phone : string;
data :any;
 
 
 
  constructor(public navCtrl: NavController,private http: Http) {



  }
  
  /*
    tapEvent(e) {
     
    this.tap++
    if(this.tap ==2)
        this.moveto();
  }
  */
  
  signup(){
  
  
    
    if(this.username != "" && this.password!="")
   {
   
   
   
   
   
   this.data = JSON.stringify({ 
    username : this.username ,
 password : this.password ,
name : this.name ,
address : this.address , 
phone : this.phone

             
             }); 
   
   
   
   
    console.log(this.data);
    
   
      

    
    
    
    
    this.http.post("signup.php",this.data).subscribe(data => {
    console.log(data);
    
 //   if(data.webnautes.length == 1){
    // username 과 password를 app에 보내자 

    console.log(data);
    this.navCtrl.pop();
 //}
      
      
      
      
      });
    
    
}
      
      


  }

  
}


