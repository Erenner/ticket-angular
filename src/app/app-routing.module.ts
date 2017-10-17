import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TicketsComponent } from './component/tickets.component';
import { EditTicketComponent } from './component/edit-ticket.component';
import { CreateTicketComponent } from './component/create-ticket.component';

const routes: Routes = [
  { path: '', redirectTo: '/tickets', pathMatch: 'full' },
  { path: 'tickets', component: TicketsComponent },
  { path: 'tickets/:id/edit', component: EditTicketComponent },
  { path: 'tickets/create', component: CreateTicketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
