import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PendingOrdersPage } from '../pending-orders/pending-orders';
import { PreviousOrdersPage } from '../previous-orders/previous-orders';
import { RejectedOrdersPage } from '../rejected-orders/rejected-orders';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  logout() {
    this.navCtrl.setRoot(LoginPage)
  }

  goToProfile() {
    // goto profile
    console.log('gotoprofile');
    
  }

  goToPendingOrders() {
    this.navCtrl.push(PendingOrdersPage);
  }

  goToPreviousOrders() {
    this.navCtrl.push(PreviousOrdersPage);
  }

  goToRejectedOrders() {
    // commit testgit
    this.navCtrl.push(RejectedOrdersPage);
  }

}
