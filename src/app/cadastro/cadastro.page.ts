import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CadastroPage implements OnInit {

  public usuario = {
    id: '',
    nome : '',
    setor: '',
    cpf  : '',
    dataNascimento : new Date(),
    endereco: '',
    tipoUsuario: '',
    login: '',
    senha: ''
}
cadastrar() {
  // Lógica para salvar os dados do cadastro
  console.log(this.cadastro);
}


  constructor() { }

  ngOnInit() {
  }

}
