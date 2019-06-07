import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jejemon-converter',
  templateUrl: './jejemon-converter.component.html',
  styleUrls: ['./jejemon-converter.component.css']
})
export class JejemonConverterComponent implements OnInit {
  toJejemon: string;
  finalJejemon: string = '';
  constructor() { }

  ngOnInit() {
  }

  convertToJejemon() {
    var splitText = this.toJejemon.split(' ');
    
    splitText.forEach((value: any, index1: any) => {
      var splitValue = value.split('');
      splitValue.forEach((element: any, index2: any) => {
        var jeje = this.jejeLetterChanger(element);
        if (index2 % 2 == 0) {
          splitValue[index2] =  jeje.toLowerCase();
        } else {
          splitValue[index2] = jeje.toUpperCase();
        }
      });
      splitText[index1] = splitValue.join('');
    });
    this.finalJejemon = splitText.join(' ');
  }

  jejeLetterChanger(value: any) {
    var toConvert = value;
    if (toConvert.toLowerCase() === 'e') {
      return '3';
    } else if (toConvert.toLowerCase() === 'o') {
      return '0';
    } else {
      return toConvert;
    }
  }

}
