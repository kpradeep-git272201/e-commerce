import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonDataService } from 'src/app/services/common-data.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})
export class HeaderComponent {

  opened=true;

  @Output() openedStatus = new EventEmitter<any>();

  constructor(private service: CommonDataService, private router: Router) {
    
  }
  openedSideNav(){
    this.opened=!this.opened;
    this.openedStatus.emit(this.opened)
  }

  logout(){
    const isLogout = this.service.logout();
    if(isLogout){
      this.router.navigate(['/auth/login']);
    }
  }
}
