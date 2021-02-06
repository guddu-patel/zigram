import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input('data') item: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateTodetail(id) {
    this.router.navigate(['detail', 'i', id])
  }
}
