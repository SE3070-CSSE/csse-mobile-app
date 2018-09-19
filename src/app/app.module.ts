import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { StorageServiceProvider } from '../providers/storage-service/storage-service';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

import { Properties } from '../shared/properties';
import { ItemServiceProvider } from '../providers/item-service/item-service';

import { PurchaseRequestPage } from '../pages/purchase-request/purchase-request';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    PurchaseRequestPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    PurchaseRequestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StorageServiceProvider,
    AuthServiceProvider,
    HttpClientModule,
    HttpClient,
    Properties,
    ItemServiceProvider
  ]
})
export class AppModule {}
