import { Component, OnInit } from '@angular/core';
import { Config } from '../@models/Config';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  public date: Date;
  public Config: Config = new Config();
  constructor() { 
    this.date =  new Date();
  }

  ngOnInit() {
  }

}