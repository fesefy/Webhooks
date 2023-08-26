import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-webhook-received',
  templateUrl: './webhook-received.component.html',
  styleUrls: ['./webhook-received.component.scss']
})
export class WebhookReceivedComponent {

  constructor(private route: ActivatedRoute) {
    
    route.data.subscribe((data) => {
      console.log(data);
    });
  }
}
