export class Entity {
  private _uuid: string;
  private _createdAt: string;
  private _updatedAt: string;
  private _deletedAt: string;

  constructor() {
  }

  get uuid(): string {
    return this._uuid;
  }

  set uuid(value: string) {
    this._uuid = value;
  }

  get createdAt(): string {
    return this._createdAt;
  }

  set createdAt(value: string) {
    this._createdAt = value;
  }

  get updatedAt(): string {
    return this._updatedAt;
  }

  set updatedAt(value: string) {
    this._updatedAt = value;
  }

  get deletedAt(): string {
    return this._deletedAt;
  }

  set deletedAt(value: string) {
    this._deletedAt = value;
  }
}
