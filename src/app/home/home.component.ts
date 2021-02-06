import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, fromEvent } from 'rxjs';
import { ProductService } from '../services/product.service';
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter
} from "rxjs/operators";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('search') searchEl: ElementRef;
  isLoading = false;

  nrSelect = 47;
  allProduct = null;
  categories = [];
  searchText = '';
  filtered = { category: '', glass: '', ingredient: '', alcoholic: '' }
  filters = {
    category: null,
    glass: null,
    ingredient: null,
    alcoholic: null,
  }
  constructor(private product: ProductService, private router: Router) {

  }
  ngOnInit() {
    this.getProducts();

  }
  ngAfterViewInit() {
    fromEvent(this.searchEl.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      }),
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(searchText => {
      this.getProducts(searchText);
    })
  }
  getProducts(search = "") {
    this.isLoading = true;
    this.product.getAllProduct(search).subscribe((data: any) => {
      this.allProduct = data.drinks;
      console.log(this.allProduct);
      this.getAllFilters();
      this.isLoading = false;

    }, err => {
      console.log("all product error", err);
      this.isLoading = false;

    })
  }
  getAllFilters() {
    this.isLoading = true;
    forkJoin(this.product.getAllFilters()).subscribe((results: any) => {
      console.log(results);
      this.filters.category = results[0].drinks;
      this.filters.glass = results[1].drinks;
      this.filters.ingredient = results[2].drinks;
      this.filters.alcoholic = results[3].drinks;
      this.isLoading = false;
    });
  }

  getFilterData(type, typeCode) {
    let t = this.filtered[type];
    if (!t) {
      this.getProducts();
      return;
    }
    this.filtered = {
      category: '',
      glass: '',
      ingredient: '',
      alcoholic: '',
    };
    this.filtered[type] = t;
    this.isLoading = true;
    this.product.filterProductByCategory(`${typeCode}=${t}`).subscribe((data: any) => {
      this.allProduct = data.drinks;
      console.log(this.allProduct);
      this.getAllFilters();
      this.isLoading = false;

    }, err => {
      console.log("all product error", err);
      this.isLoading = false;

    })
  }
  // navigateTodetail(id) {
  //   this.router.navigate(['detail', 'i', id]);
  // }

}
