import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() {
    alert('Olá, bem-vindo ao FormsApp. Esse app foi desenvolvido para estudo e conta com alguns erros.');
    alert('Peço que ignore os erros e aproveite o app. Outros projetos (Sem erros) podem ser encontrados em github.com/vitorlopesnunes21');
  }

  ngOnInit() {
  }


}
