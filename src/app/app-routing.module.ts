import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebhooksViewComponent } from './webhooks-view/webhooks-view.component';
import { WebhookReceivedComponent } from './webhook-received/webhook-received.component';

const routes: Routes = [
  { path: 'home', component: WebhooksViewComponent },
  { path: 'webhook', component: WebhookReceivedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
