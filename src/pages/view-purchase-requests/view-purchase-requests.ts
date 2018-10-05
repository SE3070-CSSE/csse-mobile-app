import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { PurchaseRequestServiceProvider } from "../../providers/purchase-request-service/purchase-request-service";

/**
 * Generated class for the ViewPurchaseRequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: "page-view-purchase-requests",
  templateUrl: "view-purchase-requests.html"
})
export class ViewPurchaseRequestsPage {
  requests: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private purchaseRequestService: PurchaseRequestServiceProvider
  ) {}

  ionViewDidEnter() {
    this.purchaseRequestService.getRequests().then(res => {
      console.log(res);
      this.requests = res;
      this.requests.sort();
    }).catch(err => {
      console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ViewPurchaseRequestsPage");
  }

  viewRequestDetails(request) {
    console.log(request);
  }
}
