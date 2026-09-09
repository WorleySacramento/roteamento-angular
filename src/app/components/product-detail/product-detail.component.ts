import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  produto?: Produto;
  notFound: boolean = false;
  pressClose: boolean = false;

  alertClose(){
    alert("Clique em fechar para voltar à lista de produtos.");
  }

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        const cod = Number(params['cod']);
        this.produto = this.produtoService.getProduto(cod);
        this.notFound = this.produto === undefined;
      }
    })
  }

}
