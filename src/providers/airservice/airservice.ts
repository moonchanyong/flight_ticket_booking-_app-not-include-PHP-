import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the AirserviceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AirserviceProvider {

data :any;
  public xmlItems : any;

  constructor(public http: Http ) {
    console.log('Hello AirserviceProvider Provider');
  }




getSchedule(sAirportId:string , eAirportId:string,date:string){

return this.http.get('http://openapi.tago.go.kr/openapi/service/DmstcFlightNvgInfoService/getFlightOpratInfoList?serviceKey=nPR%2BZ4zFdW6oOMS%2Bjmfxbjs94SLz2c4Gum61mevbd%2BnKsy5%2B1re%2B%2FQp9JnDPhC%2Bh9V4ZYYKWbxVk8O2aV2MRzA%3D%3D&numOfRows=10&pageSize=10&pageNo=1&startPage=1&depAirportId=NAARKTU&arrAirportId=NAARKPC&depPlandTime=20170618' )




}



}


