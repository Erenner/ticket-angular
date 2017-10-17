import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Ticket } from '../ticket.resource';
import { TicketService } from '../service/ticket.service';

@Component({
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
  selector: 'tickets'
})
export class TicketsComponent implements OnInit {

  tickets: Ticket[] = [];
  searchDescription: string;

  constructor(private ticketService: TicketService, private router: Router) { }

  ngOnInit() {
    this.retrieveTickets();
  }

  private retrieveTickets() {
    this.ticketService.getTickets()
      .then(tickets => this.tickets = tickets);
  }

  public deleteTicket(ticket: Ticket) {
    this.ticketService.deleteTicket(ticket)
      .then(() => this.retrieveTickets());
  }

  public editTicket(ticket: Ticket) {
    this.router.navigate(['/tickets', ticket.id, 'edit']);
  }

  public createTicket() {
    this.router.navigate(['/tickets/create']);
  }
}
