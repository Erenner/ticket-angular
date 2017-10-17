import { Pipe, PipeTransform } from '@angular/core';
import { Ticket } from '../ticket.resource';

@Pipe({
  name: 'ticketDescriptionFilter',
  pure: false
})
export class TicketDescriptionPipe implements PipeTransform {

  transform(tickets: Ticket[], description: string): any {

    if (description === '' || description === undefined) {
      return tickets;
    } else {
      return tickets.filter(ticket => ticket.description.toLowerCase().startsWith(description.toLowerCase()));
    }
  }
}
