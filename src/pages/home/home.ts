import { Component, ViewChild } from '@angular/core';
import { NavController, DateTime } from 'ionic-angular';
import moment from 'moment';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  YMDSwitch: string = 'D';
  myDate: string = moment().format('YYYY-MM-DD');
  @ViewChild('date') DTV: DateTime;

  ngOnInit() {
  
  }
  //to next 
  nextYMD() {
    switch (this.YMDSwitch) {
      case 'D':
        this.myDate = moment(this.myDate).add(1, 'd').format('YYYY-MM-DD');
        break;
      case 'M':
        this.myDate = moment(this.myDate).add(1, 'M').format('YYYY-MM-DD');
        break;
      case 'Y':
        this.myDate = moment(this.myDate).add(1, 'y').format('YYYY-MM-DD');
        break;
    }
  }
  //to prev
  prevYMD() {
    switch (this.YMDSwitch) {
      case 'D':
        this.myDate = moment(this.myDate).subtract(1, 'd').format('YYYY-MM-DD');
        break;
      case 'M':
        this.myDate = moment(this.myDate).subtract(1, 'M').format('YYYY-MM-DD');
        break;
      case 'Y':
        this.myDate = moment(this.myDate).subtract(1, 'y').format('YYYY-MM-DD');
        break;
    }
  }
  //change the displayFormat
  YMDChange(tag) {
    switch (tag) {
      case 'D':
        this.DTV.displayFormat = 'YYYY-MM-DD';
        break;
      case 'M':
        this.DTV.displayFormat = 'YYYY-MM';
        break;
      case 'Y':
        this.DTV.displayFormat = 'YYYY';
        break;
    }
  }

}
