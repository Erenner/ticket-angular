import { Ticket } from './../ticket.resource';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TicketService {

  private ticketsUrl = 'http://localhost:????/tickets';
  private headers = new Headers({ 'Access-Control-Allow-Origin': '*', 'Accepts': 'application/json', 'Content-Type': 'application/json' });

  public constructor(private http: Http) { }

  public getTickets(): Promise<Ticket[]> {
    return this.http.get(this.ticketsUrl, { headers: this.headers })
      .toPromise()
      .then(response => response.json().map(jsonTicket => Ticket.fromJson(jsonTicket)))
      .catch(this.handleError);
  }

  public getTicket(id: number): Promise<Ticket> {
    return this.http.get(`${this.ticketsUrl}/${id}`, { headers: this.headers })
      .toPromise()
      .then(this.convertResponseToTicketResource)
      .catch(this.handleError);
  }

  public createTicket(ticket: Ticket): Promise<Ticket> {
    return this.http.post(`${this.ticketsUrl}`, JSON.stringify(ticket.serialize()), { headers: this.headers })
      .toPromise()
      .then(this.convertResponseToTicketResource)
      .catch(this.handleError);
  }

  public updateOrder(ticket: Ticket): Promise<Ticket> {
    return this.http.put(ticket.links.update.href, JSON.stringify(ticket.serialize()), { headers: this.headers })
      .toPromise()
      .then(this.convertResponseToTicketResource)
      .catch(this.handleError);
  }

  public deleteTicket(ticket: Ticket): Promise<void> {
    return this.http.delete(ticket.links.delete.href, { headers: this.headers })
      .toPromise()
      .then(response => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Could not complete requested service operation', error);
    return Promise.reject(error.message || error);
  }

  private convertResponseToTicketResource(response: any): Ticket {
    return Ticket.fromJson(response.json());
  }
}
