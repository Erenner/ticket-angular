import { OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Ticket } from '../ticket.resource';

export abstract class SaveTicketComponent implements OnInit {

  protected ticket: Ticket;

  public constructor(private router: Router) { }

  protected abstract loadTicket(): Promise<Ticket>;
  protected abstract getTitle(): string;
  protected abstract onSave();
  protected abstract getSaveButtonText(): string;

  ngOnInit() {
    this.loadTicket().then(ticket => this.ticket = ticket);
  }

  public isCreatorValid(): boolean {
    return this.ticket !== undefined &&
      this.ticket.creator !== undefined &&
      this.ticket.creator !== '';
  }

  public isDescriptionValid(): boolean {
    return this.ticket !== undefined &&
      this.ticket.description !== undefined &&
      this.ticket.description !== '';
  }

  public canSubmit(): boolean {
    return this.isCreatorValid && this.isDescriptionValid();
  }

  public onCancel() {
    this.navigateToTickets();
  }

  protected navigateToTickets() {
    this.router.navigate(['/tickets']);
  }
}
