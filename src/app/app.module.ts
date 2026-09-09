import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FaqComponent } from './components/faq/faq.component';
import { HomeComponent } from './components/home/home.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    HomeComponent,
    ProdutosComponent,
    ProductDetailComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
