import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-lancarreceita',
  templateUrl: './lancarreceita.page.html',
  styleUrls: ['./lancarreceita.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LancarreceitaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
