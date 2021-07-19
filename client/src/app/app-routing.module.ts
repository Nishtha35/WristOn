import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NewArrivalComponent } from './new-arrival/new-arrival.component';
import { MenWatchComponent } from './men-watch/men-watch.component';
import { WomenWatchComponent } from './women-watch/women-watch.component';
import { SaleComponent } from './sale/sale.component';
import { HomeComponent } from './home/home.component';
import { AdmiinComponent } from './admiin/admiin.component';
import { CartComponent } from './cart/cart.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateComponent } from './update/update.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { UCartComponent } from './u-cart/u-cart.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { OffersComponent } from './offers/offers.component';

const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'new-arrival',component:NewArrivalComponent},
  {path:'men-watch',component:MenWatchComponent},
  {path:'women-watch',component:WomenWatchComponent},
  {path:'sale',component:SaleComponent},
  {path:'',component:HomeComponent},
  {path:'admiin',component:AdmiinComponent},
  {path:'cart',component:CartComponent},
  {path:'form',component:FormComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'payment',component:PaymentComponent},
  {path:'ucart',component:UCartComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'confirm', component:ConfirmationComponent},
  {path:'ofr', component:OffersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
