import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { StatisticsComponent } from './statistics/statistics.component';
import { RecentblocksComponent } from './recentblocks/recentblocks.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { BlockdetailsComponent } from './blockdetails/blockdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StatisticsComponent,
    RecentblocksComponent,
    HomeComponent,
    BlockdetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
