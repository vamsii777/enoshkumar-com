import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule} from '@angular/material/grid-list';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatIconModule } from '@angular/material/icon';
import {  MatToolbarModule  } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FooterComponent } from './footer/footer.component';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from './menu/menu.component';
import { YouthMinistryComponent } from './youth-ministry/youth-ministry.component';
import { MatRippleModule } from '@angular/material/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { WomensMinistryComponent } from './womens-ministry/womens-ministry.component';
import { ChildrensMinistryComponent } from './childrens-ministry/childrens-ministry.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { CellChurchComponent } from './cell-church/cell-church.component';
import { ComdialogComponent } from './com-dialog/comdialog.component';
import {MatDialogModule} from '@angular/material/dialog';

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
    ChildrensMinistryComponent,
    CellChurchComponent,
    ComdialogComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCarouselModule.forRoot(),
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatMenuModule,
    MatGridListModule,
    MatRippleModule,
    ScrollingModule,
    LoadingBarRouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatExpansionModule,
    AngularFirestoreModule,
    MatDialogModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [
    RouterModule,
    MatListModule,
    MatSidenavModule,
    MatGridListModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
