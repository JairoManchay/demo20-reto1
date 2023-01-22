import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { UserServiService } from 'src/app/services/user-servi.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  constructor(private service: UserServiService){}

  // Metodo onInit

  listado  =new Array();
  listadoArr = new Array();

  ngOnInit(){
      this.service.metodoGet().subscribe({
        next:(user: string)=>{
          this.listado.push(user);
          this.listadoArr = [...this.listado[0]]
          console.log(this.listadoArr)
        },
        error:(er)=>{
          console.error(er)
        },
        complete:()=>console.info("Carga completa")
      })
  }
}
