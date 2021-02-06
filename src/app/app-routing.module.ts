import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SearchedPoductComponent } from './searched-poduct/searched-poduct.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detail/:type/:id', component: ProductDetailComponent },
  { path: 'search/:key', component: SearchedPoductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
