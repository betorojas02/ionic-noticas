import { Article } from '../../interfaces/interfaces';
import { Component, OnInit, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import {DataLocalService} from '../../services/data-local.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

@Input() noticia: Article;
@Input() indice: number;
@Input() enFavoritos = false;

defaultImage = 'https://upload.wikimedia.org/wikipedia/commons/4/43/Escudo_de_Millonarios_temporada_2017.png';
images = 'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?fm=jpg';

  constructor(private browser: InAppBrowser,
              public actionSheetController: ActionSheetController,
              private socialSharing: SocialSharing,
              private dataLocalService: DataLocalService,
              public toastController: ToastController) { }

  ngOnInit() {}

  abrirNoticia() {
    const browser = this.browser.create(this.noticia.url, '_system');
  }

  async lanzarMenu() {


    let guaradrBorrarBtn;

    if (this.enFavoritos) {
      guaradrBorrarBtn = {
        text: 'Borrar Favorito',
        icon: 'trash',
        cssClass: 'action-dark',
        handler: async () => {

          const toast = await this.toastController.create({
            message: 'Elimino de favoritos ',
            duration: 2000
          });
          toast.present();

          this.dataLocalService.borrarNoticia(this.noticia);
        }
      };
    } else {
     guaradrBorrarBtn = {
        text: 'Favorito',
            icon: 'star',
          cssClass: 'action-dark',
          handler: async () => {
            const toast = await this.toastController.create({
              message: 'Guardo en favoritos ',
              duration: 2000
            });
            toast.present();
        this.dataLocalService.guardarNoticia(this.noticia);
      }
      };
    }

    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [ {
        text: 'Compartir',
        icon: 'share',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Share clicked');
          this.socialSharing.share(this.noticia.title, this.noticia.source.name, '', this.noticia.url );
        }
      }, guaradrBorrarBtn, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
