import { Component, OnInit } from '@angular/core';
import {StatisticsService} from '../statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  statistics: {string: string};

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit() {
    this.getStatistics();
  }

  getStatistics(): void {
    this.statisticsService.getStatistics().subscribe(statistics => this.statistics = statistics);
  }

}
