import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AppComponent } from './app.component';
import { BuyingComponent } from './components/buying/buying.component';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';

export const routes: Routes = [
    { path: '', redirectTo: 'advertisment', pathMatch: 'full' },
    {path: 'advertisment', component: AdvertisementComponent},
    { path: 'buying', component: BuyingComponent },
    { path: 'payment', component: PaymentComponent }
  ];
