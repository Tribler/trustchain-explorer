import { Component, OnInit } from '@angular/core';
import {StatisticsService} from '../statistics.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  statistics: {string: string};
  showStatisticsLoader = true;

  constructor(private statisticsService: StatisticsService, private cookieService: CookieService) { }

  ngOnInit() {
    this.getStatistics();
  }

  getStatistics(): void {
    this.statisticsService.getStatistics().subscribe(
      statistics => { this.statistics = statistics['statistics']; this.showStatisticsLoader = false; });
  }

}
