import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  private produtos: Produto[] = [
    {
        cod: 101,
        nome: "Smartphone Galaxy S23",
        preco: 4599.90,
        descricao: "Smartphone com tela AMOLED de 6.1 polegadas e câmera de 50MP.",
        imagem: "https://exemplo.com/img/s23.jpg"
    },
    {
        cod: 227,
        nome: "Notebook Dell Inspiron",
        preco: 3250.00,
        descricao: "Notebook Intel Core i5, 8GB RAM, 256GB SSD, Tela 15.6 polegadas.",
        imagem: "https://exemplo.com/img/dell-inspiron.jpg"
    },
    {
        cod: 375,
        nome: "Fone de Ouvido Bluetooth JBL",
        preco: 299.90,
        descricao: "Fone de ouvido sem fio com cancelamento de ruído ativo e bateria de 24h.",
        imagem: "https://exemplo.com/img/jbl-fone.jpg"
    },
    {
        cod: 465,
        nome: "Teclado Mecânico Redragon",
        preco: 215.50,
        descricao: "Teclado mecânico gamer RGB com switches azuis.",
        imagem: "https://exemplo.com/img/teclado-redragon.jpg"
    },
    {
        cod: 509,
        nome: "Monitor LG UltraGear 24\"",
        preco: 950.00,
        descricao: "Monitor Gamer 24 polegadas, 144Hz, 1ms de tempo de resposta.",
        imagem: "https://exemplo.com/img/monitor-lg.jpg"
    }
  ];

  listarProdutos(): Produto[] {
    return this.produtos;
  }

  getProduto(cod: number): Produto | undefined {
    return this.produtos.find((prod)=> prod.cod === cod);
  }

}
