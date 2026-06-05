import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Livro } from '../livro';
import { Editora } from '../editora';

import { ControleEditora } from '../controle-editora';
import { ControleLivros } from '../controle-livros';

@Component({
  selector: 'app-livro-dados',
  standalone: false,
  templateUrl: './livro-dados.html',
  styleUrl: './livro-dados.css',
})
export class LivroDados implements OnInit {

  public livro: Livro = new Livro();

  public autoresForm: string = '';

  public editoras: Array<Editora> = [];

  constructor(
    private servEditora: ControleEditora,
    private servLivros: ControleLivros,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.editoras =
      this.servEditora.getEditoras();

  }

  incluir = (): void => {

    this.livro.autores =
      this.autoresForm.split('\n');

    this.servLivros.incluir(
      this.livro
    );

    this.router.navigateByUrl('/lista');

  };

}
