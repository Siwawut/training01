import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  sName:string= 'Training Ionic Framework 2';
  Heros = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  srcImages:string = './assets/images/skn33.png'
  srcImages1:string = ''
  widthed:string = ''
  
  Products = [{name:"Product1",price:50},{name:"Product2",price:500},{name:"Product3",price:500}];

  constructor(public navCtrl: NavController) {
  }
  ShowMe():void{
    this.sName = 'Training Ionic Framework 3';
  }
  ShowLogo():void{
    this.srcImages1 = './assets/images/skn33.png'
    this.widthed = '200'
  }
}

