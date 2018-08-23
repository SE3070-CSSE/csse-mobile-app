import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup } from '@angular/forms';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
      // password: new FormControl('', Validators.compose([Validators.maxLength(30), Validators.minLength(8), Validators.pattern('[a-zA-Z ]*'), Validators.required]))
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.navCtrl.setRoot(HomePage);
  }

}
