import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  private produtos: Produto[] = [
{
        cod: 1,
        nome: "Smartphone Galaxy S23",
        preco: 4599.90,
        descricao: "Smartphone com tela AMOLED de 6.1 polegadas e câmera de 50MP.",
        imagem: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSnGyOpH2aVyWgmQKu51VYAL8zy15jjPDZUIaZrg-GUPGY178Mjq5QA1MPLtuheD_7HjSvAg4AS4pgMF-w"
    },
    {
        cod: 2,
        nome: "Notebook Dell Inspiron",
        preco: 3250.00,
        descricao: "Notebook Intel Core i5, 8GB RAM, 256GB SSD, Tela 15.6 polegadas.",
        imagem: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSoTwuYeZNDu3h1cViMGLVKXAK4BCIz-TVQaLLdeLlMSF_CsCbiSXZMPz8abXEZ0R_TOSmykFxqdo3wnss"
    },
    {
        cod: 3,
        nome: "Fone de Ouvido Bluetooth JBL",
        preco: 299.90,
        descricao: "Fone de ouvido sem fio com cancelamento de ruído ativo e bateria de 24h.",
        imagem: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRmhJK5dI0XNAYMI5_1trNjgAc2B6DMxOwrzRqSK4_PG7ARC8w9h20gzbW8UY2V2mts92PQTYBDQW4nFhE"
    },
    {
        cod: 4,
        nome: "Teclado Mecânico Redragon",
        preco: 215.50,
        descricao: "Teclado mecânico gamer RGB com switches azuis.",
        imagem: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcR_oXi8zkk7o-nYnM_yUTomLbRbX-3WD-7bTgM71X7POUCK8Y3mgLyf2Y7rcplALFgIf-9gI6ZCOG00Qkc"
    },
    {
        cod: 5,
        nome: "Monitor LG UltraGear 24\"",
        preco: 950.00,
        descricao: "Monitor Gamer 24 polegadas, 144Hz, 1ms de tempo de resposta.",
        imagem: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQkexhj2Bp3zqP3qahbKKCrhccTQoVBrqlfyPAYiHcVSzV7BbExQViLvundYw2GH42KhPGDtn8qP3Iv1IY"
    }
  ];

  listarProdutos(): Produto[] {
    return this.produtos;
  }

  getProduto(cod: number): Produto | undefined {
    return this.produtos.find((prod)=> prod.cod === cod);
  }

}
