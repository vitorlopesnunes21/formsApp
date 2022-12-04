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

  constructor(private storageService: StorageService) {}

  async buscarProduto() {
    this.listaProduto = await this.storageService.getAll();
  }


  ionViewDidEnter() {
    this.buscarProduto();
    console.log('aaa');
  }

  async excluirProduto(nome: string){
    await this.storageService.remove(nome);
    this.buscarProduto();
  }

}
