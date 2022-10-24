import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos;

  constructor() { }

  getAll(){
    
    return this.produtos;
  }

  getOne(produtoId: number){
     
   // return this.produtos.filter(produto => produto.id === 7);
    const novo = this.produtos.filter(produto => produto.id === produtoId)
   console.log( ...novo)
    return this.produtos.find(produto => produto.id === produtoId);
  }
}
