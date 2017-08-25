import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular'

import { AuthServiceProvider } from '../../providers/auth-service/auth-service'
import { Feedback } from '../../models/feedback'
import { LoginPage } from '../login/login'

@IonicPage()
@Component({
  selector: 'page-signup2',
  templateUrl: 'signup2.html',
})
export class Signup2Page {
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

    this.AuthServiceProvider.signUp2(myForm.email, myForm.password)
      .subscribe(
      (res) => {
        let isSuccess: boolean = res
        if (isSuccess) {
          this.showAlert("Sign up complete")
          this.navCtrl.setRoot(LoginPage)
        }
      },
      (error) => {
        let errorMessage = <any>error;
        console.log(errorMessage);
        this.showAlert("Sign up Fail!!");
      }
      )
  }

  showAlert(errorMessage) {
    let alert = this.AlertController.create({
      subTitle: errorMessage,
      buttons: ['OK']
    });
    alert.present();
  }

}
