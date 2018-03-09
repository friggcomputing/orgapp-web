import {Entity} from '../entity';
import {User} from '../user/user';

export class Event extends Entity {
  private _name: string;
  private _description: string;
  private _owner: User;
  private _participants: Array<User>;
  private _eventDate: Date;
}
