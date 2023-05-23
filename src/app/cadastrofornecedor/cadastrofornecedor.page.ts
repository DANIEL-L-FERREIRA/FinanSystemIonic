import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cadastrofornecedor',
  templateUrl: './cadastrofornecedor.page.html',
  styleUrls: ['./cadastrofornecedor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CadastrofornecedorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
