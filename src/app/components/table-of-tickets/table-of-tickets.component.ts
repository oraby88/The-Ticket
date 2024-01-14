import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TableModule } from 'primeng/table';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PrimeNGConfig } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';
import { StatisticsService } from 'src/app/services/statistics.service';
import { StatisticsComponent } from '../statistics/statistics.component';
import { People } from 'src/app/interfaces/people';

// interface People {
//   id: number;
//   name?: string;
//   tichetNum?: string;
//   price?: string;
//   address?: string;
//   peopleNum?: number;
//   numOfSale?: string;
//   ticket?: string;

// }

@Component({
  selector: 'app-table-of-tickets',
  templateUrl: './table-of-tickets.component.html',
  styleUrls: ['./table-of-tickets.component.css'],
})
export class TableOfTicketsComponent implements OnInit {
  first: any;
  rows: any;
  tooltipContent = 'احجز تذكرتك معانا من هنا';

  tableData: People[] = [];
  cols: any[] = [];
  chartData = [];

  constructor(
    private primengConfig: PrimeNGConfig,
    private _statisticsService: StatisticsService
  ) {}
  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.tableData = [
      {
        id: 1,
        name: 'أحمد محمود',
        tichetNum: 'C-101',
        price: '$40',
        address: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
        peopleNum: 1,
        numOfSale: 'مرة واحد',
        ticket: 'تذكرة رقم 45.pdf',
      },
      {
        id: 2,
        name: 'محمود الغريب',
        tichetNum: 'C-102',
        price: '$30',
        address: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
        peopleNum: 1,
        numOfSale: 'مرة واحدة',
        ticket: 'تذكرة رقم 45.pdf',
      },
      {
        id: 3,
        name: 'محمد الغريب',
        tichetNum: 'C-103',
        price: '$45',
        address: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
        peopleNum: 1,
        numOfSale: 'مرة واحدة',
        ticket: 'تذكرة رقم 45.pdf',
      },
      {
        id: 4,
        name: 'محمد احمد',
        tichetNum: 'C-104',
        price: '$54',
        address: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
        peopleNum: 1,
        numOfSale: 'مرة واحدة',
        ticket: 'تذكرة رقم 45.pdf',
      },
      {
        id: 5,
        name: 'مصطفي محمد',
        tichetNum: 'C-105',
        price: '$80',
        address: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
        peopleNum: 5,
        numOfSale: 'مرة واحدة',
        ticket: 'تذكرة رقم 45.pdf',
      },
      {
        id: 6,
        name: 'علي محمد',
        tichetNum: 'C-106',
        price: '$70',
        address: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
        peopleNum: 3,
        numOfSale: 'مرة واحدة',
        ticket: 'تذكرة رقم 45.pdf',
      },
      {
        id: 7,
        name: 'حسام مصطفي',
        tichetNum: 'C-107',
        price: '$85',
        address: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
        peopleNum: 5,
        numOfSale: 'مرة واحدة',
        ticket: 'تذكرة رقم 45.pdf',
      },
      {
        id: 8 ,
        name: 'مصطفي ابراهيم',
        tichetNum: 'C-108',
        price: '$80',
        address: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
        peopleNum: 5,
        numOfSale: 'مرة واحدة',
        ticket: 'تذكرة رقم 45.pdf',
      },
    ];
  }

  idClick(id2: number) {
    this._statisticsService.updateId(id2);
    console.log("ID from table = " + id2);
    // this._statisticsService.chart();
  }

}
