import { Injectable } from '@angular/core';
import * as echarts from 'echarts/types/dist/echarts';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  // private idSubject = new BehaviorSubject<number>(1);

  // targetId: number = 1;
  data1 = [
    [200, 700, 200, 600, 1000, 600, 900, 700, 700, 400, 800, 900],
    [400, 500, 400, 150, 1000, 600, 500, 1000, 700, 400, 800, 200],
    [200, 700, 300, 600, 100, 600, 900, 800, 1000, 400, 800, 300],
    [200, 100, 200, 300, 600, 300, 400, 1000, 700, 900, 700, 600],
    [1000, 100, 500, 900, 300, 300, 700, 1000, 700, 200, 100, 600],
    [100, 500, 500, 800, 900, 900, 700, 100, 700, 200, 100, 400],
    [400, 100, 500, 900, 300, 300, 700, 1000, 700, 200, 100, 600],
    [1000, 100, 500, 900, 300, 300, 700, 1000, 700, 200, 100, 600],
  ];
  // public id = this.idSubject.asObservable();
  // data = this.data1[1];
  option!: echarts.EChartsOption;
  id1:any;
  constructor() {}

  updateId(newId: number) {
    this.id1 = newId;
    console.log("new ID = "+this.id1);
  }

  chart(){

    return (this.option = {
      tooltip: {
        trigger: 'axis',
      },

      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      // toolbox:{
      //   feature:{
      //     saveAsImage:{}
      //   }
      //   },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [
          'ديسمبر',
          'نوفمبر',
          'اكتوبر',
          'سبتمبر',
          'اغسطس',
          'يوليو',
          'يونيو',
          'مايو',
          'ابريل',
          'مارس',
          'فبراير',
          'يناير',
        ],
      },
      yAxis: {
        type: 'value',
      },

      series: [
        {

          data: this.data1[this.id1 - 1],
          type: 'line',
          symbol: 'none',
          stack: 'Total',
          markLine: {
            symbol: ['none', 'none'],
            label: { show: false },
          },
          areaStyle: {
            color: '#8A74F9',
            opacity: 0.33,
          },
          smooth: true,
          color: '#8A74F9',
        },
      ],
    });
  }
}
