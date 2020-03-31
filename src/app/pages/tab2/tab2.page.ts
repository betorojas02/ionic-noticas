import { Article } from '../../interfaces/interfaces';
import { NoticiasService } from '../../services/noticias.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { LoadingController, IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  noticias: Article[] = [];
  @ViewChild(IonSegment, {static: true}) segmet: IonSegment;

  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];


  constructor(private noticiaService: NoticiasService, public loadingCtrl: LoadingController) {}


  ngOnInit() {
    this.segmet.value = this.categorias[0];


    this.cargarNoticias( this.categorias[0]);

  }

    cambioCategoria(event) {


      this.noticias = [];


      this.cargarNoticias(event.detail.value);


  }



  async  cargarNoticias(categoria: string , event?) {
    const loading = await this.loadingCtrl.create();



    this.noticiaService.getTopHeadlinesCategoria(categoria).subscribe(resp => {
      loading.dismiss().then(() => {

        this.noticias.push(...resp.articles);

        if (event) {
          event.target.complete();
        }

        console.log(this.noticias);
      });

    });

    return await loading.present();
  }



  carganoticasload(categoria: string , event?) {
    this.noticiaService.getTopHeadlinesCategoria(categoria).subscribe(resp => {


      this.noticias.push( ...resp.articles );

      if ( event ) {
        event.target.complete();
      }

      });

  }


  loadData(event) {
    this.carganoticasload( this.segmet.value, event);
  }
}
