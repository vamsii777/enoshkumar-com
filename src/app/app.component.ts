import {Component, OnInit, ViewChild} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import {MatMenuTrigger} from '@angular/material/menu';
import {Observable} from 'rxjs';
import {Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'enoshkumar';
  isLoading: Observable<boolean>;
  loading = true;
  loaded = false;
  // tslint:disable-next-line:variable-name
  _rloading = false;
  // tslint:disable-next-line:max-line-length
  slides = [
    {image: 'http://enoshkumar.oversee.network/wp-content/uploads/2021/01/maxresdefault.jpg'},
    {image: 'http://enoshkumar.oversee.network/wp-content/uploads/2021/01/maxresdefault.jpg'}
    ];
  constructor(
    private router: Router,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  )

  {
    this.matIconRegistry.addSvgIcon(
      'youtube',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/youtube.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'instagram',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/instagram.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'facebook',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/facebook.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'heart',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/heart.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'coin',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/coin.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'coin2',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/coin2.svg')
    );

    // this.router.events.subscribe((event: Event) => {
    //   switch (true) {
    //     case event instanceof NavigationStart: {
    //       this._rloading = true;
    //       break;
    //     }
    //
    //     case event instanceof NavigationEnd:
    //     case event instanceof NavigationCancel:
    //     case event instanceof NavigationError: {
    //       this._rloading = false;
    //       break;
    //     }
    //     default: {
    //       break;
    //     }
    //   }
    // });
  }


  // tslint:disable-next-line:typedef use-lifecycle-interface
  async ngOnInit() {
    this.loaded = true;
    this.loading = false;
  }

}
