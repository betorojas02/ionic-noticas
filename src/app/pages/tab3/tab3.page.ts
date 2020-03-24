import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  lazyLoadImage = 'https://images.unsplash.com/photo-1543927515-8fe95ce8e02a?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=416&h=312&q=60';

  defaultImage = 'https://upload.wikimedia.org/wikipedia/commons/4/43/Escudo_de_Millonarios_temporada_2017.png';
  images = 'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?fm=jpg';
  constructor() {}

}
