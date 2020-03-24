import { Article } from './../../interfaces/interfaces';
import { Component, OnInit, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

@Input() noticia : Article; 
@Input() indice : number;

defaultImage = 'https://upload.wikimedia.org/wikipedia/commons/4/43/Escudo_de_Millonarios_temporada_2017.png';
images = 'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?fm=jpg';

  constructor(private browser:InAppBrowser) { }

  ngOnInit() {}

  abrirNoticia(){
    const browser = this.browser.create(this.noticia.url,'_system');
  }
}
