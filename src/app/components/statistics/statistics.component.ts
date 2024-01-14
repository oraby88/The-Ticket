import { Component, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { StatisticsService } from 'src/app/services/statistics.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {

  // @Input() dataFromTable:any = [];
  // @ViewChild(StatisticsComponent) data2:any;
  // targetId:number = 1;
  // private subscription: Subscription;
  @Input() chart:any;
  option:any;
  // data1 = [
  //   [200,700,200,600,1000,600,900,700,700,400,800,900],
  //   [400,500,400,150,1000,600,500,1000,700,400,800,200],
  //   [200,700,300,600,100,600,900,800,1000,400,800,300],
  //   [200,100,200,300,600,300,400,1000,700,900,700,600],
  // ]

  // title = "ticketChart";

  // lineChartData: ChartConfiguration<'line'>['data']={
  //   labels: [
  //     'January',
  //     'February',
  //     'March',
  //     'April',
  //     'May',
  //     'June',
  //     'July',
  //     'August',
  //     'September',
  //     'October',
  //     'November',
  //     'December'
  //   ],
  //   datasets: [
  //     {
  //       data:[ 65, 59, 80, 81, 56, 55, 40],
  //       label: 'series A',
  //       fill: true,
  //       tension: 0.5,
  //       borderColor: 'black',
  //       backgroundColor: 'rgb(255,0,0,0.3)'
  //     }
  //   ]
  // };
  // lineChartOptions: ChartOptions<'line'> = {
  //   responsive: false
  // };
  // lineChartLegend = true;
  // data = this.data1[this.targetId];
  // changeId(){
  //   this.targetId = 2;
  // }

  tooltipContent="سنويا";

  constructor(private _statisticsService:StatisticsService) {
    //   this.subscription = _statisticsService.id.subscribe((newId:number)=>{
    //   this.targetId = newId;
    // })
  }

  ngOnInit(): void {
    // this._statisticsService.chart(3);
    this.option =  this._statisticsService.chart();
    console.log(this.option);
    
  }
  

}
