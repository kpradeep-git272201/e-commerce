import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonDataService } from 'src/app/services/common-data.service';


@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
    standalone: false
})
export class SidenavComponent {
  opened = true;
  activeRoute: string | undefined;
  appList: any = [];
  panelOpenState = false;
  constructor(private router: Router,
    private service: CommonDataService
  ) {

  }

  ngOnInit() {
    this.appList = this.service.listApps;
  }
  getOpenedStat(event: any) {
    this.opened = event;
  }



  navigateTo(app:any) {
    if(app.appId=="101"){
      this.router.navigate(['/main/dashboard']);
    } 
  }

  goToList(app: any, subAppId: any) {
    let routePath = '';
  
    if (subAppId.appId == "1021") {
      routePath = '/main/product/view-product';
    } else if (subAppId.appId == "1022") {
      routePath = '/main/product/add-product';
    } else if (subAppId.appId == "1023") {
      routePath = '/main/product/categories';
    } else if (subAppId.appId == "1024") {
      routePath = '/main/product/inventory';
    } else if (subAppId.appId == "1031") {
      routePath = '/main/order/view-order';
    } else if (subAppId.appId == "1032") {
      routePath = '/main/order/add-order';
    } else if (subAppId.appId == "1033") {
      routePath = '/main/order/order-tracking';
    } else if (subAppId.appId == "1034") {
      routePath = '/main/order/retrun-and-refund';
    } else if (subAppId.appId == "1041") {
      routePath = '/main/customer/customer-list';
    } else if (subAppId.appId == "1042") {
      routePath = '/main/customer/add-customer';
    } else if (subAppId.appId == "1043") {
      routePath = '/main/customer/customer-detail';
    } else if (subAppId.appId == "1044") {
      routePath = '/main/customer/customer-feedback';
    } else if (subAppId.appId == "1045") {
      routePath = '/main/customer/manage-review';
    } else if (subAppId.appId == "1051") {
      routePath = '/main/admin/profile';
    } else if (subAppId.appId == "1052") {
      routePath = '/main/admin/role-permissions';
    } else if (subAppId.appId == "1053") {
      routePath = '/main/admin/setting';
    } else if (subAppId.appId == "1054") {
      routePath = '/main/admin/system-logs';
    } else if (subAppId.appId == "1055") {
      routePath = '/main/admin/user-management';
    } else if (subAppId.appId == "1061") {
      routePath = '/main/setting/profile-setting';
    } else if (subAppId.appId == "1062") {
      routePath = '/main/setting/notification';
    } else if (subAppId.appId == "1063") {
      routePath = '/main/setting/payment-method';
    } else if (subAppId.appId == "1064") {
      routePath = '/main/setting/shipping-delivery';
    } else if (subAppId.appId == "1071") {
      routePath = '/main/testing/test';
    }
  
    if (routePath) {
      localStorage.setItem('currentPath', routePath);
      this.router.navigate([routePath]);
    }
  }
  

}
