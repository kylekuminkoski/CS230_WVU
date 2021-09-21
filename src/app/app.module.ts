import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutCartsPageComponent } from './cart-page/layout.component';
import { CarouselComponent } from './components/carousel.component';
import { NintendoCardComponent } from './components/carouselCards/nintendo.component';
import { OculusCardComponent } from './components/carouselCards/oculusCard.component';
import { XboxCardComponent } from './components/carouselCards/xbox.component';
import { CollapseMenuComponent } from './components/collapsemenu.component';
import { FeaturedGameComponent } from './featuredgame/featuredgame.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './header/searchBar.component';
import { LayoutMainComponent } from './layout/layout.component';
import { NewReleasesComponent } from './newreleases/newreleases.component';
import { LayoutPowerUpComponent } from './powerup-rewards-page/layout/layout.component';
import { RewardsBarComponent } from './rewardsbar/rewardsbar.component';
import { LayoutSignInComponent } from './sign-in-page/layout/layout.component';
import { LayoutTradeInsComponent } from './trade-ins-page/layout/layout.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    CollapseMenuComponent,
    LayoutMainComponent,
    RewardsBarComponent,
    FeaturedGameComponent,
    NewReleasesComponent,
    OculusCardComponent,
    CarouselComponent,
    NintendoCardComponent,
    XboxCardComponent,
    LayoutTradeInsComponent,
    LayoutPowerUpComponent,
    LayoutSignInComponent,
    LayoutCartsPageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
