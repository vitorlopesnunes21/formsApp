import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  formRegistro: FormGroup;

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

  constructor(private formBuilder: FormBuilder) {
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
          Validators.minLength(8),
          Validators.maxLength(8),
        ]),
      ],
      preco: ['', Validators.compose([Validators.required])],
    });
  }

  salvarRegistro() {
    console.log('Formulário: ', this.formRegistro.valid);
  }
}
