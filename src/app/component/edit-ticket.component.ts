import { Component, OnInit } from '@angular/core';
import { TicketService } from '../service/ticket.service';
import { Ticket } from '../ticket.resource';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SaveTicketComponent } from './save-ticket.component';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Component({
  templateUrl: './save-ticket.component.html',
  styleUrls: ['./save-ticket.component.css'],
  selector: 'edit-ticket'
})
export class EditTicketComponent extends SaveTicketComponent {

  public constructor(
    private ticketService: TicketService,
    private route: ActivatedRoute,
    router: Router) {
    super(router);
  }

  protected loadTicket(): Promise<Ticket> {
    return new Promise<Ticket>(resolver => {
      this.route.paramMap
        .switchMap(params => this.ticketService.getTicket(+params.get('id')))
        .subscribe(ticket => resolver(ticket))
    });
  }

  protected onSave() {
    this.ticketService.updateTicket(this.ticket).then(ticket => this.navigateToTickets());
  }

  protected getTitle(): string {
    return 'Edit Ticket';
  }

  protected getSaveButtonText() {
    return 'Update';
  }
}
