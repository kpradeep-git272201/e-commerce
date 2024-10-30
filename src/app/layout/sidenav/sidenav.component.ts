import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonDataService } from 'src/app/services/common-data.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
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

  goToLIst(app:any, subAppId:any){
    if(subAppId.appId=="1021"){
      this.router.navigate(['/main/product/view-product']);
    } else if(subAppId.appId=="1022"){
      this.router.navigate(['/main/product/add-product']);
    } else if(subAppId.appId=="1023"){
      this.router.navigate(['/main/product/categories']);
    } else if(subAppId.appId=="1024"){
      this.router.navigate(['/main/product/inventory']);
    } 
    else if(subAppId.appId=="1031"){
      this.router.navigate(['/main/order/view-order']);
    } else if(subAppId.appId=="1032"){
      this.router.navigate(['/main/order/add-order']);
    } else if(subAppId.appId=="1033"){
      this.router.navigate(['/main/order/order-tracking']);
    } else if(subAppId.appId=="1034"){
      this.router.navigate(['/main/order/retrun-and-refund']);
    }
    else if(subAppId.appId=="1041"){
      this.router.navigate(['/main/customer/customer-list']);
    } else if(subAppId.appId=="1042"){
      this.router.navigate(['/main/customer/add-customer']);
    } else if(subAppId.appId=="1043"){
      this.router.navigate(['/main/customer/customer-detail']);
    } else if(subAppId.appId=="1044"){
      this.router.navigate(['/main/customer/customer-feedback']);
    } else if(subAppId.appId=="1045"){
      this.router.navigate(['/main/customer/manage-review']);
    }
    else if(subAppId.appId=="1051"){
      this.router.navigate(['/main/admin/profile']);
    } else if(subAppId.appId=="1052"){
      this.router.navigate(['/main/admin/role-permissions']);
    } else if(subAppId.appId=="1053"){
      this.router.navigate(['/main/admin/setting']);
    } else if(subAppId.appId=="1054"){
      this.router.navigate(['/main/admin/system-logs']);
    } else if(subAppId.appId=="1055"){
      this.router.navigate(['/main/admin/user-management']);
    }
    else if(subAppId.appId=="1061"){
      this.router.navigate(['/main/setting/profile-setting']);
    } else if(subAppId.appId=="1062"){
      this.router.navigate(['/main/setting/notification']);
    } else if(subAppId.appId=="1063"){
      this.router.navigate(['/main/setting/payment-method']);
    } else if(subAppId.appId=="1064"){
      this.router.navigate(['/main/setting/shipping-delivery']);
    } 
  }

}
