import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {CategoryType} from './models/category/category.type';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const categories = [
      {
        uuid: 'category:000001', title: 'Conferences', description: 'Find any kind of concerts around you.',
        image: 'assets/images/conference.jpeg', type: CategoryType.Corporate
      },
      {
        uuid: 'category:000002', title: 'Seminars & Congress', description: 'Find any kind of meetups around you.',
        image: 'assets/images/seminars.jpg', type: CategoryType.Corporate
      },
      {
        uuid: 'category:000004', title: 'Trade shows', description: 'Find any kind of congres around you.',
        image: 'assets/images/trade-shows.jpeg', type: CategoryType.Corporate
      },
      {
        uuid: 'category:000005', title: 'Business dinners', description: 'Find any kind of congres around you.',
        image: 'assets/images/business-diners.jpg', type: CategoryType.Corporate
      },
      {
        uuid: 'category:000006', title: 'Sports', description: 'Find any kind of congres around you.',
        image: 'assets/images/sports-events.jpeg', type: CategoryType.Corporate
      },
      {
        uuid: 'category:000007', title: 'Press conferences', description: 'Find any kind of congres around you.',
        image: 'assets/images/press-conferences.jpeg', type: CategoryType.Corporate
      },
      {
        uuid: 'category:000008', title: 'Ceremonies', description: 'Find any kind of congres around you.',
        image: 'assets/images/ceremonies.jpeg', type: CategoryType.Corporate
      },
      {
        uuid: 'category:000009', title: 'Parties', description: 'Find any kind of congres around you.',
        image: 'assets/images/parties.jpeg', type: CategoryType.Personal
      },
      {
        uuid: 'category:000010', title: 'Birthdays', description: 'Find any kind of congres around you.',
        image: 'assets/images/birthday.jpeg', type: CategoryType.Personal
      },
      {
        uuid: 'category:000011', title: 'Weddings', description: 'Find any kind of congres around you.',
        image: 'assets/images/weddings.jpeg', type: CategoryType.Personal
      },
      {
        uuid: 'category:000012', title: 'Festivals', description: 'Find any kind of congres around you.',
        image: 'assets/images/festivals.jpeg', type: CategoryType.Personal
      },
      {
        uuid: 'category:000013', title: 'Concerts', description: 'Find any kind of congres around you.',
        image: 'assets/images/concerts.jpeg', type: CategoryType.Personal
      }
    ];
    const search = [];
    return {categories, search};
  }

}
