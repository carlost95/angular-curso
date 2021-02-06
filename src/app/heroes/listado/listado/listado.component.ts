import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Thor ', 'Hulk'];
  heroeBorrado = '';

  public borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);

  }
}
