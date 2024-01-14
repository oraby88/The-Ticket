import { Component, OnInit, TemplateRef } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-ticketshow',
  templateUrl: './ticketshow.component.html',
  styleUrls: ['./ticketshow.component.css'],
})
export class TicketshowComponent implements OnInit {
  myAngularxQrCode: string = '';
  qrCodeDownloadLink: SafeUrl = '';
  tooltipContent = '!شارك تذكرتك مع من تريد';
  tooltipContent1 = 'احذف التذكرة';
  constructor() {
    this.myAngularxQrCode = 'Your QR code data string';
  }
  ngOnInit(): void {}
  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }

  copyText() {}
}
