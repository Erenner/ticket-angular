import { Ticket } from './../ticket.resource';
import { Component, OnInit } from '@angular/core';
import { TicketService } from '../service/ticket.service';
import { Router } from '@angular/router';
import { SaveTicketComponent } from './save-ticket.component';
import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl: './save-ticket.component.html',
  styleUrls: ['./save-ticket.component.css'],
  selector: 'create-ticket'
})
export class CreateTicketComponent extends SaveTicketComponent {

  public constructor(
    private ticketService: TicketService,
    router: Router) {
    super(router);
  }

  protected loadTicket(): Promise<Ticket> {
    const ticket = new Ticket();
    return Promise.resolve(ticket);
  }

  protected getTitle(): string {
    return 'Create Ticket';
  }

  protected onSave() {
    this.ticketService.createTicket(this.ticket).then(ticket => this.navigateToTickets());
  }

  protected getSaveButtonText(): string {
    return 'Create';
  }
}
