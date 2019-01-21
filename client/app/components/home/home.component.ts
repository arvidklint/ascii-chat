import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import * as PIXI from 'pixi.js/dist/pixi.js';
import { container } from '@angular/core/src/render3';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('container') container;

  private app: any;

  constructor(private element: ElementRef) {
    
  }

  ngOnInit() {
    this.app = new PIXI.Application({ width: 800, height: 600 });
    this.container.nativeElement.appendChild(this.app.view);
  }
}
