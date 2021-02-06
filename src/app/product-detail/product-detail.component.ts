import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { ProductService } from '../services/product.service';
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter,
  mergeMap,
  tap
} from "rxjs/operators";
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productDetail = null;
  otherProducts = null;
  isLoading = false;
  ingridientCount = Array.from(Array(15));
  charArray = 'abcdefghijklmnopqrstuvwxyz'.split("");
  constructor(private route: ActivatedRoute,
    private product: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      params = params.params;
      this.getproductDetail(params.type, params.id);

    })
  }
  getproductDetail(type, id) {
    this.isLoading = true;
    if (type === 'i') {
      this.product.getCocktailDetail(id).subscribe((data: any) => {
        this.productDetail = data.drinks[0];
        this.otherProducts = null;
        console.log(this.productDetail)
        this.isLoading = false;
      })
    } else if (type === 'iid') {
      forkJoin(this.product.getIngredientDetailWithproducts(id))
        .subscribe((data: any) => {
          this.productDetail = data[0].ingredients[0];
          this.otherProducts = data[1].drinks;
          console.log(data)
          this.isLoading = false;
        })
    }
  }
  getIngredientDetail(type, key) {
    this.router.navigate(['detail', type, key])
  }

}
