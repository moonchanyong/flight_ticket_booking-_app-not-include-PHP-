import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { menupage } from '../pages/menu/menu';
import { mypage } from '../pages/mypage/mypage';
import {HttpModule} from'@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AirserviceProvider } from '../providers/airservice/airservice';
import { paypage } from '../pages/paypage/paypage';
import { signuppage } from '../pages/signuppage/signuppage';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    menupage,
    mypage,
    paypage,
    signuppage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
        IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    menupage,
    mypage,
    paypage,
    signuppage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AirserviceProvider
  ]
})
export class AppModule {}
