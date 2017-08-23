import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CoursesServiceProvider } from '../../providers/courses-service/courses-service'
import { Course } from '../../models/course'

@IonicPage()
@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
})
export class CoursePage {

  course: Course[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public coursesServiceProvider: CoursesServiceProvider
  ) {

  }

  ionViewWillEnter() {
    this.getCourse();
  }

  getCourse(): void {
    this.coursesServiceProvider.getCourse().subscribe((res)=>this.course = res);
    
  }

}
