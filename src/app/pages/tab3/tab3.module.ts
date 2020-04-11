import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { LazyLoadImageModule, scrollPreset , intersectionObserverPreset } from 'ng-lazyload-image';
import {ComponentsModule} from '../../components/components.module';
@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        LazyLoadImageModule.forRoot({
            preset: intersectionObserverPreset   //  <- dile a LazyLoadImage que quieres usar scrollPreset
        }),
        RouterModule.forChild([{path: '', component: Tab3Page}]),
        ComponentsModule
    ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
