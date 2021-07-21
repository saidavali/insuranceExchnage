import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SchedulerModule } from 'smart-webcomponents-angular/scheduler';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsuranceExchnageheaderComponent } from './insurance-exchnageheader/insurance-exchnageheader.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InsuranceExchangeIndexComponent } from './insurance-exchange-index/insurance-exchange-index.component';
import { InsuranceExchangeAutoComponent } from './insurance-exchange-auto/insurance-exchange-auto.component';
import { InsuranceExchangeBusinessComponent } from './insurance-exchange-business/insurance-exchange-business.component';
import { InsuranceExchangeHomeComponent } from './insurance-exchange-home/insurance-exchange-home.component';
import { InsuranceExchangeLifeComponent } from './insurance-exchange-life/insurance-exchange-life.component';
import { InsuranceExchangeContactComponent } from './insurance-exchange-contact/insurance-exchange-contact.component';
import { InsuranceExchangeFooterComponent } from './insurance-exchange-footer/insurance-exchange-footer.component';
import { InsuranceExchangeDashboardComponent } from './insurance-exchange-dashboard/insurance-exchange-dashboard.component';
import { InsuranceExchangeEditProfileComponent } from './insurance-exchange-edit-profile/insurance-exchange-edit-profile.component';
import { InsuranceExchangeRegisterUserComponent } from './insurance-exchange-register-user/insurance-exchange-register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    InsuranceExchnageheaderComponent,
    InsuranceExchangeIndexComponent,
    InsuranceExchangeAutoComponent,
    InsuranceExchangeBusinessComponent,
    InsuranceExchangeHomeComponent,
    InsuranceExchangeLifeComponent,
    InsuranceExchangeContactComponent,
    InsuranceExchangeFooterComponent,
    InsuranceExchangeDashboardComponent,
    InsuranceExchangeEditProfileComponent,
    InsuranceExchangeRegisterUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    SchedulerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
