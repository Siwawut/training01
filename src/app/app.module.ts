import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { CoursePageModule } from '../pages/course/course.module'
import { AboutPageModule } from '../pages/about/about.module'
import { ContactPageModule } from '../pages/contact/contact.module'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CoursesServiceProvider } from '../providers/courses-service/courses-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    //ListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    CoursePageModule,
    AboutPageModule,
    ContactPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    //ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CoursesServiceProvider
  ]
})
export class AppModule { }
