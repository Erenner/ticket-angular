import { Link } from './links';

export class Ticket {

  id: number;
  creator: string;
  description: string;
  created: Date;
  due: Date;
  link: Link;

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
    this.link = json.link;
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
