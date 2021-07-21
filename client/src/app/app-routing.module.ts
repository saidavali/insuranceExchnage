import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsuranceExchangeIndexComponent } from './insurance-exchange-index/insurance-exchange-index.component';
import { InsuranceExchangeAutoComponent } from './insurance-exchange-auto/insurance-exchange-auto.component';
import { InsuranceExchangeBusinessComponent } from './insurance-exchange-business/insurance-exchange-business.component';
import { InsuranceExchangeHomeComponent } from './insurance-exchange-home/insurance-exchange-home.component';
import { InsuranceExchangeLifeComponent } from './insurance-exchange-life/insurance-exchange-life.component';
import { InsuranceExchangeContactComponent } from './insurance-exchange-contact/insurance-exchange-contact.component';
import { InsuranceExchangeDashboardComponent } from './insurance-exchange-dashboard/insurance-exchange-dashboard.component';
import { InsuranceExchangeEditProfileComponent } from './insurance-exchange-edit-profile/insurance-exchange-edit-profile.component';
import {InsuranceExchangeRegisterUserComponent} from './insurance-exchange-register-user/insurance-exchange-register-user.component';

const routes: Routes = [
  { path: '', component: InsuranceExchangeIndexComponent },
  {path: 'auto', component: InsuranceExchangeAutoComponent},
  {path: 'business', component: InsuranceExchangeBusinessComponent},
  {path: 'home', component: InsuranceExchangeHomeComponent},
  {path: 'life', component: InsuranceExchangeLifeComponent},
  {path: 'contactus', component: InsuranceExchangeContactComponent},
  {path: 'dashboard', component: InsuranceExchangeDashboardComponent},
  {path: 'editProfile', component: InsuranceExchangeEditProfileComponent},
  {path: 'registernow', component:InsuranceExchangeRegisterUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
