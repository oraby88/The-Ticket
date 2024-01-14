import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { TicketshowComponent } from './components/ticketshow/ticketshow.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableOfTicketsComponent } from './components/table-of-tickets/table-of-tickets.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { ClipboardModule } from 'ngx-clipboard';
import { TooltipModule } from 'primeng/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    TicketshowComponent,
    TableOfTicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
    TableModule,
    FormsModule,
    QRCodeModule,
    ClipboardModule,
    TooltipModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
