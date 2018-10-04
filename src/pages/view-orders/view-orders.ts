import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { OrderServiceProvider } from "../../providers/order-service/order-service";

/**
 * Generated class for the ViewOrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-view-orders",
  templateUrl: "view-orders.html"
})
export class ViewOrdersPage {
  private orders: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private orderService: OrderServiceProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ViewOrdersPage");
    this.orderService.getOrders().then(res => {
      console.log(res);
      this.orders = res;
    })
  }
}
