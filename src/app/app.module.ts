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
import { CourseDetailPageModule } from '../pages/course-detail/course-detail.module'
import { NewsPageModule } from '../pages/news/news.module'
import { SignupPageModule } from '../pages/signup/signup.module'
import { Signup2PageModule } from '../pages/signup2/signup2.module'
import { UserPageModule } from '../pages/user/user.module'
import { LoginPageModule } from '../pages/login/login.module'
import { TabPageModule } from '../pages/tab/tab.module'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CoursesServiceProvider } from '../providers/courses-service/courses-service';
import { NewsServiceProvider } from '../providers/news-service/news-service';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';


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
    ContactPageModule,
    CourseDetailPageModule,
    NewsPageModule,
    SignupPageModule,
    Signup2PageModule,
    UserPageModule,
    LoginPageModule,
    TabPageModule

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
    CoursesServiceProvider,
    NewsServiceProvider,
    AuthServiceProvider
  ]
})
export class AppModule { }
