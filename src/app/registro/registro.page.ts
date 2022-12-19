import { StorageService } from './../services/storage.service';
import { Produto } from './../models/Produto';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {

  formRegistro: FormGroup;
  produto: Produto = new Produto();

  mensagens = {
    nome: [
      { tipo: 'required', mensagem: 'O campo Nome é obrigatório.' },
      {
        tipo: 'minlength',
        mensagem: 'O nome deve ter pelo menos 3 caracteres.',
      },
    ],
    descricao: [
      { tipo: 'required', mensagem: 'O campo DESCRIÇÃO é obrigatório.' },
    ],
    validade: [
      { tipo: 'required', mensagem: 'O campo VALIDADE é obrigatório.' },
      {
        tipo: 'minlength',
        mensagem: 'A VALIDADE deve ter pelo menos 10 caracteres.',
      },
      {
        tipo: 'maxlength',
        mensagem: 'A VALIDADE deve ter no máximo 10 caractéres.',
      },
    ],
    preco: [{ tipo: 'required', mensagem: 'É obrigatório confirmar PREÇO.' }],
  };


  constructor(private formBuilder: FormBuilder, private storageService: StorageService, private route: Router) {
    this.formRegistro = this.formBuilder.group({
      nome: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      descricao: ['', Validators.compose([Validators.required])],
      validade: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ]),
      ],
      preco: ['', Validators.compose([Validators.required])],
    });
  }

  async salvarRegistro() {
    if (this.formRegistro.valid) {
      this.produto.nome = this.formRegistro.value.nome;
      this.produto.descricao = this.formRegistro.value.descricao;
      this.produto.validade = this.formRegistro.value.validade;
      this.produto.preco = this.formRegistro.value.preco;
      await this.storageService.set(this.produto.nome, this.produto);
      await this.route.navigateByUrl('/tabs/tab1');
       window.location.reload();
    }
    else {
      alert('Formulário Inválido');
    }

  }
}
