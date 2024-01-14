import { AfterViewChecked, AfterViewInit, Component, DoCheck } from '@angular/core';
import { StatisticsService } from './services/statistics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  DoCheck, AfterViewInit {
  title = 'ticket';
  tooltipContent= "Edit..."
  option: any;
  constructor(private _statisticsService:StatisticsService){}
  // ngAfterViewChecked(): void {
  //   console.log('AfterViewChecked');
  // }
  ngAfterViewInit(): void {
    console.log('Method not implemented.');
  }
  ngDoCheck(): void {
    this.option =  this._statisticsService.chart();
  }

}
