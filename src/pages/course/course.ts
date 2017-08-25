import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription'
import { LoadingController } from 'ionic-angular'

import { CoursesServiceProvider } from '../../providers/courses-service/courses-service'
import { Course } from '../../models/course'
import { CourseDetailPage } from '../course-detail/course-detail'

@IonicPage()
@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
})
export class CoursePage {

  course: Course[];
  sub: Subscription

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public coursesServiceProvider: CoursesServiceProvider,
    public LoadingController: LoadingController
  ) {

  }

  ionViewWillEnter() {
    this.getCourse();
  }

  ionViewWillLeave() {
    this.sub.unsubscribe();
  }
  
  getCourse(): void {
    let loader = this.LoadingController.create({
      content: "Loading..."
    })
    loader.present()
    this.sub = this.coursesServiceProvider.getCourse()
      .subscribe(
        (res) => this.course = res,
        (error) => console.log("Error from backend"),
        () => loader.dismiss()
      );

  }

  getItems(ev: any) {

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.course = this.course.filter((course: Course) => {
        return (course.c_title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.getCourse();
    }
  }

  itemSelected(c) {
    this.navCtrl.push(
      CourseDetailPage, {
        id: c.id,
        c_title: c.c_title,
        c_detail: c.c_detail
      }
    );
  }
}
