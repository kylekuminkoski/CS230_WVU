import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutCartsPageComponent } from './cart-page/layout.component';
import { LayoutBodyComponent } from './homebody/layout.component';
import { LayoutMainComponent } from './layout/layout.component';
import { LayoutPowerUpComponent } from './powerup-rewards-page/layout/layout.component';
import { LayoutSignInComponent } from './sign-in-page/layout/layout.component';
import { LayoutTradeInsComponent } from './trade-ins-page/layout/layout.component';

const routes: Routes = [
  { path: 'home', component: LayoutBodyComponent},
  { path: 'tradeins', component: LayoutTradeInsComponent},
  { path: 'powerup', component: LayoutPowerUpComponent},
  { path: 'signin', component: LayoutSignInComponent},
  { path: 'cartspage', component: LayoutCartsPageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
 
  
];




@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
