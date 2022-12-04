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


  //ionViewDidEnter serve para a função ser realizada depois da criação do banco (É isso né professor?)
  ionViewDidEnter(){
    this.buscarProduto();
  }
}
