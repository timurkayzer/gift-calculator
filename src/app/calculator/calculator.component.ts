import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

imports: [
  BrowserModule,
  FormsModule
];

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  income: number;
  receiver: number;
  receiverOptions: { value: number, label: string }[];
  holiday: number;
  holidayOptions: { value: number, label: string }[];
  result: number;

  constructor() {
    this.income = 0;
    this.receiver = 1.2;
    this.receiverOptions = [
      {
        value: 1.2,
        label: 'Beloved one'
      },
      {
        value: 1.2,
        label: 'Close family'
      },
      {
        value: 1,
        label: 'Further family'
      },
      {
        value: 1.2,
        label: 'Close friend'
      },
      {
        value: 1,
        label: 'Further friend'
      },
      {
        value: 0.9,
        label: 'Colleague'
      },
      {
        value: 0.7,
        label: 'Other'
      },
    ];
    this.holiday = 1.1;
    this.holidayOptions = [
      {
        value: 1.1,
        label: 'New Year / Christmas'
      },
      {
        value: 1.2,
        label: 'Birthday'
      },
      {
        value: 1,
        label: 'Men / Women day'
      },
      {
        value: 0.9,
        label: 'Professional holiday'
      }
    ];
    this.result = 0;
  }

  onCalculateClicked(): void {
    console.log(this.income, this.receiver, this.holiday)
    this.result = this.income * 0.1 * this.receiver * this.holiday;
  }

  onInputIncome(event: any) {
    this.income = event.target.value;
  }

  onInputHoliday(value: string) {
    console.log(value);
    this.holiday = Number(value);
  }

  onInputReceiver(value: string) {
    console.log(value);
    this.receiver = Number(value);
  }

}
