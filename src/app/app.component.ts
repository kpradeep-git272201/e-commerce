import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonDataService } from './services/common-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'E_Comm_App';

  constructor(private router: Router, private service: CommonDataService) {

  }

  ngOnInit() {
    if (this.service.isLoggedIn()) {
      const savedPath = localStorage.getItem('currentPath');
      if (savedPath) {
        this.router.navigate([savedPath]);
      }else{
        this.router.navigate(['/main/dashboard']); // /main/dashboard' Redirect to dashboard if logged in
      }
    } else {
      this.router.navigate(['auth/login']); // Redirect to login if not logged in
    }
  }
}
