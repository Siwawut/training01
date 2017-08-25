import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service'
import { AlertController } from 'ionic-angular'
import { UserPage } from '../user/user'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public AuthServiceProvider: AuthServiceProvider,
    public AlertController: AlertController
  ) {
  }

  ionViewDidLoad() {
  }

  loginAuth0(myForm): void {
    this.AuthServiceProvider.loginAuth0(myForm.email, myForm.password)
      .subscribe(
      (res) => {
        let isSuccess: boolean = res
        if (isSuccess) {
          this.navCtrl.setRoot(UserPage)
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
