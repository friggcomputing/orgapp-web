import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../models/category/services/category.service';
import {CategoryType} from '../models/category/category.type';

@Component({
  selector: 'app-home-events-types',
  templateUrl: './home-events-types.component.html',
  styleUrls: ['./home-events-types.component.scss']
})
export class HomeEventsTypesComponent implements OnInit {

  categories = {};

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories['personal'] = categories.filter(cat => {
        return cat.type === CategoryType.Personal;
      });
      this.categories['corporate'] = categories.filter(cat => {
        return cat.type === CategoryType.Corporate;
      });
    });
  }

}
