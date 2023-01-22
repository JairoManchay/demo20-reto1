import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-usu',
  templateUrl: './mostrar-usu.component.html',
  styleUrls: ['./mostrar-usu.component.css']
})
export class MostrarUsuComponent {

  valor = false;

  butonClick(){
    return (this.valor=true);
  }
  hideData(){
    return (this.valor=false);
  }
}
