import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cadastrocliente',
  templateUrl: './cadastrocliente.page.html',
  styleUrls: ['./cadastrocliente.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CadastroclientePage implements OnInit {

  public cliente = {
    id: '',
    nome : '',
    cpfCNPJ  : '',
    endereco: '',
    telefone: '',
    contato: '',
    regimeTributario: '',
    dataNascimento : new Date(),
    referencia: '',
    observacoes: ''
    }

  constructor() { }

  ngOnInit() {
  }

}
