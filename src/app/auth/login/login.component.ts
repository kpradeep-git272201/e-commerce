import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { CommonDataService } from 'src/app/services/common-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);
  paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;
  @ViewChild('carousel', { static: true }) carousel: NgbCarousel | any;
  errorMessage: string = '';
  constructor(private fb: FormBuilder, private service: CommonDataService,
    private router: Router
  ){
    console.log("Login Component");
  }

  ngOnInit(){
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onLogin(){
    const formData=this.loginForm.getRawValue();
    const isLoggedIn=this.service.getLogin(formData.userName, formData.password);
    if(isLoggedIn){
      this.router.navigate(['/main']); // navigate to your desired route

    }else{
      this.errorMessage = 'Invalid credentials';
    }
  }

  signUp(){
    this.router.navigate(["auth/signup"]);
  }
  togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}

  onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}
}
