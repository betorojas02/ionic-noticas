import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {Article} from '../interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  noticas: Article[] = [];
  constructor(  private storage: Storage) {

    this.cargarFavoritos();
  }




  guardarNoticia( notica: Article) {

    const existe = this.noticas.find(noti => noti.title === notica.title);

    if (!existe) {
      this.noticas.unshift(notica);

      // set a key/value
      this.storage.set('favoritos', this.noticas);
    }
    }


  async cargarFavoritos() {
    // return await this.storage.get('favoritos').then( favoritos => console.log('favoritos', favoritos));
    const favoritos = await this.storage.get('favoritos');

    if ( favoritos ) {
      this.noticas = favoritos;
    } else {
      this.noticas = [];
    }

    console.log('async await', favoritos);

  }

    borrarNoticia(noticia: Article) {

      this.noticas = this.noticas.filter(noti => noti.title !== noticia.title);
      this.storage.set('favoritos', this.noticas);
    }
}
