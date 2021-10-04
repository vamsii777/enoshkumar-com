import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MusicComponent} from './music/music.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {YouthMinistryComponent} from './youth-ministry/youth-ministry.component';
import {GalleryComponent} from './gallery/gallery.component';
import {WomensMinistryComponent} from './womens-ministry/womens-ministry.component';
import {ChildrensMinistryComponent} from './childrens-ministry/childrens-ministry.component';
import {CellChurchComponent} from './cell-church/cell-church.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'music',
    component: MusicComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'youth-ministry',
    component: YouthMinistryComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'womens-ministry',
    component: WomensMinistryComponent
  },
  {
    path: 'childrens-ministry',
    component: ChildrensMinistryComponent
  },
  {
    path: 'cell-church',
    component: CellChurchComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
