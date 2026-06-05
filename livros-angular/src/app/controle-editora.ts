import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditora {

  editoras: Array<Editora> = [

    {
      codEditora: 1,
      nome: 'Atlas'
    },

    {
      codEditora: 2,
      nome: 'Saraiva'
    },

    {
      codEditora: 3,
      nome: 'Pearson'
    }

  ];

  getEditoras(): Array<Editora> {

    return this.editoras;

  }

  getNomeEditora(codEditora: number): string {

    return this.editoras.filter(
      editora => editora.codEditora === codEditora
    )[0].nome;

  }

}
