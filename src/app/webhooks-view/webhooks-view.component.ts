import { Component } from '@angular/core';

@Component({
  selector: 'app-webhooks-view',
  templateUrl: './webhooks-view.component.html',
  styleUrls: ['./webhooks-view.component.scss']
})
export class WebhooksViewComponent {

  webhooks: [] = [
  ];

  constructor() {
    let a = new Test(34, 56);
  }
}


export class Test {

  numberA: number = 0;
  numberB: number = 0;

  result: number = 0;

  constructor(a: number, b: number) {
    // this.result = a + b;
    // console.log(this.result);
  }
}