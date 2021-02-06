import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoaderComponent } from './loader/loader.component';
import { HomeComponent } from './home/home.component';
import { SearchedPoductComponent } from './searched-poduct/searched-poduct.component';
import { ProductCardComponent } from './commonComponent/product-card/product-card.component';
import { NavbarComponent } from './commonComponent/navbar/navbar.component';
import { FooterComponent } from './commonComponent/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    LoaderComponent,
    HomeComponent,
    SearchedPoductComponent,
    ProductCardComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
