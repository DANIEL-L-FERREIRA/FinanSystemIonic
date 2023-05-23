import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-contas-pagar',
  templateUrl: './contas-pagar.page.html',
  styleUrls: ['./contas-pagar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ContasPagarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
