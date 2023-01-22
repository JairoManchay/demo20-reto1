import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MostrarUsuComponent } from './mostrar-usu/mostrar-usu.component';



@NgModule({
  declarations: [
    UsuariosComponent,
    MostrarUsuComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UsuariosComponent,
    MostrarUsuComponent
  ]
})
export class ComponentsModule { }
