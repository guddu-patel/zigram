import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-searched-poduct',
  templateUrl: './searched-poduct.component.html',
  styleUrls: ['./searched-poduct.component.scss']
})
export class SearchedPoductComponent implements OnInit {
  isLoading = false;
  allProduct = null;
  constructor(private route: ActivatedRoute, private router: Router, private product: ProductService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      params = params.params;
      this.gerSearchedProduct(params.key)
    })
  }
  gerSearchedProduct(key) {
    this.isLoading = true;
    this.product.searchByLatter(key[0]).subscribe((data: any) => {
      this.allProduct = data.drinks;
      this.isLoading = false;

    })

  }
  // navigateTodetail(id) {
  //   this.router.navigate(['detail', 'i', id]);
  // }
}
