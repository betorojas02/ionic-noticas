import { NoticiasComponent } from './noticias/noticias.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiaComponent } from './noticia/noticia.component';
// import { LazyLoadImageModule, scrollPreset , intersectionObserverPreset} from 'ng-lazyload-image'; // <-- include scrollPreset



@NgModule({
  declarations: [NoticiasComponent, NoticiaComponent],
  exports: [
    NoticiasComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    // LazyLoadImageModule.forRoot({
    //   preset: intersectionObserverPreset // <-- tell LazyLoadImage that you want to use scrollPreset
    // }),
  ]
})
export class ComponentsModule { }
