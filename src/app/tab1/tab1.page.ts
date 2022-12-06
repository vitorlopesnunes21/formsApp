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
    this.buscarProduto();
  }

  async buscarProduto() {
    this.listaProduto = await this.storageService.getAll();
  }

  async excluirProduto(nome: string){
    await this.storageService.remove(nome);
    this.buscarProduto();
  }

  ionViewWillEnter() {
    console.log('teste');
    this.buscarProduto();
  }

}
