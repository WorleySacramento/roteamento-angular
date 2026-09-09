import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FaqComponent } from './components/faq/faq.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioLogadoGuard } from './guards/usuario-logado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [UsuarioLogadoGuard]
  },
  {
    path: 'produtos',
    component: ProdutosComponent,
    canActivate: [UsuarioLogadoGuard],
    children: [
      {
        path: ':cod',
        component: ProductDetailComponent,
      },
    ]
  },
  {
    path: 'faq',
    component: FaqComponent,
    canActivate: [UsuarioLogadoGuard]
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
