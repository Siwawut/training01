import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular'

import { AuthServiceProvider } from '../../providers/auth-service/auth-service'
import { Feedback } from '../../models/feedback'

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  feedback: Feedback

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public AuthServiceProvider: AuthServiceProvider,
    public AlertController: AlertController
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(myForm): void {

    this.AuthServiceProvider.signUp(myForm.fullname, myForm.email, myForm.password)
      .subscribe(
      (res) => {
        this.feedback = res;
        if (this.feedback.status == 'ok')
          this.showAlert(this.feedback.message)
        else
          this.showAlert(this.feedback.message)
      }
      )
  }

  showAlert(message) {
    let alert = this.AlertController.create({
      title: 'Alert Sign up',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
}
