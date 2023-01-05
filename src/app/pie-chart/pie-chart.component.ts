import { Component, OnInit } from '@angular/core';
// import 'chart.js';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  
  constructor(){}
  ngOnInit(): void {
    am4core.addLicense('ch-custom-attribution');

    var chart5 = am4core.create('voPieChart', am4charts.PieChart);
    var pieSeries = chart5.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'litres';
    pieSeries.dataFields.category = 'country';
    chart5.innerRadius = am4core.percent(50);
    pieSeries.slices.template.stroke = am4core.color('#fff');
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template.propertyFields.fill = 'color';
    pieSeries.slices.template.cursorOverStyle = [
      {
        property: 'cursor',
        value: 'pointer',
      },
    ];

    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;
 
    var shadow = pieSeries.slices.template.filters.push(
      new am4core.DropShadowFilter()
    );
    shadow.opacity = 0;

    var hoverState = pieSeries.slices.template.states.getKey('hover'); 
 
    chart5.legend = new am4charts.Legend();
    chart5.legend.fontSize = 12;
    chart5.legend.itemContainers.template.clickable = false;
    chart5.legend.itemContainers.template.focusable = false;
    // chart5.legend.background.fill = am4core.color('#F5F5FF');
 

    chart5.data = [
      {
        country: 'France 4260 Sales',
        litres: 50,
        color: am4core.color('#80E2FF'),
      },
      {
        country: 'Italy 3970 Sales ',
        litres: 50,
        color: am4core.color('#F49FA8'),
      },
      {
        country: 'Japan 4260 Sales',
        litres: 50,
        color: am4core.color('#FFDF94'),
      },
      {
        country: 'Canada 3970 Sales',
        litres: 50,
        color: am4core.color('#B5B3FB'),
      },
      
      
    ];
    var label01 = chart5.seriesContainer.createChild(am4core.Label);
    label01.text = 'Sales';
    label01.horizontalCenter = 'middle';
    label01.verticalCenter = 'top';
    label01.paddingTop = 10;
    label01.fontSize = 25;
    var label02 = chart5.seriesContainer.createChild(am4core.Label);
    label02.text = '230,900';

    label02.horizontalCenter = 'middle';
    label02.verticalCenter = 'bottom';
    label02.paddingBottom = 10;
    label02.fontSize = 15;
    var currentValue: string = '3';
    var currentText: string = '3';
  
    function getCurrentData() {
      label01.text = currentValue;
      label02.text = currentText;
      var data = currentValue + currentText;
      return data;
    }
  }
 }



 


  

 
