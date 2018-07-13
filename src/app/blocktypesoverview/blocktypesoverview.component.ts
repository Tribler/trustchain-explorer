import { Component, OnInit } from '@angular/core';
import {StatisticsService} from '../statistics.service';

@Component({
  selector: 'app-blocktypesoverview',
  templateUrl: './blocktypesoverview.component.html',
  styleUrls: ['./blocktypesoverview.component.css']
})
export class BlocktypesoverviewComponent implements OnInit {

  types_statistics: {string: string}[];

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit() {
    this.getStatistics();
  }

  getStatistics(): void {
    this.statisticsService.getTypesStatistics().subscribe(statistics => this.types_statistics = statistics['types']);
  }

}
