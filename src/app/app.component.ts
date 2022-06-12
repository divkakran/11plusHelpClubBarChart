import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels = ['English', 'Science', 'Maths', 'History'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [40, 59, 50, 81], label: 'Average' },
    { data: [50, 55, 55, 19], label: 'Highest', backgroundColor: 'green' },
    { data: [20, 48, 20, 19], label: 'Lowest', backgroundColor: 'blue' },
    { data: [35, 20, 35, 19], label: 'Ananya', backgroundColor: 'red' }
  ];

  // line chart
  public lineChartData: ChartDataSets[] = [
    { data: [10,20,15,17], label: 'Ananya' },
  ];
  public lineChartLabels: Label[] = ['English', 'Science', 'Maths', 'History'];
  public lineChartOptions: ChartOptions  = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      // backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
}
