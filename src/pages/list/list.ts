import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AirserviceProvider} from '../../providers/airservice/airservice';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {paypage} from '../paypage/paypage';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
   providers:[AirserviceProvider]
})

export class ListPage {

startair: string = null ;
endair: string = null;
  month: string= null;
airlineNm : string = '개이득항공';
    day: string= null;
  date :string= null;
  data : any;
  public xmlItems : any;
items : any;
pushPage:any;
  constructor(public navCtrl: NavController , public AirserviceProvider:AirserviceProvider,public alertCtrl: AlertController,private http: Http  ) {
  this.pushPage = paypage;
  
  }

  
  getSchedule(){

 
 console.log(this.startair[5]+this.startair[6]);
 console.log(this.endair[5]+this.endair[6]);
 
 
   
   
   this.data = JSON.stringify({ 
        route_id:this.startair[5]+this.startair[6]+'_'+this.endair[5]+this.endair[6]        
   
   }); 
   
   
   
   
    console.log(this.data);
    
   
     
  
    
    this.http.post("schedule_date2.php",
    this.data).map(res =>
    
    
    res.json()
    
    ).subscribe(data => {
    
    console.log(data);
      
   
    if(data .FLIGHT_DATE.length >= 1){
    // username 과 password를 app에 보내자 
    var gg = data.FLIGHT_DATE;
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
    
   
   console.log(this.xmlItems);

   

  });
 }
 
movepayPage( a : string){

    console.log(a);

    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(paypage);

}
}

 
   
  

