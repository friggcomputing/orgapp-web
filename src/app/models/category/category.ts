import {CategoryType} from './category.type';

/**
 * Category model
 */
export class Category {

  private _title: string;
  private _description: string;
  private _image: string;
  private _imageAlt: string;
  private _href: string;
  private _type: CategoryType;

  constructor() {
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get imageAlt(): string {
    return this._imageAlt;
  }

  set imageAlt(value: string) {
    this._imageAlt = value;
  }

  get href(): string {
    return this._href;
  }

  set href(value: string) {
    this._href = value;
  }

  get type(): CategoryType {
    return this._type;
  }

  set type(value: CategoryType) {
    this._type = value;
  }
}
