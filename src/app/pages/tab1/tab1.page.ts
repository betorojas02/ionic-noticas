import { Article } from './../../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { NoticiasService } from './../../services/noticias.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  noticias: Article[] = [];


  constructor(private noticasService: NoticiasService) {}


  ngOnInit() {
    this.cargarNoticias();

  }

  cargarNoticias(event?) {
    this.noticasService.getTopHeadlines().subscribe(resp => {

      // tslint:disable-next-line:triple-equals
      if (resp.articles.length == 0 ) {
        event.target.disabled = true;
        return;
      }


      this.noticias.push(...resp.articles);

      if (event) {
        event.target.complete();
      }
    });
  }

  loadData(event) {
    this.cargarNoticias(event);
  }
}
