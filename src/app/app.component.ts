import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjetoPorcentagem';
  porcentagem: number = 35;


  Adcionar() {
    if (this.porcentagem < 100) {
      this.porcentagem += 5;
    }
  }


  Remover() {
    if (this.porcentagem > 0) {
      this.porcentagem -= 5;
    }
  }



}
