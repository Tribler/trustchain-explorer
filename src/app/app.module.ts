import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { StatisticsComponent } from './statistics/statistics.component';
import { RecentblocksComponent } from './recentblocks/recentblocks.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { BlockdetailsComponent } from './blockdetails/blockdetails.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserrecentblocksComponent } from './userrecentblocks/userrecentblocks.component';
import { VisualizationComponent } from './visualization/visualization.component';
import { UsersoverviewComponent } from './usersoverview/usersoverview.component';
import { BlocktypesoverviewComponent } from './blocktypesoverview/blocktypesoverview.component';
import { NetworkswitcherComponent } from './networkswitcher/networkswitcher.component';
import {CookieService} from 'ngx-cookie-service';
import { StatisticspageComponent } from './statisticspage/statisticspage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StatisticsComponent,
    RecentblocksComponent,
    HomeComponent,
    BlockdetailsComponent,
    UserdetailsComponent,
    UserrecentblocksComponent,
    VisualizationComponent,
    UsersoverviewComponent,
    BlocktypesoverviewComponent,
    NetworkswitcherComponent,
    StatisticspageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
