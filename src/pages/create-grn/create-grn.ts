import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import * as moment from "moment";

/**
 * Generated class for the CreateGrnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-create-grn",
  templateUrl: "create-grn.html"
})
export class CreateGrnPage {
  private purchaseOrder: any;
  private deliveredItems: any[] = [];
  private purchaseOrderItems: any[] = [];
  private total: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.purchaseOrder = this.navParams.get("purchaseOrder");
    this.purchaseOrderItems = this.purchaseOrder.orderItems;
  }

  ionViewDidLoad() {
    console.log(this.purchaseOrder);
    console.log(this.purchaseOrderItems);
  }

  changeDeliveredItems(item) {
    const price = item.orderLinePrice;
    const checkedItem = {
      item: item.item,
      quantity: item.quantity
    }

    let index = this.purchaseOrderItems.findIndex(elem => {
      return elem === item;
    });

    if (this.deliveredItems.indexOf(checkedItem) === -1) {
      this.deliveredItems.push(checkedItem);
      this.purchaseOrderItems[index].received = true;
    } else {
      this.deliveredItems.splice(this.deliveredItems.indexOf(checkedItem), 1);
      this.purchaseOrderItems[index].received = false;
    }

    this.total = this.total + price;

    this.deliveredItems.forEach(elem => {
      delete elem.orderLinePrice;
      delete elem.received;
    });

    console.log(this.deliveredItems);
    console.log(this.purchaseOrderItems);
  }

  createGRN() {
    const orderItems = this.purchaseOrderItems;
    this.purchaseOrder.orderItems = orderItems;

    // this.deliveredItems.forEach(elem => {
    //   delete elem.orderLinePrice;
    //   delete elem.received;
    // });

    const GRN = {
      purchaseOrder: this.purchaseOrder,
      supplier: this.purchaseOrder.supplier,
      recievedOn: moment().format("YYYY-MM-DD"),
      orderItems: this.deliveredItems,
      totalPrice: this.total
    };

    console.log(GRN);
  }
}
