import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonDataService } from './services/common-data.service';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './services/auth.guard';
import { MatIconRegistry } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    AuthModule
  ],
  providers: [ CommonDataService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
