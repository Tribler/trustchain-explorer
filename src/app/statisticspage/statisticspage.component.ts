import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {StatisticsService} from '../statistics.service';

@Component({
  selector: 'app-statisticspage',
  templateUrl: './statisticspage.component.html',
  styleUrls: ['./statisticspage.component.css']
})
export class StatisticspageComponent implements OnInit {

  chart = []

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit() {
    this.getBlockCreationStatistics();
  }

  getBlockCreationStatistics(): void {
    this.statisticsService.getBlockCreationStatistics().subscribe(blockCreationStatistics => {
      var days_info = blockCreationStatistics.statistics;
      const days = [];
      const blocksCreated = [];

      for (const day_info of days_info) {
        days.push(day_info[0]);
        blocksCreated.push(day_info[1]);
      }

      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: days,
          datasets: [
            {
              data: blocksCreated,
              fill: true,
              backgroundColor: "#12751e"
            },
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Date'
              }
            }],
            yAxes: [{
              display: true,
              ticks: {
                beginAtZero: true
              },
              scaleLabel: {
                display: true,
                labelString: 'Blocks created'
              }
            }],
          }
        }
      });
    });
  }

}
