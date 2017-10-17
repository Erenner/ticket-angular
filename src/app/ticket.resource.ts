import { Link } from './links';

class TicketLinks {
  self: Link;
  update: Link;
  delete: Link;
}

export class Ticket {

  id: number;
  creator: string;
  description: string;
  created: Date;
  due: Date;
  links: TicketLinks;

  public constructor() { }

  public static fromJson(json: any): Ticket {
    const ticket = new Ticket();
    ticket.deserialize(json);
    return ticket;
  }

  public deserialize(json: any) {
    this.id = json.id;
    this.creator = json.creator;
    this.description = json.description;
    this.created = json.created;
    this.due = json.due;
    this.links = json._links;
  }

  public serialize(): any {
    return {
      'id': this.id,
      'creator': this.creator,
      'description': this.description,
      'created': this.created,
      'due': this.due
    };
  }

  get isDue(): boolean {
    return true;
  }

}
