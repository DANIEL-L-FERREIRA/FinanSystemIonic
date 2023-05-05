import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-lancardespesa',
  templateUrl: './lancardespesa.page.html',
  styleUrls: ['./lancardespesa.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LancardespesaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
