import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewPurchaseRequestsPage } from './view-purchase-requests';

@NgModule({
  declarations: [
    ViewPurchaseRequestsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewPurchaseRequestsPage),
  ],
})
export class ViewPurchaseRequestsPageModule {}
