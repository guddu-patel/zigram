import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/"
  constructor(private http: HttpClient) { }

  getAllProduct(s = "") {
    return this.http.get(this.baseUrl + "search.php?s=" + s);
  }
  searchByLatter(latter) {
    return this.http.get(this.baseUrl + "search.php?f=" + latter);
  }
  getAllFilters() {
    return [
      this.http.get(this.baseUrl + "list.php?c=list"),
      this.http.get(this.baseUrl + "list.php?g=list"),
      this.http.get(this.baseUrl + "list.php?i=list"),
      this.http.get(this.baseUrl + "list.php?a=list"),
    ];
  }
  getProductOfIngredient(name) {
    return this.http.get(this.baseUrl + "/filter.php?i=" + name);


  }
  getCocktailDetail(id) {
    return this.http.get(this.baseUrl + "lookup.php?i=" + id);
  }
  getingredientslDetail(id) {
    return this.http.get(this.baseUrl + "lookup.php?iid=" + id);
  }
  getingredientslbyname(name) {
    return this.http.get(this.baseUrl + "search.php?i=" + name);
  }
  getIngredientDetailWithproducts(name) {
    return [
      this.http.get(this.baseUrl + "search.php?i=" + name),
      this.http.get(this.baseUrl + "/filter.php?i=" + name),

    ]
  }
  filterProductByCategory(filter) {
    const url = this.baseUrl + '/filter.php?' + filter;
    return this.http.get(url);
  }
}
