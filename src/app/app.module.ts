import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatGridList, MatGridListModule} from '@angular/material/grid-list';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatIconModule } from '@angular/material/icon';
import {  MatToolbarModule  } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatCard, MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FooterComponent } from './footer/footer.component';
import {MatMenuModule} from '@angular/material/menu';
import { MenuComponent } from './menu/menu.component';
import { YouthMinistryComponent } from './youth-ministry/youth-ministry.component';
import {MatRippleModule} from '@angular/material/core';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { WomensMinistryComponent } from './womens-ministry/womens-ministry.component';
import { ChildrensMinistryComponent } from './childrens-ministry/childrens-ministry.component';
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
    path: '',
    component: HomeComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MusicComponent,
    GalleryComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    MenuComponent,
    YouthMinistryComponent,
    WomensMinistryComponent,
    ChildrensMinistryComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forRoot(routes),
    MatCarouselModule.forRoot(),
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatMenuModule,
    MatGridListModule,
    MatRippleModule,
    ScrollingModule
  ],
  exports: [
    RouterModule,
    MatListModule,
    MatSidenavModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
