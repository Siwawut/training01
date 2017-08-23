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

  getItems(ev: any) {

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.course = this.course.filter((course:Course) => {
        return (course.c_title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else{
      this.getCourse();
    }
  }
}
