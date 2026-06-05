import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivros {

  livros: Array<Livro> = [

    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Angular Básico',
      resumo: 'Introdução ao Angular',
      autores: ['João']
    },

    {
      codigo: 2,
      codEditora: 2,
      titulo: 'TypeScript',
      resumo: 'Aprendendo TypeScript',
      autores: ['Maria']
    },

    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Desenvolvimento Web',
      resumo: 'HTML CSS JS',
      autores: ['Pedro']
    }

  ];

  obterLivros(): Array<Livro> {

    return this.livros;

  }

  incluir(livro: Livro): void {

    const maiorCodigo = Math.max(
      ...this.livros.map(l => l.codigo)
    );

    livro.codigo = maiorCodigo + 1;

    this.livros.push(livro);

  }

  excluir(codigo: number): void {

    const indice = this.livros.findIndex(
      livro => livro.codigo === codigo
    );

    this.livros.splice(indice, 1);

  }

}