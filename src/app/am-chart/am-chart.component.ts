// import { Chart } from '@amcharts/amcharts4/.internal/charts/Chart';
import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-am-chart',
  templateUrl: './am-chart.component.html',
  styleUrls: ['./am-chart.component.css']
})
export class AmChartComponent {
  chart: any;
  ngAfterViewInit() {
    let ctx: any = document.getElementById('lineChart') as HTMLElement;
    var data = {
      labels: ['Jan', 'Feb', 'March', 'April', 'May', 'Jun'],
      datasets: [
        {
          label: 'Product Sold',
          data: [
            { x: 'Jan', y: 15 },
            { x: 'Feb', y: 12 },
            { x: 'March', y: 15 },
            { x: 'April', y: 18 },
            { x: 'May', y: 15 },
            { x: 'Jun', y: 22 },
          ],
          borderColor: '#B5B3FB',
          backgroundColor: 'white',
          tensionX: 0.19,
          tensionY: 2,
          fill: false,
          radius: 5,
        },
        {
          label: 'Total Views',
          data: [
            { x: 'Jan', y: 18 },
            { x: 'Feb', y: 8 },
            { x: 'March', y: 17 },
            { x: 'April', y: 13 },
            { x: 'May', y: 17 },
            { x: 'Jun', y: 10 },
          ],
          backgroundColor: 'white',
          borderColor: '#80E2FF',
          fill: false,
          tensionX: 0.6,
          tensionY: 1,
          radius: 5,
        },
      ],
    };


    var chart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        title: {
          display: true,
          position: 'bottom',
          fontSize: 18,
          fontColor: '#111',
          // margin: 30,
          padding: 30
          // itemSpacing: 8

        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            fontColor: '#333',
            fontSize: 16,
            padding: 40

            // itemSpacing: 8
          },
        },
      }
    });
  }
}

