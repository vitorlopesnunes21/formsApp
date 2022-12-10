import { StorageService } from './../services/storage.service';
import { Produto } from './../models/Produto';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listaProduto: Produto[] = [];

  constructor(private storageService: StorageService) {
    alert('Esse aplicativo está em desenvolvimento. Recarregue a página para aparecer o produto');
    this.buscarProduto();
  }

  async buscarProduto() {
    this.listaProduto = await this.storageService.getAll();
    console.log(this.listaProduto);
  }
  ionViewDidEnter() {
    console.log('testeDid');
    this.buscarProduto();
  }

  ionViewWillEnter() {
    console.log('testeWill');
    this.buscarProduto();
  }


  async excluirProduto(nome: string) {
    await this.storageService.remove(nome);
    this.buscarProduto();
  }



}
