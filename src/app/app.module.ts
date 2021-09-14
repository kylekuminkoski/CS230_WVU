import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CollapseMenuComponent } from './components/collapsemenu.component';
import { FeaturedGameComponent } from './featuredgame/featuredgame.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './header/searchBar.component';
import { LayoutMainComponent } from './layout/layout.component';
import { NewReleasesComponent } from './newreleases/newreleases.component';
import { RewardsBarComponent } from './rewardsbar/rewardsbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    CollapseMenuComponent,
    LayoutMainComponent,
    RewardsBarComponent,
    FeaturedGameComponent,
    NewReleasesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
