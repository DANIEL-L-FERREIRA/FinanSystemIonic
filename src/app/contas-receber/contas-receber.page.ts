import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-contas-receber',
  templateUrl: './contas-receber.page.html',
  styleUrls: ['./contas-receber.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ContasReceberPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
