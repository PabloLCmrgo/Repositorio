import { Component } from '@angular/core';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent{

  // Radar
  public radarChartLabels:string[] = ['Driving', 'Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData:any = [
    {data: [50, 65, 59, 90, 81, 56, 55, 40], label: 'Wolverine'},
    {data: [80, 28, 48, 40, 19, 96, 27, 100], label: 'Magneto'}
  ];
  public radarChartType:string = 'radar';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }





}
