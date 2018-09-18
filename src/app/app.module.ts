import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { File } from '@ionic-native/file';
import firebase from 'firebase';
var config = {
  apiKey: "AIzaSyBMdtPYPPiBArZg4ZfK8f6MAJvQ6_11wYU",
  authDomain: "fir-list-c7516.firebaseapp.com",
  databaseURL: "https://fir-list-c7516.firebaseio.com",
  projectId: "fir-list-c7516",
  storageBucket: "fir-list-c7516.appspot.com",
  messagingSenderId: "151676499785"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MediaCapture,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
